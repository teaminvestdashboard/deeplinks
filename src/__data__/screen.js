export const screen = [
    {
        code: "marketplace",
        name: "Витрина",
        param: "marketPlaceId",
        options: [
            {
                path: "pfm/marketplace?marketPlaceId=investmentsCatalog",
                id: 1,
                name: "Основная витрина инвестиций",
            },
            {
                path: "pfm/marketplace?marketPlaceId=forYouCatalog",
                id: 2,
                name: "По уровню риска",
            },
        ]
    },
    {
        code: "dopmarketplace",
        name: "Подвитрины",
        param: "marketPlaceId",
        options: [
            {
                path: "pfm/marketplace?marketPlaceId=PIFCatalog",
                id: 1,
                name: "Витрина ПИФ"
            },
            {
                path: "pfm/marketplace?marketPlaceId=bonds",
                id: 2,
                name: "Облигации"
            },
            {
                path: "pfm/marketplace?marketPlaceId=trustCatalog",
                id: 3,
                name: "Доверительное управление"
            },
            {
                path: "pfm/marketplace?marketPlaceId=IIS_products",
                id: 4,
                name: "Витрина ИИС с продуктами"
            },
        ]
    },
    {
        code: "services",
        name: "Сервисы",
        param: "",
        options: [
            {
                path: "investments/investment-advice",
                id: 1,
                name: "Подбор портфеля",
            },
            {
                path: "pfm/marketplace?marketPlaceId=investments_Tutorial",
                id: 2,
                name: "Обучающее видео",
            },
            {
                path: "investments/investprofile",
                id: 3,
                name: "Инвест-профиль",
            },
            {
                path: "brokerage/agreement/short?action=create&from=marketplace_invest",
                id: 4,
                name: "Брокерский счет",
            },
        ]
    },
    {
        code: "selection",
        name: "Подборки",
        param: "marketPlaceId",
        options: [
            {
                path: "pfm/marketplace?marketPlaceId=topSolutionsSelection",
                id: 1,
                name: "Топ готовых решений",
            },
            {
                path: "pfm/marketplace?marketPlaceId=minAmountSelection",
                id: 2,
                name: "Минимальная сумма",
            },
            {
                path: "pfm/marketplace?marketPlaceId=maxProfitSelection",
                id: 3,
                name: "Максимум дохода",
            },
            {
                path: "pfm/marketplace?marketPlaceId=regularPayoutsSelection",
                id: 4,
                name: "С налоговым вычетом",
            },
            {
                path: "pfm/marketplace?marketPlaceId=newItemSelection",
                id: 5,
                name: "Новинки",
            },
            {
                path: "pfm/marketplace?marketPlaceId=regularIncomeSelection",
                id: 6,
                name: "Регулярные выплаты",
            },
            {
                path: "pfm/marketplace?marketPlaceId=russianEconomySelection",
                id: 7,
                name: "Российская экономика",
            },
        ]
    },
    {
        code: "categories",
        name: "Категории",
        param: "marketPlaceId",
        options: [
            {
                path: "pfm/marketplace?marketPlaceId=naviInvestSolCatalog",
                id: 1,
                name: "Готовые инвестиционные решения",
            },
            {
                path: "pfm/marketplace?marketPlaceId=naviBrokerageCatalog",
                id: 2,
                name: "Брокерское обслуживание",
            },
            {
                path: "pfm/marketplace?marketPlaceId=naviSAndPCatalog",
                id: 3,
                name: "Накопления и пенсии",
            },
            {
                path: "pfm/marketplace?marketPlaceId=allProductsListCatalog",
                id: 4,
                name: "Все продукты списком",
            },
        ]
    },
    {
        code: "pif",
        name: "Продукты ПИФ",
        param: "productCode",
        options: [
            {
                path: "welfare/invest-pif/product?productCode=fund_equity_dn",
                id: 1,
                name: "Фонд акций Добрыня Никитич"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_bond_im",
                id: 2,
                name: "Фонд облигаций Илья Муромец"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_balanced",
                id: 3,
                name: "Фонд Сбалансированный"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_prosp_bonds",
                id: 4,
                name: "Фонд перспективных облигаций"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_eurobonds",
                id: 5,
                name: "Фонд Еврооблигации"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_money",
                id: 6,
                name: "Фонд Денежный"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_utilities",
                id: 7,
                name: "Фонд Электроэнергетика"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_natural_res",
                id: 8,
                name: "Фонд Природные ресурсы"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_global_internet",
                id: 9,
                name: "Фонд Глобальный интернет"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_consumer_sector",
                id: 10,
                name: "Фонд Потребительский сектор"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_financial_sector",
                id: 11,
                name: "Фонд Финансовый сектор"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_america",
                id: 12,
                name: "Фонд Глобальные акции"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_biotech",
                id: 13,
                name: "Фонд Биотехнологии"
            },
            {
                path: "welfare/invest-pif/product?productCode=fund_gold",
                id: 14,
                name: "Фонд Золото"
            },
        ]
    },
    {
        code: "trust",
        name: "Продукты ДУ",
        param: "productCode",
        options: [
            {
                path: "investments/tm/product/card?productCode=trust_respons_investment",
                id: 1,
                name: "Ответственные инвестиции"
            },
            {
                path: "investments/tm/product/card?productCode=trust_conservative",
                id: 2,
                name: "Стратегия Консервативный портфель"
            },
            {
                path: "investments/tm/product/card?productCode=trust_careful",
                id: 3,
                name: "Стратегия Осторожный портфель"
            },
            {
                path: "investments/tm/product/card?productCode=trust_moderate",
                id: 4,
                name: "Стратегия Умеренный портфель"
            },
            {
                path: "investments/tm/product/card?productCode=trust_agressive",
                id: 5,
                name: "Стратегия Агрессивный портфель"
            },
            {
                path: "investments/tm/product/card?productCode=trust_capital2025",
                id: 6,
                name: "Стратегия Мой капитал 2025"
            },
            {
                path: "investments/tm/product/card?productCode=trust_capital2030",
                id: 7,
                name: "Стратегия Мой капитал 2030"
            },
            {
                path: "investments/tm/product/card?productCode=trust_capital2035",
                id: 8,
                name: "Стратегия Мой капитал 2035"
            },
            {
                path: "investments/tm/product/card?productCode=trust_capital2040",
                id: 9,
                name: "investments/tm/product/card?productCode=Стратегия Мой капитал 2040"
            },
            {
                path: "investments/tm/product/card?productCode=trust_russianbondsfund_rur",
                id: 10,
                name: "Стратегия Долларовые облигации"
            },
        ]
    },
    {
        code: "zpif",
        name: "Продукты ЗПИФ",
        param: "productCode",
        options: [
            {
                path: "",
                id: 1,
                name: "Фонд Арендный бизнес 7"
            },
        ]
    },
    {
        code: "pension",
        name: "Пенсионные продукты",
        param: "",
        options: [
            {
                path: "investments/personalpensionplanrest",
                id: 1,
                name: "Пенсионный план"
            },
        ]
    },
    {
        code: "iis",
        name: "Продукты ИИС",
        param: "productCode",
        options: [
            {
                path: "",
                id: 1,
                name: "Больше чем ИИС"
            },
            {
                path: "investments/tm/product/card?productCode=iia_saving",
                id: 2,
                name: "Стратегия ИИС Накопительная"
            },
            {
                path: "investments/tm/product/card?productCode=iia_roubleshares",
                id: 3,
                name: "Стратегия ИИС Российские облигации"
            },
            {
                path: "brokerage/agreement/short?action=create&from=marketplace_invest&IIA=1",
                id: 4,
                name: "Индивидуальный инвестиционный счет"
            },
        ]
    },
    {
        code: "nszh",
        name: "НСЖ",
        param: "",
        options: [
            {
                path: "investments/nszh/product/card?productCode=NSZH_TICKETTOFUTURE",
                id: 1,
                name: "Билет в будущее"
            },
            {
                path: "",
                id: 2,
                name: "Думаю о будущем"
            },
        ]
    },
    {
        code: "invesmentsloss",
        name: "Инвестиции без потерь",
        param: "",
        options: [
            {
                path: "investments/iliview/product/product?source=Showcase",
                id: 1,
                name: "Страхование с инвестдоходом"
            },
        ]
    },
    {
        code: "otherProducts",
        name: "Другие продукты",
        param: "",
        options: [
            {
                path: "payments/open-goal",
                id: 1,
                name: "Новая цель"
            },
            {
                path: "payments/open-ima-list",
                id: 2,
                name: "Металлический счет"
            },
        ]
    },
];

export const screenWeb = [
    {
        code: "webmarketplace",
        name: "Витрина",
        param: "srvUrl",
        options: [
            {
                path: "?srvUrl=%2Finvestments",
                id: 22,
                name: "Основная витрина инвестиций",
            },
        ]
    },
]