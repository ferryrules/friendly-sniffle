import React from 'react';
import './App.css';
import { Segment, Button, Icon } from 'semantic-ui-react'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Segment raised>Sup bro</Segment>
        <Button inverted color="red">Red</Button>
        <Button animated color="yellow">
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Button animated='vertical' color="blue">
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>
        <Button animated='fade' color="purple">
          <Button.Content visible>Sign-up for a Pro account</Button.Content>
          <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
      </div>
    )
  }
}
