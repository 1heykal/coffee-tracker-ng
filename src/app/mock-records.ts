import { Record } from "./record";

export const RECORDS : Record[] = [
    {
        name: "Coffee",
        description: "Morning Brew",
        type: "Single",
        consumingDate: "2023-04-10T08:00:00",
        cost: Math.floor(Math.random() * 50) + 10
      },
      {
        name: "espresso",
        description: "strong coffee",
        type: "double",
        consumingDate: "2023-04-10t09:30:00",
        cost: Math.floor(Math.random() * 50) + 10
        
      },
      {
        name: "cappuccino",
        description: "creamy coffee",
        type: "double",
        consumingDate: "2023-04-10t11:00:00",
        cost: Math.floor(Math.random() * 50) + 10
      },
      {
        name: "latte",
        description: "mild coffee",
        type: "single",
        consumingDate: "2023-04-10t13:30:00",
        cost: Math.floor(Math.random() * 50) + 10
      },
      {
        name: "iced coffee",
        description: "chilled coffee",
        type: "double",
        consumingDate: "2023-04-10t15:00:00",
        cost: Math.floor(Math.random() * 50) + 10

      },

];

