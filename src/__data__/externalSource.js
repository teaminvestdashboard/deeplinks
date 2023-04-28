import {APP, PRODUCT} from '../constants'

export const externalSources = {
    [PRODUCT.INVESTMENTS_DASHBOARD] : {
        [APP.MOBILE]: [
            {
                code: "empty",
                id: 1,
                name: "Внутренний"
            },
            {
                code: "push_InvestPFM",
                id: 2,
                name: "Push",
            },
            {
                code: "email_InvestPFM",
                id: 3,
                name: "E-mail",
            },
            {
                code: "sms_InvestPFM",
                id: 4,
                name: "SMS",
            },
            // {
            //     code: "screensaver",
            //     name: "Screensaver",
            // },
            // {
            //     code: "zen",
            //     name: "Яндекс.Дзен",
            // },
            // {
            //     code: "fb",
            //     name: "Facebook",
            // },
            // {
            //     code: "vc",
            //     name: "Вконтакте",
            // },
            // {
            //     code: "twitter",
            //     name: "Twitter",
            // },
            // {
            //     code: "inst",
            //     name: "Instagram",
            // },
            // {
            //     code: "sberbank",
            //     name: "Сайт Сбер Банка",
            // },
            // {
            //     code: "qr_vsp",
            //     name: "QR-код в ВСП",
            // },
            {
                code: "diff",
                id: 5,
                name: "Другое"
            },
            {
                code: "utm",
                id: 6,
                name: "UTM"
            },
        ],
        [APP.WEB]: [
            {
                code: "empty",
                id: 7,
                name: "Внутренний"
            },
            {
                code: "email",
                id: 8,
                name: "Почтовая рассылка",
            },
            {
                code: "facebook",
                id: 9,
                name: "Фейсбук",
            },
            {
                code: "vk",
                id: 10,
                name: "Вконтакте",
            },
            {
                code: "sberbank",
                id: 11,
                name: "Сайт",
            },
            {
                code: "utm",
                id: 12,
                name: "UTM"
            },
        ],
    },
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
