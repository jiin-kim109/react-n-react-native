import React, { Component } from "react";
import { Provider } from "mobx-react";

import RootStore from "../../../common/src/store/RootStore";

class App extends Component {
  private rootStore: RootStore;

  constructor(props) {
    super(props);
    this.rootStore = new RootStore();
  }

  render() {
    return (
      <>
        <Provider rootStore={this.rootStore}>
          <div>
            <h1>Welcome to React with Typescript</h1>
          </div>
        </Provider>
      </>
    );
  }
}

export default App;
