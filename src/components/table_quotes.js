import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TableQuotes extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const quotes = this.props.results.quote.map((quote) => {
      return (
        <tr key={quote.Symbol}>
          <td className="text-left col-sm-3 col-xs-3">{quote.Symbol}</td>
          <td className="text-left col-sm-3 col-xs-3">{quote.Name}</td>
          <td className="text-left col-sm-3 col-xs-3">{quote.PreviousClose}</td>
          <td className="text-left col-sm-3 col-xs-3">{quote.Change}</td>
        </tr>
      );
    });

    return (
      <tbody>
        {quotes}
      </tbody>
    );

  }

}

export default TableQuotes;
