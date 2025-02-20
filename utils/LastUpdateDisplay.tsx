import React from 'react';
import { useTranslations } from 'next-intl';
import buildInfo from '../build-info.json';

// Type for ISO 8601 date string format
type ISODateString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

interface BuildInfo {
  lastUpdate: ISODateString;
}

type DateFormatOptions = {
  year: 'numeric';
  month: 'long';
  day: 'numeric';
  hour: '2-digit';
  minute: '2-digit';
  second: '2-digit';
  timeZoneName: 'short';
};

const formatDate = (dateString: ISODateString, locale: string): string => {
  const options: DateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
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