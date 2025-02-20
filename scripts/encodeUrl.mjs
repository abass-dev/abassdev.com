import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Buffer } from 'buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to encode URL
const encodeUrl = (url) => {
    return Buffer.from(url).toString('base64');
};

// Path to the urlEncoder file
const ENDPOINTS_FILE = join(__dirname, '../lib/utils/urlEncoder.ts');

const encodeAndUpdateFile = (name, url) => {
    const encoded = encodeUrl(url);

    // Read the current file
    let content = readFileSync(ENDPOINTS_FILE, 'utf8');

    // Find the endpoints object
    const endpointsMatch = content.match(/export const endpoints = \{([\s\S]*?)\}\s*as const;/);
    if (!endpointsMatch) {
        console.error('Could not find endpoints object in file');
        process.exit(1);
    }

    // Get the content inside the endpoints object
    const endpointsContent = endpointsMatch[1];

    // Check if endpoint already exists
    if (endpointsContent.includes(`${name}:`)) {
        console.error(`Endpoint "${name}" already exists`);
        process.exit(1);
    }

    // Find the last endpoint entry or the comment
    const lastEntry = endpointsContent.trimEnd();

    // Create the new endpoint entry
    const newEntry = `    ${name}: '${encoded}',\n    // Add new endpoints here`;

    // Replace the old content with the new content
    const newContent = content.replace(/export const endpoints = \{([\s\S]*?)\}\s*as const;/,
        `export const endpoints = {\n${lastEntry.replace(/\/\/ Add new endpoints here/, newEntry)}\n} as const;`
    );

    // Update file
    writeFileSync(ENDPOINTS_FILE, newContent);

    console.log(`Successfully added endpoint "${name}"`);
    console.log(`Encoded value: ${encoded}`);
    console.log(`Original URL: ${url}`);
};

// Handle command line arguments
const [, , name, url] = process.argv;

if (!name || !url) {
    console.log('Usage: npm run encode-url <name> <url>');
    console.log('Example: npm run encode-url myApi https://api.example.com/endpoint');
    process.exit(1);
}

encodeAndUpdateFile(name, url);