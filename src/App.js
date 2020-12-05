import logo from './logo.svg';
import './App.css';
import React from "react";

const platform = {
  "android-prom": {
    "name": "Android ПРОМ",
    "base": "android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/pfm/marketplace"
  },
  "android-test": {
    "name": "Android ТЕСТ",
    "base": "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/pfm/marketplace"
  },
  "ios": {
    "name": "iOS",
    "base": "sberbankonline://pfm/marketplace"
  }
};

const marketplace = [
  {"code": "investmentsCatalog", "name": "Основная витрина инвестиций"},
  {"code": "PIFCatalog", "name": "Витрина категории ПИФ"},
  {"code": "IIS_products", "name": "Витрина ИИС с продуктами"}
];

const externalSources = [
  {"code": "", "name": ""},
  {"code": "push", "name": "Push"},
  {"code": "email", "name": "E-mail"},
  {"code": "sms", "name": "SMS"},
  {"code": "marketplace", "name": "Каталог"},
  {"code": "search", "name": "Поиск"}
];

const internalSources = [
  {"code": "", "name": ""},
  {"code": "plus", "name": "Плюс на главной"}
];


let App = React.createElement({
  getInitialState: function() {
    return {
      platformLink: "test",
      marketplace: ""
    };
  },
  onPlatformChanged: function (e) {
    this.setState({platformLink: e.currentTarget.value});
    // document.writeln(state.platformLink);
  },
  onMplaceChanged: function (e) {
    this.setState({marketplace: e.currentTarget.value});
  },
  render: function () {
    return (
        <div className="App">
          <div>{this.state.platformLink}?marketPlaceId={this.state.marketplace}</div>
          <input className="App-input" value={this.state.platformLink}/>
          {/*<button value={platform["android-test"].name} title="ddddddd"/>*/}
          <select name="platormSelect" value={this.state.platformLink} onChange={this.onPlatformChanged}>
            {Object.keys(platform).map((k) => {
              return <option value={platform[k].base}>{platform[k].name}</option>;
            })}
          </select>
          {marketplace.map((k) => {
            return (
                <div className="App-mplace">
                  <input type="radio" name="marketplace"
                         value={k.code}
                         checked={this.state.marketplace === k.code}
                         onChange={this.onMplaceChanged}
                  />
                  <label>{k.name}</label>
                </div>
            );
          })}

          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </div>
    );
  }
});

export default App;
