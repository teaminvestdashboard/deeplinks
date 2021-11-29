import './App.css';
import React from "react";
import { platform, targets, deeplinks, externalSources, internalSources } from './__data__'

var QRCode = require("qrcode.react")


class App extends React.Component {
  state = {
    platformCode: "android_prom",
    target: "marketplace",
    targetCode: targets[0].options[0].code,
    internal: internalSources[0].code,
    external: externalSources[0].code,
    external_text: "",
    campaign: "test_company",
    content: "test_content",
    medium: "test_medium",
    term: "test_term",
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
    let link = platform_record.base; //получаем первую часть
    let deeplink = deeplinks[this.state.target][this.state.platformCode]; //получаем вторую часть

    if(deeplink !== undefined) {
      link = link + deeplink.link;
    }

    let params = [];
    if(this.state.targetCode !== "" && this.getAppendCode()) { //получаем третью часть
      if(deeplink.param !== "")
        params.push(deeplink.param + "=" + this.state.targetCode);
      else
        params.push(this.state.targetCode);
    }


    if(this.state.internal !== "") { //получаем четвертую часть
      params.push("internal_source=" + this.state.internal);
    }
    if(this.state.external !== "") {
      let record = externalSources.find((element) => {
        return element.code === this.state.external;
      })
      if(record !== undefined) { //получаем utm параметры
        let utm_source = record.source !== undefined ? record.source : record.code;
        let utm_medium = record.medium !== undefined ? record.medium : utm_source;
        if(this.state.external === "other") {
          utm_source = this.state.external_text;
          utm_medium = this.state.medium;
        }
        let utm_campaign = this.state.campaign;
        let utm_content = this.state.content;
        let utm_term = this.state.term;
        // let ga_uid = "place_uid_here";
        if(platform_record.ext === "smart") {
          params.push("utm_source=" + utm_source);
          params.push("utm_medium=" + utm_medium);
          if(utm_campaign !== "")
            params.push("utm_campaign=" + utm_campaign);
          if(utm_campaign !== "")
            params.push("utm_content=" + utm_content);
          if(utm_term !== "")
            params.push("utm_term=" + utm_term);
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
    // document.getElementById("debug").innerText =
    //     JSON.stringify(this.state, null, 2);
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

  onExtTextChanged = (e) => {
    this.changeState({external_text: e.currentTarget.value});
  };

  onMeduimChange = (e) => {
    this.changeState({medium: e.currentTarget.value});
  };

  onCampaignChanged = (e) => {
    this.changeState({campaign: e.currentTarget.value});
  };

  onContentChanged = (e) => {
    this.changeState({content: e.currentTarget.value});
  };

  onTermChanged = (e) => {
    this.changeState({term: e.currentTarget.value});
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
                      <div className="App-select" key={id}>
                        <input type="radio" name="platform" id={id}
                               value={code}
                               onChange={this.onPlatformChanged}
                               checked={this.state.platformCode === code}
                        />
                        <label htmlFor={id}>{name}</label>
                      </div>
                  );
                  // return <option value={platform[k].base}>{platform[k].name}</option>;
                })}
              </td>
              <td className="App-cell">{targets.map((k) => {
                  let id = "target_" + k.code;
                  return (
                      <div className="App-select" key={id}>
                        <input type="radio" name="target" id={id}
                               value={k.code}
                               onChange={this.onTargetChanged}
                               checked={this.state.target === k.code}

                        />
                        <label htmlFor={id}>{k.name}</label>
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
                      <div className="App-select" key={id}>
                        <input type="radio" name="marketplace" id={id}
                               value={k.code}
                               onChange={this.onCodeChanged}
                               checked={this.state.targetCode === k.code}
                               disabled={!option_enabled}
                        />
                        <label htmlFor={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">{internalSources.map((k) => {
                  let id = "internal" + k.code;
                  return (
                      <div className="App-select" key={id}>
                        <input type="radio" name="internal" id={id}
                               value={k.code}
                               onChange={this.onInternalChanged}
                               checked={this.state.internal === k.code}
                        />
                        <label htmlFor={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
              <td className="App-cell">{externalSources.map((k) => {
                  let id = "external" + k.code;
                  let input = (
                        <input type="radio" name="external" id={id}
                               value={k.code}
                               onChange={this.onExternalChanged}
                               checked={this.state.external === k.code}
                        />
                  );
                  if(k.code === "other") {
                    let input_text = (
                        <input type="text" id="external_text"
                               value={this.state.external_text}
                               onChange={this.onExtTextChanged}
                               onClick={() => {
                                 this.changeState({external: k.code})
                               }}
                        />
                    );
                    return (
                        <div className="App-select" key={id}>
                          {input}
                          <label htmlFor={id}>{k.name}</label><br/>
                          {input_text}
                        </div>
                    );
                  }
                  return (
                      <div className="App-select" key={id}>
                        {input}
                        <label htmlFor={id}>{k.name}</label>
                      </div>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td colSpan={4} rowSpan={4} align="center">
                <QRCode value={this.getLink()}/>
              </td>
              <th>utm_medium</th>
              <td>
                <input type="text" id="medium" value={this.state.medium} onChange={this.onMeduimChange}/>
              </td>
            </tr>
            <tr>
              <th>utm_compaign</th>
              <td colSpan={2}>
                <input type="text" id="campaign" value={this.state.campaign} onChange={this.onCampaignChanged}/>
              </td>
            </tr>
            <tr>
              <th>utm_content</th>
              <td>
                <input type="text" id="content" value={this.state.content} onChange={this.onContentChanged}/>
            </td>
            </tr>
            <tr>
              <th>utm_term</th>
              <td>
                <input type="text" id="term" value={this.state.term} onChange={this.onTermChanged}/>
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