import {APP, PRODUCT} from "../../../constants";


export const internalSources = {
    [PRODUCT.INVESTMENTS_DASHBOARD] : {
        [APP.MOBILE]: [
            {
                code: "",
                id: 1,
                name: "Внешний переход"
            },
            {
                code: "Main_Plus_InvestPFM",
                id: 2,
                name: "Плюс на главной"
            },
            {
                code: "Main_Plus_InvestBroker",
                id: 3,
                name: "На сценарий открытия брокерского счета"
            },
            {
                code: "Marketplace_All_InvestPFM",
                id: 4,
                name: "Каталог продуктов"
            },
            {
                code: "GlobalSearch_InvestPFM",
                id: 5,
                name: "Умный поиск"
            },
            {
                code: "All_Assets_InvestPFM",
                id: 6,
                name: "Всего средств"
            },
            {
                code: "Main_Plus_Pensions",
                id: 7,
                name: "Раздел Пенсии"
            },
            {
                code: "Banner_Plus",
                id: 8,
                name: "Баннер в пинах"
            },
            {
                code: "Virtual_Assistant",
                id: 9,
                name: "Виртуальный ассистент"
            },
            {
                code: "Marketplace_Widget_InvestPFM",
                id: 10,
                name: "Из карусели"
            },
            {
                code: "BrokerAcc",
                id: 11,
                name: "Из процесса открытия брокерского счет на витрине"
            },
            {
                code: "FinPlan",
                id: 12,
                name: "Из ФинПлана"
            },
            {
                code: "Tips",
                id: 13,
                name: "Из баннера Совета"
            },
        ],
        [APP.WEB]: [
            {
                code: "wrwe",
                id: 14,
                name: "Внешний переход"
            },
            {
                code: "scaffold",
                id: 15,
                name: "Продуктовое меню"
            },
            {
                code: "catalog",
                id: 16,
                name: "Каталог"
            },
            {
                code: "smartsearch",
                id: 17,
                name: "Умный поиск"
            },
            {
                code: "investprofile",
                id: 18,
                name: "Инвестпрофилирование"
            },
            {
                code: "pfmfinances",
                id: 19,
                name: "Всего средств"
            },
        ],
    },
    [PRODUCT.PORTFOLIO_ANALYTICS]: {
        [APP.MOBILE]: [
            {
                code: "widget",
                id: 20,
                name: "Виджет на экране накопления"
            },
            {
                code: "smart_search",
                id: 21,
                name: "Строка поиска"
            },
            {
                code: "virtual",
                id: 22,
                name: "Виртуальный ассистент"
            },
            {
                code: "total",
                id: 23,
                name: "Сервисы"
            },
            {
                code: "internal_diff",
                id: 24,
                name: "Другое"
            },


        ],
        [APP.WEB]: [
            {
                code: "widget",
                id: 25,
                name: "Виджет на экране накопления"
            },
            {
                code: "smart_search",
                id: 26,
                name: "Строка поиска"
            },
            {
                code: "virtual",
                id: 27,
                name: "Виртуальный ассистент"
            },
            {
                code: "internal_diff",
                id: 28,
                name: "Другое"
            },
        ],
    }
}
