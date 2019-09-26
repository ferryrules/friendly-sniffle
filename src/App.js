import React from 'react';
import './App.css';
// import { Segment, Icon } from 'semantic-ui-react'
import { Button } from '@material-ui/core';
import { Battery20, Battery30 } from '@material-ui/icons';
import { Terminal as XTerm, type Theme } from 'xterm';

export default class App extends React.Component {
  render() {
    const terminal = new Terminal()
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
          <Button  component="span" >
            Upload
          </Button>
        </label>
        <br />
        <br />
        <Battery20 />
        <Battery30 />
        <Terminal />
      </div>
    )
  }
}
