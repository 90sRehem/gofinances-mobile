import React, { useState, useEffect } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Button, InputForm } from "../../components";
import { CategorySelect } from "../CategorySelect";
import { Container, Header, Title, Form, Fields, TrasactionTypes } from "./styles";
import { TransactionTypeButton, CattegorySelectButton } from "./components";

interface FormData {
    name: string;
    amount: string
}

const schema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
    amount: yup
        .number()
        .typeError('Informe um valor númerico.')
        .positive('O valor não pode ser negativo.')
        .required('O valor é obrigatório.')
})

export function Register() {
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control,
        handleSubmit,
        formState
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleSelectTransactionType = (type: 'income' | 'outcome') => {
        setTransactionType(type)
    }
    const collectionKey = "@gofinances:transaction";
    const handleRegister = async (form: FormData) => {
        if (!transactionType) {
            return Alert.alert("Selecione o tipo da transação.")
        }
        if (category.key === 'category') {
            return Alert.alert('Selecione a categoria.')
        }

        const newTransaction = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        try {
            const data = await AsyncStorage.getItem(collectionKey)

            const previousTransactions = data ? JSON.parse(data) : []

            const formattedData = [
                ...previousTransactions,
                newTransaction
            ]

            await AsyncStorage.setItem(collectionKey, JSON.stringify(formattedData))
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar.")
        }

    }

    useEffect(() => {
        (async () => {
            // await AsyncStorage.removeItem(collectionKey)
            const data = await AsyncStorage.getItem(collectionKey)
            const result = JSON.parse(data!)
            console.log(result)
        })()
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            placeholder="Nome"
                            control={control}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={formState.errors.name && formState.errors.name.message}
                        />

                        <InputForm
                            name="amount"
                            placeholder="Preço"
                            control={control}
                            keyboardType="numeric"
                            error={formState.errors.amount && formState.errors.amount.message}

                        />

                        <TrasactionTypes>
                            <TransactionTypeButton
                                title="Entrada"
                                type="income"
                                onPress={() => handleSelectTransactionType('income')}
                                isActive={transactionType === 'income'}
                            />

                            <TransactionTypeButton
                                title="Saída"
                                type="outcome"
                                onPress={() => handleSelectTransactionType('outcome')}
                                isActive={transactionType === 'outcome'}

                            />
                        </TrasactionTypes>

                        <CattegorySelectButton title={category.name} onPress={() => setCategoryModalOpen(true)} />
                    </Fields>
                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        close={() => setCategoryModalOpen(false)}
                        setCategory={setCategory}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}