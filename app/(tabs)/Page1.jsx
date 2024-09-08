import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react'

const Page1 = () => {
  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.stepContainer} type="title">My First App</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer2}>
      <ThemedText style={styles.basicMargins}>This app may contain sensitive content so take parental advise first</ThemedText>
      </ThemedView>
    </View>
  )
}

export default Page1

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: "white",
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: "grey"
  },
  stepContainer: {
    paddingTop: 100
  },
  stepContainer2:{
    backgroundColor: "black",
  },
  basicMargins:{
    
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    color: "white",
    textAlign: "center"
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
