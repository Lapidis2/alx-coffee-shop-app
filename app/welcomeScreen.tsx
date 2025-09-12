import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
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
            <Text className="text-white font-semibold text-4xl text-center tracking-widest">
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text className="text-gray-700 font-bold text-lg">
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)")}
              className="w-full h-12 mt-6 bg-[#C67C4E] rounded-2xl justify-center items-center"
              activeOpacity={0.7}
            >
              <Text className="text-white font-bold text-sm">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
