import React  from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClickHello = () => {
    this.setState({ value: 'Hello' });
  }

  handleClickGoodbye = () => {
    this.setState({value: 'Goodbye'});
  }

  handleClickUpperCase = () => {
    this.setState({value: this.state.value.toUpperCase()});
  }

  handleClickLowerCase = () => {
    this.setState({value: this.state.value.toLowerCase()});
  }

  handleClickMessage = () => {
    Alert.alert("Message", this.state.value);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>hello-goodbye-react-native-v1</Text>

        <TextInput
          style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10}}
          onChangeText={(value) => this.setState({value})}
          value={this.state.value}
        />

        <Button
          title="Hello"
          onPress={this.handleClickHello} />

        <Button
          title="Goodbye"
          onPress={this.handleClickGoodbye} />

        <Button
          title="Upper Case"
          onPress={this.handleClickUpperCase}
          disabled={!this.state.value} />

        <Button
          title="Lower Case"
          onPress={this.handleClickLowerCase}
          disabled={!this.state.value} />

        <Button
          title="Show Input Message"
          onPress={this.handleClickMessage}
          disabled={!this.state.value} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 60
  },

  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
 
});
