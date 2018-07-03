import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import List from './components/List';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
            <Col sm={4} xs={12}>
                  <List/>
            </Col>
            <Col sm={8} xs={12}>
              <Detail/>
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
