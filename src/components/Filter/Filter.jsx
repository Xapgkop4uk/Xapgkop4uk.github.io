import React from 'react'
import propTypes from 'prop-types'
import FilterCurrency from './FilterCurrency'
import FilterTransfer from './FilterTransfer'

const Filter = ({
  handleCurrencyChange,
  selectedCurrency,
  selectedFilters,
  handleFilterChange,
  handleSelectOne
}) => (
  <div className="filter-wrapper">
    <FilterCurrency
      currency={selectedCurrency}
      onClick={handleCurrencyChange}
    />
    <FilterTransfer
      transfersSelected={selectedFilters}
      onClick={handleFilterChange}
      handleSelectOne={handleSelectOne}
    />
  </div>
)

Filter.propTypes = {
  handleCurrencyChange: propTypes.func.isRequired,
  selectedCurrency:     propTypes.string.isRequired,
  selectedFilters:      propTypes.array.isRequired,
  handleFilterChange:   propTypes.func.isRequired,
  handleSelectOne:      propTypes.func.isRequired
}

export default Filter
