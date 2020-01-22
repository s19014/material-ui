import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import logo from './logo.svg'
import './App.css'

const App = props => {
  return (
    <div>
      <Autocomplete
        id='combo-box-demo'
        options={data}
        //getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            label='Combo box'
            variant='outlined'
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default App
