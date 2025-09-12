import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CoffeeCard from "@/components/common/CoffeeCard";
import CoffeeCategory from "@/components/listings/Category";
import { coffeeData } from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Coffee } from "@/interfaces";


const CoffeeContainer: React.FC<Coffee> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
       
        <CoffeeCategory />

    
        <View style={styles.coffeeContainer}>
          {coffeeData.map((Coffee) => (
            <CoffeeCard key={Coffee.id} coffee={Coffee} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  coffeeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // Add spacing between cards
    marginTop: 12,
  },
});
