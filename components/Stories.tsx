import React, { Component } from 'react'
import {
    XStack,
    Text,
    View,
    ScrollView,
    YStack,
    Image,
  } from "tamagui";
import { STORY_DATA } from "../data";


export class Stories extends Component {
  render() {
    return (
        <ScrollView horizontal={true}>
        <XStack
          flexDirection={"row"}
          alignItems="center"
          gap={15}
          paddingHorizontal={15}
          marginTop={5}
          backgroundColor={"white"}
        >
          <YStack
                justifyContent="center"
                alignItems="center"
              >
                <View
                  borderWidth={3}
                  borderRadius={50}
                  borderColor={'lightgreen'}
                >
                  <Image
                    borderWidth={2}
                    borderRadius={50}
                    borderColor={'white'}
                    source={{
                      uri: './assets/pragos.jpeg',
                      width: 75,
                      height: 75,
                    }}
                  />
                </View>
                <Text color={'black'} fontSize={12} fontFamily={'Inter'}>vigorjs</Text>
              </YStack>
          {STORY_DATA.map((story, index) => {
            const { username, imageUrl, hasSeen, closeFriend } = story;
            return (
              <YStack key={index}
                justifyContent="center"
                alignItems="center"
              >
                <View
                  borderWidth={3}
                  borderRadius={50}
                  borderColor={hasSeen? 'lightgray' : closeFriend? 'lightgreen' : 'red'}
                >
                  <Image
                    borderWidth={3}
                    borderRadius={50}
                    borderColor={'white'}
                    source={{
                      uri: imageUrl,
                      width: 75,
                      height: 75,
                    }}
                  />
                </View>
                <Text color={'black'} fontSize={12}>{username}</Text>
              </YStack>
            );
          })}
        </XStack>
      </ScrollView>
    )
  }
}

export default Stories