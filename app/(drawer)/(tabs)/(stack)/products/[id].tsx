import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) return <Redirect href={"/home"} />;

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="font-work-black mt-2">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
