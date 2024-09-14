import {createStackNavigator} from '@react-navigation/stack';
import {RootParams} from '../type/navigation.type';
import HomePage from '../screens/home/HomePage';
import DetailPage from '../screens/detail/DetailPage';
import {NAME_NAVIGATION} from '../common/enum';

const Stack = createStackNavigator<RootParams>();

export function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAME_NAVIGATION.HOME} component={HomePage} />
      <Stack.Screen name={NAME_NAVIGATION.DETAIL} component={DetailPage} />
    </Stack.Navigator>
  );
}
