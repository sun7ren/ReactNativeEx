import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const Data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
    { id: 13, name: 'Item 13' },
    { id: 14, name: 'Item 14' },
    { id: 15, name: 'Item 15' },
    { id: 16, name: 'Item 16' },
    { id: 17, name: 'Item 17' },
    { id: 18, name: 'Item 18' },
    { id: 19, name: 'Item 19' },
    { id: 20, name: 'Item 20' },
    { id: 21, name: 'Item 21' },
    { id: 22, name: 'Item 22' },
    { id: 23, name: 'Item 23' },
    { id: 24, name: 'Item 24' },
    { id: 25, name: 'Item 25' },
    { id: 26, name: 'Item 26' },
    { id: 27, name: 'Item 27' },
    { id: 28, name: 'Item 28' },
    { id: 29, name: 'Item 29' },
    { id: 30, name: 'Item 30' },
];

type ItemProps = {title: string};

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const task_8 = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{fontSize: 24, textAlign: 'center', marginVertical: 20, backgroundColor: 'lightblue'}}>Task 8: FlatList Example</Text>
        <FlatList
            data={Data}
            renderItem={({ item }) => <Item title={item.name} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ padding: 20 }}
        />
    </SafeAreaView> 
  )
}

export default task_8

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightpink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
    },
})
