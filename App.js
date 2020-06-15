/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from 'react-native';

class App extends Component {
  state = {
    inputText: null,
    movieData: null,
    isLoading: false,
  };

  styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#fff',
    },
  });

  onInputChange = input => {
    this.setState({
      inputText: input,
    });
  };
  onSubmit = async () => {
    if (this.state.inputText) {
      this.setState({
        isLoading: true,
      });
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=12506b1b&t=${encodeURIComponent(
          this.state.inputText,
        )}`,
      );
      console.log(await response.json());
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={this.styles.scrollView}
          />
          <TextInput
            // onChangeText={this.onInputChange}
            value={this.state.inputText}
            placeholder="Search Movie"
            onChangeText={this.onInputChange}
            onSubmitEditing={this.onSubmit}
          />
          {this.state.isLoading ? (
            <ActivityIndicator />
          ) : (
            this.state.movieData && (
              <View>
                <Text>Hello!</Text>
              </View>
            )
          )}
        </SafeAreaView>
      </>
    );
  }
}

export default App;
