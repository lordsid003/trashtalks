import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../constants/Data";

const Intro = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            <SafeAreaView className="flex-1 mt-[-64]">
                <ImageBackground
                    source={Images.background}
                    className="flex-1 items-center h-full w-full"
                    resizeMode="cover"
                >
                <View className="mt-20 items-center justify-center">
                    <Image
                        source={Images.title}
                        className="w-64 h-32"
                        resizeMode="cover"
                    />
                    <Text
                        className="text-gray-400 font-semibold"
                    >
                       # Trashtalking with AI
                    </Text>
                </View>
                    <Image 
                        source={Images.trashtalks1}
                        className="w-60 h-80 mt-8"
                    />
                    <Image
                        source={Images.tagline}
                        className="w-full h-36 mt-[-10]"
                        resizeMode="cover"
                    />
                    <Text
                        className="w-[85%] self-center text-gray-500 text-xs text-center mt-[-25] mb-5"
                    >
                        Prepare yourself for a healthy roast from savage AI chatbots inspired by two famous youtube celebrities.
                        {"\n"} The responses may be slow initially due to free hosting services, have some patience and give it a shot.
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("home")}
                        className="bg-gray-100 w-[50%] rounded-xl p-3 justify-center items-center"
                    >
                        <Text className=" font-bold text-lg">Let's go</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
}

export default Intro;