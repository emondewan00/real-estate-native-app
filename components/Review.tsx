import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Review = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-x-2">
          <Image source={icons.star} />
          <Text className="text-black-300 font-rubik-bold text-xl">
            4.8 (1,275 reviews)
          </Text>
        </View>
        <Text className="text-primary-300 font-rubik-semibold text-base">
          See All
        </Text>
      </View>
      <View className="flex flex-row items-center gap-x-4 mt-5 mb-3">
        <Image
          source={images.avatar}
          className="size-10 rounded-full"
          resizeMode="contain"
        />
        <Text className="text-black-300 text-lg font-rubik-semibold">
          Charolette Hanlin
        </Text>
      </View>
      <Text className="text-base font-rubik text-black-200">
        The apartment is very clean and modern. I really like the interior
        design. Looks like I'll feel at home 😍
      </Text>
      <View className="flex flex-row justify-between items-center mt-3">
        <View className="flex flex-row gap-x-2">
          <Image
            source={icons.heart}
            className="size-5 "
            tintColor={"#0061FF"}
            alt="hart icon"
          />
          <Text className="text-black-300 font-rubik-semibold">938</Text>
        </View>
        <Text className="text-black-200 font-rubik text-base">6 days ago</Text>
      </View>
    </View>
  );
};

export default Review;
