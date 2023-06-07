import { EXTERNAL, INTERNAL } from "../../../constants"

export const sourcesWeb = {
  [INTERNAL]: [
    {
      code: "?from=scaffold",
      id: 1,
      title: "Плюс на главной"
    },
    {
      code: "?from=catalog",
      id: 2,
      title: "Каталог"
    },
    {
      code: "?from=smartsearch",
      id: 3,
      title: "Умный поиск"
    },
    {
      code: "?from=investprofile",
      id: 4,
      title: "Инвестпрофилирование"
    },
    {
      code: "?from=pfmfinances",
      id: 5,
      title: "Всего средств"
    },
  ],
  [EXTERNAL]: [
    {
      code: "?from=email",
      id: 1,
      title: "Почтовая рассылка",
    },
    {
      code: "?from=facebook",
      id: 2,
      title: "Фейсбук",
    },
    {
      code: "?from=vk",
      id: 3,
      title: "Вконтакте",
    },
    {
      code: "?from=sberbank",
      id: 4,
      title: "Сайт",
    },
  ]
}