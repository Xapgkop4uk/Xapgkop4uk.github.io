import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import turkishAirlines from '../../images/turkish-airlines.svg'
import plane from '../../images/plane.svg'

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

const Tickets = ({ tickets }) => (
  <div className="tickets-wrapper">
    {tickets.map(ticket => (
      <div className="ticket-wrapper">
        <div className="ticket-price">
          <img src={turkishAirlines} alt="avia-logo" />
          <button type="button" className="buy-ticket-button" onClick={() => {}}>
            <span className="buy-ticket-label">
              Купить
              <br />
              {`за ${new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(ticket.price)}`}
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
            <img src={plane} alt="plane" className="plane" />
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
  tickets: propTypes.array.isRequired
}

export default Tickets
