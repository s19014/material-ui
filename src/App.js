import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField, Card, CardActions, CardContent } from '@material-ui/core'
import logo from './logo.svg'
import './App.css'

const ActionView = props => {
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = []
  }
  handleChange (event) {
    console.log(event.target)
  }
    render () {
        return (
            <Card>
                <CardActions>
                    <ActionView />
                </CardActions>
            </Card>
        )
    }
}

export default App
