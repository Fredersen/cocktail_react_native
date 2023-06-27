import { s } from './Subtitle.style';
import {Text, View} from "react-native";

export default function Subtitle({ title }) {
    return (
        <View style={s.container}>
            <View style={s.line} />
            <Text style={s.title}>{title}</Text>
            <View style={s.line} />
        </View>
    );
}
