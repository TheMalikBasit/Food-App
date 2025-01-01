import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';

const Menu = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('Init: Component mounted.');
    return () => {
      console.log('Dispose: Cleanup logic executed.');
    };
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Type here"
        value={input}
        onChangeText={setInput}
      />
    </View>
  );
};

export default Menu;
