import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultScreen = ({ route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);

    const getResult = async id => {
        try {
            const response = await yelp.get(`/${id}`);

            setResult(response.data);
        } catch (err) {}
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    imageStyle: {
        width: 300,
        height: 200,
        marginBottom: 10,
        marginLeft: 10,
    },
});

export default ResultScreen;
