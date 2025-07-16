import { Text, View, StyleSheet, Button, Alert } from "react-native";
import React, {useState} from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";  

const CustomComponent = ({ onPress, text }: { onPress: () => void; text: string }) => {
    return (
        <View style={{ backgroundColor: 'lightgreen', padding: 10, borderRadius: 5, margin: 10 }}>
            <Text
            style={{ color: 'black', fontSize: 16, textAlign: 'center' }}
            onPress={onPress}
            >
            {text}
            </Text>
        </View>
    );
}

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
export default Task_3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffff',
        },
    }
)


