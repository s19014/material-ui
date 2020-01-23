import React from 'react'
import { TextField, Card, CardActions, CardContent } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const ActionView = props => {
  return (
    <Autocomplete
      onChange={props.handleChange}
      id='combo-box-demo'
      options={props.items}
      getOptionLabel={option => option.id}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label='学籍番号' variant='outlined' fullWidth />
      )}
    />
  )
}

const ContentView = props => {
  const { id, name } = props.item
  return (
    <ul>
      <li>{id}</li>
      <li>{name}</li>
    </ul>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { id: 'n19001', name: '石垣' },
        { id: 's19001', name: '東' }
      ],
      item: { id: '', name: '' }
    }
  }

  handleChange (event) {
    const index = event.target.dataset.optionIndex
    this.setState({ item: this.state.items[index] })
  }

  render () {
    return (
      <Card>
        <CardActions>
          <ActionView
            items={this.state.items}
            handleChange={this.handleChange.bind(this)}
          />
        </CardActions>
        <CardContent>
          <ContentView item={this.state.item} />
        </CardContent>
      </Card>
    )
  }
}

export default App
