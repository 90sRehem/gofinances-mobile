import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components";
import { categories } from "../../utils/categories";
import { Category, Container, Footer, Header, Icon, Name, Separator, Title } from "./styles";

type Category = {
    key: string;
    name: string;
}

interface CategorySelectProps {
    category: Category;
    setCategory: (category: Category) => void;
    close: () => void;
}

export function CategorySelect({
    category,
    close,
    setCategory
}: CategorySelectProps) {
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => setCategory(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <Button title="Selecionar" onPress={close} />
            </Footer>
        </Container>
    )
}