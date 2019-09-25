import React from 'react';
import './App.css';
import { Segment, Button } from 'semantic-ui-react'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Segment raised>Sup bro</Segment>
        <Button>Green</Button>
      </div>
    )
  }
}
