import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ResultItem = ({ result }) => {
    const { image_url, name, rating, review_count } = result;

    return (
        <View style={styles.containerStyle}>
            {/* Rendering an image that comes in an API response */}
            <Image style={styles.imageStyle} source={{ uri: image_url }} />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text>
                {rating} Stars, {review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15,
    },
    imageStyle: {
        marginBottom: 5,
        width: 250,
        height: 150,
        borderRadius: 4,
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ResultItem;
