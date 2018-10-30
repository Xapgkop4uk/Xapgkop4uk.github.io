import React from 'react'
import renderer from 'react-test-renderer'
import Tickets from './Tickets'
import source from '../../tickets.json'

const { tickets } = source

describe('Tickets container', () => {
  let el

  beforeAll(() => {
    el = renderer.create(<Tickets
      tickets={tickets}
      rates={{ EUR: 0.0133977497, USD: 0.0152479789 }}
      selectedCurrency="RUB"
    />)
  })
  it('just render without error', () => {
    expect(el).toBeDefined()
  })
  it('contains tickets', () => {
    const tree = el.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
