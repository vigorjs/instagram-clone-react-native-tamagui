import { config } from "@tamagui/config";
import { SafeAreaView, Text as Textreact } from "react-native";
import {
  TamaguiProvider,
  createTamagui,
  XStack,
  Text,
  View,
  ScrollView,
  YStack,
  Image,
  Button,
} from "tamagui";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import { useFonts } from 'expo-font'
import { FEEDS_DATA } from "./data";
import Header from "./components/Header";
import Stories from "./components/Stories";
import LamaGakLogin from "./components/LamaGakLogin";
import Footer from "./components/Footer";

const tamaguiConfig = createTamagui(config);
const App = () => {

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    StyleScript: require('./assets/font/StyleScript-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <ScrollView>
          <YStack >
              <YStack backgroundColor={"white"}>
                <Header/>
                <Stories/>
                <LamaGakLogin/>
              </YStack>
              {FEEDS_DATA.map((post, index) => {
                const { username, imageUrl, feed, hasActiveStory } = post;
                return (
                  <View key={index}>
                    <XStack
                      backgroundColor={"white"}
                      justifyContent="space-between"
                      alignItems="center"
                      paddingHorizontal={15}
                      paddingBottom={10}

                    >
                      <XStack alignItems="center">
                      <View
                        borderWidth={3}
                        borderRadius={50}
                        borderColor={hasActiveStory? 'lightgreen' : '' }
                      >
                        <Image
                          borderWidth={3}
                          borderRadius={50}
                          borderColor={'white'}
                          source={{
                            uri: imageUrl,
                            width: 45,
                            height: 45,
                          }}
                        />
                      </View>
                        <YStack>
                          <XStack gap={5} alignItems="center">
                            <Text paddingLeft={5} color={"black"} fontFamily={'Inter'} fontSize={12}>
                              {username}
                            </Text>
                            <AntDesign name="checkcircle" size={15} color="blue" />
                          </XStack>
                          <Text color={'black'} paddingLeft={5} fontSize={10} fontFamily={'Inter'}>Suggested for you</Text>
                        </YStack>
                      </XStack>
                      <XStack alignItems="center" gap={5}>
                        <Button size={28} variant="outlined" color={"black"} backgroundColor={"lightgray"}>Follow</Button>
                        <Entypo
                          name="dots-three-vertical"
                          size={15}
                          color="black"
                        />
                      </XStack>
                    </XStack>
                    <Image
                      source={{
                        uri: feed.imageUrl,
                        height: 500,
                      }}
                    />
                    <XStack
                      backgroundColor={"white"}
                      padding={5}
                      justifyContent="space-between"
                    >
                      <XStack gap={5}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <EvilIcons name="comment" size={24} color="black" />
                        <Entypo name="paper-plane" size={24} color="black" />
                      </XStack>
                      <XStack>
                        <Feather name="bookmark" size={24} color="black" />
                      </XStack>
                    </XStack>
                    <XStack backgroundColor={"white"} paddingLeft={5}>
                      <Text color={"black"} numberOfLines={2}>
                        {feed.totalLikes} Likes
                      </Text>
                    </XStack>
                    <YStack backgroundColor={"white"} paddingLeft={5}>
                      <Textreact
                        numberOfLines={2}
                        style={{ color: "black" }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black'}}>
                          {username}
                        </Text>{" "}
                        {feed.caption}
                      </Textreact>
                      <Textreact style={{ color: "black" }}>
                        View all {feed.totalComments} comments
                      </Textreact>
                    </YStack>
                  </View>
                );
              })}
            <View style={{ marginVertical: 20 }} />
          </YStack>
        </ScrollView>
        <Footer/>
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default App;
