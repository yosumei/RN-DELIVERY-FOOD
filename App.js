import { View, Text } from 'react-native'
import React from 'react'

import Home from './screens/Home'
import Restaurant from './screens/Restaurant'
import OrderDelivery from './screens/OrderDelivery'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/tabs'

const Stack=createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>

            <Stack.Screen name="Home" component={Tabs}/>
            <Stack.Screen name="Restaurant" component={Restaurant}/>
            <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
        </Stack.Navigator>
    </NavigationContainer>
    

  )
}

export default App