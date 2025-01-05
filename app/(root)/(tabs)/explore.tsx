import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { cards } from "@/constants/data";
import PropertyCard from "@/components/PropertyCard";
import icons from "@/constants/icons";
import { router } from "expo-router";

const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <FlatList
          data={cards}
          renderItem={({ item, index }) => (
            <PropertyCard
              key={index}
              item={item}
              onPress={() => router.push(`/properties/${index}`)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerClassName="pb-32 px-5 "
          columnWrapperClassName="gap-4"
          ListHeaderComponent={
            <View>
              <View className="flex flex-row justify-between mt-4 mb-2 h-11 items-center">
                <View className="p-4 bg-primary-200 rounded-full size-11 flex items-center justify-center">
                  <Image source={icons.backArrow} className="size-6" />
                </View>
                <Text className="text-black-300 font-rubik-medium text-lg">
                  Search for your Ideal Home
                </Text>
                <Image source={icons.bell} className="size-6 mr-4" />
              </View>

              <Search />
              <Filter />
              <View className="mb-4 mt-8 ">
                <Text className="text-2xl font-rubik-bold text-black-300 ">
                  Found 4 Apartments
                </Text>
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
