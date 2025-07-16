import { Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";  

export default function Task_1() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{height: 100, flexDirection: 'row'}}>
        <View style={{ backgroundColor: 'lightblue'}}>
          <Text style={{alignContent: "center", margin: 'auto', padding: 10}}>Hello World!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

