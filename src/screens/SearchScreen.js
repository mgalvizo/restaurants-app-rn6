import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useResults } from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const { handleTermSubmit, results, error } = useResults();

    const handleSetTerm = newSearchTerm => {
        setTerm(newSearchTerm);
    };

    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => result.price === price);
    };

    return (
        // Wrapping everything between <> </> also solves the issue of not showing the entire content when scrolling on Android
        <View style={styles.containerStyle}>
            <SearchBar
                term={term}
                onTermChange={handleSetTerm}
                // Needed to pass the argument to the function
                onTermSubmit={() => handleTermSubmit(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        // On Android devices it is needed so the view only extends on the visible portion of the screen
        // Add it to the most parent View element, this can be replaced by instead of using a View using a fragment like tag <></> to wrap everything
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SearchScreen;
