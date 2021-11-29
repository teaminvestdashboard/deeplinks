export const targets = [
    {
        code: "marketplace",    name: "Витрина",
        options: [
            {code: "investmentsCatalog", name: "Основная витрина инвестиций", isDefault: true},
            {code: "PIFCatalog",         name: "Витрина категории ПИФ"},
            {code: "IIS_products",       name: "Витрина ИИС с продуктами"},
            {code: "trustCatalog",       name: "Доверительное управление"},
            {code: "investPlansAllMB",   name: "Инвестиционные планы"},
            {code: "forYouCatalog",      name: "По уровню риска"},
            {code: "maxProfitSelection",           name: "Максимум дохода"},
            {code: "minAmountSelection",           name: "Минимальная сумма"},
            {code: "regularPayoutsSelection",      name: "Регулярные выплаты"},
            {code: "currencyInvestSelection",      name: "Инвестиции в валютные активы"},
        ]
    },
    {
        code: "pif",            name: "Продукты ПИФ",
        options: [
            // {code: "",   name: "Все фонды", use_target: "marketplace", use_code:"PIFCatalog"},
            {code: "fund_equity_dn",   name: "Фонд акций Добрыня Никитич"},
            {code: "fund_bond_im",     name: "Фонд облигаций Илья Муромец"},
            {code: "fund_balanced",    name: "Фонд Сбалансированный"},
            {code: "fund_prosp_bonds", name: "Фонд перспективных облигаций"},
            {code: "fund_eurobonds",   name: "Фонд Еврооблигации"},
            {code: "fund_debt_market", name: "Фонд Глобальный долговой рынок"},
            {code: "fund_money",       name: "Фонд Денежный"}
        ]
    },
    {
        code: "trust",          name: "Продукты ДУ",
        options: [
            // {code: "",                   name: "Все стратегии"},
            {code: "trust_conservative", name: "Стратегия \"Консервативный портфель\""},
            {code: "trust_careful",      name: "Стратегия \"Осторожный портфель\""},
            {code: "trust_moderate",     name: "Стратегия \"Умеренный портфель\""},
            {code: "trust_modagressive", name: "Стратегия \"Умеренно-агрессивный портфель\""},
        ]
    }
];
