import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = (props) => {
  // console.log(props);
  const handleNavigate = () => props.navigation.navigate('CategoryMeals');
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button title="Go to Meals Screen" onPress={handleNavigate} />
      {/* Use this on authentication for example,
      when you whant to replace current screen with a new one, and there will not be go back option */}
      <Button
        title="Replace Screen"
        onPress={() => props.navigation.replace('CategoryMeals')}
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

export default CategoriesScreen;
