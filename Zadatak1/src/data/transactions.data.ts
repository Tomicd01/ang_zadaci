import { Transaction } from "../models/Transaction"

export const transactionsArray : Transaction[] = [
    {
      id: 1,
      date: "25.5.2021 - 01:15",
      amount: -100,
      type: "nike.com",
      card: "5434 **** **** 5434",
      title: "Shopping",
    },
    {
      id: 2,
      date: "23.5.2021 - 04:15",
      amount: -230,
      type: "Credit Card Payment",
      card: "5434 **** **** 5434",
      title: "Card Payment",
    },
    {
      id: 3,
      date: "23.5.2021 - 04:15",
      amount: 4200,
      type: "Salary",
      card: "4234 **** **** 5134",
      title: "Money Transfer",
    },
  ]
  