import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '{YOUR_API_KEY}';
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

export default class WeatherDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      route: {
        params: { city },
      },
    } = this.props;
  }

  render() {
  
    const {
        route: {
          params: { city },
        },
      } = this.props;
  
      return (
        <View style={styles.container}>
          <Text style={styles.baseText}>I Love 
          <Text style={styles.innerText}> {city} </Text>
          ♡
          </Text>
        </View>
      )
<<<<<<< HEAD
  }

=======
    }
>>>>>>> c32ecfbc106ad3cf73198d117890c1219bcad7be
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddf',
  },
  innerText: {
    fontWeight: 'bold',
    color: '#faa',
    fontSize : 50,
  },
  baseText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize : 40,
  },
});