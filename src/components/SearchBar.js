import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// Comes with our expo setup
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            {/* The name prop is the name of the icon to show */}
            <Feather
                style={styles.iconStyle}
                name="search"
                // size={30}
                color="black"
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                // We pass a function and it will be run when the user either hits Enter or taps on the Okay (checkmark) button
                // Useful for APi calls
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
});

export default SearchBar;
