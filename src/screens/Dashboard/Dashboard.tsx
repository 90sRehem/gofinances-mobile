import React, { useEffect, useState } from "react";
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

export function Dashboard() {
    const [data, setData] = useState<DataListProps[]>([])

    const loadTransactions = async () => {
        const response = await storage.getItem({ key: TRANSACTIONS_STORAGE_KEY })
        const formattedResult: DataListProps[] = response.map((item: DataListProps) => {
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

        setData(formattedResult)
    }

    useEffect(() => {
        loadTransactions()
    }, []);
    // const data: DataListProps[] = [
    //     {
    //         id: '1',
    //         type: 'positive',
    //         title: "Desenvolvimento de site",
    //         amount: "R$: 12.000,00",
    //         category: { name: 'Vendas', icon: 'dollar-sign' },
    //         date: '24/12/2020'
    //     },
    //     {
    //         id: '2',
    //         type: 'negative',
    //         title: "Lanchos",
    //         amount: "R$: 110,00",
    //         category: { name: 'Alimentação', icon: 'coffee' },
    //         date: '24/12/2020'
    //     },
    //     {
    //         id: '3',
    //         type: 'negative',
    //         title: "Apartamento",
    //         amount: "R$: 1.000,00",
    //         category: { name: 'Moradia', icon: 'home' },
    //         date: '24/12/2020'
    //     },
    // ]
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
                    amount="R$: 17.400,00"
                    lastTransaction="Última entrada dia 24 de dezembro"
                />
                <HighLightCard
                    type="outcome"
                    title="Saídas"
                    amount="R$: 1.259,00"
                    lastTransaction="Última saída dia 24 de dezembro"
                />
                <HighLightCard
                    type="total"
                    title="Total"
                    amount="R$: 16.141,00"
                    lastTransaction="Última saída dia 24 de dezembro"
                />
            </HighLightCards>

            <Transactions>
                <Title>Lisstagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />


            </Transactions>
        </Container>
    )
}
