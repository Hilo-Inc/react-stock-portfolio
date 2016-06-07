import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap';

class TabBar extends Component {
  constructor(props) {
    super(props);

    this.state = { key: 0 };
  }

  handleSelect(key) {
    this.setState({key});
    this.props.onTabSelected(key);
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="TabBar">
        <Tab eventKey={0} title="Technology"></Tab>
        <Tab eventKey={1} title="Energy"></Tab>
        <Tab eventKey={2} title="Retail"></Tab>
      </Tabs>
    );
  }

}

export default TabBar;
