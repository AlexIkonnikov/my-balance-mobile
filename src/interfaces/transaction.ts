export interface Transaction {
  total: number;
  date: string;
  category: Category;
  comment: string;
  id: number;
}

export interface TransactionResponse {
  transactions: Transaction[];
  income: number;
  expenses: number;
}

export enum Category {
  OTHER = 'Прочее',
  FOOD = 'Продукты питания',
  TRAVEL = 'Проезд',
  MOBILE = 'Мобильная связь',
  ENTERTAINMENT = 'Развлечения',
  MEDICINE = 'Аптека/Мед. услуги',
  FAST_FOOD = 'Быстрое питание',
  DEVELOPMENT = 'Развитие',
  CLOTH = 'Одежда',
  RENT = 'Аренда',
  PRESENTS = 'Подарки',
  SALARY = 'Зарплата',
  PART_TIME_JOB = 'Подработка',
}
