import React, { Component } from 'react';

import Header from './Header';
import AjaxExample from './AjaxExample';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Otsikko"
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Header title={this.state.pageHeader} />
        <AjaxExample />
      </div>
    );
  }
}

export default App;
