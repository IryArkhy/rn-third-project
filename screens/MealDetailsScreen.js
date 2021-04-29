import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
      <Button title="Go to the first screen" onPress={navigation.popToTop} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailsScreen;
