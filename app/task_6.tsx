import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const task_6 = () => {
  return (
    <ScrollView >
        <View style={[styles.box]}>
            <Text>Square 1</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 2</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 3</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 4</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 5</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 6</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 7</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 8</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 9</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 10</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 11</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 12</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 13</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 14</Text>
        </View>
        <View style={[styles.box]}>
            <Text>Square 15</Text>
        </View>
    </ScrollView>
  )
}

export default task_6

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        margin: 20,
    }

})
