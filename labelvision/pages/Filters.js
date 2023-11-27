import React, {useState} from 'react';
import { Text, View, Switch } from 'react-native';

function Filters() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  
  };
  let text = "off"
  function switchEnabled() {
    if (isEnabled) {
      text =  'on!'
    }
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Filters!</Text>
        <Text>{text}</Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    );
  }

  export {Filters}