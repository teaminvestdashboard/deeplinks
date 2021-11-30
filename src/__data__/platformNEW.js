export const platformNEW = [
    {
        id: "android_prom",
        name: "Android ПРОМ",
        base: "android-app://ru.sberbankmobile/android-app/ru.sberbankmobile/",
        appendCode: true,
        ext: "mobile"
    },
    {
        id: "android_test",
        name: "Android ТЕСТ",
        base: "android-app://ru.sberbankmobile_alpha/android-app/ru.sberbankmobile_alpha/",
        appendCode: true,
        ext: "mobile"
    },
    {
        id: "ios",
        name: "iOS",
        base: "sberbankonline://",
        appendCode: true,
        ext: "mobile"
    },
    // smart: {
    //   name: "Смартлинк общий",
    //   base: "https://sberbank.ru/sms/",
    //   appendCode: false,
    //   ext: "smart"
    // },
    // {
    //     id: "smart_sms",
    //     name: "Смартлинк для SMS",
    //     base: "https://sberbank.ru/sms/",
    //     appendCode: false,
    //     ext: "no"
    // },
    {
        id: "web",
        name: "Web",
        base: "https://online.sberbank.ru/CSAFront/service.do?",
        appendCode: true,
        ext: "smart"
    }
];
