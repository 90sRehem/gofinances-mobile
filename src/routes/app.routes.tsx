import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary.main,
                tabBarInactiveTintColor: theme.colors.text.main,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >
            <Screen
                name='Listagem'
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name='format-list-bulleted'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => <MaterialIcons
                        name='attach-money'
                        color={color}
                        size={size}
                    />)
                }}
            />
            <Screen
                name='Resumo'
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => <MaterialIcons
                        name='pie-chart'
                        color={color}
                        size={size}
                    />)
                }}
            />
        </Navigator>
    )
}