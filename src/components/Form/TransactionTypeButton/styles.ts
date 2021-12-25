import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from 'react-native-gesture-handler'
interface IconProps {
    type: 'income' | 'outcome';
}

interface ContainerProps {
    isActive: boolean;
    type: 'income' | 'outcome';
}

export const Container = styled(RectButton)<ContainerProps>(props => ({
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: props.isActive ? 0 : 1.5,
    borderStyle: 'solid',
    borderColor: props.theme.colors.text.main,
    borderRadius: RFValue(5),
    padding: '16px 19px',
    backgroundColor: props.isActive && props.type === 'income' && props.theme.colors.success.light ||
        props.isActive && props.type === 'outcome' && props.theme.colors.attention.light ||
        props.theme.colors.shape
}))

export const Icon = styled(Feather)<IconProps>(props => ({
    fontSize: RFValue(14),
    marginRight: RFValue(12),
    color: props.type === 'income' ? props.theme.colors.success.main : props.theme.colors.attention.main
}))

export const Title = styled.Text(props => ({
    fontSize: RFValue(14),
    fontFamily: props.theme.fonts.regular,
}))

