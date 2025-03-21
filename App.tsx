import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  InstrumentsScreen  from './src/screens/Instruments/InstrumentsScreen';
import PortfolioScreen from './src/screens/Portfolio/PortfolioScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 14 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: 'white', height: 60 },
            headerShown: true,
          }}
        >
          <Tab.Screen name="Instrumentos" component={InstrumentsScreen} />
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}