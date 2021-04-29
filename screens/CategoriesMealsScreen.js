import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation, route }) => {
  const handleNavigate = () => navigation.navigate({ name: 'MealDetails' });
  const catId = route.params.categoryId;
  const selectedCategory = CATEGORIES.find((i) => i.id === catId);
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
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
