import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    Pressable,
} from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function OnBoard() {
    const swiperRef = useRef(null);

    const handleNextPress = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1);
        }
    };

    const navigation = useNavigation();
    return (
        <Swiper
            ref={swiperRef}
            showsButtons={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            loop={false}
        >
            <ImageBackground
                source={{
                    uri: "https://designimages.appypie.com/appbackground/appbackground-50-sand-nature.jpg",
                }}
                style={styles.mainContainer}
            >
                <View>
                    <Text style={styles.welcomeText}>Welcome</Text>
                </View>
                <View style={styles.welcomeParagraph}>
                    <Text style={styles.welcomepText} numberOfLines={2}>
                        We are glad that, that{"\n"} you're here
                    </Text>
                </View>
                <View style={styles.mainImageContainer}>
                    <Image
                        source={{
                            uri: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8=",
                        }}
                        style={{ width: 200, height: 200, borderRadius: 8 }}
                    />
                </View>

                <View style={styles.bottomButton}>
                    <Pressable onPress={handleNextPress}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <ImageBackground
                style={styles.middleContainer}
                source={{
                    uri: "https://designimages.appypie.com/appbackground/appbackground-73-corridor-architecture.jpg",
                }}
            >
                <View>
                    <Text style={styles.middleText}>
                        Discover your type of Categories
                    </Text>
                </View>
                <View style={styles.welcomeParagraph}>
                    <Text style={styles.welcomepText} numberOfLines={2}>
                        Shop the trending through{"\n"} the trending Application
                    </Text>
                </View>
                <View style={styles.bottomButton}>
                    <Pressable onPress={handleNextPress}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <ImageBackground style={styles.LastContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: "https://e1.pxfuel.com/desktop-wallpaper/939/690/desktop-wallpaper-kevin-minion-png-transparent-png-kevin-the-minion.jpg",
                        }}
                        style={{ width: 200, height: 200, borderRadius: 10 }}
                    />
                </View>
                <View>
                    <Text style={styles.LastText}>
                        Connecting to the World Biggest Shopping!
                    </Text>
                </View>
                <View style={styles.welcomeParagraph}>
                    <Text style={styles.welcomepText} numberOfLines={2}>
                        Join the Shopper's Club
                    </Text>
                </View>
                <View style={styles.bottomButton}>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.buttonText}>Start Shopping</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </Swiper>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        height: height,
        padding: 10,
        paddingLeft: 30,
        paddingVertical: 20,
    },
    mainImageContainer: {
        marginTop: 70,
        marginLeft: 120,
    },
    welcomeText: {
        fontSize: 70,
        color: "#387141",
        fontWeight: 700,
        letterSpacing: 2,
    },
    bottomButton: {
        position: "absolute",
        bottom: 110,
        right: 20,
        backgroundColor: "#577d5b",
        padding: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
    },
    welcomeParagraph: {
        marginTop: 10,
    },
    welcomepText: {
        fontSize: 30,
        fontWeight: 400,
        color: "#387141",
    },
    middleContainer: {
        backgroundColor: "#ccc",
        width: width,
        height: height,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        marginTop: -200,
        marginBottom: 20,
    },
    middleText: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: 600,
        marginBottom: 10,
    },
    LastContainer: {
        backgroundColor: "#f7f7f7",
        width: width,
        height: height,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    LastText: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: 600,
        marginBottom: 10,
    },
    dot: {
        width: 20,
        backgroundColor: "#fff",
    },
    activeDot: {
        width: 30,
        backgroundColor: "#577d5b",
    },
});
