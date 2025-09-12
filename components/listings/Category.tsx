import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

interface CoffeeFilterProps {
  selectedCoffee: string;
  onSelectCoffee: (coffee: string) => void;
}

const CoffeeFilter: React.FC<CoffeeFilterProps> = ({ selectedCoffee, onSelectCoffee }) => {
  const Coffees = ["All Coffee", "Machiato", "Latte", "Americano"];

  return (
    <View style={{ display: "flex", alignItems: "center", marginBottom: 16, gap: 4 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Coffees.map((coffee) => {
          const isSelected = selectedCoffee === coffee;
          return (
            <TouchableOpacity
              key={coffee}
              style={[styles.option, isSelected && styles.optionSelected]}
              onPress={() => onSelectCoffee(coffee)}
            >
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {coffee}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginHorizontal: 4,
  },
  optionSelected: {
    backgroundColor: "#d17842",
  },
  optionText: {
    fontSize: 14,
    color: "#555",
  },
  optionTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CoffeeFilter;
