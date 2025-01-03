import { View, Text } from "react-native";
import React from "react";

const SectionTitle = () => {
  return (
    <View className="flex flex-row justify-between items-center my-6">
      <Text className="text-2xl font-rubik-bold">Our Recommendation</Text>
      <Text className="text-xl font-rubik-bold text-primary-300 ">See All</Text>
    </View>
  );
};

export default SectionTitle;
