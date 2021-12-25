import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
export const Container = styled.TouchableOpacity(props => ({
    width: '100%',
    backgroundColor: props.theme.colors.secondary.main,
    borderRadius: RFValue(5),
    alignItems: 'center'
}))

export const Title = styled.Text(props => ({
    fontFamily: props.theme.fonts.medium,
    fontSize: RFValue(14),
    color: props.theme.colors.shape,
    padding: RFValue(18),
}))