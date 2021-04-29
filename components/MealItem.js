import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const MealItem = ({ itemData: { item }, onSelectMeal }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableComp onPress={onSelectMeal}>
        <View style={[styles.row, styles.mealHeader]}>
          <ImageBackground style={styles.image} source={{ uri: item.imageUrl }}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={[styles.row, styles.mealDetails]}>
          <Text>{item.duration}</Text>
          <Text>{item.complexity.toUpperCase()}</Text>
          <Text>{item.affordability}</Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    height: 230,
    width: '93%',
    backgroundColor: '#f59999',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
  },
});

export default MealItem;
