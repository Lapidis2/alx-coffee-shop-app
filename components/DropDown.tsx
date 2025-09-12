import React, { useState } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const locations = [
  { label: "Kigali", value: "kigali" },
  { label: "Musanze", value: "musanze" },
  { label: "Huye", value: "huye" },
  { label: "Rubavu", value: "rubavu" },
];

export default function LocationDropdown() {
  const [location, setLocation] = useState(null);

  return (
    <View className="p-4">
      {/* Label aligned with dropdown */}
      <Text className="text-white text-lg font-semibold mb-2">
        Location
      </Text>
      <Dropdown
        style={{paddingHorizontal: 0 }}
        placeholderStyle={{ color: "#999" }}
        selectedTextStyle={{ color: "#000" }}
        data={locations}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Bilzen, Tanjungbalai"
        value={location}
        onChange={(item) => setLocation(item.value)}
      />

      {location && (
        <Text className="mt-3 text-black">
          Bilzen, Tanjungbalai <Text className="font-bold">{location}</Text>
        </Text>
      )}
    </View>
  );
}
