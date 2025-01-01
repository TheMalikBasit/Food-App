import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import React from 'react';
import AllFoods from '@/components/Menu';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewScreen(){
    // Access the passed parameters using useLocalSearchParams because userouter was not working
    const { id, name, price } = useLocalSearchParams();

    // values fetched from link in simplified tab are in string while ID in AllFoods array is int value so we have to typecast any one of em
    let num = Number(id)
    
    console.log("From New Screen",num)

    const selectedItem = AllFoods.find(item => item.ID === num);
    
    // if no selected item form array is found then reutrn this error
    if (!selectedItem) {
      return (
          <View style={styles.container}>
              <Text style={styles.errorText}>Item not found</Text>
          </View>
      );
    }

    const handleAddToCart = async () => {
      try{
        const FetchedData = await AsyncStorage.getItem('AddedItems');
        const AddedItems = FetchedData ? JSON.parse(FetchedData) : [];
        const indexItem = AddedItems.findIndex(item => item.ID === selectedItem.ID);
        if(indexItem != -1){
          AddedItems[indexItem].quantity += 1;
          console.log("Item incremented");
        }else{
          selectedItem.quantity = 1;
          AddedItems.push(selectedItem);
          console.log("Item Added for the first time");
        }
        await AsyncStorage.setItem('AddedItems', JSON.stringify(AddedItems));
      }catch(error){
        console.error("Failed to add item in cart");
      }
    };

    return (
        <View style={styles.container}>
            <Image source={selectedItem.Image} style={styles.image} />
            <View style={styles.container1}>
              <Text style={styles.foodName}>{name}</Text>
            </View>
            <View style={styles.container2}>
              <Text style={styles.foodPrice}>{price}</Text>
              <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
                <Text  style={styles.cartButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
};

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
      marginRight: 20,
      borderRadius: 15,
      padding: 15,
      backgroundColor: '#000'
    },
    cartButtonText:{
      color: '#FFFFFF',
      fontSize: 12,
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



// import React, { useContext } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { CartContext } from '@/components/CartContext';

// export default function NewScreen() {
//   const { addToCart } = useContext(CartContext);

//   const sampleItem = {
//     ID: '1',
//     Name: 'Pizza',
//     Price: 200,
//     Image: require('@/assets/images/Pizza 1.jpg'),
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => addToCart(sampleItem)}
//       >
//         <Text style={styles.buttonText}>Add Pizza to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   button: { padding: 10, backgroundColor: 'blue', borderRadius: 5 },
//   buttonText: { color: 'white', fontWeight: 'bold' },
// });
