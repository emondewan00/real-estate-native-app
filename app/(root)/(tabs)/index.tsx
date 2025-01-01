import FeatureCard from "@/components/FeatureCard";
import PropertyCard from "@/components/PropertyCard";
import Search from "@/components/Search";
import { featuredCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        <View className="pt-4 px-5">
          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-row gap-x-4">
              <Image
                source={images.avatar}
                alt="profile image"
                className="size-11"
              />
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
          {/* search component start  */}
          <Search />
          {/* search component end */}
          <View className="flex flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-rubik-bold">Featured</Text>
            <Text className="text-xl font-rubik-bold text-primary-300 ">
              See All
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Property cards */}
            <View className="flex flex-row gap-x-4">
              {featuredCards.map((featuredCard, index) => (
                <FeatureCard item={featuredCard} key={index} />
              ))}
            </View>
          </ScrollView>
          <View className="flex flex-row justify-between items-center my-6">
            <Text className="text-2xl font-rubik-bold">Our Recommendation</Text>
            <Text className="text-xl font-rubik-bold text-primary-300 ">
              See All
            </Text>
          </View>
          <View className="flex flex-row gap-5">
            <PropertyCard
              item={{
                address: "hello address",
                price: 1,
                image: images.japan,
                name: "hello name",
                rating: 5,
              }}
            />
            <PropertyCard
              item={{
                address: "hello address",
                price: 1,
                image: images.japan,
                name: "hello name",
                rating: 5,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
