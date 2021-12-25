import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})(props => ({
    backgroundColor: props.theme.colors.shape,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
    padding: '18px 16px'
}))

export const Category = styled.Text(props => ({
    fontFamily: props.theme.fonts.regular,
    fontSize: RFValue(14),
}))

export const Icon = styled(Feather)(props => ({
    fontSize: RFValue(20),
    color: props.theme.colors.text.main,
}))