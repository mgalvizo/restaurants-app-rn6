import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleTermSubmit = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'saltillo coahuila',
                },
            });

            setResults(response.data.businesses);
        } catch (err) {
            setError('Something went wrong!');
        }
    };

    useEffect(() => {
        handleTermSubmit('pasta');
    }, []);

    return {
        handleTermSubmit,
        results,
        error,
    };
};

export { useResults };
