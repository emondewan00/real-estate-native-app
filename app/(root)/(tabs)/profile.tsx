import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import SettingItem from "@/components/SettingItem";

const Profile = () => {
  const logOut = () => {
    console.log("logout");
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="bg-white flex-1 p-5">
          {/* header  */}
          <View className="flex-row justify-between py-3 items-center">
            <Text className="font-rubik-bold text-black-300 text-xl">
              Profile
            </Text>
            <Image className="size-5" source={icons.bell} alt="bell icon" />
          </View>

          <View className="items-center mt-4">
            <View className="relative">
              <Image
                source={images.avatar}
                alt="profile image"
                className="size-36"
              />
              <Image
                source={icons.edit}
                className="size-8 absolute bottom-1 right-0 "
              />
            </View>
            <Text className="text-2xl font-rubik-bold text-black-300 mt-3 text-center">
              Emon Hossain
            </Text>
          </View>

          <View className="h-0.5 bg-gray-100 mt-6" />

          {/* links  */}
          <View className="mt-6 ">
            <SettingItem icon={icons.calendar} title="My Booking" />
            <SettingItem icon={icons.wallet} title="Payments" />
          </View>

          <View className="h-0.5 bg-gray-100 mt-6" />

          {/* links  */}
          <View className="mt-6 ">
            {settings.slice(2).map((setting, index) => (
              <SettingItem
                icon={setting.icon}
                title={setting.title}
                key={index}
              />
            ))}
          </View>

          <View className="h-0.5 bg-gray-100 mt-6" />
          {/* log out  */}
          <SettingItem
            icon={icons.logout}
            title="Logout"
            rightArrow={false}
            textStyle="text-danger"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
