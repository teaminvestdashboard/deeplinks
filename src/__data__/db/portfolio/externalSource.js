import {APP, PRODUCT} from '../../../constants'

export const externalSources = {
    // TODO: fill portfolio analytics external sources data
    [PRODUCT.PORTFOLIO_ANALYTICS]: {
        [APP.MOBILE]: [
            {
                code: "Push",
                id: 14,
                name: "Push",
            },
            {
                code: "Email",
                id: 15,
                name: "E-mail",
            },
            {
                code: "SMS",
                id: 16,
                name: "SMS",
            },
            {
                code: "external-diff",
                id: 17,
                name: "Другое"
            },
            {
                code: "utm",
                id: 18,
                name: "UTM"
            },
        ],
        [APP.WEB]: [
            {
                code: "mail",
                id: 20,
                name: "Почтовая рассылка",
            },
            {
                code: "fb",
                id: 21,
                name: "Фейсбук",
            },
            {
                code: "vk",
                id: 22,
                name: "Вконтакте",
            },
            {
                code: "site",
                id: 23,
                name: "Сайт",
            },
            {
                code: "external-diff",
                id: 24,
                name: "Другое"
            },
            {
                code: "utm",
                id: 25,
                name: "UTM"
            },
        ],
    }
}
