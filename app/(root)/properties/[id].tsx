import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text className="text-3xl font-bold text-green-500">Property {id}</Text>
    </View>
  );
};

export default Property;
