import React from 'react'
import TestUtils from 'react-dom/test-utils'
import App from './App'

describe('App container', () => {
  let el

  beforeAll(() => {
    el = TestUtils.renderIntoDocument(<App />)
  })
  it('just render without error', () => {
    expect(el).toBeDefined()
  })
})
