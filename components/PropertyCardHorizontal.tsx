import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
interface Props {
  item: {
    title: string;
    location: string;
    price: string;
    rating: number;
    image: ImageSourcePropType;
  };
  onPress?: () => void;
}

const PropertyCardHorizontal: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70  mt-4 flex-row gap-x-4"
      onPress={onPress}
    >
      <View className="relative h-40 w-40">
        <View className="flex flex-row items-center absolute px-2 top-2 right-2 bg-white/90 p-1 rounded-full z-50">
          <Image source={icons.star} className="size-2.5" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
            {item.rating}
          </Text>
        </View>

        <Image source={item.image} className="w-full h-40 rounded-lg" />
      </View>

      <View className="flex-1 flex-row mt-2 item-center justify-between gap-x-2">
        <View className="py-[10px] my-auto max-w-48 ">
          <Text
            className="text-lg font-rubik-bold text-black-300 text-balance"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {item.title} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iusto ipsa amet adipisci soluta quam saepe. Quam, perferendis?
            Inventore aspernatur non unde enim expedita debitis minima, cumque
            modi, obcaecati ratione necessitatibus?
          </Text>
          <Text className="text-xs font-rubik text-black-100">
            {item.location}
          </Text>
        </View>

        <View className="flex flex-col-reverse items-center justify-between py-[10px] ">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${item.price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCardHorizontal;
