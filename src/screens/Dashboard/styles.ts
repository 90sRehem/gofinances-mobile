import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { FlatList, FlatListProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { DataListProps } from '.'

export const Container = styled.View(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.colors.background
}))

export const Header = styled.View(({ theme }) => ({
    width: '100%',
    height: `${RFPercentage(42)}px`,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary
}))

export const UserWrapper = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: `0 ${RFValue(24)}px`,
    marginTop: `${getStatusBarHeight() + RFValue(28)}px}`
})

export const UserInfo = styled.View(({ theme }) => ({
    alignItems: 'center',
    flexDirection: 'row',
}))

export const Photo = styled.Image(() => ({
    width: RFValue(48),
    height: RFValue(48),
    borderRadius: RFValue(10)
}));

export const User = styled.View(() => ({
    marginLeft: RFValue(17)
}));

export const UserGreeting = styled.Text(({ theme }) => ({
    color: theme.colors.shape,
    fontSize: RFValue(18),
    fontFamily: theme.fonts.regular
}));

export const UserName = styled.Text(({ theme }) => ({
    color: theme.colors.shape,
    fontSize: RFValue(18),
    fontFamily: theme.fonts.bold
}));

export const Icon = styled(Feather)(({ theme }) => ({
    color: theme.colors.secondary.main,
    fontSize: RFValue(24)
}))

export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: RFValue(20) }
})(({
    width: '100%',
    position: 'absolute',
    marginTop: `${RFPercentage(25)}px`
}))

export const Transactions = styled.View({
    flex: 1,
    padding: `0 ${RFValue(24)}px`,
    marginTop: `${RFPercentage(15)}px`
})

export const Title = styled.Text(({ theme }) => ({
    fontSize: RFValue(18),
    fontFamily: theme.fonts.regular,
    marginBottom: RFValue(16)
}))

export const TransactionList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``;

export const LogoutButton = styled(BorderlessButton)``