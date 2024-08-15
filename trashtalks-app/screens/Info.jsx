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
import { AntDesign } from "@expo/vector-icons";
import { Images, Colors } from "../constants/Data";
 
const Info = () => {
    const navigation = useNavigation();
 
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            <SafeAreaView className="flex-1 mt-[-64]">
                <ImageBackground
                    source={Images.background}
                    className="flex-1 items-center h-full w-full justify-evenly"
                    resizeMode="cover"
                >
                    <View className="flex-row justify-between items-center w-full px-5 mt-[-60]">
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="arrowleft" size={25} color={Colors.white(0.7)} />
                        </TouchableOpacity>
                        <Image
                            source={Images.title}
                            className="w-24 h-20"
                            resizeMode="cover"
                        />
                    </View>

                    <View className="items-center justify-center w-full">
                        <Text className="text-gray-400">
                            Designed with the Theme:
                        </Text>
                        <Image
                            source={Images.tagline}
                            className="w-full h-36"
                            resizeMode="cover"
                        />
                        <Text className="text-gray-400 text-center w-[80%] self-center">
                            ** The chatbot is functional only when the user exercises the correct prompt titles, else the bot cheeses them.
                        </Text>
                    </View>
                    <View className="gap-1">
                        <Text className="text-gray-500 font-bold">
                            Developed by: Sid@Studios
                        </Text>
                        <Text className="text-xs text-gray-500 text-center">~ Siddharth Verma</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
}
 
export default Info;