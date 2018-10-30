import React from 'react'
import renderer from 'react-test-renderer'
import Filter from './Filter'

describe('Filter component', () => {
  let el

  beforeAll(() => {
    el = renderer.create(<Filter
      handleCurrencyChange={() => {}}
      selectedCurrency="RUB"
      selectedFilters={[-1]}
      handleFilterChange={() => {}}
      handleSelectOne={() => {}}
    />)
  })
  it('contains tickets', () => {
    const tree = el.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
