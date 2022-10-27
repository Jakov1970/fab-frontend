import { FC } from 'react';
import { useLang } from './i18n';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/nl';

import enMessages from './messages/en.json';
import nlMessages from './messages/nl.json';

const allMessages = {
  en: enMessages,
  nl: nlMessages,
};

const I18nProvider: FC = ({ children }: any) => {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export { I18nProvider };
