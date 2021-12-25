import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Category, Container, Icon } from "./styles";

interface CattegorySelectButtonProps extends TouchableOpacityProps {
    title: string;
}

export function CattegorySelectButton({ title, ...rest }: CattegorySelectButtonProps) {
    return (
        <Container activeOpacity={1} {...rest}>
            <Category>{title}</Category>
            <Icon name='chevron-down' />
        </Container>
    )
}