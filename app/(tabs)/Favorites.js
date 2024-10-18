import { StyleSheet, Image, View, Text, FlatList, Pressable, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function Favourites() {
  const [Favoured, setFavoured] = useState([]);
  const [Refreshing, setRefreshing] = useState(false)
  // const [isFovoured, setIsFavoured] = useState(false);

  useEffect(() =>{
    FetchDataFromFavourites();
  },[])

  // const heartHander = () => {
  //   setIsFavoured((prev) => !prev);
  // }
  
  const FetchDataFromFavourites = async () => {
    try {
      const FetchData = await AsyncStorage.getItem("AddedFavourites");
      const AddedFavourites = FetchData ? JSON.parse(FetchData) : [];
      setFavoured(AddedFavourites); 
    } catch (error) {
      console.log('Failed to fetch data from Favourites ASYNC');
    }
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await FetchDataFromFavourites();
    setRefreshing(false);
  };

  const clearFavouritesData = async () => {
    try {
      await AsyncStorage.removeItem('AddedFavourites');
      setFavoured([]);
      console.log('Favourites data cleared');
    } catch (error) {
      console.error('Error clearing Favourites data:', error);
    }
  };

  const Item = ({title}) => {
    return (
      <Link href={{ pathname: '/NewScreen', params: { id: title.ID, name: title.Name, IMAGE: title.Image, price: title.Price }}} asChild>
      <TouchableOpacity style={styles.container}>
          <TouchableOpacity style={styles.favoriteButton}>
              <FontAwesome id='Heart' name="heart" size={20} color={"orange"} />
          </TouchableOpacity>
          <View style={styles.container1}>
              <Image source={title.Image} style={styles.image}/>  
              <Text style={styles.foodName}>{title.Name}</Text>
              <Text style={styles.foodPrice}>{title.Price}</Text>
          </View>
      </TouchableOpacity>
  </Link>
  );
  }
  return(
  <View style={styles.Displayings}>
    <TouchableOpacity style={styles.cartButton} onPress={clearFavouritesData}>
        <Text  style={styles.cartButtonText}>Clear Favourites</Text>
    </TouchableOpacity>
    <FlatList
      data={Favoured}
      renderItem={({ item }) => <Item title={item}/>}
      keyExtractor={item => item.ID}
      numColumns={2}
      contentContainerStyle = {{gap:10, padding:10}}
      columnWrapperStyle = {{gap:10}}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    </View>
)
}

const styles = StyleSheet.create({
  Displayings :{
    flex: 1
  },
container: {
  width: '49%', // 50% of the screen width
  backgroundColor: '#fff',
  borderRadius: 15,
  padding: 10,
  alignItems: 'center',
  position: 'relative', // To position the heart icon
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 5, // For Android shadow
},
favoriteButton: {
  position: 'absolute',
  top: 1,
  right: 1,
  zIndex: 1,
  paddingRight: 7,
  paddingLeft: 7,
  paddingTop: 7,
  paddingBottom: 7,
  borderRadius: 10
},
container1: {
  alignItems: 'center',
  position: 'relative', // To position the heart icon
},
image: {
  width: 130, // Adjust based on your preference
  height: 130, // Adjust based on your preference
  borderRadius: 50,
  marginBottom: 7,
},
foodName: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 5,
},
foodPrice: {
  fontSize: 14,
  color: 'gray',
},
cartButton: {
  borderRadius: 15,
  padding: 15,
  backgroundColor: '#000',
  color: "White",
  width: "98%"
},
cartButtonText: {
  color: '#FFFFFF',
  fontSize: 15,
  textAlign: 'center'
},
});