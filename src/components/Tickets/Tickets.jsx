import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'

const getTransfers = (count) => {
  switch (count) {
    case 0:
      return ''
    case 1:
      return '1 пересадка'
    case count > 4:
      return `${count} пересадок`
    default:
      return `${count} пересадки`
  }
}

const getPrice = (rates, selectedCurrency, price) => {
  if (!rates[selectedCurrency]) return price
  return rates[selectedCurrency] * price
}


const Tickets = ({ tickets, rates, selectedCurrency }) => (
  <div className="tickets-wrapper">
    {tickets.map(ticket => (
      <div className="ticket-wrapper">
        <div className="ticket-price">
          <img src="https://a.icons8.com/aUSOiWgn/DW0mD2/logo.svg" alt="avia-logo" />
          <button type="button" className="buy-ticket-button" onClick={() => {}}>
            <span className="buy-ticket-label">
              Купить
              <br />
              {`за ${new Intl.NumberFormat('ru-RU', { style: 'currency', currency: selectedCurrency, minimumFractionDigits: 0 }).format(getPrice(rates, selectedCurrency, ticket.price))}`}
            </span>
          </button>
        </div>
        <div className="ticket-details">
          <div className="from">
            <span className="departure-time">
              {ticket.departure_time}
            </span>
            <div className="departure-details">
              <span className="port">
                {`${ticket.origin}, ${ticket.origin_name}`}
              </span>
              <span className="departure-date">
                {moment(ticket.departure_date).format('DD MMM YYYY, ddd')}
              </span>
            </div>
          </div>
          <div className="route-line">
            <span className="route">
              {getTransfers(ticket.stops)}
            </span>
            <img src="https://a.icons8.com/hnhcupih/CIFYqd/ic_airplanemode_active_bl.svg" alt="plane" className="plane" />
          </div>
          <div className="to">
            <span className="arrival-time">
              {ticket.arrival_time}
            </span>
            <div className="arrival-details">
              <span className="port">
                {`${ticket.destination}, ${ticket.destination_name}`}
              </span>
              <span className="arrival-date">
                {moment(ticket.arrival_date).format('DD MMM YYYY, ddd')}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

Tickets.propTypes = {
  tickets:          propTypes.array.isRequired,
  rates:            propTypes.array.isRequired,
  selectedCurrency: propTypes.string.isRequired
}

export default Tickets
