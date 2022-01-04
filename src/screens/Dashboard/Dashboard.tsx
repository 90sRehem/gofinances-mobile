import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { TRANSACTIONS_STORAGE_KEY } from "../../config";
import { storage } from "../../utils/storage";
import { Transaction } from "../Register/types";
import { TransactionCard, HighLightCard } from "./components";
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton,
} from "./styles";

export interface DataListProps extends Transaction {
    id: string,
}

interface HighLightProps {
    amount: string;
}

interface HightLightData {
    entries: HighLightProps
    expensives: HighLightProps
    total: HighLightProps;
}

let entriesTotal = 0
let expensiveTotal = 0

export function Dashboard() {
    const [transactions, setTransactions] = useState<DataListProps[]>([])
    const [highLightData, setHighLightData] = useState<HightLightData>({} as HightLightData)

    const loadTransactions = async () => {
        const response = await storage.getItem({ key: TRANSACTIONS_STORAGE_KEY })
        const formattedResult: DataListProps[] = response?.map((item: DataListProps) => {

            if (item.type === 'income') {
                entriesTotal += Number(item.amount)
            } else {
                expensiveTotal += Number(item.amount)
            }

            const amount = Number(item.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })

            const formattedDate = Intl.DateTimeFormat('pr-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            }).format(new Date(item.date))

            return {
                id: item.id,
                title: item.title,
                amount,
                date: formattedDate,
                type: item.type,
                category: item.category
            }
        })

        const total = entriesTotal - expensiveTotal

        setTransactions(formattedResult)
        setHighLightData({
            expensives: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }
        })
    }
    console.log(highLightData);

    useEffect(() => {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, []))

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: "https://avatars.githubusercontent.com/u/42037966?v=4" }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Jonathan</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => console.log('logout')}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighLightCards horizontal>
                <HighLightCard
                    type="income"
                    title="Entradas"
                    // amount={highLightData.entries.amount}
                    amount='teste'
                    lastTransaction="Última entrada dia 24 de dezembro"
                />
                <HighLightCard
                    type="outcome"
                    title="Saídas"
                    amount='teste'
                    // amount={highLightData.expensives.amount}
                    lastTransaction="Última saída dia 24 de dezembro"
                />
                <HighLightCard
                    type="total"
                    title="Total"
                    amount='teste'
                    // amount={highLightData.total.amount}
                    lastTransaction="Última saída dia 24 de dezembro"
                />
            </HighLightCards>

            <Transactions>
                <Title>Lisstagem</Title>

                <TransactionList
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />


            </Transactions>
        </Container>
    )
}
