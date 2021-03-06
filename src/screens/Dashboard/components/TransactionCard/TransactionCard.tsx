import React from "react";
import { categories } from "../../../../utils/categories";
import { Transaction } from "../../../Register/types";
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

interface TransactionCardProps {
    data: Transaction
}

export function TransactionCard({
    data
}: TransactionCardProps) {
    const [category] = categories.filter(item => item.key === data.category)
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'outcome' && '- '}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}