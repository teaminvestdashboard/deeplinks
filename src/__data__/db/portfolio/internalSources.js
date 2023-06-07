import {APP, PRODUCT} from "../../../constants";


export const internalSources = {
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
