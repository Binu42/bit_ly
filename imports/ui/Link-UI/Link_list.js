import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'
import { Links } from '../../api/links'

class Link_list extends Component {
  renderRows() {
    return (this.props.links.map(link => {
      const { url, token, count } = link;
      const shortenLink = `https://bityly.herokuapp.com/${token}`;
      return (
        <tr key={token}>
          <td>{url}</td>
          <td><a href={shortenLink} target="_blank">{shortenLink}</a></td>
          <td>{count}</td>
        </tr>
      )
    }))
  }
  render() {
    return (
      <div className="p-5">
        <table className="table text-center table-striped table-hover">
          <thead>
            <tr>
              <th>URL</th>
              <th>Shorten Link</th>
              <th>No.of Visits</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}


export default createContainer(() => {
  Meteor.subscribe('links');

  return { links: Links.find({}).fetch() };
}, Link_list)