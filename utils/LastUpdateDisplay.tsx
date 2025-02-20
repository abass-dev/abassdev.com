import React from 'react';
import { useTranslations } from 'next-intl';
import buildInfo from '../build-info.json';

// Type strict pour ISO 8601 avec Z (UTC)
type ISODateString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

// Interface pour build-info.json
interface BuildInfo {
  lastUpdate: ISODateString;
}

// Options de formatage de date
type DateFormatOptions = Intl.DateTimeFormatOptions & {
  timeZone: 'UTC'; // Force UTC
};

/**
 * Formate une date ISO 8601 en string localisée en UTC.
 * @param dateString - Date en format ISO 8601
 * @param locale - Langue à utiliser pour le formatage
 * @returns Date formatée en string
 */
const formatDate = (dateString: string, locale: string): string => {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(dateString)) {
    console.error('Invalid date format:', dateString);
    return 'Invalid date';
  }

  const options: DateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC', // ✅ Forcer UTC pour éviter les erreurs SSR/CSR
  };

  return new Date(dateString).toLocaleString(locale, options);
};

const LastUpdateDisplay: React.FC = () => {
  const t = useTranslations('LastUpdate');
  const typedBuildInfo = buildInfo as BuildInfo;

  return (
    <div className="p-4">
      <p>
        {t('label')}: {' '}
        <span>
          {formatDate(typedBuildInfo.lastUpdate, t('locale'))}
        </span>
      </p>
    </div>
  );
};

export default LastUpdateDisplay;
