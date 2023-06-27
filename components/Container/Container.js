import {SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import { s } from "./Container.style";

export default function Container({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={s.container}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}