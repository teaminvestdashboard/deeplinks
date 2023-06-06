import { EXTERNAL, INTERNAL } from "../../constants"

export const sourcesType = [
  {
    id: 1,
    code: INTERNAL,
    title: "Внутренний"
  },
  {
    id: 2,
    code: EXTERNAL,
    title: "Внешний"
  }
]
export const sources = {
  [INTERNAL]: [
    {
      code: "&internal_source=Main_Plus_InvestPFM",
      id: 1,
      title: "Плюс на главной"
    },
    {
      code: "&internal_source=Main_Plus_InvestBroker",
      id: 2,
      title: "На сценарий открытия брокерского счета"
    },
    {
      code: "&internal_source=Marketplace_All_InvestPFM",
      id: 3,
      title: "Каталог продуктов"
    },
    {
      code: "&internal_source=GlobalSearch_InvestPFM",
      id: 4,
      title: "Умный поиск"
    },
    {
      code: "&internal_source=All_Assets_InvestPFM",
      id: 5,
      title: "Всего средств"
    },
    {
      code: "&internal_source=Main_Plus_Pensions",
      id: 6,
      title: "Раздел Пенсии"
    },
    {
      code: "&internal_source=Banner_Plus",
      id: 7,
      title: "Баннер в пинах"
    },
    {
      code: "&internal_source=Virtual_Assistant",
      id: 8,
      title: "Виртуальный ассистент"
    },
    {
      code: "&internal_source=Marketplace_Widget_InvestPFM",
      id: 9,
      title: "Из карусели"
    },
    {
      code: "&internal_source=BrokerAcc",
      id: 10,
      title: "Из процесса открытия брокерского счет на витрине"
    },
    {
      code: "&internal_source=FinPlan",
      id: 11,
      title: "Из ФинПлана"
    },
    {
      code: "&internal_source=Tips",
      id: 12,
      title: "Из баннера Совета"
    }
  ],
  [EXTERNAL]: [
    {
      code: "&external_source=push_InvestPFM",
      id: 1,
      title: "Push",
    },
    {
      code: "&external_source=email_InvestPFM",
      id: 2,
      title: "E-mail",
    },
    {
      code: "&external_source=sms_InvestPFM",
      id: 3,
      title: "SMS",
    },
  ]
}