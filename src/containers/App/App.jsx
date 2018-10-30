import React from 'react'
import moment from 'moment'
import {
  sortBy, compose, prop, filter, symmetricDifference, contains
} from 'ramda'
import { Logo, Filter, Tickets } from '../../components'
import source from '../../tickets.json'
import fetchCurrency from '../../rest'

class App extends React.Component {
  state = {
    tickets:          [],
    rates:            [],
    selectedCurrency: 'RUB',
    selectedFilters:  [-1]
  }

  componentDidMount() {
    fetchCurrency()
      .then((data) => {
        const { rates } = data
        this.setState({
          rates: {
            USD: rates.USD,
            EUR: rates.EUR
          }
        })
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

  handleSelectOne = (stops) => {
    this.setState({ selectedFilters: [stops] })
  }

  filterChangeCallBack = () => {
    const { selectedFilters } = this.state
    if (selectedFilters.length === 0) this.setState({ selectedFilters: [-1] })
  }

  render() {
    const {
      tickets, rates, selectedCurrency, selectedFilters
    } = this.state
    const filtered = tickets.filter(ticket => contains(ticket.stops, selectedFilters, ticket.stops))
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
            handleSelectOne={this.handleSelectOne}
          />
          <Tickets
            selectedCurrency={selectedCurrency}
            rates={rates}
            tickets={contains(-1, selectedFilters) ? tickets : filtered}
          />
        </div>
      </div>
    )
  }
}

export default App
