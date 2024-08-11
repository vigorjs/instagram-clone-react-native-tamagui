import React, { Component } from 'react'
import { Text, XStack } from 'tamagui'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export class Header extends Component {
  render() {
    return (
      <XStack justifyContent="space-between" backgroundColor={"white"} paddingHorizontal={15}>
        <XStack>
          <Text
            textAlign="center"
            fontSize={32}
            paddingTop={5}
            fontFamily={"StyleScript"}
            color={'black'}
          >
            Instagram
            <Entypo name="chevron-small-down" size={24} color="black" />
          </Text>
        </XStack>
        <XStack alignItems="center" gap={20}>
          <AntDesign name="hearto" size={24} color="black" />
          <MaterialCommunityIcons name="facebook-messenger" size={24} color="black" />
        </XStack>
      </XStack>
    )
  }
}

export default Header