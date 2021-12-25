import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput(props => ({
    width: '100%',
    padding: '16px 18px',
    fontSize: RFValue(14),
    fontFamily: props.theme.fonts.regular,
    backgroundColor: props.theme.colors.shape,
    borderRadius: 5,
    marginBottom: 8,
    color: props.theme.colors.text.dark
}))

export const Error = styled.Text(props => ({
    color: props.theme.colors.attention.main,
    fontSize: RFValue(14),
    fontFamily: props.theme.fonts.regular,
    margin: '7px 0'
}))
