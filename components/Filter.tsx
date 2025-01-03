import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { categories } from "@/constants/data";

const Filter = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const onPressCategory = (title: string) => {
    if (selectedCategory === title) {
      router.setParams({ filter: "" });
      setSelectedCategory("All");
      return;
    } else {
      router.setParams({ filter: title });
      setSelectedCategory(title);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-x-4"
    >
      {categories.map((category, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => onPressCategory(category.title)}
        >
          <View
            className={` px-5 py-2 rounded-full border border-primary-200 ${
              category.title === selectedCategory
                ? "bg-primary-300 "
                : "bg-primary-100"
            }`}
          >
            <Text
              className={`${
                category.title === selectedCategory
                  ? "font-rubik-bold text-white"
                  : "font-rubik text-black-300"
              } `}
            >
              {category.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filter;
