import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping.  */}
            {/* A navigation prop will be automatically shared with all screens wrapped within the navigator. */}
            <Stack.Navigator screenOptions={{ headerTitle: 'Business Search' }}>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Result" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
