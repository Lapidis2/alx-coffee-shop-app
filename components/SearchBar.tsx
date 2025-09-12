import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <View className="flex-row items-center p-2">
  
      <View className="flex-row flex-1 items-center bg-gray-800 rounded-lg px-4 py-2">
        <Icon name="search" size={20} color="#999" />
        <TextInput
          className="flex-1 text-white ml-2"
          placeholder="Search coffee"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
        />
      </View>

  
      <TouchableOpacity className="ml-3 bg-orange-600 p-3 rounded-lg">
        <Icon name="options" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
