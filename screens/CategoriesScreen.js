import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const navigateToCategoryMeals = (categoryId) =>
    navigation.navigate('CategoryMeals', { categoryId });

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        itemData={itemData}
        color={itemData.item.color}
        onNavigate={navigateToCategoryMeals}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CategoriesScreen;
