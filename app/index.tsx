import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href={"/(stack)/home"} />;

  // return (
  // <SafeAreaView>
  //   <View className="mt-6 mx-2.5">
  //     <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
  //       Welcome to Nativewind!
  //     </Text>
  //     <Text className="text-4xl text-primary font-work-black">
  //       Welcome to Nativewind!
  //     </Text>
  //     <Text className="text-3xl text-secondary font-work-medium">
  //       Welcome to Nativewind!
  //     </Text>
  //     <Text className="text-2xl text-secondary-100 font-work-light">
  //       Welcome to Nativewind!
  //     </Text>
  //     <Text className="text-xl text-tertiary">Welcome to Nativewind!</Text>
  //     <Link href={"/products"}>Productos</Link>
  //   </View>
  // </SafeAreaView>
  // );
};

export default App;
