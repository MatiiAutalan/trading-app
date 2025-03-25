import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { InstrumentsScreen } from '@screens';
import { PortfolioScreen } from '@screens';
import { SearchScreen } from '@screens';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'square';

          switch (route.name) {
            case 'Mercado':
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
              break;
            case 'Portafolio':
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
            case 'Busqueda':
              iconName = focused ? 'search' : 'search-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#4A148C',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 70,
          paddingTop: 8,
          marginBottom: 25,
          width: '90%',
          flexDirection: 'row',
          borderRadius: 15,
          alignSelf: 'center',
          shadowColor: '#4A148C',
          shadowOpacity: 0.3,
          shadowOffset: { height: 0, width: -4 },
          shadowRadius: 16,
        },
        headerShown: true,
      })}
    >
      <Tab.Screen
        name="Mercado"
        component={InstrumentsScreen}
        options={{ title: 'Mercado' }}
      />
      <Tab.Screen
        name="Busqueda"
        component={SearchScreen}
        options={{ title: 'Buscar' }}
      />
      <Tab.Screen
        name="Portafolio"
        component={PortfolioScreen}
        options={{ title: 'Portafolio' }}
      />
    </Tab.Navigator>
  );
};
