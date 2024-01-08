import React, { useState } from 'react';
import { Text, View, Switch, TextInput, Image } from 'react-native';

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
        { label: 'Halal', value: HalalEnabled, toggle: toggleHalalSwitch, image: require('../assets/halal-sign.png') },
        { label: 'Vegetariër', value: VegetarierEnabled, toggle: toggleVegetarierSwitch, image: require('../assets/vegetarian.png') },
        { label: 'Noten Allergie', value: NotenAllergieEnabled, toggle: toggleNotenAllergieSwitch, image: require('../assets/peanut-free.png') },
        { label: 'Lactose Intolerantie', value: LactoseIntolerantieEnabled, toggle: toggleLactoseIntolerantieSwitch, image: require('../assets/lactose.png') },
    ];

    const filteredSwitches = switches.filter((switchItem) =>
        switchItem.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                placeholder="Search..."
            />
            {filteredSwitches.map((switchItem) => (
                <View key={switchItem.label} style={styles.switchContainer}>
                    {switchItem.image && (
                        <Image
                            source={switchItem.image}
                            style={styles.imageStyle}
                        />
                    )}
                    <Text style={styles.filterText}>{switchItem.label}</Text>
                    <View style={styles.switchButtonContainer}>
                        <Switch
                            trackColor={{ false: '#E1E1E1', true: '#F06B05' }}
                            thumbColor={switchItem.value ? '#0A3D4C' : '#0A3D4C'}
                            ios_backgroundColor="#E1E1E1"
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            onValueChange={switchItem.toggle}
                            value={switchItem.value}
                        />
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    searchInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        width: 200,
        borderRadius: 20,
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
        alignItems: 'flex-end',
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
};

export { Filters };
