import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";

const StackLayout = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            size={20}
            className="mr-5"
            color={tintColor}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Detalle Producto",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes Pantalla",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
