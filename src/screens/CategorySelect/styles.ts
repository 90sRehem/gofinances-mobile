import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    alignItems: "center",
}))

export const Header = styled.View(props => ({
    width: '100%',
    height: RFValue(113),
    backgroundColor: props.theme.colors.primary,
    alignItems: "center",
    justifyContent: 'flex-end',
    paddingBottom: 19
}))

export const Title = styled.Text(props => ({
    fontFamily: props.theme.fonts.regular,
    fontSize: RFValue(18),
    color: props.theme.colors.shape,
}))

export const Category = styled.TouchableOpacity<CategoryProps>(props => ({
    width: '100%',
    padding: RFValue(15),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: props.isActive ? props.theme.colors.secondary.light : props.theme.colors.background
}))

export const Name = styled.Text(propps => ({
    fontFamily: propps.theme.fonts.regular,
    fontSize: RFValue(14),
}))

export const Icon = styled(Feather)(props => ({
    fontSize: RFValue(20),
    marginRight: RFValue(16),
}))

export const Separator = styled.View(props => ({
    width: '100%',
    height: 1,
    backgroundColor: props.theme.colors.text.main
}))

export const Footer = styled.View(props => ({
    width: '100%',
    padding: RFValue(24),
}))

