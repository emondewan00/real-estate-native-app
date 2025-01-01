import icons from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View className="my-6 bg-accent-100 border-[1px] border-primary-100 px-4 py-2 flex flex-row items-center rounded">
      <View className="flex flex-row items-center gap-x-2 flex-1">
        <Image source={icons.search} alt="search icon" className="size-6 " />
        <TextInput placeholder="Search something" className=" flex-1 " />
      </View>
      <Image source={icons.filter} alt="search icon" className="size-6" />
    </View>
  );
};

export default Search;
