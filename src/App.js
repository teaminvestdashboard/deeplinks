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
  {"code": "IIS_products", "name": "Витрина ИИС с продуктами"},
  {"code": "trustCatalog", "name": "Доверительное управление"},
  {"code": "investPlansAllMB", "name": "Инвестиционные планы"},
  {"code": "forYouCatalog", "name": "По уровню риска"},
];

const externalSources = [
  {"code": "", "name": "Внутренний"},
  {"code": "push", "name": "Push"},
  {"code": "email", "name": "E-mail"},
  {"code": "sms", "name": "SMS"},
  {"code": "marketplace", "name": "Каталог"},
  {"code": "search", "name": "Поиск"}
];

const internalSources = [
  {"code": "", "name": "Внешний переход "},
  {"code": "Main_Plus_InvestPFM", "name": "Плюс на главной"},
  {"code": "Marketplace_All_InvestPFM", "name": "Каталог продуктов"},
  {"code": "GlobalSearch_InvestPFM", "name": "Умный поиск"},
  {"code": "All_Assets_InvestPFM", "name": "Всего средств"},
];

class App extends React.Component {
  state = {
    platformLink: platform["android-prom"].base,
    marketplace: marketplace[0].code,
    internal: internalSources[0].code,
    external: externalSources[0].code,
    debug: ""
  };

  getLink = () => {
    let link = this.state.platformLink + "?marketPlaceId=" + this.state.marketplace;
    if(this.state.internal !== "")
      link = link + "&internal_source=" + this.state.internal;
    if(this.state.external !== "")
      link = link + "&external_source=" + this.state.external;
    return link;
  };

  onPlatformChanged = (e) => {
    this.setState({platformLink: e.currentTarget.value});
    // document.getElementById("debug").innerText = this.getLink();
  };

  onMplaceChanged = (e) => {
    this.setState({marketplace: e.currentTarget.value});
    // document.getElementById("debug").innerText = this.getLink();
  };

  onInternalChanged = (e) => {
    this.setState({internal: e.currentTarget.value});
  };

  onExternalChanged = (e) => {
    this.setState({external: e.currentTarget.value});
  };

  render() {
    return (
        <div className="App">
          <div className="App-link"><a href={this.getLink()} rel="alternate">{this.getLink()}</a></div>
          <table>
            <tbody>
            <tr>
              <th>Платформа</th><th>Витрина</th><th>Внутренняя точка перехода</th><th>Рассылка</th>
            </tr>
            <tr>
              <td className="App-cell">
                {Object.keys(platform).map((k) => {
                  let code = platform[k].base;
                  let name = platform[k].name;
                  let id = "platform" + code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="platform" id={id}
                               value={code}
                               onChange={this.onPlatformChanged}
                               checked={this.state.platformLink === code}
                        />
                        <label for={id}>{name}</label>
                      </div>
                  );
                  // return <option value={platform[k].base}>{platform[k].name}</option>;
                })}
              </td>
              <td className="App-cell">
                {marketplace.map((k) => {
                  let id = "mplace" + k.code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="marketplace" id={id}
                               value={k.code}
                               onChange={this.onMplaceChanged}
                               checked={this.state.marketplace === k.code}

                        />
                        <label for={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">
                {internalSources.map((k) => {
                  let id = "internal" + k.code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="internal" id={id}
                               value={k.code}
                               onChange={this.onInternalChanged}
                               checked={this.state.internal === k.code}
                        />
                        <label for={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">
                {externalSources.map((k) => {
                  let id = "external" + k.code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="external" id={id}
                               value={k.code}
                               onChange={this.onExternalChanged}
                               checked={this.state.external === k.code}
                        />
                        <label for={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
            </tr>
            </tbody>
          </table>
          <div>{this.state.debug}</div>
        </div>
    );
  }
}

export default App;