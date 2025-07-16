import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const task_4 = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.container]}>
      <View>
        <Text style={[styles.text]}>Count: {count}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green'}]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={{ color: 'white' }}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red'}]}
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        >
          <Text style={{ color: 'white' }}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default task_4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    button: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    }
})