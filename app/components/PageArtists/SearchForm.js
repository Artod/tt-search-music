import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

class SearchForm extends Component {
  constructor(props) {
    super()
    this.inputName = null
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.inputName.focus()
  }

  onChange(e) {
    this.props.onChange(e.target.value)

  }

  render() {

    return (
      <section className="SearchForm">
          <TextField
            name="name"
            autoComplete="off"
            placeholder="Search by an artist"
            ref={input => this.inputName = input}
            onChange={this.onChange.bind(this)}
          />
      </section>
    )

  }

}

export default SearchForm
