(this.webpackJsonpmplace_deeplink=this.webpackJsonpmplace_deeplink||[]).push([[0],{86:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),r=a(24),d=a.n(r),o=(a(86),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))}),s=a(14),m=a(44),p=a(16),l={platform:"",deeplink:"",screen:"",internalSource:"",externalSource:"",web:!1,deeplinkType:"marketplace",link:"",reset:!1},u="ADD_PLATFORM",b="ADD_DEEPLINK",j="ADD_SCREEN",h="ADD_INTERNAL_SOURCE",f="ADD_EXTERNAL_SOURCE",O="WEB_ACTIVE",v="ADD_DEEPLINK_TYPE",k="ADD_LINK",_="RESET_DATA",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(p.a)(Object(p.a)({},e),{},{platform:t.data});case b:return Object(p.a)(Object(p.a)({},e),{},{deeplink:t.data,screen:""});case j:return Object(p.a)(Object(p.a)({},e),{},{screen:t.data});case h:return Object(p.a)(Object(p.a)({},e),{},{internalSource:t.data,externalSource:""});case f:return Object(p.a)(Object(p.a)({},e),{},{externalSource:t.data,internalSource:""});case O:return Object(p.a)(Object(p.a)({},e),{},{web:t.data});case v:return Object(p.a)(Object(p.a)({},e),{},{deeplinkType:t.data});case k:return Object(p.a)(Object(p.a)({},e),{},{link:t.data});case _:return Object(p.a)(Object(p.a)({},l),{},{reset:t.data});default:return e}},C=Object(m.a)({Links:x}),S=Object(m.b)(C),P=a(8),g=(a(92),a(140)),I=function(){var e=Object(s.c)((function(e){return e.Links})),t="".concat(e.platform).concat(e.screen).concat(e.internalSource).concat(e.externalSource),a=Object(s.b)();return Object(c.useEffect)((function(){a({type:k,data:t})}),[a,t]),Object(n.jsx)("div",{className:"link-wrap",children:Object(n.jsx)(g.a,{href:t,underline:"hover",variant:"h5",children:t})})},w=[{code:"empty",id:1,name:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439"},{code:"push_InvestPFM",id:2,name:"Push"},{code:"email_InvestPFM",id:3,name:"E-mail"},{code:"sms_InvestPFM",id:4,name:"SMS"},{code:"diff",id:5,name:"\u0414\u0440\u0443\u0433\u043e\u0435"},{code:"utm",id:6,name:"UTM"}],N=[{code:"empty",id:6,name:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439"},{code:"email",id:7,name:"\u041f\u043e\u0447\u0442\u043e\u0432\u0430\u044f \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0430"},{code:"facebook",id:8,name:"\u0424\u0435\u0439\u0441\u0431\u0443\u043a"},{code:"vk",id:9,name:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"},{code:"sberbank",id:10,name:"\u0421\u0430\u0439\u0442"},{code:"utm",id:11,name:"UTM"}],E=[{code:"",id:1,name:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"},{code:"Main_Plus_InvestPFM",id:2,name:"\u041f\u043b\u044e\u0441 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439"},{code:"Main_Plus_InvestBroker",id:3,name:"\u041d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0431\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430"},{code:"Marketplace_All_InvestPFM",id:4,name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"},{code:"GlobalSearch_InvestPFM",id:5,name:"\u0423\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"},{code:"All_Assets_InvestPFM",id:6,name:"\u0412\u0441\u0435\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"},{code:"Main_Plus_Pensions",id:7,name:"\u0420\u0430\u0437\u0434\u0435\u043b \u041f\u0435\u043d\u0441\u0438\u0438"},{code:"Banner_Plus",id:8,name:"\u0411\u0430\u043d\u043d\u0435\u0440 \u0432 \u043f\u0438\u043d\u0430\u0445"},{code:"Virtual_Assistant",id:9,name:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442"},{code:"Marketplace_Widget_InvestPFM",id:10,name:"\u0418\u0437 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438"},{code:"BrokerAcc",id:11,name:"\u0418\u0437 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0431\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442 \u043d\u0430 \u0432\u0438\u0442\u0440\u0438\u043d\u0435"},{code:"FinPlan",id:12,name:"\u0418\u0437 \u0424\u0438\u043d\u041f\u043b\u0430\u043d\u0430"},{code:"Tips",id:13,name:"\u0418\u0437 \u0431\u0430\u043d\u043d\u0435\u0440\u0430 \u0421\u043e\u0432\u0435\u0442\u0430"}],W=[{code:"",id:14,name:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"},{code:"scaffold",id:15,name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u0435 \u043c\u0435\u043d\u044e"},{code:"catalog",id:16,name:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"},{code:"smartsearch",id:17,name:"\u0423\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"},{code:"investprofile",id:18,name:"\u0418\u043d\u0432\u0435\u0441\u0442\u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},{code:"pfmfinances",id:19,name:"\u0412\u0441\u0435\u0433\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"}],A=[{name:"android_prom",id:1,title:"Android \u041f\u0420\u041e\u041c",base:"android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/",appendCode:!0,ext:"mobile"},{name:"android_test",id:2,title:"Android \u0422\u0415\u0421\u0422",base:"android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/",appendCode:!0,ext:"mobile"},{name:"ios",id:3,title:"iOS",base:"sberbankonline://",appendCode:!0,ext:"mobile"}],y=[{name:"web",id:4,title:"Web",base:"https://online.sberbank.ru/CSAFront/service.do",appendCode:!0,ext:"smart"}],T=[{name:"marketplace",id:1,title:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",path:"pfm/marketplace"},{name:"dopmarketplace",id:2,title:"\u041f\u043e\u0434\u0432\u0438\u0442\u0440\u0438\u043d\u044b",path:"pfm/marketplace"},{name:"services",id:3,title:"\u0421\u0435\u0440\u0432\u0438\u0441\u044b",path:""},{name:"selection",id:4,title:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",path:"pfm/marketplace"},{name:"categories",id:5,title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",path:"pfm/marketplace"},{name:"pif",id:6,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u041f\u0418\u0424",path:"welfare/invest-pif/product"},{name:"trust",id:7,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0414\u0423",path:"investments/tm/product/card"},{name:"zpif",id:8,title:"\u0417\u041f\u0418\u0424",path:"pfm/marketplace"},{name:"pension",id:9,title:"\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",path:""},{name:"iis",id:10,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0418\u0418\u0421",path:"investments/tm/product/card"},{name:"nszh",id:11,title:"\u041d\u0421\u0416",path:"pfm/marketplace"},{name:"invesmentsloss",id:12,title:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u044c",path:"pfm/marketplace"},{name:"otherProducts",id:13,title:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",path:"pfm/marketplace"}],M=[{name:"webmarketplace",id:4,title:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",path:""}],D=[{code:"marketplace",name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",param:"marketPlaceId",options:[{path:"pfm/marketplace?marketPlaceId=investmentsCatalog",id:1,name:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0432\u0438\u0442\u0440\u0438\u043d\u0430 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"},{path:"pfm/marketplace?marketPlaceId=forYouCatalog",id:2,name:"\u041f\u043e \u0443\u0440\u043e\u0432\u043d\u044e \u0440\u0438\u0441\u043a\u0430"}]},{code:"dopmarketplace",name:"\u041f\u043e\u0434\u0432\u0438\u0442\u0440\u0438\u043d\u044b",param:"marketPlaceId",options:[{path:"pfm/marketplace?marketPlaceId=PIFCatalog",id:1,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u041f\u0418\u0424"},{path:"pfm/marketplace?marketPlaceId=bonds",id:2,name:"\u041e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"},{path:"pfm/marketplace?marketPlaceId=trustCatalog",id:3,name:"\u0414\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"},{path:"pfm/marketplace?marketPlaceId=IIS_products",id:4,name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u0418\u0418\u0421 \u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u043c\u0438"}]},{code:"services",name:"\u0421\u0435\u0440\u0432\u0438\u0441\u044b",param:"",options:[{path:"investments/investment-advice",id:1,name:"\u041f\u043e\u0434\u0431\u043e\u0440 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f"},{path:"pfm/marketplace?marketPlaceId=investments_Tutorial",id:2,name:"\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},{path:"investments/investprofile",id:3,name:"\u0418\u043d\u0432\u0435\u0441\u0442-\u043f\u0440\u043e\u0444\u0438\u043b\u044c"},{path:"brokerage/agreement/short?action=create&from=marketplace_invest",id:4,name:"\u0411\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442"}]},{code:"selection",name:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",param:"marketPlaceId",options:[{path:"pfm/marketplace?marketPlaceId=topSolutionsSelection",id:1,name:"\u0422\u043e\u043f \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439"},{path:"pfm/marketplace?marketPlaceId=minAmountSelection",id:2,name:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"},{path:"pfm/marketplace?marketPlaceId=maxProfitSelection",id:3,name:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0434\u043e\u0445\u043e\u0434\u0430"},{path:"pfm/marketplace?marketPlaceId=regularPayoutsSelection",id:4,name:"\u0421 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0432\u044b\u0447\u0435\u0442\u043e\u043c"}]},{code:"categories",name:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",param:"marketPlaceId",options:[{path:"pfm/marketplace?marketPlaceId=naviInvestSolCatalog",id:1,name:"\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f"},{path:"pfm/marketplace?marketPlaceId=naviBrokerageCatalog",id:2,name:"\u0411\u0440\u043e\u043a\u0435\u0440\u0441\u043a\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"},{path:"pfm/marketplace?marketPlaceId=naviSAndPCatalog",id:3,name:"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0435\u043d\u0441\u0438\u0438"},{path:"pfm/marketplace?marketPlaceId=allProductsListCatalog",id:4,name:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u043c"}]},{code:"pif",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u041f\u0418\u0424",param:"productCode",options:[{path:"welfare/invest-pif/product?productCode=fund_equity_dn",id:1,name:"\u0424\u043e\u043d\u0434 \u0430\u043a\u0446\u0438\u0439 \u0414\u043e\u0431\u0440\u044b\u043d\u044f \u041d\u0438\u043a\u0438\u0442\u0438\u0447"},{path:"welfare/invest-pif/product?productCode=fund_bond_im",id:2,name:"\u0424\u043e\u043d\u0434 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0439 \u0418\u043b\u044c\u044f \u041c\u0443\u0440\u043e\u043c\u0435\u0446"},{path:"welfare/invest-pif/product?productCode=fund_balanced",id:3,name:"\u0424\u043e\u043d\u0434 \u0421\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"},{path:"welfare/invest-pif/product?productCode=fund_prosp_bonds",id:4,name:"\u0424\u043e\u043d\u0434 \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0439"},{path:"welfare/invest-pif/product?productCode=fund_eurobonds",id:5,name:"\u0424\u043e\u043d\u0434 \u0415\u0432\u0440\u043e\u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"},{path:"welfare/invest-pif/product?productCode=fund_money",id:6,name:"\u0424\u043e\u043d\u0434 \u0414\u0435\u043d\u0435\u0436\u043d\u044b\u0439"},{path:"welfare/invest-pif/product?productCode=fund_utilities",id:7,name:"\u0424\u043e\u043d\u0434 \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430"},{path:"welfare/invest-pif/product?productCode=fund_natural_res",id:8,name:"\u0424\u043e\u043d\u0434 \u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"},{path:"welfare/invest-pif/product?productCode=fund_global_internet",id:9,name:"\u0424\u043e\u043d\u0434 \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442"},{path:"welfare/invest-pif/product?productCode=fund_consumer_sector",id:10,name:"\u0424\u043e\u043d\u0434 \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0441\u0435\u043a\u0442\u043e\u0440"},{path:"welfare/invest-pif/product?productCode=fund_financial_sector",id:11,name:"\u0424\u043e\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0439 \u0441\u0435\u043a\u0442\u043e\u0440"},{path:"welfare/invest-pif/product?productCode=fund_america",id:12,name:"\u0424\u043e\u043d\u0434 \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0430\u043a\u0446\u0438\u0438"},{path:"welfare/invest-pif/product?productCode=fund_biotech",id:13,name:"\u0424\u043e\u043d\u0434 \u0411\u0438\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"},{path:"welfare/invest-pif/product?productCode=fund_gold",id:14,name:"\u0424\u043e\u043d\u0434 \u0417\u043e\u043b\u043e\u0442\u043e"}]},{code:"trust",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0414\u0423",param:"productCode",options:[{path:"investments/tm/product/card?productCode=trust_respons_investment",id:1,name:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"},{path:"investments/tm/product/card?productCode=trust_conservative",id:2,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041a\u043e\u043d\u0441\u0435\u0440\u0432\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"},{path:"investments/tm/product/card?productCode=trust_careful",id:3,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"},{path:"investments/tm/product/card?productCode=trust_moderate",id:4,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0423\u043c\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"},{path:"investments/tm/product/card?productCode=trust_agressive",id:5,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c"},{path:"investments/tm/product/card?productCode=trust_capital2025",id:6,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041c\u043e\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b 2025"},{path:"investments/tm/product/card?productCode=trust_capital2030",id:7,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041c\u043e\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b 2030"},{path:"investments/tm/product/card?productCode=trust_capital2035",id:8,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041c\u043e\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b 2035"},{path:"investments/tm/product/card?productCode=trust_capital2040",id:9,name:"investments/tm/product/card?productCode=\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u041c\u043e\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b 2040"},{path:"investments/tm/product/card?productCode=trust_russianbondsfund_rur",id:10,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0414\u043e\u043b\u043b\u0430\u0440\u043e\u0432\u044b\u0435 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"}]},{code:"zpif",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0417\u041f\u0418\u0424",param:"productCode",options:[{path:"",id:1,name:"\u0424\u043e\u043d\u0434 \u0410\u0440\u0435\u043d\u0434\u043d\u044b\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 7"}]},{code:"pension",name:"\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",param:"",options:[{path:"investments/personalpensionplanrest",id:1,name:"\u041f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u043b\u0430\u043d"}]},{code:"iis",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0418\u0418\u0421",param:"productCode",options:[{path:"",id:1,name:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0418\u0418\u0421"},{path:"investments/tm/product/card?productCode=iia_saving",id:2,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0418\u0418\u0421 \u041d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f"},{path:"investments/tm/product/card?productCode=iia_roubleshares",id:3,name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0418\u0418\u0421 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0435 \u043e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"},{path:"brokerage/agreement/short?action=create&from=marketplace_invest&IIA=1",id:4,name:"\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"}]},{code:"nszh",name:"\u041d\u0421\u0416",param:"",options:[{path:"investments/nszh/product/card?productCode=NSZH_TICKETTOFUTURE",id:1,name:"\u0411\u0438\u043b\u0435\u0442 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435"},{path:"",id:2,name:"\u0414\u0443\u043c\u0430\u044e \u043e \u0431\u0443\u0434\u0443\u0449\u0435\u043c"}]},{code:"invesmentsloss",name:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u044c",param:"",options:[{path:"investments/iliview/product/product?source=Showcase",id:1,name:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u0438\u043d\u0432\u0435\u0441\u0442\u0434\u043e\u0445\u043e\u0434\u043e\u043c"}]},{code:"otherProducts",name:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",param:"",options:[{path:"payments/open-goal",id:1,name:"\u041d\u043e\u0432\u0430\u044f \u0446\u0435\u043b\u044c"},{path:"payments/open-ima-list",id:2,name:"\u041c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442"}]}],F=[{code:"webmarketplace",name:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430",param:"srvUrl",options:[{path:"?srvUrl=%2Finvestments",id:22,name:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0432\u0438\u0442\u0440\u0438\u043d\u0430 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"}]}],L=a(138),R=a(135),U=a(136),B=a(141),z=a(134),K=function(e){var t=e.isWeb,a=Object(c.useState)(0),i=Object(P.a)(a,2),r=i[0],d=i[1],o=Object(s.b)(),m=t?y:A,p=function(e){var t;d(e.id),o((t=e.base,{type:u,data:t})),"web"===e.id&&o({type:O,data:!0})};return Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)(L.a,{variant:"h6",component:"h2",children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"}),Object(n.jsx)("div",{className:"block-wrapper",children:Object(n.jsx)(R.a,{component:"fieldset",children:Object(n.jsx)(U.a,{name:t?"platformWeb":"platformNEW",children:m.map((function(e){return Object(n.jsx)("div",{className:"block-item",children:Object(n.jsx)(B.a,{value:e.id,control:Object(n.jsx)(z.a,{}),label:e.title,id:"new".concat(e.id),onChange:function(){return p(e)},checked:e.id===r})},e.id)}))})})})]})},J=function(e){var t=e.isWeb,a=Object(s.c)((function(e){return e.Links.reset})),i=Object(c.useState)(a?0:null),r=Object(P.a)(i,2),d=r[0],o=r[1],m=Object(s.b)(),p=t?M:T,l=function(e){var t;o(e.id),m((t=e.title,{type:b,data:t})),m(function(e){return{type:v,data:e}}(e.name))};return Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)(L.a,{variant:"h6",component:"h2",children:"\u041a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438"}),Object(n.jsx)("div",{className:"block-wrapper",children:Object(n.jsx)(R.a,{component:"fieldset",children:Object(n.jsx)(U.a,{name:t?"targetWeb":"targetNEW",children:p.map((function(e){return Object(n.jsx)("div",{className:"block-item",children:Object(n.jsx)(B.a,{value:e.path,control:Object(n.jsx)(z.a,{}),label:e.title,id:e.id,onChange:function(){return l(e)},checked:e.id===d})},e.id)}))})})})]})},V=function(e){return{type:j,data:e}},Y=function(e){var t=e.isWeb,a=Object(s.c)((function(e){return e.Links.reset})),i=Object(c.useState)(a?0:null),r=Object(P.a)(i,2),d=r[0],o=r[1],m=Object(s.c)((function(e){return e.Links.deeplinkType})),p=Object(s.b)(),l=t?F:D,u=t?l.find((function(e){return"webmarketplace"===e.code})):l.find((function(e){return e.code===m}));return Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)(L.a,{variant:"h6",component:"h2",children:"\u042d\u043a\u0440\u0430\u043d"}),Object(n.jsx)("div",{className:"block-wrapper",children:Object(n.jsx)(R.a,{component:"fieldset",children:Object(n.jsx)(U.a,{name:t?"screenWeb":"screenNEW",children:u.options.map((function(e){return Object(n.jsx)("div",{className:"block-item",children:Object(n.jsx)(B.a,{value:e.path,control:Object(n.jsx)(z.a,{}),label:e.name,id:e.id,onChange:function(){return function(e){o(e.path),p(V(e.path))}(e)},checked:e.path===d})},e.id)}))})})})]})},q=function(e){return{type:h,data:e}},G=function(e){var t=e.isWeb,a=Object(s.c)((function(e){return e.Links.reset})),i=Object(c.useState)(a?0:null),r=Object(P.a)(i,2),d=r[0],o=r[1],m=Object(s.b)(),p=t?W:E;return Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)(L.a,{variant:"h6",component:"h2",children:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"}),Object(n.jsx)("div",{className:"block-wrapper",children:Object(n.jsx)(R.a,{component:"fieldset",children:Object(n.jsx)(U.a,{name:t?"internalSourceWeb":"internalSourceNEW",children:p.map((function(e){return Object(n.jsx)("div",{className:"block-item",children:Object(n.jsx)(B.a,{value:e.code,control:Object(n.jsx)(z.a,{}),label:e.name,id:"new".concat(e.code),onChange:function(){return function(e){o(e.code),""===e.code||t?m(q(t?"?from=".concat(e.code):"")):m(q("&internal_source=".concat(e.code)))}(e)},checked:e.code===d})},e.code)}))})})})]})},H=function(e){return{type:f,data:e}},X=a(132),Z=function(e){var t=e.isWeb,a=Object(s.c)((function(e){return e.Links.reset})),i=Object(c.useState)(a?0:null),r=Object(P.a)(i,2),d=r[0],o=r[1],m=Object(c.useState)(""),p=Object(P.a)(m,2),l=p[0],u=p[1],b=Object(c.useState)(""),j=Object(P.a)(b,2),h=j[0],f=j[1],O=Object(c.useState)(""),v=Object(P.a)(O,2),k=v[0],_=v[1],x=Object(c.useState)(""),C=Object(P.a)(x,2),S=C[0],g=C[1],I=Object(c.useState)(""),E=Object(P.a)(I,2),W=E[0],A=E[1],y=Object(c.useState)(""),T=Object(P.a)(y,2),M=T[0],D=T[1],F=Object(c.useState)(""),K=Object(P.a)(F,2),J=K[0],V=K[1],Y=Object(s.b)(),q=t?N:w,G=function(){var e=""===l?"":"&utm_source=".concat(l),t=""===h?"":"&utm_medium=".concat(h),a=""===k?"":"&utm_compaign=".concat(k),n=""===S?"":"&utm_content=".concat(S),c=""===W?"":"&utm_term=".concat(W);D("".concat(e).concat(t).concat(a).concat(n).concat(c))};Object(c.useEffect)((function(){"utm"===d?(Y(H(M)),G()):"diff"===d&&Y(H("&external_source=".concat(J)))}),[Y,M,d,J,G]);var Z=function(e){o(e.code),"empty"===e.code||"utm"===e.code||"diff"===e.code||t?"utm"===e.code?Y(H(M)):"diff"===e.code?Y(H("&external_source=".concat(J))):t&&"empty"!==e.code?Y(H("?from=".concat(e.code))):Y(H("")):Y(H("&external_source=".concat(e.code)))};return Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)(L.a,{variant:"h6",component:"h2",children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434"}),Object(n.jsxs)("div",{className:"block-wrapper",children:[Object(n.jsx)(R.a,{component:"fieldset",children:Object(n.jsx)(U.a,{name:t?"externalSourceWeb":"externalSourceNEW",children:q.map((function(e){return"diff"!==e.code?Object(n.jsx)("div",{className:"block-item",children:Object(n.jsx)(B.a,{value:e.code,control:Object(n.jsx)(z.a,{}),label:e.name,id:"new".concat(e.code),onChange:function(){return Z(e)},checked:e.code===d})},e.code):Object(n.jsxs)("div",{className:"block-item",children:[Object(n.jsx)(B.a,{value:e.code,control:Object(n.jsx)(z.a,{}),label:e.name,id:"new".concat(e.code),onChange:function(){return Z(e)},checked:e.code===d}),Object(n.jsx)("div",{className:"block-input",children:Object(n.jsx)(X.a,{name:"diff",id:"diff",label:"\u0414\u0440\u0443\u0433\u043e\u0435",variant:"outlined",value:J,onChange:function(e){V(e.target.value)}})})]},e.code)}))})}),["utm_source","utm_medium","utm_compaign","utm_content","utm_term"].map((function(e){return Object(n.jsx)("div",{className:"block-input",children:Object(n.jsx)(X.a,{name:e,id:e,label:e,variant:"outlined",onChange:function(t){!function(e,t){switch(e){case"utm_source":u(t);break;case"utm_medium":f(t);break;case"utm_compaign":_(t);break;case"utm_content":g(t);break;case"utm_term":A(t)}}(e,t.target.value)}})},e)}))]})]})},Q=a(67),$=a.n(Q),ee=function(){var e=Object(s.c)((function(e){return e.Links.link}));return Object(n.jsx)($.a,{value:e})},te=function(){var e=Object(s.c)((function(e){return e.Links}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)(L.a,{variant:"h6",component:"h2",children:["\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430: ",e.platform]}),Object(n.jsxs)(L.a,{variant:"h6",component:"h2",children:["\u041a\u0443\u0434\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438: ",e.deeplink]}),Object(n.jsxs)(L.a,{variant:"h6",component:"h2",children:["\u042d\u043a\u0440\u0430\u043d: ",e.screen]}),Object(n.jsxs)(L.a,{variant:"h6",component:"h2",children:["\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434: ",e.internalSource]}),Object(n.jsxs)(L.a,{variant:"h6",component:"h2",children:["\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434: ",e.externalSource]})]})},ae=function(e){var t=e.isWeb;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(I,{}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(K,{isWeb:t}),Object(n.jsx)(J,{isWeb:t}),Object(n.jsx)(Y,{isWeb:t}),Object(n.jsx)(G,{isWeb:t}),Object(n.jsx)(Z,{isWeb:t})]}),Object(n.jsx)(ee,{}),Object(n.jsx)(te,{})]})},ne=a(139),ce=function(){var e=Object(c.useState)(!1),t=Object(P.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(!0),d=Object(P.a)(r,2),o=d[0],m=d[1],p=Object(s.b)(),l=function(e){i(e),p({type:_,data:o}),m(!o)};return Object(n.jsxs)("div",{className:"window",children:[Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)(ne.a,{variant:"contained",onClick:function(){return l(!1)},children:"Mobile"}),Object(n.jsx)(ne.a,{variant:"contained",onClick:function(){return l(!0)},children:"Web"})]}),a?Object(n.jsx)(ae,{isWeb:!0}):Object(n.jsx)(ae,{isWeb:!1})]})};d.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(s.a,{store:S,children:Object(n.jsx)(ce,{})})}),document.getElementById("root")),o()}},[[99,1,2]]]);
//# sourceMappingURL=main.acf34a6a.chunk.js.map