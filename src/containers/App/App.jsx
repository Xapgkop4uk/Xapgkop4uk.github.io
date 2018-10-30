import React from 'react'
import moment from 'moment'
import {
  sortBy, compose, prop, filter, symmetricDifference
} from 'ramda'
import { Logo, Filter, Tickets } from '../../components'
import source from '../../tickets.json'

class App extends React.Component {
  state = {
    tickets:          [],
    rates:            [],
    selectedCurrency: 'RUB',
    selectedFilters:  [-1]
  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=RUB')
      .then(response => response.json())
      .then((data) => {
        const { rates } = data
        this.setState({
          rates: {
            USD: rates.USD,
            EUR: rates.EUR
          }
        })
      })
      .catch((error) => {
        console.log(`There has been a problem with your fetch operation: ${error.message}`)
      })
    const { tickets } = source
    this.setState({ tickets: sortBy(compose(prop('stops')))(tickets) })
  }

  handleCurrencyChange = (currency) => {
    this.setState({ selectedCurrency: currency })
  }

  handleFilterChange = (stops) => {
    const { selectedFilters } = this.state
    if (stops === -1) this.setState({ selectedFilters: [-1] })
    else {
      this.setState({
        selectedFilters: filter(val => val > -1)(symmetricDifference(selectedFilters, [stops]))
      }, () => {
        this.filterChangeCallBack()
      })
    }
  }

  filterChangeCallBack = () => {
    const { selectedFilters } = this.state
    if (selectedFilters.length === 0) this.setState({ selectedFilters: [-1] })
  }

  render() {
    const {
      tickets, rates, selectedCurrency, selectedFilters
    } = this.state
    moment.locale('ru')
    return (
      <div className="main">
        <Logo />
        <div className="main-content">
          <Filter
            selectedCurrency={selectedCurrency}
            selectedFilters={selectedFilters}
            handleCurrencyChange={this.handleCurrencyChange}
            handleFilterChange={this.handleFilterChange}
          />
          <Tickets selectedCurrency={selectedCurrency} rates={rates} tickets={tickets} />
        </div>
      </div>
    )
  }
}

export default App
