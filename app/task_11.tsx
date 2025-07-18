import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

type State = {
  count: number;
};

class task_11 extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  handlePress = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

   handleSecond = () => {
    this.setState(prevState => ({ count: prevState.count <= 0? prevState.count : prevState.count - 1 }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Task 11</Text>
        <Button 
          title="Increment"
          onPress={this.handlePress}
          color="blue"
        />
        <Button 
          title="Decrement"
          onPress={this.handleSecond}
          color="blue"
        />
        <Text style={styles.text}>Button pressed: {this.state.count} times</Text>
      </View>
    )
  }
}

export default task_11;

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
