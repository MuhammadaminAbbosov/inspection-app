import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";
import GetStart from "./screens/GetStart";
import CameraScreen from "./screens/Camera";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import AllData from "./screens/AllData";
// import Success from "./screens/Success";
// import Verification from "./screens/Verification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="GetStart" component={GetStart} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="AllData" component={AllData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
