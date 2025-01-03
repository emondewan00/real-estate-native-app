import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

const ProfileWithBellH = () => {
  return (
    <View className="flex flex-row justify-between items-center ">
      <View className="flex flex-row gap-x-4">
        <Image source={images.avatar} alt="profile image" className="size-11" />
        <View>
          <Text className="text-black-100 font-rubik text-sm">
            Good Morning
          </Text>
          <Text className="text-xl text-black-300 font-rubik-bold">
            John Doe
          </Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};

export default ProfileWithBellH;
