import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Home, Heart, ShoppingBag, Bell } from "lucide-react-native"; 
const FooterNav = () => {
  return (
    <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200 absolute bottom-0 left-0 right-0">
      <TouchableOpacity>
        <Home size={28} color="#d97706" /> 
      </TouchableOpacity>
      <TouchableOpacity>
        <Heart size={28} color="#9ca3af" />
      </TouchableOpacity>
      <TouchableOpacity>
        <ShoppingBag size={28} color="#9ca3af" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Bell size={28} color="#9ca3af" />
      </TouchableOpacity>
    </View>
  );
};

export default FooterNav;
