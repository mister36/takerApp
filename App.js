import React, { useContext, useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";
import MyNotesScreen from "./src/screens/MyNotesScreen";
import FolderViewScreen from "./src/screens/FolderViewScreen";
import FriendsScreen from "./src/screens/FriendsScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

import { AuthProvider } from "./src/context/AuthContext";
import { NoteProvider } from "./src/context/NoteContext";
import { FontProvider } from "./src/context/FontContext";
import AuthContext from "./src/context/AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CreateStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  // Drawer connects MyNotes page with Account
  return (
    <Drawer.Navigator sceneContainerStyle={{ backgroundColor: "#FFFFFF" }}>
      <Drawer.Screen name="My Notes" component={MyNotesScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
};

const FolderViewStack = () => {
  return (
    <CreateStack.Navigator headerMode="none">
      <CreateStack.Screen name="DrawerStack" component={DrawerNav} />
      <CreateStack.Screen name="FolderView" component={FolderViewScreen} />
    </CreateStack.Navigator>
  );
};

const App = () => {
  const { state, logout, setToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  // logout();

  // Checks if there is a token present in AsyncStorage, then saves to state
  useEffect(() => {
    async function checkToken() {
      try {
        const token = await AsyncStorage.getItem("token");
        setToken(token);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    checkToken();
  }, []);

  const isSignedIn = state.token;
  // console.log(state);
  return isLoading ? (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Loading" component={LoadingScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  ) : !isSignedIn ? (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          activeBackgroundColor: "#F4F4F4",
        }}
      >
        <Tab.Screen
          name="My Notes"
          component={FolderViewStack}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="sticky-note-o" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Friends"
          component={FriendsScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="user-friends" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <NoteProvider>
        <FontProvider>
          <App />
        </FontProvider>
      </NoteProvider>
    </AuthProvider>
  );
};
