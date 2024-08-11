import { StyleSheet, Text, View } from "react-native";
import { Image, XStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Footer() {
  return (
    <XStack
      backgroundColor={"white"}
      justifyContent="space-around"
      paddingVertical={16}
    >
      <FontAwesome6 name="house" size={24} color="black" />
      <FontAwesome6 name="magnifying-glass" size={24} color="black" />
      <FontAwesome6 name="square-plus" size={24} color="black" />
      <FontAwesome6 name="clapperboard" size={24} color="black" />
      <Image
        source={{
          uri: "../assets/pragos.jpeg",
          width: 24,
          height: 24,
        }}
        borderRadius={50}
      />
    </XStack>
  );
}

const styles = StyleSheet.create({});