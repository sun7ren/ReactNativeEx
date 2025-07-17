import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const task_5 = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.box, {backgroundColor: 'lightblue'}]}>
        <Text> Square 1</Text>
      </View>
      <View style={[styles.box, {backgroundColor: 'lightgreen'}]}>
        <Text> Square 2</Text>
      </View>
      <View style={[styles.box, {backgroundColor: 'lightcoral'}]}>
        <Text> Square 3</Text>
      </View>
    </View>
  );
}
export default task_5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    }, 
    button: {
        color: 'blue',
        fontSize: 18,
        marginTop: 20,
        textDecorationLine: 'underline',
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
