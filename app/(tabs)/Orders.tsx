import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import cartItems from '@/app/NewScreen'
import AllFoods from '@/components/Menu'

const Orders = () => {
  
  const cartItem = cartItems();

  let num: number = Number(cartItems)
    
  console.log("This is from orders",num)

  const selectedItem = AllFoods.find(item => item.ID === num);

  return (
    <View>
        
    </View>
  )
}

export default Orders