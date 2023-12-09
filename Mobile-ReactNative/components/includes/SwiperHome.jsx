import {
    View,
    StyleSheet,
    Image,
} from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";

export default function SwiperHome() {
    const swiperRef = useRef(null);
    return (
        <Swiper
            ref={swiperRef}
            showsButtons={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            loop={false}
        >
            <View style={styles.mainContainer}>
                <View style={styles.mainImageContainer}>
                    <Image
                        source={{
                            uri: "https://buycommerce.netlify.app/static/media/JumkaSlider.80bb6017b6057ac0aafd.jpg",
                        }}
                        style={{
                            width: window.width,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.mainImageContainer}>
                    <Image
                        source={{
                            uri: "https://buycommerce.netlify.app/static/media/Christ.fe014448c94980e7dadc.jpg",
                        }}
                        style={{
                            width: window.width,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.mainImageContainer}>
                    <Image
                        source={{
                            uri: "https://buycommerce.netlify.app/static/media/JumkaSlider.80bb6017b6057ac0aafd.jpg",
                        }}
                        style={{
                            width: window.width,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.mainImageContainer}>
                    <Image
                        source={{
                            uri: "https://buycommerce.netlify.app/static/media/Christ.fe014448c94980e7dadc.jpg",
                        }}
                        style={{
                            width: window.width,
                            height: 100,
                            objectFit: "contain",
                        }}
                    />
                </View>
            </View>
        </Swiper>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        margin: 0,
        padding: 0,
    },
    mainImageContainer: {},
    imageContainer: {},
    dot: {
        width: 20,
        backgroundColor: "#fff",
    },
    activeDot: {
        width: 30,
        backgroundColor: "blue",
    },
});
