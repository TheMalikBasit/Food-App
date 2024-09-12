import AllFoods from '@/components/Menu';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, Platform, Text, ScrollView } from 'react-native';

export default function HomeScreen1(){
    return(
        <ScrollView>
        <ThemedView style = {styles.PageColor}>
            <ThemedText style = {styles.basicMargins}></ThemedText>
            {/* Pizza Section */}
            <Image
                source={AllFoods[0].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[0].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[0].Price}</ThemedText>
            </ThemedView>
            {/* Burger Section */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* Nihari / Pai */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* Pulao */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* Biryani */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* Snadwitch */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* French Fries */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
            </ThemedView>
            {/* Patty Burger */}
            <Image
                source={AllFoods[1].Image}
                style = {styles.PizzaImage}
            />
            <ThemedView style = {styles.positioning}>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Name}</ThemedText>
                <ThemedText style = {styles.fontStyles}>{AllFoods[1].Price}</ThemedText>
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
    }
});
  