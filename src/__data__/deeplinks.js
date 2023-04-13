import {APP, PRODUCT} from "../constants";


export const deeplinks = {
    [PRODUCT.INVESTMENTS_DASHBOARD]: {
        [APP.MOBILE]: [
            {
                name: "marketplace",
                id: 1,
                title: "Витрина",
                path: "pfm/marketplace",
            },
            {
                name: "dopmarketplace",
                id: 2,
                title: "Подвитрины",
                path: "pfm/marketplace",
            },
            {
                name: "services",
                id: 3,
                title: "Сервисы",
                path: "",
            },
            {
                name: "selection",
                id: 4,
                title: "Подборки",
                path: "pfm/marketplace",
            },
            {
                name: "categories",
                id: 5,
                title: "Категории",
                path: "pfm/marketplace",
            },
            {
                name: "pif",
                id: 6,
                title: "Продукты ПИФ",
                path: "welfare/invest-pif/product",
            },
            {
                name: "trust",
                id: 7,
                title: "Продукты ДУ",
                path: "investments/tm/product/card",
            },
            {
                name: "zpif",
                id: 8,
                title: "ЗПИФ",
                path: "pfm/marketplace",
            },
            {
                name: "pension",
                id: 9,
                title: "Пенсионные продукты",
                path: "",
            },
            {
                name: "iis",
                id: 10,
                title: "Продукты ИИС",
                path: "investments/tm/product/card",
            },
            {
                name: "nszh",
                id: 11,
                title: "НСЖ",
                path: "pfm/marketplace",
            },
            {
                name: "invesmentsloss",
                id: 12,
                title: "Инвестиции без потерь",
                path: "pfm/marketplace",
            },
            {
                name: "otherProducts",
                id: 13,
                title: "Другие продукты",
                path: "pfm/marketplace",
            },
        ],
        [APP.WEB]: [
            {
                name: "webmarketplace",
                id: 14,
                title: "Витрина",
                path: "",
            }
        ]
    },
    // TODO: fill portfolio analytics deeplinks data
    [PRODUCT.PORTFOLIO_ANALYTICS]: {
        [APP.MOBILE]: [
            {
                name: "skor",
                id: 15,
                title: "Скор",
                path: "skor",
            },
        ],
        [APP.WEB]: [
            {
                name: "",
                id: 16,
                title: "Скор",
                path: "skor",
            },
        ]
    }
}