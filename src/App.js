import './App.css';
import React from "react";

var QRCode = require("qrcode.react")

const platform = {
  android_prom: {
    name: "Android ПРОМ",
    base: "android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/",
    appendCode: true,
    ext: "mobile"
  },
  android_test: {
    name: "Android ТЕСТ",
    base: "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/",
    appendCode: true,
    ext: "mobile"
  },
  ios: {
    name: "iOS",
    base: "sberbankonline://",
    appendCode: true,
    ext: "mobile"
  },
  // smart: {
  //   name: "Смартлинк общий",
  //   base: "https://sberbank.ru/sms/",
  //   appendCode: false,
  //   ext: "smart"
  // },
  smart_sms: {
    name: "Смартлинк для SMS",
    base: "https://sberbank.ru/sms/",
    appendCode: false,
    ext: "no"
  },
  smart_id: {
    name: "Смартлинк для сайта",
    base: "https://sberbank.ru/sms/",
    appendCode: true,
    ext: "smart"
  }
};

const targets = [
  {
    code: "marketplace",    name: "Витрина",
    options: [
      {code: "investmentsCatalog", name: "Основная витрина инвестиций", isDefault: true},
      {code: "PIFCatalog",         name: "Витрина категории ПИФ"},
      {code: "IIS_products",       name: "Витрина ИИС с продуктами"},
      {code: "trustCatalog",       name: "Доверительное управление"},
      {code: "investPlansAllMB",   name: "Инвестиционные планы"},
      {code: "forYouCatalog",      name: "По уровню риска"},
      {code: "maxProfitSelection",           name: "Максимум дохода"},
      {code: "minAmountSelection",           name: "Минимальная сумма"},
      {code: "regularPayoutsSelection",      name: "Регулярные выплаты"},
      {code: "currencyInvestSelection",      name: "Инвестиции в валютные активы"},
    ]
  },
  {
    code: "pif",            name: "Продукты ПИФ",
    options: [
      // {code: "",   name: "Все фонды", use_target: "marketplace", use_code:"PIFCatalog"},
      {code: "fund_equity_dn",   name: "Фонд акций Добрыня Никитич"},
      {code: "fund_bond_im",     name: "Фонд облигаций Илья Муромец"},
      {code: "fund_balanced",    name: "Фонд Сбалансированный"},
      {code: "fund_prosp_bonds", name: "Фонд перспективных облигаций"},
      {code: "fund_eurobonds",   name: "Фонд Еврооблигации"},
      {code: "fund_debt_market", name: "Фонд Глобальный долговой рынок"},
      {code: "fund_money",       name: "Фонд Денежный"}
    ]
  },
  {
    code: "trust",          name: "Продукты ДУ",
    options: [
      // {code: "",                   name: "Все стратегии"},
      {code: "trust_conservative", name: "Стратегия \"Консервативный портфель\""},
      {code: "trust_careful",      name: "Стратегия \"Осторожный портфель\""},
      {code: "trust_moderate",     name: "Стратегия \"Умеренный портфель\""},
      {code: "trust_modagressive", name: "Стратегия \"Умеренно-агрессивный портфель\""},
    ]
  }
];

const deeplinks = {
  marketplace: {
    android_prom: {link: "pfm/marketplace", param: "marketPlaceId"},
    android_test: {link: "pfm/marketplace", param: "marketPlaceId"},
    ios: {link: "pfm/marketplace", param: "marketPlaceId"},
    smart_sms: {link: "pfmmp", param: ""},
    smart_id: {link: "mp_all", param: ""}
  },
  pif: {
    android_prom: {link: "welfare/invest-pif/product", param: "productCode"},
    android_test: {link: "welfare/invest-pif/product", param: "productCode"},
    ios: {link: "welfare/invest-pif/product", param: "productCode"},
    smart_sms: {link: "invfund", param: "productCode", appendCode: true},
    smart_id: {link: "invfund-website", param: "productCode"}
  },
  trust: {
    android_prom: {link: "investments/tm/product/card", param: "productCode"},
    android_test: {link: "investments/tm/product/card", param: "productCode"},
    ios: {link: "investments/tm/product/card", param: "productCode"},
    smart_sms: {link: "pfmmp_tc/", param: ""},
    smart_id: {link: "iia_all", param: ""}
  }
};

const externalSources = [
  {code: "",             name: "Внутренний",     source: "", medium: ""},
  {code: "push",         name: "Push",             },
  {code: "email",        name: "E-mail",           },
  {code: "sms",          name: "SMS",              },
  {code: "screensaver",  name: "Screensaver",      },
  {code: "zen",          name: "Яндекс.Дзен",      },
  {code: "fb",           name: "Facebook",         },
  {code: "vc",           name: "Вконтакте",        },
  {code: "twitter",      name: "Twitter",          },
  {code: "inst",         name: "Instagram",        },
  {code: "sberbank",     name: "Сайт Сбер Банка", medium: "site"},
  {code: "qr_vsp",       name: "QR-код в ВСП",    medium: "qr"},
];

const internalSources = [
  {code: "",                          name: "Внешний переход "},
  {code: "Main_Plus_InvestPFM",       name: "Плюс на главной"},
  {code: "Marketplace_All_InvestPFM", name: "Каталог продуктов"},
  {code: "GlobalSearch_InvestPFM",    name: "Умный поиск"},
  {code: "All_Assets_InvestPFM",      name: "Всего средств"},
];

class App extends React.Component {
  state = {
    platformCode: "android_prom",
    target: "marketplace",
    targetCode: targets[0].options[0].code,
    internal: internalSources[0].code,
    external: externalSources[0].code,
    campaign: "test_company",
    content: "test_content",
    uid: "test_uid",
    debug: ""
  };

  getTargetOptions = () => {
    let t = targets.find((element) => {
      return element.code === this.state.target;
    });
    if(t === undefined)
      return [];
    return t.options;
  };

  getTargetParam = (symbol) => {
    let t = targets.find((element) => {
      return element.code === this.state.target;
    });
    if((t === undefined) || (t === ""))
      return "";
    return t.param + symbol;
  };

  getAppendCode = () => {
    let platform_record = platform[this.state.platformCode];
    let deeplink = deeplinks[this.state.target][this.state.platformCode];
    let new_appendCode = platform_record.appendCode;
    if("appendCode" in deeplink)
      new_appendCode = deeplink.appendCode;
    return new_appendCode;
  };

  getLink = () => {
    let platform_record = platform[this.state.platformCode];
    let link = platform_record.base;
    let deeplink = deeplinks[this.state.target][this.state.platformCode];
    if(deeplink !== undefined)
      link = link + deeplink.link;
    let params = [];
    if(this.state.targetCode !== "" && this.getAppendCode()) {
      if(deeplink.param !== "")
        params.push(deeplink.param + "=" + this.state.targetCode);
      else
        params.push(this.state.targetCode);
    }
    if(this.state.internal !== "")
      params.push("internal_source=" + this.state.internal);
    if(this.state.external !== "") {
      let record = externalSources.find((element) => {
        return element.code === this.state.external;
      })
      if(record !== undefined) {
        let utm_source = record.source !== undefined ? record.source : record.code;
        let utm_medium = record.medium !== undefined ? record.medium : utm_source;
        let utm_campaign = this.state.campaign;
        let utm_content = this.state.content;
        let ga_uid = "place_uid_here";
        if(platform_record.ext === "smart") {
          params.push("utm_source=" + utm_source);
          params.push("utm_medium=" + utm_medium);
          if(utm_campaign !== "")
            params.push("utm_campaign=" + utm_campaign);
          if(utm_campaign !== "")
            params.push("utm_content=" + utm_content);
        }
        else if(platform_record.ext !== "no") {
          let af_media_source = 'pfmmp';
          params.push("external_source=" +
              af_media_source + '-_-' +
              utm_source + '-_-' +
              utm_medium + '-_-' +
              utm_campaign + '-_-' +
              utm_content + '-_-' +
              this.state.uid
          );
        }
      }
    }
    params = params.join("&");
    if(params !== "")
      link = link + "?" + params;
    return link;
  };

  changeState = (state_changes) => {
    this.setState(state_changes);
    // this.setState({appendCode: this.getAppendCode()})
    // this.setState({link: this.getLink()})
    document.getElementById("debug").innerText = JSON.stringify(this.state, null, 2);
  }

  onPlatformChanged = (e) => {
    this.changeState({platformCode: e.currentTarget.value});
  };

  onTargetChanged = (e) => {
    this.changeState({target: e.currentTarget.value});
  };

  onCodeChanged = (e) => {
    this.changeState({targetCode: e.currentTarget.value});
  };

  onInternalChanged = (e) => {
    this.changeState({internal: e.currentTarget.value});
  };

  onExternalChanged = (e) => {
    this.changeState({external: e.currentTarget.value});
  };

  onCampaignChanged = (e) => {
    this.changeState({campaign: e.currentTarget.value});
  };

  onContentChanged = (e) => {
    this.changeState({content: e.currentTarget.value});
  };

  onUIDChanged = (e) => {
    this.changeState({uid: e.currentTarget.value});
  };

  render() {
    return (
        <div className="App">
          <div className="App-link">
            <a href={this.getLink()} rel="alternate" className="App-link-text">{this.getLink()}</a>
          </div>
          <table>
            <tbody>
            <tr>
              <th>Платформа</th>
              <th>Куда перейти</th>
              <th>Экран</th>
              <th>Внутренний источник перехода</th>
              <th>Внешний источник перехода</th>
            </tr>
            <tr>
              <td className="App-cell">{Object.keys(platform).map((k) => {
                  let code = k;
                  let name = platform[k].name;
                  let id = "platform" + code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="platform" id={id}
                               value={code}
                               onChange={this.onPlatformChanged}
                               checked={this.state.platformCode === code}
                        />
                        <label for={id}>{name}</label>
                      </div>
                  );
                  // return <option value={platform[k].base}>{platform[k].name}</option>;
                })}
              </td>
              <td className="App-cell">{targets.map((k) => {
                  let id = "target_" + k.code;
                  return (
                      <div className="App-select">
                        <input type="radio" name="target" id={id}
                               value={k.code}
                               onChange={this.onTargetChanged}
                               checked={this.state.target === k.code}

                        />
                        <label for={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">{this.getTargetOptions().map((k) => {
                  let id = "targetCode_" + k.code;
                  let option_enabled = this.getAppendCode();
                  if(k.code === "")
                    option_enabled = true;
                  if("isDefault" in k && k.isDefault)
                    option_enabled = true;
                  return (
                      <div className="App-select">
                        <input type="radio" name="marketplace" id={id}
                               value={k.code}
                               onChange={this.onCodeChanged}
                               checked={this.state.targetCode === k.code}
                               disabled={!option_enabled}
                        />
                        <label for={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">{internalSources.map((k) => {
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
              <td className="App-cell">{externalSources.map((k) => {
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
            <tr>
              <td colSpan={3} rowSpan={3} align="center">
                <QRCode value={this.getLink()}/>
              </td>
              <th>Кампания</th>
              <td colSpan={2}>
                <input type="text" id="campaign" value={this.state.campaign} onChange={this.onCampaignChanged}/>
              </td>
            </tr>
            <tr>
              <th>Содержание</th>
              <td>
                <input type="text" id="content" value={this.state.content} onChange={this.onContentChanged}/>
            </td>
            </tr>
            <tr>
              <th>UID</th>
              <td>
                <input type="text" id="uid" value={this.state.uid} onChange={this.onUIDChanged}/>
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