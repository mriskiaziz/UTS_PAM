import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BerandaScreen from "./Screen/Beranda";
import RincianScreen from "./Screen/Rincian";
import InformasiScreen from "./Screen/Informasi";
import PemesananScreen from "./Screen/daftarPemesanan";
import BatalScreen from "./Screen/daftarPembatalan";
import ProfileScreen from "./Screen/profile";
import HistoryScreen from "./Screen/history";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Beranda"
          component={BerandaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rincian"
          component={RincianScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Informasi"
          component={InformasiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daftar Pemesanan"
          component={PemesananScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daftar Pembatalan"
          component={BatalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
