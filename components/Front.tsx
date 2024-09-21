import AllFoods from '@/components/Menu';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, View, TouchableOpacity, Platform, Text, ScrollView, ImageBackground, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen1(){

    const [isFovoured, setIsFavoured] = useState(false);

    const heartHander = () => {
        setIsFavoured((action) => !action);
    }
    return(
        <ScrollView>
        <ThemedView style = {styles.PageColor}>
            
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome id='Heart' name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[0].Image} // Replace with actual image source
                        style={styles.image}
                    />
                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[0].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[0].Price}</Text>
                </View>
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[1].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[1].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[1].Price}</Text>
                </View>
                </TouchableOpacity> 
            </ThemedView>
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[2].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[2].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[2].Price}</Text>
                </View> 
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[3].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[3].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[3].Price}</Text>
                </View> 
                </TouchableOpacity>
            </ThemedView>
            <ThemedView style = {styles.CenteralContainer}>
            <TouchableOpacity style={styles.container2}>
                {/* Favorite Heart Button */}
                <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                    <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[1].Image} // Replace with actual image source
                        style={styles.image2}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[5].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[5].Price}</Text>
                </View>
                </TouchableOpacity>
            </ThemedView>
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[4].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[4].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[4].Price}</Text>
                </View> 
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                {/* Favorite Heart Button */}
                <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                    <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[5].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[5].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[5].Price}</Text>
                </View>
                </TouchableOpacity>
            </ThemedView>
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[4].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[4].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[4].Price}</Text>
                </View>
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[5].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[5].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[5].Price}</Text>
                </View>
                </TouchableOpacity>
            </ThemedView>           
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[4].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[4].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[4].Price}</Text>
                </View> 
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[5].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[5].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[5].Price}</Text>
                </View>
                </TouchableOpacity>
            </ThemedView>
            <ThemedView style = {styles.CenteralContainer}>
                {/* Pizza Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[4].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[4].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[4].Price}</Text>
                </View> 
                </TouchableOpacity>
                {/* Burger Section */}
                <TouchableOpacity style={styles.container}>
                    {/* Favorite Heart Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={heartHander}>
                        <FontAwesome name="heart" size={20} color={isFovoured ? "orange" : "grey"} />
                    </TouchableOpacity>
                <View style={styles.container1}>
                    {/* Food Image */}
                    <Image
                        source={AllFoods[6].Image} // Replace with actual image source
                        style={styles.image}
                    />

                    {/* Food Name and Price */}
                    <Text style={styles.foodName}>{AllFoods[6].Name}</Text>
                    <Text style={styles.foodPrice}>{AllFoods[6].Price}</Text>
                </View> 
                </TouchableOpacity>
            </ThemedView>
        
        </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    CenteralContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor : 'white'
    },
    ItemContainer : {
        width: '45%',
        height: 100,
        borderColor: 'black',
        borderRadius: 25,
        borderCurve: 'continuous'
    },
    PizzaImage:{
        width: '100%',
        height: 200
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    basicMargins:{
        marginTop: 10
    },
    fontStyles: {
        marginTop: 20,
        fontWeight: 800,
        fontSize: 25
    },
    PageColor :{
        flex: 1
    },
    positioning:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // Code below is written by GPT
    container: {
        width: '45%', // 50% of the screen width
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
  