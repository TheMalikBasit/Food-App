import { View, Text,TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const TabBar = ({state, descriptors, navigation}) => {

  const icons = {
    index: (props)=> <AntDesign name='home' size={26} color={'#737373'} {...props}/>,
    Profile: (props)=> <AntDesign name='user' size={26} color={'#737373'} {...props}/>,
    Menu: (props)=> <AntDesign name="book" size={24} color={'#737373'} {...props} />,
    Orders: (props)=> <AntDesign name="shoppingcart" size={24} color={'#737373'} {...props} />,
    Favorites: (props)=> <AntDesign name="hearto" size={24} color={'#737373'} {...props} />,
  };


  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.name}
          style = {styles.tabBarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              icons[route.name]({
                color: isFocused? 'orange' : '#737373'
              })
            }
            <Text style={{ color: isFocused ? 'orange' : '#737373' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar:{
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center'
  }
})
export default TabBar