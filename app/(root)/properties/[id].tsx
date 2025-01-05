import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { roomDimensions } from "@/constants/data";
import images from "@/constants/images";
import Review from "@/components/Review";
import BookNowWithPrice from "@/components/BookNowWithPrice";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Text className="font-rubik-bold text-2xl text-black-300 mb-4 mt-6">
              Modernica Apartment
            </Text>
            <View className="flex flex-row gap-x-2 items-center">
              <Text className="text-primary-300 bg-primary-100 rounded-full font-rubik-semibold py-[6px] px-[10px]">
                APARTMENT
              </Text>
              <View className="flex flex-row gap-x-2">
                <Image source={icons.star} alt="star icon" />
                <Text className="text-black-200 font-rubik-semibold">
                  4.5 (21 reviews)
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between py-6 border-b border-primary-100">
              {roomDimensions.map((roomDimension) => (
                <View
                  key={roomDimension.id}
                  className="flex flex-row items-center gap-x-4"
                >
                  <View className="bg-primary-100 size-10 rounded-full flex items-center justify-center p-6">
                    <Image
                      source={roomDimension.icon}
                      alt={roomDimension.title}
                      className="size-4"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="font-rubik-medium text-black-300">
                    {roomDimension.value} {roomDimension.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View className="my-8">
            <Text className="text-black-300 font-rubik-semibold text-xl">
              Agent
            </Text>
            <View className="flex flex-row justify-between items-center mt-4">
              <View className="flex flex-row gap-x-4 items-center">
                <Image
                  source={images.avatar}
                  className="size-14 rounded-full"
                  resizeMode="contain"
                />
                <View>
                  <Text className="font-rubik-semibold text-xl">
                    Emon Hossain
                  </Text>
                  <Text className="font-rubik-medium text-black-200">
                    Owner
                  </Text>
                </View>
              </View>
              <View className="flex flex-row gap-x-4">
                <Image
                  source={icons.chat}
                  className="size-7"
                  resizeMode="contain"
                />
                <Image
                  source={icons.phone}
                  className="size-7"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View>
            <Text className="text-black-300 font-rubik-semibold text-xl">
              Overview
            </Text>
            <Text className="font-rubik text-black-200 text-base mt-2">
              Sleek, modern 2-bedroom apartment with open living space, high-end
              finishes, and city views. Minutes from downtown, dining, and
              transit.
            </Text>
          </View>

          <View className="my-8">
            <Text className="text-black-300 font-rubik-semibold text-xl mb-5">
              Facilities
            </Text>

            <View className="flex flex-row flex-wrap items-start justify-between mt-2 gap-5">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <View
                    key={index}
                    className="flex flex-col items-center max-w-20 min-w-16 "
                  >
                    <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                      <Image source={icons.carPark} className="size-6" />
                    </View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      className="text-black-300 text-sm text-center font-rubik mt-1.5"
                    >
                      Car Parking
                    </Text>
                  </View>
                ))}
            </View>

            <View className="my-7">
              <Text className="text-black-300 font-rubik-semibold text-xl mb-5">
                Gallery
              </Text>
              <View className="flex flex-row gap-x-4 ">
                <Image
                  source={images.gallery1}
                  resizeMode="cover"
                  className="size-[118px] rounded-xl"
                />
                <Image
                  source={images.gallery2}
                  resizeMode="cover"
                  className="size-[118px] rounded-xl"
                />

                <View className="relative">
                  <Image
                    source={images.gallery3}
                    resizeMode="cover"
                    className="size-[118px] rounded-xl"
                  />
                  <View className="bg-black/35 size-[118px] rounded-xl absolute flex items-center justify-center">
                    <Text className="font-rubik-bold text-2xl text-white">
                      20+
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mb-7 ">
              <Text className="text-black-300 font-rubik-semibold text-xl">
                Location
              </Text>
              <View className="flex flex-row gap-x-2 items-center my-5">
                <Image source={icons.location} className="size-5" />
                <Text className="text-black-200 font-rubik">
                  Grand City St. 100, San Francisco USA
                </Text>
              </View>
              <Image
                source={images.map}
                resizeMode="contain"
                className="h-52 w-full mt-5 rounded-xl"
              />
            </View>

            <Review />
          </View>
        </View>
      </ScrollView>
      <BookNowWithPrice />
    </SafeAreaView>
  );
};

export default Property;
