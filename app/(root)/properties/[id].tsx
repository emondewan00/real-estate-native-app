import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { roomDimensions } from "@/constants/data";
import images from "@/constants/images";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-5">
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

            <View className="my-7 ">
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
                The apartment is very clean and modern. I really like the
                interior design. Looks like I'll feel at home 😍
              </Text>
              <View className="flex flex-row justify-between items-center mt-3">
                <View className="flex flex-row gap-x-2">
                  <Image
                    source={icons.heart}
                    className="size-5 "
                    // tintColor={"blue"}
                    alt="hart icon"
                  />
                  <Text className="text-black-300 font-rubik-semibold">
                    938
                  </Text>
                </View>
                <Text className="text-black-200 font-rubik text-base">
                  6 days ago
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className=" bg-white w-full rounded-t-2xl border-t border-primary-200 p-7">
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
    </SafeAreaView>
  );
};

export default Property;
