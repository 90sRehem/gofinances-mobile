import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionProps {
    type: 'positive' | 'negative'
}

export const Container = styled.View(({ theme }) => ({
    backgroundColor: theme.colors.shape,
    borderRadius: RFValue(5),
    padding: `${RFValue(17)}px ${RFValue(24)}px`,
    marginBottom: RFValue(16)
}))

export const Title = styled.Text(({ theme }) => ({
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular
}))

export const Amount = styled.Text<TransactionProps>(({ theme, type }) => ({
    fontSize: RFValue(20),
    marginTop: RFValue(2),
    fontFamily: theme.fonts.regular,
    color: type === 'positive' ? theme.colors.success.main : theme.colors.attention.main
}))

export const Footer = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(19)
})

export const Category = styled.View({
    flexDirection: 'row',
    alignItems: 'center'
})

export const Icon = styled(Feather)(({ theme }) => ({
    fontSize: RFValue(20),
    color: theme.colors.text.main
}))

export const CategoryName = styled.Text(({ theme }) => ({
    fontSize: RFValue(14),
    marginLeft: RFValue(17)
}))

export const Date = styled.Text(({ theme }) => ({
    fontSize: RFValue(14),
    marginLeft: RFValue(17)
}))
