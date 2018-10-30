const tickets = [
  {
    origin:           'VVO',
    origin_name:      'Владивосток',
    destination:      'TLV',
    destination_name: 'Тель-Авив',
    departure_date:   '12.05.18',
    departure_time:   '16:50',
    arrival_date:     '12.05.18',
    arrival_time:     '23:35',
    carrier:          'SU',
    stops:            1,
    price:            16700
  }, {
    origin:           'VVO',
    origin_name:        'Владивосток',
    destination:        'TLV',
    destination_name: 'Тель-Авив',
    departure_date:     '12.05.18',
    departure_time:   '6:10',
    arrival_date:     '12.05.18',
    arrival_time:     '16:15',
    carrier:            'S7',
    stops:              0,
    price:              17400
  }
]

export default () => (
  new Promise((resolve) => {
    resolve(tickets)
  })
)
