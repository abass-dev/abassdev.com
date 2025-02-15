// utils/domainCrypto.ts
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const REQUIRED_KEY_LENGTH = 32;

const normalizeKey = (key: string): Buffer => {
    if (key.length === REQUIRED_KEY_LENGTH) {
        return Buffer.from(key);
    }

    if (key.length > REQUIRED_KEY_LENGTH) {
        return Buffer.from(key.slice(0, REQUIRED_KEY_LENGTH));
    }

    let normalizedKey = key;
    while (normalizedKey.length < REQUIRED_KEY_LENGTH) {
        normalizedKey += key;
    }
    return Buffer.from(normalizedKey.slice(0, REQUIRED_KEY_LENGTH));
};

const getEncryptionKey = () => {
    const key = process.env.ENCRYPTION_KEY || 'abassdev.com';
    return normalizeKey(key);
};

const IV_LENGTH = 16;

export const encryptDomain = (domain: string): string => {
    try {
        const iv = randomBytes(IV_LENGTH);
        const normalizedKey = getEncryptionKey();
        const cipher = createCipheriv(ALGORITHM, normalizedKey, iv);

        let encrypted = cipher.update(domain, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        return iv.toString('hex') + ':' + encrypted;
    } catch (error) {
        console.error('Encryption error:', error);
        return '';
    }
};

/**
 * Decrypts an encrypted domain string using AES-256-CBC algorithm.
 *
 * @param {string} encryptedData - The encrypted domain data in the format 'iv:encrypted'.
 * @returns {string|boolean} The decrypted domain as a string, or `false` if decryption fails.
 */
export const decryptDomain = (encryptedData: string): string | boolean => {
    try {
        // Validate input format
        if (!encryptedData || !encryptedData.includes(':')) {
            return false;
        }

        const [ivHex, encryptedHex] = encryptedData.split(':');

        // Validate parts existence
        if (!ivHex || !encryptedHex) {
            return false;
        }

        const iv = Buffer.from(ivHex, 'hex');
        const normalizedKey = getEncryptionKey();
        const decipher = createDecipheriv(ALGORITHM, normalizedKey, iv);

        let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        // Validate decrypted result
        return decrypted || false;
    } catch (error) {
        console.error('Decryption error:', error);
        return false;
    }
};

/**
 * Safely compares an encrypted domain with a plain domain.
 *
 * @param {string} encryptedDomain - The encrypted domain to compare
 * @param {string} plainDomain - The plain text domain to compare against
 * @returns {boolean} True if domains match, false otherwise
 */
export const compareDomain = (encryptedDomain: string, plainDomain: string): boolean => {
    const decrypted = decryptDomain(encryptedDomain);
    return decrypted === plainDomain;
};