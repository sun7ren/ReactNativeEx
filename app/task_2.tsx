import { Text, View, StyleSheet, Button, Alert } from "react-native";
import React, {useState} from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";  

const Task_2 = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container]}>
        <Button title="Night Mode" 
        onPress={() => Alert.alert("Night Mode Activated")}/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

export default Task_2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffff',
        },
    }
)


