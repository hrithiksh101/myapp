import React from 'react'

const ContestInfo1Header = () => {
    return (
        <div className="ContestInfo1-header">
          <a>
            <i className="material-icons">keyboard_backspace</i>
          </a>
          <div className="ContestInfo-icon">
            <img
              className="company-logo"
              alt="company-logo"
              src={require('../img/6.jpeg')}
            />
          </div>
          <a>
            <i className="material-icons ContestInfo1-wallet">
              account_balance_wallet
            </i>
          </a>
        </div>
    )
}

export default ContestInfo1Header ;
