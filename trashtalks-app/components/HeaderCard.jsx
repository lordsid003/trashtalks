import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/Data";

const HeaderCard = ({ imgUrl, mode, time }) => {
    const linkHandler = () => {
        const url = (mode === "asian") ? "https://www.youtube.com/watch?v=TsSP-nHjZ0Q&list=PLnTjNwFX3opSlkunzzD23CBeVTFkNYEpO" :
            (mode === "white") ? "https://in.pinterest.com/pin/32932641018081112" : null
        ;
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    };

    return (
        <TouchableOpacity 
            className="w-[60%] mt-5 ml-5 mr-auto"
            activeOpacity={0.7}
            onPress={linkHandler}
        >
            <View 
                className="w-full overflow-hidden rounded-t-xl rounded-br-xl justify-center items-center"
                style={{ backgroundColor: Colors.white(0.1), borderWidth: 0.3, borderColor: Colors.white(0.45) }}
            >
                <Image
                    source={imgUrl}
                    className={mode === "asian" ? "w-64 h-44" : mode === "white" ? "w-64 h-60" : null}
                    resizeMode="contain"
                />
                <View className="p-3 w-full">
                    {
                        (mode === "asian") ?
                        <>
                            <Text className="text-gray-200 text-lg">Failure Management</Text>
                            <Text className="text-xs text-gray-300">The Ultimate Asian Course</Text>
                            <View className="my-3">
                                <Text className="text-gray-400 text-xs">Ultimate crash course to deal with failures (Not too Harsh, I promise)</Text>
                                <Text className="text-gray-400 text-xs">Ps: In case you are, this is something for your parents</Text>
                            </View>
                        </> : 
                        (mode === "white") ?
                        <>
                            <Text className="text-gray-200 text-lg">Don't be a Donkey</Text>
                            <Text className="text-xs text-gray-300">The Ultimate Ramsay Course</Text>
                            <View className="my-3">
                                <Text className="text-gray-400 text-xs">Ultimate crash course to cook & learn manners (You would need those, I bet)</Text>
                                <Text className="text-gray-400 text-xs">Ps: Don't dare shout at me</Text>
                            </View>
                        </> : null
                    }
                    <View
                        className="flex-row items-center justify-between p-1"
                    >
                        <Text style={{ color: Colors.green }} className="uppercase text-xs">Details</Text>
                        <AntDesign name="arrowright" size={15} color={Colors.green} />
                    </View>
                </View>
            </View>
            <Text className="text-gray-400 text-xs py-1 px-2">{time}</Text>
        </TouchableOpacity>
    );
};

export default HeaderCard;