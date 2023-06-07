import {APP, PRODUCT} from '../../../constants';

export const platform = {
    [PRODUCT.PORTFOLIO_ANALYTICS] : {
        [APP.MOBILE]: [
            {
                name: "android_prom",
                id: 1,
                title: "Android ПРОМ",
                base: "android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/",
                appendCode: true,
                ext: "mobile"
            },
            {
                name: "android_test",
                id: 2,
                title: "Android ТЕСТ",
                base: "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/investments/portfolioAnalysis/",
                appendCode: true,
                ext: "mobile"
            },
            {
                name: "ios",
                id: 3,
                title: "iOS",
                base: "sberbankonline://",
                appendCode: true,
                ext: "mobile"
            },
        ],
        [APP.WEB]: [
            {
                name: "web",
                id: 4,
                title: "Web",
                base: "https://online.sberbank.ru/",
                appendCode: true,
                ext: "smart"
            }
        ]
    }
}
