import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Menu = () => {
  useFocusEffect(() => {
     
      console.log('Screen is focused');

      return () => {
        console.log('Screen is unfocused');
      };
    });

  return (
    <View>
      <Text>This screen refreshes when focused</Text>
    </View>
  );
};

export default Menu;