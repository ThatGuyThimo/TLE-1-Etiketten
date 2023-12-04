import React, { useState } from 'react';
import { Text, View, Switch, TextInput } from 'react-native';

function Filters() {
    const [searchText, setSearchText] = useState('');
    const [HalalEnabled, setHalalEnabled] = useState(false);
    const [VegetarierEnabled, setVegetarierEnabled] = useState(false);
    const [NotenAllergieEnabled, setNotenAllergieEnabled] = useState(false);
    const [LactoseIntolerantieEnabled, setLactoseIntolerantieEnabled] = useState(false);

    const toggleHalalSwitch = () => {
        setHalalEnabled((previousState) => !previousState);
    };

    const toggleVegetarierSwitch = () => {
        setVegetarierEnabled((previousState) => !previousState);
    };

    const toggleNotenAllergieSwitch = () => {
        setNotenAllergieEnabled((previousState) => !previousState);
    };

    const toggleLactoseIntolerantieSwitch = () => {
        setLactoseIntolerantieEnabled((previousState) => !previousState);
    };

    const switches = [
        { label: 'Halal', value: HalalEnabled, toggle: toggleHalalSwitch },
        { label: 'Vegetariër', value: VegetarierEnabled, toggle: toggleVegetarierSwitch },
        { label: 'Noten Allergie', value: NotenAllergieEnabled, toggle: toggleNotenAllergieSwitch },
        { label: 'Lactose Intolerantie', value: LactoseIntolerantieEnabled, toggle: toggleLactoseIntolerantieSwitch },
    ];

    const filteredSwitches = switches.filter((switchItem) =>
        switchItem.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, padding: 10 }}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                placeholder="Search..."
            />
            {filteredSwitches.map((switchItem) => (
                <View key={switchItem.label}>
                    <Text>{switchItem.label}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={switchItem.value ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={switchItem.toggle}
                        value={switchItem.value}

                    />
                </View>
            ))}
        </View>
    );
}

export { Filters };
