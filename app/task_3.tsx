import { Text, View, StyleSheet, Alert } from "react-native";
import React, {useState} from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";  

type CustomComponentProps = {
  onPress: () => void;
  text: string;
};

const CustomComponent: React.FC<CustomComponentProps> = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'lightblue', padding: 20, borderRadius: 5 }}>
        <Text style={styles.text} onPress={onPress}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const Task_3 = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container]}>
        <CustomComponent 
          onPress={() => Alert.alert("Custom Component Pressed")} 
          text="Press Me" 
        />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
export { CustomComponent }; 
export default Task_3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffff',
        },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    }
})

