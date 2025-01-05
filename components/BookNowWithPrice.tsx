import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BookNowWithPrice = () => {
  return (
    <View className=" bg-white w-full rounded-t-3xl border border-primary-200 p-7 border-b-0 border-l border-r">
      <View className="flex flex-row items-center justify-between gap-10">
        <View className="flex flex-col items-start">
          <Text className="text-black-200 text-xs font-rubik-medium">
            Price
          </Text>
          <Text
            numberOfLines={1}
            className="text-primary-300 text-start text-2xl font-rubik-bold"
          >
            $100
          </Text>
        </View>

        <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
          <Text className="text-white text-lg text-center font-rubik-bold">
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookNowWithPrice;
