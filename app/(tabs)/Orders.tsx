import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Link,Tabs } from 'expo-router';
import cartItems from '@/app/NewScreen';
import AllFoods from '@/components/Menu';

export default function Orders() {

  const {orderItems} = useLocalSearchParams();
  
  let num: number = Number(orderItems);

  console.log('This is consoled form Orders Files with ID', num)
  
  const confirmed = AllFoods.find(item => item.ID === num);

  if(!confirmed){
    return (
      <View style={styles.container}>
          <Text style={styles.errorText}>Item not found</Text>
      </View>
  );
  }

  const Item = ({ title }:any) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.OuterDiv}>
            <Image source={title.Image} style={styles.image}/>  
            <Text style={styles.foodName}>{title.Name}</Text>
            <Text style={styles.foodPrice}>{title.Price}</Text>
        </View>
      </TouchableOpacity>
    );
};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.OuterDiv}>
       <Image source={confirmed.Image} style={styles.image}/>
       <View style={styles.InnerContainer}>
        <Text style={styles.foodName}>{confirmed.Name}</Text>
        <Text style={styles.foodPrice}>{confirmed.Price}</Text>
       </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  OuterDiv:{
    width: '95%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    position: 'relative', // To position the heart icon
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  InnerContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 160, // Adjust based on your preference
    height: 130, // Adjust based on your preference
    borderRadius: 20,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  foodPrice: {
    fontSize: 14,
    color: 'gray',
  },
})