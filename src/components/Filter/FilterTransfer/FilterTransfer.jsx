import React from 'react'
import propTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { contains } from 'ramda'

const styles = () => ({
  root: {
    color:       '#ccc',
    padding:     '0.3rem 1rem',
    '&$checked': {
      color: '#2196f3'
    }
  },
  checked:      {},
  tooltipStyle: {
    cursor:      'pointer',
    color:       'white',
    background:  '#2196f3',
    positon:     'absolute',
    padding:     '0.3rem 1rem'
  }
})

const transfers = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

const FilterTransfer = ({
  transfersSelected,
  onClick,
  classes,
  handleSelectOne
}) => (
  <div className="filter-transfer-wrapper">
    <span className="transfer-label">Количество пересадок</span>
    <div className="transfer-selectors">
      {transfers.map((cur, index) => (
        <div className="transfer-checkbox" key={`transfer-${cur}`}>
          <FormControlLabel
            key={cur}
            control={(
              <Checkbox
                checked={contains(index - 1, transfersSelected)}
                onChange={() => onClick(index - 1)}
                classes={{
                  root:    classes.root,
                  checked: classes.checked
                }}
              />)}
            label={(<span className="input-label">{cur}</span>)}
          />
          {(index === 0) ? null
            : <button type="button" className="only-that-button" onClick={() => handleSelectOne(index - 1)}>ТОЛЬКО</button>}
        </div>))}
    </div>
  </div>
)


FilterTransfer.propTypes = {
  transfersSelected: propTypes.array.isRequired,
  onClick:           propTypes.func.isRequired,
  classes:           propTypes.object.isRequired,
  handleSelectOne:   propTypes.func.isRequired
}

export default withStyles(styles)(FilterTransfer)
