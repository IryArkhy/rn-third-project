import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = ({ navigation }) => {
  const handleNavigate = () => navigation.navigate({ name: 'MealDetails' });
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button title="Go to Meal Details" onPress={handleNavigate} />
      <Button title="Go Back" onPress={navigation.goBack} />
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

export default CategoryMealsScreen;
