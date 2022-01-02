import React, { useState, useEffect } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, InputForm } from "../../components";
import { CategorySelect } from "../CategorySelect";
import { Container, Header, Title, Form, Fields, TrasactionTypes } from "./styles";
import { TransactionTypeButton, CattegorySelectButton } from "./components";
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../utils/storage";
import { TRANSACTIONS_STORAGE_KEY } from "../../config";
import { Transaction, Category } from '../Register/types'
interface FormData {
    name: string;
    amount: string
}

type TransactionType = 'income' | 'outcome' | ''

interface NewTransaction extends Transaction {
    id: string;
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
    const navigation = useNavigation()
    const [transactionType, setTransactionType] = useState<TransactionType>('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [category, setCategory] = useState<Category>({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control,
        handleSubmit,
        formState,
        reset,
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleSelectTransactionType = (type: 'income' | 'outcome') => {
        setTransactionType(type)
    }
    const handleRegister = async (form: FormData) => {
        if (!transactionType) {
            return Alert.alert("Selecione o tipo da transação.")
        }
        if (category.key === 'category') {
            return Alert.alert('Selecione a categoria.')
        }



        const newTransaction: NewTransaction = {
            id: nanoid(),
            title: form.name,
            amount: form.amount,
            type: transactionType,
            category: category.key,
            date: new Date()
        }

        try {
            await storage.setItem({ key: TRANSACTIONS_STORAGE_KEY, values: newTransaction })

            setTransactionType('')
            setCategory({
                key: 'category',
                name: 'Categoria',
            })
            reset()
            navigation.navigate('Listagem')
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar.")
        }

    }

    useEffect(() => {
        (async () => {
            const result = await storage.getItem({ key: TRANSACTIONS_STORAGE_KEY })
            // await storage.removeItem({ key: TRANSACTIONS_STORAGE_KEY })
            // const data = await AsyncStorage.getItem(collectionKey)
            // const result = JSON.parse(data!)
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