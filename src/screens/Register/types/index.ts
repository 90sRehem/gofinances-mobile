export type Category = {
    name: string;
    key: string;
    icon?: string;
}

export interface Transaction {
    type: 'income' | 'outcome',
    title: string;
    amount: string;
    category: string;
    date: string;
}