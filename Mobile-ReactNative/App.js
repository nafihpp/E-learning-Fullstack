import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainStackNavigation from "./components/navigation/MainStackNavigation";

export default function App() {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <MainStackNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: "#000",
    },
});
