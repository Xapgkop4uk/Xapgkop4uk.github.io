import React from 'react'
import propTypes from 'prop-types'

const currencies = ['USD', 'RUB', 'EUR']

const FilterCurrency = ({ currency, onClick }) => (
  <div className="filter-currency-wrapper">
    <span className="currency-label">Валюта</span>
    <div className="currens-selectors">
      {currencies.map(cur => (
        <button type="button" key={`button-currency ${cur}`} className={cur === currency ? 'selected' : 'general'} onClick={() => onClick(cur)}>
          <span className="currency">{cur}</span>
        </button>
      ))}
    </div>
  </div>
)


FilterCurrency.propTypes = {
  currency: propTypes.string.isRequired,
  onClick:  propTypes.func.isRequired
}

export default FilterCurrency
