import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  focused: boolean;
  icon: any;
  title: string;
};

const TabIcon: React.FC<Props> = ({
  focused,
  icon,
  title,
}) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center ">
      <Image
        source={icon}
        alt={title}
        className={`w-6 h-6 `}
        resizeMode="contain"
        tintColor={focused ? "#0061ff" : "#666876"}
      />
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium "
            : "text-black-200 font-rubik"
        }  text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
