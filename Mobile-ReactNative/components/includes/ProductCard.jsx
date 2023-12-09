import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Dimensions } from 'react-native';

export const ProductCard = ({ title, image }) => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 60) / 2;
  return (
    <View
    style={[
        {
            marginBottom: 50,
            height:120,
            width: cardWidth,
            marginRight: 40,
            borderColor: "#2d2d2d",
            borderRadius: 4,
            borderWidth: "1",
            padding:2,
        },
    ]}
>
    <View style={{ alignItems: "center" }}>
        <Image
            source={{
                uri: image,
            }}
            style={{ width: 80, height: 80, objectFit: "contain" }}
        />
    </View>
    <Text
        style={{
            textAlign: "center",
            color: "#000",
            fontWeight: 600,
            width:100,
            textAlign:'center'
        }}
        numberOfLines={1}
    >
        {title}
    </Text>
</View>
  )
}

const styles = StyleSheet.create({})
