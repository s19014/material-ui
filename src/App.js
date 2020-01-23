import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { Card } from '@material-ui/core'
import logo from './logo.svg'
import './App.css'

const App = props => {
  const data = [
    { name: 'aaa', age: 23 },
    { name: 'bbb', age: 20 },
    { name: 'ccc', age: 0 }
  ]
  return (
    //<Card>
    <div>
      <Autocomplete
        id='combo-box-demo'
        options={data}
        getOptionLabel={option => option.name}
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
    //</Card>
  )
}

export default App
