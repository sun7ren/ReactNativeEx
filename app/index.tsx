import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Link } from "expo-router";  

const image = {
  uri: "https://picsum.photos/300/200",
  width: 340,
  height: 100,
}

const Index = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff', padding: 20, alignContent: 'center'}}>
      <View style={styles.container}>
        <Image source={image} style={{marginBottom: 20, margin: 10}} />
        <Text style={{margin: 10}}>Welcome to the First batch of Exercises</Text>
        <Link href="/task_1" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 1</Text>
        </Link>
        <Link href="/task_2" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 2</Text>
        </Link>
        <Link href="/task_3" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 3</Text>
        </Link>
        <Link href="/task_4" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 4</Text>
        </Link>
        <Link href="/task_5" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 5</Text>
        </Link>
        <Link href="/task_6" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 6</Text>
        </Link>
        <Link href="/task_7" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 7</Text>
        </Link>
        <Link href="/task_8" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 8</Text>
        </Link>
        <Link href="/task_9" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 9</Text>
        </Link>
        <Link href="/task_10" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 10</Text>
        </Link>
        <Link href="/task_11" style={[styles.box]}>
          <Text style={{ color: 'white' }}>Go To Task 11</Text>
        </Link>
        <Link href="/task_12" style={[styles.box]}> 
          <Text style={{ color: 'white' }}>Go To Task 12</Text>
        </Link>
      </View>
    </ScrollView>
  )
}

export default Index;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ffff',
  },
  box: {
    backgroundColor: 'darkgreen',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
})
