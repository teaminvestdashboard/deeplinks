(this.webpackJsonpmplace_deeplink=this.webpackJsonpmplace_deeplink||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),d=n(5),r=n.n(d),o=(n(21),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,d=t.getTTFB;n(e),c(e),a(e),i(e),d(e)}))}),s=n(2),b=n(6),l=n(3),u={platform:"",deeplink:"",screen:"",internalSource:"",externalSource:"",web:!1,deeplinkType:"marketplace",link:""},m="ADD_PLATFORM",j="ADD_DEEPLINK",p="ADD_SCREEN",_="ADD_INTERNAL_SOURCE",O="ADD_EXTERNAL_SOURCE",h="WEB_ACTIVE",f="ADD_DEEPLINK_TYPE",x="ADD_LINK",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)(Object(l.a)(Object(l.a)({},e),u),{},{platform:t.data});case j:return Object(l.a)(Object(l.a)({},e),{},{deeplink:t.data,screen:"",internalSource:"",externalSource:""});case p:return Object(l.a)(Object(l.a)({},e),{},{screen:t.data});case _:return Object(l.a)(Object(l.a)({},e),{},{internalSource:t.data,externalSource:""});case O:return Object(l.a)(Object(l.a)({},e),{},{externalSource:t.data,internalSource:""});case h:return Object(l.a)(Object(l.a)({},e),{},{web:t.data});case f:return Object(l.a)(Object(l.a)({},e),{},{deeplinkType:t.data});case x:return Object(l.a)(Object(l.a)({},e),{},{link:t.data});default:return e}},v=Object(b.a)({Links:k}),S=Object(b.b)(v),N=(n(27),function(){var e=Object(s.c)((function(e){return e.Links})),t="".concat(e.platform).concat(e.deeplink).concat(e.screen).concat(e.internalSource).concat(e.externalSource),n=Object(s.b)();return Object(a.useEffect)((function(){n({type:x,data:t})}),[n,t]),Object(c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:t})}),g=n(4),w=[{code:"empty",tab_id:1,name:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439"},{code:"push_InvestPFM",tab_id:2,name:"Push"},{code:"email_InvestPFM",tab_id:3,name:"E-mail"},{code:"sms_InvestPFM",tab_id:4,name:"SMS"},{code:"other",tab_id:5,name:"\u0414\u0440\u0443\u0433\u043e\u0439 (utm)"}],y=[{code:"empty",tab_id:6,name:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439"},{code:"email",tab_id:7,name:"\u041f\u043e\u0447\u0442\u043e\u0432\u0430\u044f \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0430"},{code:"facebook",tab_id:8,name:"\u0424\u0435\u0439\u0441\u0431\u0443\u043a"},{code:"vk",tab_id:9,name:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"},{code:"sberbank",tab_id:10,name:"\u0421\u0430\u0439\u0442"},{code:"other",tab_id:11,name:"\u0414\u0440\u0443\u0433\u043e\u0439 (utm)"}],C=[{code:"",tab_id:1,name:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"},{code:"Main_Plus_InvestPFM",tab_id:2,name:"\u041f\u043b\u044e\u0441 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439"},{code:"Main_Plus_InvestBroker",tab_id:3,name:"\u041d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0431\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430"},{code:"Marketplace_All_InvestPFM",tab_id:4,name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"},{code:"GlobalSearch_InvestPFM",tab_id:5,name:"\u0423\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"},{code:"All_Assets_InvestPFM",tab_id:6,name:"\u0412\u0441\u0435\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"},{code:"Main_Plus_Pensions",tab_id:7,name:"\u0420\u0430\u0437\u0434\u0435\u043b \u041f\u0435\u043d\u0441\u0438\u0438"},{code:"Banner_Plus",tab_id:8,name:"\u0411\u0430\u043d\u043d\u0435\u0440 \u0432 \u043f\u0438\u043d\u0430\u0445"},{code:"Virtual_Assistant",tab_id:9,name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442"},{code:"Marketplace_Widget_InvestPFM",tab_id:10,name:"\u0418\u0437 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438"},{code:"BrokerAcc",tab_id:11,name:"\u0418\u0437 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0431\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442 \u043d\u0430 \u0432\u0438\u0442\u0440\u0438\u043d\u0435"},{code:"FinPlan",tab_id:12,name:"\u0418\u0437 \u0424\u0438\u043d\u041f\u043b\u0430\u043d\u0430"},{code:"Tips",tab_id:13,name:"\u0418\u0437 \u0431\u0430\u043d\u043d\u0435\u0440\u0430 \u0421\u043e\u0432\u0435\u0442\u0430"}],P=[{code:"",tab_id:14,name:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"},{code:"scaffold",tab_id:15,name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u0435 \u043c\u0435\u043d\u044e"},{code:"catalog",tab_id:16,name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"},{code:"smartsearch",tab_id:17,name:"\u0423\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"},{code:"investprofile",tab_id:18,name:"\u0418\u043d\u0432\u0435\u0441\u0442\u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{code:"pfmfinances",tab_id:19,name:"\u0412\u0441\u0435\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"}],E=[{id:"android_prom",tab_id:1,name:"Android \u041f\u0420\u041e\u041c",base:"android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/",appendCode:!0,ext:"mobile"},{id:"android_test",tab_id:2,name:"Android \u0422\u0415\u0421\u0422",base:"android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/",appendCode:!0,ext:"mobile"},{id:"ios",tab_id:3,name:"iOS",base:"sberbankonline://",appendCode:!0,ext:"mobile"},{id:"web",tab_id:4,name:"Web",base:"https://online.sberbank.ru/CSAFront/service.do",appendCode:!0,ext:"smart"}],F=[{id:"marketplace",tab_id:1,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",path:"pfm/marketplace"},{id:"pif",tab_id:2,name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u041f\u0418\u0424",path:"welfare/invest-pif/product"},{id:"trust",tab_id:3,name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0414\u0423",path:"investments/tm/product/card"}],A=[{id:"marketplace",tab_id:4,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",path:""}],I=[{code:"marketplace",name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",param:"marketPlaceId",options:[{code:"investmentsCatalog",tab_id:1,name:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0432\u0438\u0442\u0440\u0438\u043d\u0430 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"},{code:"PIFCatalog",tab_id:2,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u041f\u0418\u0424"},{code:"IIS_products",tab_id:3,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u0418\u0418\u0421 \u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c\u0438"},{code:"trustCatalog",tab_id:4,name:"\u0414\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"},{code:"investPlansAllMB",tab_id:5,name:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u043b\u0430\u043d\u044b"},{code:"forYouCatalog",tab_id:6,name:"\u041f\u043e \u0443\u0440\u043e\u0432\u043d\u044e \u0440\u0438\u0441\u043a\u0430"},{code:"maxProfitSelection",tab_id:7,name:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0434\u043e\u0445\u043e\u0434\u0430"},{code:"minAmountSelection",tab_id:8,name:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"},{code:"regularPayoutsSelection",tab_id:9,name:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b"},{code:"currencyInvestSelection",tab_id:10,name:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0432 \u0432\u0430\u043b\u044e\u0442\u043d\u044b\u0435 \u0430\u043a\u0442\u0438\u0432\u044b"}]},{code:"pif",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u041f\u0418\u0424",param:"productCode",options:[{code:"fund_equity_dn",tab_id:11,name:"\u0424\u043e\u043d\u0434 \u0430\u043a\u0446\u0438\u0439 \u0414\u043e\u0431\u0440\u044b\u043d\u044f \u041d\u0438\u043a\u0438\u0442\u0438\u0447"},{code:"fund_bond_im",tab_id:12,name:"\u0424\u043e\u043d\u0434 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0439 \u0418\u043b\u044c\u044f \u041c\u0443\u0440\u043e\u043c\u0435\u0446"},{code:"fund_balanced",tab_id:13,name:"\u0424\u043e\u043d\u0434 \u0421\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"},{code:"fund_prosp_bonds",tab_id:14,name:"\u0424\u043e\u043d\u0434 \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0439"},{code:"fund_eurobonds",tab_id:15,name:"\u0424\u043e\u043d\u0434 \u0415\u0432\u0440\u043e\u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"},{code:"fund_debt_market",tab_id:16,name:"\u0424\u043e\u043d\u0434 \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u043b\u0433\u043e\u0432\u043e\u0439 \u0440\u044b\u043d\u043e\u043a"},{code:"fund_money",tab_id:17,name:"\u0424\u043e\u043d\u0434 \u0414\u0435\u043d\u0435\u0436\u043d\u044b\u0439"}]},{code:"trust",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0414\u0423",param:"productCode",options:[{code:"trust_conservative",tab_id:18,name:'\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "\u041a\u043e\u043d\u0441\u0435\u0440\u0432\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"'},{code:"trust_careful",tab_id:19,name:'\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "\u041e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"'},{code:"trust_moderate",tab_id:20,name:'\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "\u0423\u043c\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"'},{code:"trust_modagressive",tab_id:21,name:'\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f "\u0423\u043c\u0435\u0440\u0435\u043d\u043d\u043e-\u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"'}]}],T=[{code:"marketplace",name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",param:"srvUrl",options:[{code:"investments",tab_id:22,name:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0432\u0438\u0442\u0440\u0438\u043d\u0430 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"}]}],D=function(){var e=Object(a.useState)(0),t=Object(g.a)(e,2),n=t[0],i=t[1],d=Object(s.b)(),r=function(e){var t;i(e.tab_id),d((t=e.base,{type:m,data:t})),"web"===e.id&&d({type:h,data:!0})};return Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("p",{className:"block-name",children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"}),Object(c.jsx)("div",{className:"block-wrapper",children:E.map((function(e){return Object(c.jsxs)("div",{className:"block-item",children:[Object(c.jsx)("input",{type:"radio",name:"platformNEW",id:"new".concat(e.id),value:e.id,onChange:function(){return r(e)},checked:e.tab_id===n}),Object(c.jsx)("label",{htmlFor:"new".concat(e.id),children:e.name})]},e.id)}))})]})},L=function(e){var t=e.isChange,n=Object(a.useState)(t),i=Object(g.a)(n,2),d=i[0],r=i[1],o=Object(s.c)((function(e){return e.Links.web})),b=Object(s.b)(),l=o?A:F,u=function(e){var t;r(e.id),b((t=e.path,{type:j,data:t})),b(function(e){return{type:f,data:e}}(e.id))};return Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("p",{className:"block-name",children:"\u041a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438"}),Object(c.jsx)("div",{className:"block-wrapper",children:l.map((function(e){return Object(c.jsxs)("div",{className:"block-item",children:[Object(c.jsx)("input",{type:"radio",name:"targetNEW",id:"new".concat(e.id),value:e.path,onChange:function(){return u(e)},checked:e.id===d}),Object(c.jsx)("label",{htmlFor:"new".concat(e.id),children:e.name})]},e.id)}))})]})},M=function(e){return{type:p,data:e}},W=function(){var e=Object(a.useState)(0),t=Object(g.a)(e,2),n=t[0],i=t[1],d=Object(s.c)((function(e){return e.Links.deeplinkType})),r=Object(s.b)(),o=Object(s.c)((function(e){return e.Links.web})),b=(o?T:I).find((function(e){return e.code===d}));return Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("p",{className:"block-name",children:"\u042d\u043a\u0440\u0430\u043d"}),Object(c.jsx)("div",{className:"block-wrapper",children:b.options.map((function(e){return Object(c.jsxs)("div",{className:"block-item",children:[Object(c.jsx)("input",{type:"radio",name:"screenNEW",id:"new".concat(e.code),value:e.code,onChange:function(){return function(e){i(e.code),r(M(o?"?".concat(b.param,"=%2F").concat(e.code):"?".concat(b.param,"=").concat(e.code)))}(e)},checked:e.code===n}),Object(c.jsx)("label",{htmlFor:"new".concat(e.code),children:e.name})]},e.code)}))})]})},B=function(e){return{type:_,data:e}},R=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],i=t[1],d=Object(s.b)(),r=Object(s.c)((function(e){return e.Links.web})),o=r?P:C;return Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("p",{className:"block-name",children:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"}),Object(c.jsx)("div",{className:"block-wrapper",children:o.map((function(e){return Object(c.jsxs)("div",{className:"block-item",children:[Object(c.jsx)("input",{type:"radio",name:"internalSourceNEW",id:"new".concat(e.code),value:e.code,onChange:function(){return function(e){i(e.code),""===e.code||r?d(B(r?"?from=".concat(e.code):"")):d(B("&internal_source=".concat(e.code)))}(e)},checked:e.code===n}),Object(c.jsx)("label",{htmlFor:"new".concat(e.code),children:e.name})]},e.code)}))})]})},K=function(e){return{type:O,data:e}},U=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],i=t[1],d=Object(a.useState)(""),r=Object(g.a)(d,2),o=r[0],b=r[1],l=Object(a.useState)(""),u=Object(g.a)(l,2),m=u[0],j=u[1],p=Object(a.useState)(""),_=Object(g.a)(p,2),O=_[0],h=_[1],f=Object(a.useState)(""),x=Object(g.a)(f,2),k=x[0],v=x[1],S=Object(a.useState)(""),N=Object(g.a)(S,2),C=N[0],P=N[1],E=Object(s.b)(),F=Object(s.c)((function(e){return e.Links.web})),A=F?y:w;Object(a.useEffect)((function(){"other"===n&&E(K("&utm_source=".concat(o,"&utm_medium=").concat(m,"&utm_compaign=").concat(O,"&utm_content=").concat(k,"&utm_term=").concat(C)))}),[E,n,o,m,O,k,C]);return Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("p",{className:"block-name",children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"}),Object(c.jsxs)("div",{className:"block-wrapper",children:[A.map((function(e){return Object(c.jsxs)("div",{className:"block-item",children:[Object(c.jsx)("input",{type:"radio",name:"externalSourceNEW",id:"new".concat(e.code),value:e.code,onChange:function(){return function(e){i(e.code),"empty"===e.code||"other"===e.code||F?"other"===e.code&&"empty"!==e.code?E(K("&utm_source=".concat(o,"&utm_medium=").concat(m,"&utm_compaign=").concat(O,"&utm_content=").concat(k,"&utm_term=").concat(C))):F&&"empty"!==e.code?E(K("?from=".concat(e.code))):E(K("")):E(K("&external_source=".concat(e.code)))}(e)},checked:e.code===n}),Object(c.jsx)("label",{htmlFor:"new".concat(e.code),children:e.name})]},e.code)})),Object(c.jsxs)("div",{className:"block-input",children:[Object(c.jsx)("label",{children:"utm_source"}),Object(c.jsx)("input",{type:"text",name:"utm_source",id:"newutem_source",value:o,onChange:function(e){return b(e.currentTarget.value)}})]}),Object(c.jsxs)("div",{className:"block-input",children:[Object(c.jsx)("label",{children:"utm_medium"}),Object(c.jsx)("input",{type:"text",name:"utm_medium",id:"newutm_medium",value:m,onChange:function(e){return j(e.currentTarget.value)}})]}),Object(c.jsxs)("div",{className:"block-input",children:[Object(c.jsx)("label",{children:"utm_compaign"}),Object(c.jsx)("input",{type:"text",name:"utm_compaign",id:"newutm_compaign",value:O,onChange:function(e){return h(e.currentTarget.value)}})]}),Object(c.jsxs)("div",{className:"block-input",children:[Object(c.jsx)("label",{children:"utm_content"}),Object(c.jsx)("input",{type:"text",name:"utm_content",id:"newutm_content",value:k,onChange:function(e){return v(e.currentTarget.value)}})]}),Object(c.jsxs)("div",{className:"block-input",children:[Object(c.jsx)("label",{children:"utm_term"}),Object(c.jsx)("input",{type:"text",name:"utm_term",id:"newutem_term",value:C,onChange:function(e){return P(e.currentTarget.value)}})]})]})]})},J=n(15),V=n.n(J),Y=function(){var e=Object(s.c)((function(e){return e.Links.link}));return Object(c.jsx)(V.a,{value:e})},q=function(){return Object(c.jsxs)("div",{className:"reload",children:[Object(c.jsx)("p",{children:'\u041f\u0435\u0440\u0435\u0434 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c "\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b", "\u041a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438" \u0438 "\u042d\u043a\u0440\u0430\u043d" \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443'}),Object(c.jsx)("button",{onClick:function(){return window.location.reload()},children:"\u041f\u0415\u0420\u0415\u0417\u0410\u0413\u0420\u0423\u0417\u0418\u0422\u042c"})]})},G=function(){var e=Object(s.c)((function(e){return e.Links}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["platform: ",e.platform]}),Object(c.jsxs)("p",{children:["deeplinkType: ",e.deeplinkType]}),Object(c.jsxs)("p",{children:["deeplink: ",e.deeplink]}),Object(c.jsxs)("p",{children:["screen: ",e.screen]}),Object(c.jsxs)("p",{children:["internalSource: ",e.internalSource]}),Object(c.jsxs)("p",{children:["externalSource: ",e.externalSource]})]})},X=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(N,{}),Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(D,{}),Object(c.jsx)(L,{}),Object(c.jsx)(W,{}),Object(c.jsx)(R,{}),Object(c.jsx)(U,{})]}),Object(c.jsx)(Y,{}),Object(c.jsx)(q,{}),Object(c.jsx)(G,{})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(s.a,{store:S,children:Object(c.jsx)(X,{})})}),document.getElementById("root")),o()}},[[33,1,2]]]);
//# sourceMappingURL=main.7be28d7c.chunk.js.map