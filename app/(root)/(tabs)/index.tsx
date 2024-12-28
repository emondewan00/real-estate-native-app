import { Link } from "expo-router";
import { Text, View } from "react-native";

import "@/app/global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-bold text-green-500">Home</Text>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/sign-in"}>Sign in </Link>
      <Link href={"/properties/1"}>Properties</Link>
    </View>
  );
}
