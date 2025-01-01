import { StyleSheet, Image, View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react'
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllFoods from './Menu';
import { AntDesign } from '@expo/vector-icons'

const Item = ({ title }) => {
    const [isFovoured, setIsFavoured] = useState(true);
    
    const heartHander = () => {
        setIsFavoured((prev) => !prev);
    }

    const FavouriteHandler = async (itemID) => {
        const selectedItem = AllFoods.find(item => item.ID === itemID);
        try {
            heartHander();
            const AllFavour = await AsyncStorage.getItem("AddedFavourites");
            const AddedFavourites = AllFavour ? JSON.parse(AllFavour) : [];
            const Checker = AddedFavourites.findIndex(item => item.ID === selectedItem.ID);
            if(Checker === -1 && isFovoured){
                AddedFavourites.push(selectedItem);
                console.log("Item with ID : ", itemID , " is added to favourites");
            }else if(Checker !== -1 && !isFovoured){
                AddedFavourites.splice(Checker, 1);
                console.log("Item with ID : ", itemID , " is removed from favourites");
            }
            await AsyncStorage.setItem("AddedFavourites", JSON.stringify(AddedFavourites));
        } catch (error) {
            console.log("Failed to add item in Favourites")
        }
    }
    return (
        <Link href={{ pathname: '/NewScreen', params: { id: title.ID, name: title.Name, IMAGE: title.Image, price: title.Price }}} asChild>
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity style={styles.favoriteButton} onPress={() =>{FavouriteHandler(title.ID)}}>
                    <FontAwesome id='Heart' name="heart" size={20} color={isFovoured ? "grey" : "orange"} />
                </TouchableOpacity>
                <View style={styles.container1}>
                    <Image source={title.Image} style={styles.image}/>  
                    <Text style={styles.foodName}>{title.Name}</Text>
                    <Text style={styles.foodPrice}>{title.Price}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};

// const clearFavouritesData = async () => {
//     try {
//       await AsyncStorage.removeItem('AddedFavourites');
//       console.log('Favourites data cleared');
//     } catch (error) {
//       console.error('Error clearing Favourites data:', error);
//     }
//   };


export default function Simplified({myProps}) {
return (
<View style={styles.Display}>
    <View style={styles.cartButton}>
        <TouchableOpacity>
            <Link href={{ pathname: '/(tabs)/Profile'}}>
                <AntDesign name='user' size={29} color={'#737373'}/>
            </Link>
        </TouchableOpacity>
        <Text style={styles.foodName}>Malik Abdul Basit</Text>
    </View>
    <FlatList
      data={myProps}
      renderItem={({ item }) => <Item title={item}/>}
      keyExtractor={item => item.ID}
      numColumns={2}
      contentContainerStyle = {{gap:10, padding:10}}
      columnWrapperStyle = {{gap:10}}
    />
</View>
  )
}

const styles = StyleSheet.create({
    Display :{
        flex: 1,
        alignItems: 'center',
    },
    CenteralContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor : 'white'
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
    cartButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        color: "White",
        width: "95%",
        marginTop: 10,
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
    cartButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center'
    },
    container1: {
        alignItems: 'center',
        position: 'relative', // To position the heart icon
    },
    container2: {
        width: '95%', // 50% of the screen width
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        margin: 10,
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
    image: {
        width: 130, // Adjust based on your preference
        height: 130, // Adjust based on your preference
        borderRadius: 50,
        marginBottom: 7,
    },
    image2: {
        width: 230, // Adjust based on your preference
        height: 120, // Adjust based on your preference
        borderRadius: 50,
        marginBottom: 2,
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
});