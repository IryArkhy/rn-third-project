import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ itemData, color, onNavigate }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComp
        style={{ flex: 1 }}
        onPress={onNavigate.bind(this, itemData.item.id)}
      >
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.title} numberOfLines={2}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
