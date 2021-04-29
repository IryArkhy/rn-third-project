import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/colors';
import { Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
// V5
// const MealsStack = createNativeStackNavigator();
const MealsStack = createStackNavigator();

function MealsNavigator() {
  return (
    <MealsStack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1490ba',
        },
        headerBackTitleStyle: {
          color: '#fff',
        },
      }}
    >
      <MealsStack.Screen
        options={{
          headerTitle: 'Main Categories',
          headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary,
          },
          headerTitleStyle: {
            color: Platform.OS === 'ios' ? '#000' : '#fff',
          },
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <MealsStack.Screen
        // get dynamic parameters
        options={({ route }) => {
          const selectedCategory = CATEGORIES.find(
            (i) => i.id === route.params.categoryId,
          );
          return { title: selectedCategory.title };
        }}
        name="CategoryMeals"
        component={CategoryMealsScreen}
      />
      <MealsStack.Screen name="MealDetails" component={MealDetailsScreen} />
    </MealsStack.Navigator>
  );
}

export default MealsNavigator;
