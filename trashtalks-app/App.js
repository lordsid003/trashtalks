import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chatbot from "./screens/Chatbot";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import Info from "./screens/Info";

const Stack = createNativeStackNavigator();

const App = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="intro">

          <Stack.Screen
            name="intro"
            component={Intro}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="chat"
            component={Chatbot}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="info"
            component={Info}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;