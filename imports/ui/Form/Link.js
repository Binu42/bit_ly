import React, { Component } from 'react'

export class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('insert.link', this.refs.link.value, (err) => {
      if (err) {
        this.setState({ error: "Not a valid Link, Please Enter valid Link" })
      } else {
        this.setState({ error: "" })
        this.refs.link.value = ''
      }
    })
  }
  render() {
    return (
      <div className="row" style={{ "width": "100%", "overflowX": "hidden" }}>
        <div className="col-md-6 offset-3">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="link">Enter Link</label>
              <input type="text" name="" id="link" ref="link" className="form-control" placeholder="Enter Link Here" />
              <div className="text-danger">{this.state.error}</div>
              <input type="submit" value="Short Link" className="btn btn-success mt-2" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Link
