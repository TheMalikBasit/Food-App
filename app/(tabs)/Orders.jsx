import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import AllFoods from '@/components/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Orders() {
  
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    FetchedCartItems();
  }, []);

  const Increment = async (itemID) => {
    try {
      const updatedOrders = Orders.map(item => {
        if (item.ID === itemID && item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      });
      setOrders(updatedOrders);
      await AsyncStorage.setItem('AddedItems', JSON.stringify(updatedOrders));
    } catch (error) {
      console.error("Error incrementing item quantity:", error);
    }
  };

  const Decrement = async (itemID) => {
    try {
      const updatedOrders = Orders.map(item => {
        if (item.ID === itemID && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setOrders(updatedOrders);
      await AsyncStorage.setItem('AddedItems', JSON.stringify(updatedOrders));
    } catch (error) {
      console.error("Error decrementing item quantity:", error);
    }
  };

  const FetchedCartItems = async () => {
    try {
      const FetchedItems = await AsyncStorage.getItem('AddedItems');
      const AddedItems = FetchedItems ? JSON.parse(FetchedItems) : [];
      setOrders(AddedItems);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  // const FetchedCartItemsV2 = async () => {
  //   try {
  //     const FetchedItems = await AsyncStorage.getItem('AddedItems');

  //     if()
  //   } catch (error) {
      
  //   }
  // }
 

  const removeItemFromCart = async (itemID) => {
    try {
      const updatedCart = Orders.filter(item => item.ID !== itemID);
      await AsyncStorage.setItem('AddedItems', JSON.stringify(updatedCart));
      setOrders(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCartData = async () => {
    try {
      await AsyncStorage.removeItem('AddedItems');
      setOrders([]);
      console.log('Cart data cleared');
    } catch (error) {
      console.error('Error clearing cart data:', error);
    }
  };
  const Item = ({ title }) => {
    console.log("This called from Item Function", title.ID);
    
    console.log("Quantity of item ID : ", title.ID ," is : " ,title.quantity)
    return (
      <View style={styles.OuterDiv}>
        <Image source={title.Image} style={styles.image} />
        <View style={styles.InnerContainer}>
          <View style={styles.QuantityContainer}>
            <TouchableOpacity><Text style={styles.QuantityPlus} onPress={() => Increment(title.ID)}>+</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.QuantityMinus} onPress={() => Decrement(title.ID)}>-</Text></TouchableOpacity>
          </View>
          <View style={styles.QuantityCounterContainer}>
          <TextInput style={styles.foodCount}>{title.quantity}</TextInput>
          </View>
        </View>
        <View style={styles.InnerContainer}>
          <Text style={styles.foodName}>{title.Name}</Text>
          <Text style={styles.foodPrice}>{title.Price}</Text>
        </View>
      </View>
    );
  };

  return (
  <View style={styles.FlexHandler}>
      <TouchableOpacity style={styles.cartButton} onPress={clearCartData}>
        <Text  style={styles.cartButtonText}>Clear Cart</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <FlatList
        data={Orders}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.ID}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  FlexHandler: {
    flex: 1,
    alignItems: "center",
  },
  FlexHandler1: {
    height: 30,
    backgroundColor: 'black',
    width: "100%"
  },
  cartButton: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#000',
    color: "White",
    width: "95%",
    marginTop: 10 
  },
  QuantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  QuantityCounterContainer :{
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 7,
    textAlign: "center"
  },
  QuantityPlus:{
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 10,
    textAlign: "center"
  },
  QuantityMinus: {
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 10,
    textAlign: "center"
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center'
  },
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
  OuterDiv: {
    width: '97%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  InnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 160,
    height: 130,
    borderRadius: 20,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30
  },
  foodPrice: {
    fontSize: 16,
    
  },
  foodCount: {
    fontSize: 14,
    color: 'gray',
  },
});


// import React, { useContext } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
// import { CartContext } from '@/components/CartContext';

// export default function Orders() {
//   const { cartItems, updateQuantity, clearCart, removeFromCart } =
//     useContext(CartContext);

//   const Increment = (itemID) => {
//     const item = cartItems.find((item) => item.ID === itemID);
//     if (item && item.quantity < 10) {
//       updateQuantity(itemID, item.quantity + 1);
//     }
//   };

//   const Decrement = (itemID) => {
//     const item = cartItems.find((item) => item.ID === itemID);
//     if (item && item.quantity > 1) {
//       updateQuantity(itemID, item.quantity - 1);
//     }
//   };

//   const Item = ({ title }) => {
//     return (
//       <View style={styles.OuterDiv}>
//         <Image source={title.Image} style={styles.image} />
//         <View style={styles.InnerContainer}>
//           <TouchableOpacity onPress={() => Increment(title.ID)}>
//             <Text style={styles.QuantityPlus}>+</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => Decrement(title.ID)}>
//             <Text style={styles.QuantityMinus}>-</Text>
//           </TouchableOpacity>
//           <Text>{title.quantity}</Text>
//         </View>
//         <View style={styles.InnerContainer}>
//           <Text style={styles.foodName}>{title.Name}</Text>
//           <Text style={styles.foodPrice}>{title.Price}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.cartButton} onPress={clearCart}>
//         <Text style={styles.cartButtonText}>Clear Cart</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={cartItems}
//         renderItem={({ item }) => <Item title={item} />}
//         keyExtractor={(item) => item.ID}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   FlexHandler: {
//     flex: .95
//   },
//   FlexHandler1: {
//     height: 30,
//     backgroundColor: 'black',
//     width: "100%"
//   },
//   cartButton: {
//     borderRadius: 15,
//     padding: 15,
//     backgroundColor: '#000',
//     color: "White",
//     width: "98%"
//   },
//   QuantityContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   QuantityCounterContainer :{
//     fontSize: 18,
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     marginTop: 10,
//     paddingRight: 10,
//     paddingLeft: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     borderRadius: 7,
//     textAlign: "center"
//   },
//   QuantityPlus:{
//     fontSize: 18,
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     marginRight: 10,
//     paddingRight: 10,
//     paddingLeft: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     borderRadius: 10,
//     textAlign: "center"
//   },
//   QuantityMinus: {
//     fontSize: 18,
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     paddingRight: 10,
//     paddingLeft: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     borderRadius: 10,
//     textAlign: "center"
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 15,
//     textAlign: 'center'
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//   },
//   OuterDiv: {
//     width: '99%',
//     marginTop: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 10,
//     position: 'relative',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   InnerContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   image: {
//     width: 160,
//     height: 130,
//     borderRadius: 20,
//   },
//   foodName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 30
//   },
//   foodPrice: {
//     fontSize: 16,
    
//   },
//   foodCount: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

