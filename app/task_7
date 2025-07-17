import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const task_7 = () => {
  const [text, onText] = useState("");
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>What is your name?</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                style={[styles.box, {flex: 1}]}
                placeholder="Enter Your Name"
                onChangeText={onText}
                value={text}
            />
            <TouchableOpacity style={[styles.button, {marginLeft: 10}]} onPress={() => alert(`You entered ${text}`)}>
                <Text>Enter</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default task_7

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    box: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'lightgray',
        borderColor: 'darkgray',
        textDecorationColor: 'darkgray'
    },
    button:{
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'lightblue',
    },
    text: {
        fontWeight: 'bold', 
        textDecorationColor: 'darkblue', 
        alignContent: 'center', 
        margin: 5
    }
})
