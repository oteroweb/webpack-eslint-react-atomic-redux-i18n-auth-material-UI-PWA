import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

const LanguageProvider = ({ children, messages, locale }) => {
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
  locale: PropTypes.string.isRequired,
};

export default LanguageProvider;
