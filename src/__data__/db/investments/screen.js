export const screen = [
  {
    code: "marketplace",
    screens: [
      {
        path: "pfm/marketplace?marketPlaceId=investmentsCatalog",
        id: 1,
        title: "Основная витрина инвестиций",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "submarketplace",
    screens: [
      {
        path: "pfm/marketplace?marketPlaceId=PIFCatalog",
        id: 1,
        title: "Витрина ПИФ",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=bonds",
        id: 2,
        title: "Облигации",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=trustCatalog",
        id: 3,
        title: "Доверительное управление",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=IIS_products",
        id: 4,
        title: "Витрина ИИС с продуктами",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "services",
    screens: [
      {
        path: "investments/investment-advice",
        id: 1,
        title: "Подбор портфеля",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=investments_Tutorial",
        id: 2,
        title: "Обучение",
        availableVersion: "0.0",
      },
      {
        path: "investments/investprofile",
        id: 3,
        title: "Инвест-профиль",
        availableVersion: "0.0",
      },
      {
        path: "brokerage/agreement/short?action=create&from=marketplace_invest",
        id: 4,
        title: "Брокерский счет",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "selection",
    screens: [
      {
        path: "pfm/marketplace?marketPlaceId=newItemSelection",
        id: 5,
        title: "Новинки",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=regularIncomeSelection",
        id: 6,
        title: "Регулярные выплаты",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=russianEconomySelection",
        id: 7,
        title: "Российская экономика",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=forYouCatalog",
        id: 8,
        title: "По уровню риска",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "categories",
    screens: [
      {
        path: "pfm/marketplace?marketPlaceId=naviInvestSolCatalog",
        id: 1,
        title: "Готовые инвестиционные решения",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=naviBrokerageCatalog",
        id: 2,
        title: "Брокерское обслуживание",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=naviSAndPCatalog",
        id: 3,
        title: "Накопления и пенсии",
        availableVersion: "0.0",
      },
      {
        path: "pfm/marketplace?marketPlaceId=allProductsListCatalog",
        id: 4,
        title: "Все продукты списком",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "pif",
    screens: [
      {
        path: "welfare/invest-pif/product?productCode=fund_equity_dn",
        id: 1,
        title: "Фонд российских акций",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_bond_im",
        id: 2,
        title: "Фонд российских облигаций",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_balanced",
        id: 3,
        title: "Фонд Сбалансированный",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_money",
        id: 4,
        title: "Фонд Накопительный",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_natural_res",
        id: 5,
        title: "Фонд Природные ресурсы",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_local",
        id: 6,
        title: "Фонд Локальный",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_conservative_payout",
        id: 7,
        title: "Фонд консервативный с выплатой дохода",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_weighted_payout",
        id: 8,
        title: "Фонд взвешенный с выплатой дохода",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_bond_payout",
        id: 9,
        title: "Фонд облигаций с выплатой дохода",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_equity_payout",
        id: 10,
        title: "Фонд акций с выплатой дохода",
        availableVersion: "0.0",
      },
      {
        path: "welfare/invest-pif/product?productCode=fund_hybrid_payout",
        id: 11,
        title: "Фонд смешанный с выплатой дохода",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "trust",
    screens: [
      {
        path: "investments/tm/product/card?productCode=trust_respons_investment",
        id: 1,
        title: "Ответственные инвестиции",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_conservative",
        id: 2,
        title: "Стратегия Консервативный портфель",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_careful",
        id: 3,
        title: "Стратегия Осторожный портфель",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_moderate",
        id: 4,
        title: "Стратегия Умеренный портфель",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_agressive",
        id: 5,
        title: "Стратегия Агрессивный портфель",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_modagressive",
        id: 5,
        title: "Умеренно-консервативный портфель",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_gold",
        id: 5,
        title: "Доступное золото",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_dividend_stock",
        id: 5,
        title: "Дивидендные акции",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=trust_halal_investments",
        id: 5,
        title: "Халяльные инвестиции",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "zpif",
    screens: [
      {
        path: "",
        id: 1,
        title: "Фонд Арендный бизнес 7",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "pension",
    screens: [
      {
        path: "investments/personalpensionplanrest",
        id: 1,
        title: "Пенсионный план",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "iis",
    screens: [
      {
        path: "investments/tm/product/card?productCode=iia_saving",
        id: 1,
        title: "Стратегия ИИС Накопительная",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_roubleshares",
        id: 2,
        title: "Стратегия ИИС Российские облигации",
        availableVersion: "0.0",
      },
      {
        path: "brokerage/agreement/short?action=create&from=marketplace_invest&IIA=1",
        id: 3,
        title: "Индивидуальный инвестиционный счет",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_conservative",
        id: 4,
        title: "Консервативный портфель ИИС",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_pfpcautious",
        id: 5,
        title: "Осторожный портфель ИИС",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_pfpmoderate",
        id: 6,
        title: "Взвешенный портфель ИИС",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_pfpmodagressive",
        id: 7,
        title: "Прогрессивный портфель ИИС",
        availableVersion: "0.0",
      },
      {
        path: "investments/tm/product/card?productCode=iia_pfpagressive",
        id: 8,
        title: "Динамичный портфель ИИС",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "nszh",
    screens: [
      {
        path: "investments/nszh/product/card?productCode=NSZH_TICKETTOFUTURE",
        id: 1,
        title: "Билет в будущее",
        availableVersion: "0.0",
      },
    ]
  },
  {
    code: "otherProducts",
    screens: [
      {
        path: "payments/open-ima-list",
        id: 1,
        title: "Металлический счет",
        availableVersion: "0.0",
      },
    ]
  },
]