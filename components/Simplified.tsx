import { StyleSheet, Image, View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import React from 'react'
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import {useState} from 'react'

const Item = ({ title }) => {
    const [isFovoured, setIsFavoured] = useState(title.state);

    const heartHander = () => {
        setIsFavoured((prev) => !prev);
    }
    return (
        <Link href={{ pathname: '/NewScreen', params: { id: title.ID, name: title.Name, IMAGE: title.Image, price: title.Price }}} asChild>
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                    <FontAwesome id='Heart' name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
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


export default function Simplified({myProps}) {
  return (

    <View>
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
        top: 10,
        right: 10,
        zIndex: 1
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