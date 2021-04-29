import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const navigateToCategoryMeals = (categoryId) =>
    // navigation.navigate({
    //   name: 'CategoryMeals',
    //   params: { categoryId: 'id' },
    // });
    navigation.navigate('CategoryMeals', { categoryId });
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={navigateToCategoryMeals.bind(this, itemData.item.id)}
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
