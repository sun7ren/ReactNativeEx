import { StyleSheet, Text, View, Alert} from 'react-native'
import {CustomComponent} from './task_3';

const task_10 = () => {
  return (
    <View style={[styles.container]}>
      <CustomComponent 
        onPress={() => Alert.alert("Custom Component Pressed in Task 10")} 
        text="Press Me in Task 10" 
      />
      <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 20 }}>
        This is Task 10
      </Text>
    </View>
  )
}

export default task_10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffff',
    }
})
