import React from 'react';
import './App.css';
// import { Segment, Icon } from 'semantic-ui-react'
import { Button } from '@material-ui/core';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Button variant="contained" >
          Default
        </Button>
        <Button variant="contained" href="#contained-buttons" >
          Link
        </Button>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          hidden
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" >
            Upload
          </Button>
        </label>
      </div>
    )
  }
}
