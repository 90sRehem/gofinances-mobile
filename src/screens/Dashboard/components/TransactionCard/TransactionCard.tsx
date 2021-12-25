import React from "react";
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from "./styles";

type Category = {
    name: string;
    icon: string;
}

export interface Transaction {
    type: 'positive' | 'negative',
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface TransactionCardProps {
    data: Transaction
}

export function TransactionCard({
    data: {
        amount,
        category,
        date,
        title,
        type,
    }
}: TransactionCardProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>
                {type === 'negative' && '- '}
                {amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}