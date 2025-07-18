import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const listener2 = (callback: (data: string) => void ) => {
  const interval = setInterval(() => {
    callback('loading');
  }, 1000);
  return () => clearInterval(interval);
}


const listener = () => {
  return (
    <View>
    </View>
  )
}

export default listener
export {listener2}

const styles = StyleSheet.create({})
