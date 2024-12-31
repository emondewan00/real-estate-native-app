import icons from "@/constants/icons";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SettingItemProps = {
  title: string;
  onPress?: () => void;
  icon: ImageSourcePropType;
  rightArrow?: boolean;
  textStyle?: string;
};

const SettingItem: React.FC<SettingItemProps> = ({
  onPress,
  icon,
  title,
  rightArrow = true,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center py-4">
        <Image
          source={icon}
          className="size-7"
          alt="icon"
          resizeMode="contain"
        />
        <Text
          className={`ml-3 text-lg font-rubik-bold text-black-300 ${textStyle}`}
        >
          {title}
        </Text>

        {rightArrow && (
          <Image
            source={icons.rightArrow}
            className="size-5 ml-auto"
            resizeMode="contain"
            alt="right arrow"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
