import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";  

const Index = () => {
  return (
    <View style={[styles.container]}>
      <Text style={{alignContent: 'center'}}>Welcome to the First batch of Exercises</Text>
      <Link href="/task_1" style={[styles.box]}> Go To Task 1 </Link>
      <Link href="/task_2" style={[styles.box]}> Go To Task 2 </Link>
      <Link href="/task_3" style={[styles.box]}> Go To Task 3 </Link>
      <Link href="/task_4" style={[styles.box]}> Go To Task 4 </Link>
      <Link href="/task_5" style={[styles.box]}> Go To Task 5 </Link>
    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  box: {
    backgroundColor: 'lightpink',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
})
