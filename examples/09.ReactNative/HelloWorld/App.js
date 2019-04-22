import React, {Component} from 'react';
import { View, Text } from 'react-native';
import myStyle from './styles/main.style';
import Main from './components/main.component'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World From Main',
    }
  }

  handler = () => {
    this.setState({text: 'Changed'});
  }

  render() {
    return (
      <View style={myStyle.container}>
        <Text style={myStyle.paragraph1}>Text1</Text>
        <Text style={myStyle.paragraph2}>Text2</Text>
        <Text style={myStyle.paragraph3}>Text3</Text>
        <Text style={myStyle.paragraph4}>Text4</Text>
      </View>
    );
  }
}
