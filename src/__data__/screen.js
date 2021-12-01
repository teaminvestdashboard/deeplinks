export const screen = [
    {
        code: "marketplace",
        name: "Витрина",
        param: "marketPlaceId",
        options: [
            {
                code: "investmentsCatalog",
                tab_id: 1,
                name: "Основная витрина инвестиций",
            },
            {
                code: "PIFCatalog",
                tab_id: 2,
                name: "Витрина категории ПИФ"
            },
            {
                code: "IIS_products",
                tab_id: 3,
                name: "Витрина ИИС с продуктами"},
            {
                code: "trustCatalog",
                tab_id: 4,
                name: "Доверительное управление"},
            {
                code: "investPlansAllMB",
                tab_id: 5,
                name: "Инвестиционные планы"
            },
            {
                code: "forYouCatalog",
                tab_id: 6,
                name: "По уровню риска"
            },
            {
                code: "maxProfitSelection",
                tab_id: 7,
                name: "Максимум дохода"
            },
            {
                code: "minAmountSelection",
                tab_id: 8,
                name: "Минимальная сумма"
            },
            {
                code: "regularPayoutsSelection",
                tab_id: 9,
                name: "Регулярные выплаты"
            },
            {
                code: "currencyInvestSelection",
                tab_id: 10,
                name: "Инвестиции в валютные активы"
            },
        ]
    },
    {
        code: "pif",
        name: "Продукты ПИФ",
        param: "productCode",
        options: [
            {
                code: "fund_equity_dn",
                tab_id: 11,
                name: "Фонд акций Добрыня Никитич"
            },
            {
                code: "fund_bond_im",
                tab_id: 12,
                name: "Фонд облигаций Илья Муромец"
            },
            {
                code: "fund_balanced",
                tab_id: 13,
                name: "Фонд Сбалансированный"
            },
            {
                code: "fund_prosp_bonds",
                tab_id: 14,
                name: "Фонд перспективных облигаций"
            },
            {
                code: "fund_eurobonds",
                tab_id: 15,
                name: "Фонд Еврооблигации"
            },
            {
                code: "fund_debt_market",
                tab_id: 16,
                name: "Фонд Глобальный долговой рынок"
            },
            {
                code: "fund_money",
                tab_id: 17,
                name: "Фонд Денежный"
            }
        ]
    },
    {
        code: "trust",
        name: "Продукты ДУ",
        param: "productCode",
        options: [
            {
                code: "trust_conservative",
                tab_id: 18,
                name: "Стратегия \"Консервативный портфель\""
            },
            {
                code: "trust_careful",
                tab_id: 19,
                name: "Стратегия \"Осторожный портфель\""
            },
            {
                code: "trust_moderate",
                tab_id: 20,
                name: "Стратегия \"Умеренный портфель\""
            },
            {
                code: "trust_modagressive",
                tab_id: 21,
                name: "Стратегия \"Умеренно-агрессивный портфель\""
            },
        ]
    }
];

export const screenWeb = [
    {
        code: "marketplace",
        name: "Витрина",
        param: "srvUrl",
        options: [
            {
                code: "investments",
                tab_id: 22,
                name: "Основная витрина инвестиций",
            },
        ]
    },
]