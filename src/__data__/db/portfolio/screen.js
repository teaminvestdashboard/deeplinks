import {APP, PRODUCT} from '../../../constants'

export const screen = {
    [PRODUCT.PORTFOLIO_ANALYTICS]: {
        [APP.MOBILE]: [
            {
                code: "skor",
                name: "Скор",
                param: "",
                options: [
                    {
                        path: "historyTab/",
                        id: 23,
                        name: "История",
                    },
                    {
                        path: "accountsTab/",
                        id: 24,
                        name: "Счета",
                    },
                ]
            },
        ],
        [APP.WEB]: [
            {
                code: "skor",
                name: "Скор",
                param: "",
                options: [
                    {
                        path: "historyTab/",
                        id: 25,
                        name: "История",
                    },
                    {
                        path: "accountsTab/",
                        id: 26,
                        name: "Счета",
                    },
                ]
            },
        ]
    }
}
