import FeatureCard from "@/components/FeatureCard";
import Filter from "@/components/Filter";
import ProfileWithBellH from "@/components/ProfileWithBellH";
import PropertyCard from "@/components/PropertyCard";
import Search from "@/components/Search";
import SectionTitle from "@/components/SectionTitle";
import { categories, featuredCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import {
  FlatList,
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
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => (
          <PropertyCard
            key={item}
            item={{
              address: "hello address",
              price: 1,
              image: images.japan,
              name: "hello name",
              rating: 5,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerClassName="pb-32 px-5 "
        columnWrapperClassName="gap-4"
        ListHeaderComponent={
          <View>
            <ProfileWithBellH />
            {/* search component start  */}
            <Search />
            {/* search component end */}
            <SectionTitle />

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={featuredCards}
              renderItem={({ item, index }) => (
                <FeatureCard item={item} key={index} />
              )}
              contentContainerClassName="flex gap-x-4"
            />

            <SectionTitle />

            {/* <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <View className="bg-primary-100 px-5 py-2 rounded-full border border-primary-200">
                  <Text className="text-black-300 font-rubik">
                    {item.title}
                  </Text>
                </View>
              )}
              contentContainerClassName="flex gap-x-3 "
            /> */}
            <Filter />
          </View>
        }
      />
    </SafeAreaView>
  );
}
