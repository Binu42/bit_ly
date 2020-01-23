import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'
import { Links } from '../../api/links'

class Link_list extends Component {
  render() {
    return (
      <div>
        <p>Link List</p>
      </div>
    )
  }
}


export default createContainer(() => {
  Metor.subscribe('links');

  return Links.find({}).fetch();
}, Link_list)