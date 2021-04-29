import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ navigation, route }) => {
  const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go to the first screen" onPress={navigation.popToTop} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
  },
});

export default MealDetailsScreen;
