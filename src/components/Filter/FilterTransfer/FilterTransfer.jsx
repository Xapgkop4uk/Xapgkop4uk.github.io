import React from 'react'
import propTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { contains } from 'ramda'

const styles = {
  root: {
    color:       '#ccc',
    padding:     '0.3rem 1rem',
    '&$checked': {
      color: '#2196f3'
    }
  },
  checked: {}
}

const transfers = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const FilterTransfer = ({ transfersSelected, onClick, classes }) => (
  <div className="filter-transfer-wrapper">
    <span className="transfer-label">Количество пересадок</span>
    <div className="transfer-selectors">
      {transfers.map((cur, index) => (
        <div className="transfer-checkbox">
          <FormControlLabel
            key={cur}
            control={(
              <Checkbox
                checked={contains(index, transfersSelected)}
                onChange={() => onClick(index)}
                classes={{
                  root:    classes.root,
                  checked: classes.checked
                }}
              />)}
            label={(<span className="input-label">{cur}</span>)}
          />
        </div>))}
    </div>
  </div>
)


FilterTransfer.propTypes = {
  transfersSelected: propTypes.array.isRequired,
  onClick:           propTypes.func.isRequired,
  classes:           propTypes.object.isRequired
}

export default withStyles(styles)(FilterTransfer)
