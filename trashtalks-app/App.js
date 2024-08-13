import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chatbot from "./screens/Chatbot";
import Intro from "./screens/Intro";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sample">
        <Stack.Screen
          name="sample"
          component={Intro}
        />
        <Stack.Screen
          name={"chat"}
          component={Chatbot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;