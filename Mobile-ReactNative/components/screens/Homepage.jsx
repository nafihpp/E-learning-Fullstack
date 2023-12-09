import {
    View,
    Text,
    Pressable,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Alert,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import SwiperHome from "../includes/SwiperHome";
import { ProductCard } from "../includes/ProductCard";
const { height } = Dimensions.get("window");

export default function Homepage() {
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Laptop",
            image: "https://buycommerce.netlify.app/static/media/electronics.5b0a908ea73c43706cd8.webp",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Mobiles",
            image: "https://buycommerce.netlify.app/static/media/mobile.dcddf236868e8083c06c.png",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Dress",
            image: "https://buycommerce.netlify.app/static/media/clothing.dc333d9aafdd8c7f5115.png",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Grocery",
            image: "https://buycommerce.netlify.app/static/media/grocery.dc32070acbbdbdc07dc1.webp",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Mens",
            image: "https://buycommerce.netlify.app/static/media/electronics.5b0a908ea73c43706cd8.webp",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Womens",
            image: "https://buycommerce.netlify.app/static/media/electronics.5b0a908ea73c43706cd8.webp",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "animal",
            image: "https://buycommerce.netlify.app/static/media/electronics.5b0a908ea73c43706cd8.webp",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Mens",
            image: "https://buycommerce.netlify.app/static/media/electronics.5b0a908ea73c43706cd8.webp",
        },
    ];
    const Item = ({ title, image }) => (
        <View style={styles.item}>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={{ width: 60, height: 60 }}
                />
            </View>
            <Text
                style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: 600,
                }}
            >
                {title}
            </Text>
        </View>
    );

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchit = async () => {
            const res = await fetch("https://fakestoreapi.com/products/");
            const response = await res.json();
            setProducts(response);
        };
        fetchit();
    }, []);

    return (
        <Fragment>
            <View style={styles.mainContainer}>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <Item title={item.title} image={item.image} />
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ width: window.width, height: 100 }}>
                    <SwiperHome />
                </View>
                <View style={{ width: window.width }}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => (
                            <ProductCard
                                title={item.title}
                                image={item.image}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
    },
    MainHeading: {
        fontWeight: 600,
        fontSize: 30,
    },
    mainContainer: {
        backgroundColor: "#fff",
        padding: 10,
        height: height,
    },
    button: {
        padding: 20,
        marginTop: 10,
        width: 150,
        backgroundColor: "#7e9d22",
    },
    item: {
        marginRight: 10,
        width: 90,
        height: 90,
        padding: 2,
    },
});
