import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'

const task_9 = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch('https://randomuser.me/api/?results=100&inc=name,login')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
 }, []);

  if (loading) {
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text style={{alignContent: 'center'}}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name.first} {item.name.last}</Text>
          </View>
        )}
        keyExtractor={item => item.login.uuid}
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
}

export default task_9

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    title: {
        fontSize: 15,
    },
    container: {
        flex: 1,
    }
})
