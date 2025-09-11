import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";

export default function HomeEntry() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/home.png")}
     className="w-full h-full"
    >
      <View className="flex-1 px-16">
		<View className="flex-1"></View>
      <View>
      <View className="justify-center items-center gap-6 mb-12">
	  <Text className="text-white font-semibold text-4xl text-center tracking-widest">Fall in Love with Coffee in Blissful Delight!</Text>
        <Text  className="text-gray-700 font-bold text-lg">
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>
		<View style={{ backgroundColor: "#C67C4E" }}  className="w-full h-12 rounded-2xl justify-center items-center mt-6">
			<Text className="text-white">Get Started</Text>
		</View>
	  </View>
      </View>
	  </View>

    </ImageBackground>
  );
}
