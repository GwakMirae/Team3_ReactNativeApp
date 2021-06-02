import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    fetch('http://riotkr.mockable.io/weather-crawlers/cities')
      .then(response => response.json())
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities
        });
      });
  }

  onPressCity(item) {
    console.log('onPressCity =', item);
    this.props.navigation.navigate('Detail', {
        city: item
      });
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (      
      <FlatList style={styles.container}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={(item) => String(item.id)}
                data={this.state.cities}
      >
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#0096c6',
  },
  
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
