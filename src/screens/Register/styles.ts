import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background
}))

export const Header = styled.View((props) => ({
    backgroundColor: props.theme.colors.primary,
    width: '100%',
    height: RFValue(113),
    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingBottom: 19
}))

export const Title = styled.Text(props => ({
    fontFamily: props.theme.fonts.regular,
    fontSize: RFValue(18),
    color: props.theme.colors.shape
}))

export const Form = styled.View(props => ({
    flex: 1,
    width: '100%',
    padding: RFValue(24),
    justifyContent: "space-between"
}))

export const Fields = styled.View({

})

export const TrasactionTypes = styled.View(props => ({
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: RFValue(8),
    marginBottom: RFValue(16)
}))