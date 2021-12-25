import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: "income" | "outcome" | "total"
}

export const Container = styled.View<TypeProps>(({ type, theme }) => ({
    backgroundColor: type === 'total' ? theme.colors.secondary.main : theme.colors.shape,
    width: RFValue(300),
    borderRadius: RFValue(5),
    padding: `${RFValue(19)}px ${RFValue(23)}px`,
    paddingBottom: RFValue(42),
    marginRight: RFValue(16)
}))

export const Header = styled.View({
    justifyContent: 'space-between',
    flexDirection: 'row',
})

export const Title = styled.Text<TypeProps>(({ theme, type }) => ({
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    color: type === 'total' ? theme.colors.shape : theme.colors.text.dark,
}))

export const Icon = styled(Feather)<TypeProps>(({ theme, type }) => {
    return ({
        fontSize: RFValue(40),
        color: type === 'income' && theme.colors.success.main || type === 'outcome' && theme.colors.attention.main || type === 'total' && theme.colors.shape || theme.colors.shape
    })
})

export const Content = styled.View(() => ({

}))

export const Amount = styled.Text<TypeProps>(({ theme, type }) => ({
    fontFamily: theme.fonts.medium,
    fontSize: RFValue(32),
    color: type === 'total' ? theme.colors.shape : theme.colors.text.dark,
    marginTop: RFValue(38)
}))

export const LastTransaction = styled.Text<TypeProps>(({ theme, type }) => ({
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(12),
    color: type === 'total' ? theme.colors.shape : theme.colors.text.main,
}))