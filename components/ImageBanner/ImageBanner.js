import { s } from './ImageBanner.style';
import {Image, View} from "react-native";

export default function ImageBanner({image}) {

    return (
        <View style={s.cocktailImgBannerContainer}>
            <Image style={s.cocktailImgBanner} source={image} />
        </View>
    );
}
