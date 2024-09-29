import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import AllFoods from '@/components/Menu';
import { useState } from 'react';

const NewScreen = () => {
    // Access the passed parameters using useLocalSearchParams because userouter was not working
    const { id, name, price } = useLocalSearchParams();
    
    // values fetched from link in simplified tab are in string while ID in AllFoods array is int value so ve have to typecast anyone 
    let num: number = Number(id)
    
    console.log("From New Screen",num)
    
    const [cartItems, setCartItems] = useState([]);

    const selectedItem = AllFoods.find(item => item.ID === num);
    
    // if no selected item form array is found then reutrn this error
    if (!selectedItem) {
      return (
          <View style={styles.container}>
              <Text style={styles.errorText}>Item not found</Text>
          </View>
      );
  }
  const ordersHandler = () => {
    setCartItems((prevItems) => [...prevItems, selectedItem]); // Add item to cart
    console.log("Success", `${name} has been added to your cart!`)
};
    return (
        <View style={styles.container}>
            <Image source={selectedItem.Image} style={styles.image} />
            <View style={styles.container1}>
              <Text style={styles.foodName}>{name}</Text>
            </View>
            <View style={styles.container2}>
              <Text style={styles.foodPrice}>{price}</Text>
              <TouchableOpacity style={styles.cartButton} onPress={ordersHandler}><Text>ADD TO CART</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default NewScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    container1: {
      backgroundColor: '#FFFFFF',
      flex: .97,
      borderRadius: 30,
      paddingTop: 10,
      width: '100%',
      marginTop: -35
    },
    container2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '50%',
        marginBottom: 10
    },
    foodName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    },
    foodPrice: {
        fontSize: 20,
        marginLeft: 20,
    },
    cartButton: {
      fontSize: 16,
      marginRight: 20,
      backgroundColor: 'orange',
      borderRadius: 40,
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 7,
      paddingRight: 7
    },
    foodID: {
        fontSize: 16,
        marginTop: 5,
    },
    errorText: {
      fontSize: 18,
      color: 'red',
  },
});
