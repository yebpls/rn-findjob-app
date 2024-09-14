import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
