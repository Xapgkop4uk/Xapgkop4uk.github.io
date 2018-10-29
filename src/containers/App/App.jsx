import React from 'react'
import moment from 'moment'
import { sortBy, compose, prop } from 'ramda'
import { Logo, Filter, Tickets } from '../../components'
import source from '../../tickets.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: []
    }
  }

  componentDidMount() {
    const { tickets } = source
    this.setState({ tickets: sortBy(compose(prop('stops')))(tickets) })
  }

  render() {
    const { tickets } = this.state
    moment.locale('ru')
    return (
      <div className="main">
        <Logo />
        <div className="main-content">
          <Filter />
          <Tickets tickets={tickets} />
        </div>
      </div>
    )
  }
}

export default App
