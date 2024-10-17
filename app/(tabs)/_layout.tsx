import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import TabBar from '@/components/TabBar'

const _layout = () => {
  return (
    <Tabs 
      tabBar={props => <TabBar {...props}/>}
    >
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Home',
          headerShown: false
      }}/>
      <Tabs.Screen 
        name='Menu'
        options={{
          title: 'Menu'
      }}/>
      <Tabs.Screen 
        name='Orders'
        options={{
          title: 'Cart',
          headerShown: false
      }}/>
      <Tabs.Screen 
        name='Profile'
        options={{
          title: 'Profile'
      }}/>
      <Tabs.Screen 
        name='Favorites'
        options={{
          title: 'Favorites'
      }}/>
    </Tabs>
  )
}

export default _layout