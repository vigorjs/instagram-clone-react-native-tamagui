import React, { Component } from 'react'
import { Text, View, XStack } from 'tamagui'
import { AntDesign } from '@expo/vector-icons'

export class LamaGakLogin extends Component {
  render() {
    return (
      <View>
        <XStack
                  backgroundColor={"white"}
                  padding={15}
                  gap={10}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <AntDesign name="checkcircleo" size={24} color="purple"/>
                  <Text color={"grey"} fontSize={15} fontFamily={'Inter'}>
                    You've seen all new posts from the past days from accounts you
                    follow
                  </Text>
                </XStack>
                <XStack
                  backgroundColor={"white"}
                  justifyContent="space-between"
                  alignItems="center"
                  paddingHorizontal={15}
                  paddingBottom={10}
                >
                  <Text color={"black"} fontSize={20} fontFamily={'Inter'} >
                    Suggested for you
                  </Text>
                  <Text color={"skyblue"} fontSize={14} fontFamily={'Inter'}>
                    Older posts
                  </Text>
                </XStack>
      </View>
    )
  }
}

export default LamaGakLogin