import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Navbar = () => {
    const comp = <View style={styles.container}>
        <Button
        onPress={() => {
            console.log('You tapped the button!');
        }}
        title="Filters"
        />
        <Button
        onPress={() => {
            console.log('You tapped the button!');
        }}
        title="Camera"
        />
        <Button
        onPress={() => {
            console.log('You tapped the button!');
        }}
        title="Details"
        />
        <View>
        </View>


    </View>
    return comp
  };

  const styles = StyleSheet.create({
    container: {
    //   flex: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#F2F2F2',
      marginTop: '100px',
      borderRightWidth: '2px',
      
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  
export {Navbar};