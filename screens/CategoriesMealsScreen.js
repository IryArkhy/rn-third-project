import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation, route }) => {
  const renderMealItem = (itemData) => {
    const handleNavigate = () =>
      navigation.navigate({
        name: 'MealDetails',
        params: {
          mealId: itemData.item.id,
        },
      });
    return <MealItem itemData={itemData} onSelectMeal={handleNavigate} />;
  };
  const catId = route.params.categoryId;
  const displaydMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0,
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displaydMeals}
        keyExtractor={(item, _index) => item.id}
        renderItem={renderMealItem}
      />
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
