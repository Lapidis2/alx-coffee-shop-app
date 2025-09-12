import React from "react";
import { View, FlatList,StyleSheet } from "react-native";
import { useState } from "react";
import CoffeeCard from "../common/CoffeeCard";
import CoffeeCategory from "./Category";
import { coffeeData} from "@/data";
const CoffeeListing: React.FC = () => {
	const [selectedCoffee, setSelectedCoffee] = useState("All Coffee");

	const filteredData =
	  selectedCoffee === "All Coffee"
		? coffeeData
		: coffeeData.filter((c) =>
			c.title.toLowerCase().includes(selectedCoffee.toLowerCase())
		  );

  return (
	
	<View style={styles.container}>

  <CoffeeCategory 
   selectedCoffee={selectedCoffee}
   onSelectCoffee={setSelectedCoffee}
   />


<FlatList
  data={filteredData}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <CoffeeCard coffee={item} />}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 16,
  }}
  columnWrapperStyle={{ justifyContent: "space-between" }}
/>

</View>

	  
  );
};

export default CoffeeListing;

const styles = StyleSheet.create({
  container: {
	flex:1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    paddingRight: 16,
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#d17842",
  },
  coffeeContainer:{
    
    alignItems:"center",
    justifyContent:"center",
  }
});
