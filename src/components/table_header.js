import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TableHeader extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <thead>
        <tr>
          <th className="text-left col-sm-3 col-xs-3 h5">Symbol</th>
          <th className="text-left col-sm-3 col-xs-3 h5">Name</th>
          <th className="text-left col-sm-3 col-xs-3 h5">Price</th>
          <th className="text-left col-sm-3 col-xs-3 h5">Change</th>
        </tr>
      </thead>
    );

  }

}

export default TableHeader;
