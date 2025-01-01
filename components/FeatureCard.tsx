import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";

type Props = {
  item: {
    image: ImageSourcePropType;
    title: string;
    location: string;
    price: string;
    rating: number;
  };
};

const FeatureCard: React.FC<Props> = ({ item }) => {
  return (
    <View className="h-80 w-60 rounded-2xl relative ">
      <Image source={item.image} className="flex-1 rounded-3xl size-full" />
      <Image
        source={images.cardGradient}
        className="flex-1 absolute bottom-0 left-0 size-full rounded-3xl"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1 self-center">
          {item.rating}
        </Text>
      </View>

      <View className="absolute bottom-5 inset-x-5">
        <Text
          className="text-white font-rubik-extrabold text-xl"
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text className="text-white text-base font-rubik" numberOfLines={1}>
          {item.location}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            {item.price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </View>
  );
};

export default FeatureCard;
