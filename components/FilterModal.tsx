import { View, Text, Modal, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";

type Props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const FilterModal: React.FC<Props> = ({ modalVisible, setModalVisible }) => {
  return (
    <SafeAreaView>
      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          alert("Please wait...");
          setModalVisible(false);
        }}
        animationType="slide"
      >
        <View className="justify-end flex-1 bg-black/20">
          <View className="bg-white p-6 rounded-t-3xl">
            {/* header section */}
            <View className="flex flex-row justify-between items-center">
              <Pressable onPress={() => setModalVisible(false)}>
                <View className="size-8 rounded-full items-center justify-center bg-primary-200">
                  <Image source={icons.backArrow} className="size-5" />
                </View>
              </Pressable>
              <Text className="font-rubik-medium text-base text-black-300">
                Filter
              </Text>
              <Pressable>
                <Text className="text-primary-300 text-base font-rubik">
                  Reset
                </Text>
              </Pressable>
            </View>
            <View className="my-6">
              <Text className="text-base font-rubik-semibold text-black-300 mb-2">
                Price Range
              </Text>
              <Image
                source={images.barChart}
                resizeMode="contain"
                className="h-24 w-full"
              />
            </View>

            <View>
              <Text className="text-black-300 font-rubik-semibold text-base mb-2">
                Property Type
              </Text>
              <View className="flex flex-row gap-4 flex-wrap">
                {[
                  "Apartments",
                  "Townhouses",
                  "Homes",
                  "Condos",
                  "Duplexes",
                  "Studios",
                ].map((item, i) => (
                  <View
                    key={i}
                    className="bg-primary-300 rounded-full py-1 px-5"
                  >
                    <Text className="text-white font-rubik">{item}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="my-6">
              <Text className="text-base font-rubik-semibold text-black-300 mb-2">
                Home Details
              </Text>
              <View>
                {["bedrooms", "bathrooms", "chicken"].map((item, i) => (
                  <View
                    key={i}
                    className="py-2 border-b flex flex-row justify-between"
                  >
                    <Text className="capitalize font-rubik-semibold  text-black-200">
                      {item}
                    </Text>
                    <View className="flex flex-row gap-x-3 mr-2 items-center">
                      <Pressable className="size-6 bg-primary-100 rounded-full items-center justify-center ">
                        <Text className="text-primary-300 font-rubik-extrabold">
                          -
                        </Text>
                      </Pressable>
                      <Text className="font-rubik text-base">2</Text>
                      <Pressable className="size-6 bg-primary-100 rounded-full items-center justify-center ">
                        <Text className="text-primary-300 font-rubik-extrabold">
                          +
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* building size */}
            <View>
              <Text className="text-base font-rubik-semibold text-black-300 mb-2">
                Building Size
              </Text>
              <View></View>
            </View>

            {/* submit button */}
            <View className="flex justify-end mt-8">
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text className="p-4 bg-primary-300 text-white font-rubik-bold text-center rounded-full">
                  Submit
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FilterModal;
