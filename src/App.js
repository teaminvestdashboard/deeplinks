import logo from './logo.svg';
import './App.css';

const platform = [
  {
    "name": "Android ПРОМ",
    "base": "android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/pfm/marketplace?marketPlaceId=investmentsCatalog"
  },
  {
    "name": "Android ТЕСТ",
    "base": "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/pfm/marketplace?marketPlaceId=investmentsCatalog"
  },
  {
    "name": "iOS",
    "base": "sberbankonline://pfm/marketplace?marketPlaceId=investmentsCatalog"
  }
];

const marketplace = [
  "investmentsCatalog:Основная витрина инвестиций",
  "PIFCatalog:Витрина категории ПИФ",
  "IIS_products:Витрина ИИС с продуктами",
];

const externalSources = [
  ":",
  "push:Push",
  "email:E-mail",
  "sms:SMS",
  "marketplace:Каталог",
  "search:Поиск"
];

const internalSources = [
  ":",
  "push:Плюс на главной",
];


function App() {
  let state;
  state = {
    platform: ""
  }
  return (
    <div className="App">
      <input className="App-input"/>
      {/*<button value={platform["android-test"].name} title="ddddddd"/>*/}
      <select name="platormSelect" value={state.platform}>
        {platform.map((e, key) => {
          return <option value={e.base}>{e.name}</option>;
        })}
      </select>
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

export default App;
