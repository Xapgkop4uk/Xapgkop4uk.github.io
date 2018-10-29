import React from 'react'
// import propTypes from 'prop-types'
import FilterCurrency from './FilterCurrency'
import FilterTransfer from './FilterTransfer'

const Filter = () => {
  return (
    <div className="filter-wrapper">
      <FilterCurrency
        currency="USD"
        onClick={currency => console.log(currency)}
      />
      <FilterTransfer
        transfersSelected={[1, 2, 3]}
        onClick={currency => console.log(currency)}
      />
    </div>
  )
}

Filter.propTypes = {}

export default Filter
