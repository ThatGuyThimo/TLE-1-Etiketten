import React, { useState } from 'react';
import { Text, View, Switch, Image } from 'react-native';
import styleSheet from 'react-native-web/src/exports/StyleSheet';

function Filters() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Image
              source={require('../assets/lactose.png')}
              style={styles.imageStyle}
          />
          <Text style={styles.filterText}>Lactose!</Text>
          <View style={styles.switchButtonContainer}>
          <Switch
              trackColor={{ false: '#E1E1E1', true: '#F06B05' }}
              thumbColor={isEnabled ? '#0A3D4C' : '#0A3D4C'}
              ios_backgroundColor="#E1E1E1"
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
        </View>
        </View>

        <View style={styles.switchContainer}>
          <Image
              source={require('../assets/lactose.png')}
              style={styles.imageStyle}
          />
          <Text style={styles.filterText}>Gluten!</Text>
          <View style={styles.switchButtonContainer}>
          <Switch
              trackColor={{ false: '#E1E1E1', true: '#F06B05' }}
              thumbColor={isEnabled ? '#0A3D4C' : '#0A3D4C'}
              ios_backgroundColor="#E1E1E1"
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              onValueChange={toggleSwitch}
              value={isEnabled}
          />
        </View>
      </View>
      </View>
  );
}

const styles = styleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    padding: 30,
    marginTop: 10,

  },

  switchButtonContainer: {
    flex: 1,
    alignItems: 'flex-end', // Align the switch to the right
  },

  imageStyle: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  filterText: {
    color: '#F06B05',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export { Filters };