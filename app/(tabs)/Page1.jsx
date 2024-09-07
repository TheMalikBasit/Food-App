import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react'

const Page1 = () => {
  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My First App</ThemedText>
      </ThemedView>
      <ThemedText style={styles.basicMargins}>This app may contain sensitive content so take parental advise first</ThemedText>
      
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    gap: 8,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  basicMargins:{
    marginTop: 10
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
