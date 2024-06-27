import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';

const LanguageSelector = ({ defaultValue, options, onSubmit, ...props }) => {
  const intl = useIntl();
  const handleSubmit = (e) => {
    e.preventDefault();
    const languageCode = e.target.elements['site-footer-language-select'].value;
    onSubmit(languageCode);
  };

  return (
    <form
      className="form-inline"
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="form-group">
        <label htmlFor="site-footer-language-select" className="d-inline-block m-0">
          {intl.formatMessage(messages.SelectLanguageLabel)}
        </label>
        <select
          id="site-footer-language-select"
          className="form-control-sm mx-2"
          name="site-footer-language-select"
          defaultValue={defaultValue}
        >
          {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>
        <button className="btn btn-outline-primary btn-sm change-language-submit-btn white" type="submit">
          {intl.formatMessage(messages.Apply)}
        </button>
      </div>
    </form>
  );
};

LanguageSelector.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default LanguageSelector;
