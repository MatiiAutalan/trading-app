import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}
