import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllFoods from './Menu';
import { AntDesign } from '@expo/vector-icons';

const Item = ({ title, onPress, onFavourite }) => {
  const [isFovoured, setIsFavoured] = useState(false);

  const heartHandler = () => setIsFavoured((prev) => !prev);

  const favouriteHandler = async (itemID) => {
    const selectedItem = AllFoods.find((item) => item.ID === itemID);
    try {
      heartHandler();
      const AllFavour = await AsyncStorage.getItem('AddedFavourites');
      const AddedFavourites = AllFavour ? JSON.parse(AllFavour) : [];
      const Checker = AddedFavourites.findIndex((item) => item.ID === selectedItem.ID);

      if (Checker === -1 && !isFovoured) {
        AddedFavourites.push(selectedItem);
        console.log('Item with ID:', itemID, 'added to favourites');
      } else if (Checker !== -1 && isFovoured) {
        AddedFavourites.splice(Checker, 1);
        console.log('Item with ID:', itemID, 'removed from favourites');
      }
      await AsyncStorage.setItem('AddedFavourites', JSON.stringify(AddedFavourites));
    } catch (error) {
      console.log('Failed to manage favourites:', error);
    }
  };

  return (
    <Link href={{ pathname: '/NewScreen', params: { id: title.ID, name: title.Name, IMAGE: title.Image, price: title.Price }}} asChild>
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => favouriteHandler(title.ID)}>
        <FontAwesome name="heart" size={20} color={isFovoured ? 'orange' : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Rearranger} onPress={() => onPress(title.ID)}>
        <FontAwesome name="arrow-up" size={24} color="grey" />
      </TouchableOpacity>
      <View style={styles.container1}>
        <Image source={title.Image} style={styles.image} />
        <Text style={styles.foodName}>{title.Name}</Text>
        <Text style={styles.foodPrice}>{title.Price}</Text>
      </View>
    </TouchableOpacity>
    </Link>
  );
};

export default function Simplified({ myProps }) {
  const [items, setItems] = useState(myProps);

  const handlePress = (itemID) => {
    setItems((prevList) => {
      const selectedItem = prevList.find((item) => item.ID === itemID);
      if (!selectedItem) return prevList;
      const newList = [selectedItem, ...prevList.filter((item) => item.ID !== itemID)];
      return newList;
    });
  };

  return (
    <View style={styles.Display}>
      <View style={styles.cartButton}>
        <TouchableOpacity>
          <Link href={{ pathname: '/(tabs)/Profile' }}>
            <AntDesign name="user" size={31} color="tomato"/>
          </Link>
        </TouchableOpacity>
        <Text style={styles.username}>Malik Abdul Basit</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item title={item} onPress={handlePress} onFavourite={() => {}} />
        )}
        keyExtractor={(item) => item.ID.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Display: {
    flex: 1,
    alignItems: 'center',
  },
  cartButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'White',
    width: '95%',
    marginTop: 10,
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
  container: {
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  favoriteButton: {
    position: 'absolute',
    top: 1,
    right: 1,
    zIndex: 1,
    padding: 7,
    borderRadius: 10,
  },
  Rearranger: {
    position: 'absolute',
    top: 1,
    left: 1,
    zIndex: 1,
    padding: 7,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 130,
    height: 130,
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
  username:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  }
});
