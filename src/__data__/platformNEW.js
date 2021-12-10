export const platformNEW = [
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
        base: "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/",
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
    // smart: {
    //   title: "Смартлинк общий",
    //   base: "https://sberbank.ru/sms/",
    //   appendCode: false,
    //   ext: "smart"
    // },
    // {
    //     name: "smart_sms",
    //     title: "Смартлинк для SMS",
    //     base: "https://sberbank.ru/sms/",
    //     appendCode: false,
    //     ext: "no"
    // },
    // {
    //     name: "web",
    //     id: 4,
    //     title: "Web",
    //     base: "https://online.sberbank.ru/CSAFront/service.do",
    //     appendCode: true,
    //     ext: "smart"
    // }
];

export const platformWeb = [
    {
        name: "web",
        id: 4,
        title: "Web",
        base: "https://online.sberbank.ru/CSAFront/service.do",
        appendCode: true,
        ext: "smart"
    }
]
