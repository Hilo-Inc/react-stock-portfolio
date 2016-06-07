import $ from 'jquery';
import jQuery from 'jquery';
import 'jquery-ui';
import './lib/jquery.dragtable';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TabBar from './components/tab_bar';
import TableHeader from './components/table_header';
import TableQuotes from './components/table_quotes';
import Sortable from './lib/sortable';

var portfolio = ["AAPL,GOOG,AMZN,FB","RDS-A,XOM,BP","WMT,BBY,HM-B.ST"],
    activeTab = 0,
    results = null;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null
    };

    this.getStocks(activeTab);
  }

  getStocks(activeTab){
    var url = 'http://query.yahooapis.com/v1/public/yql',
        query = encodeURIComponent('select * from yahoo.finance.quotes where symbol in ("' + portfolio[activeTab] + '")');

    $.getJSON(
      url,
      'q=' + query + "&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
      this.getStocksCallback.bind(this)
    );
  }

  getStocksCallback(response) {
      this.setState({
        results: response.query.results
      })
  }

  componentDidUpdate(){
    if (Sortable) Sortable.init();

    $('.table').jsdragtable();
  }

  render() {

    if (!this.state.results) {
      return <div>Loading...</div>;
    }

    const onTabSelected = (activeTab) => {
      this.getStocks(activeTab);
    }

    return (
      <div>
        <TabBar onTabSelected={onTabSelected}/>
        <table className="table table-striped table-condensed col-sm-12 sortable-theme-bootstrap" data-sortable>
          <TableHeader />
          <TableQuotes results={this.state.results}/>
        </table>
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
