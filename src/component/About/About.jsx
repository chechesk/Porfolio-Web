import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './About.css';

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className='containers'>
        <h2>{t('about:title')}</h2>
        <div className='cover'>
          <p>{t('about:description')}</p>

          <p>{t('about:summary')}</p>
        </div>
      </div>
    );
  }
}

export default withTranslation()(About);
