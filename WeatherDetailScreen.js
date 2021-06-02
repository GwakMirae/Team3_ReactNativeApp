import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '{YOUR_API_KEY}';
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

export default class WeatherDetailScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {
      route: {
        params: { city },
      },
    } = this.props;
    
    fetch(queryUrl(city))
      .then(response => response.json())
      .then(info => {
        console.log(info);
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
  
    const {
        route: {
          params: { city },
        },
      } = this.props;
  
      return (
        <View style={styles.container}>
          <Text>{city}</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});