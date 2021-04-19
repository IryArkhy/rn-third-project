import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

// V5
const MealsStack = createStackNavigator();

function MealsNavigator() {
  return (
    <MealsStack.Navigator initialRouteName="Categories">
      <MealsStack.Screen name="Categories" component={CategoriesScreen} />
      <MealsStack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <MealsStack.Screen name="MealDetail" component={MealDetailsScreen} />
    </MealsStack.Navigator>
  );
}

export default MealsNavigator;
