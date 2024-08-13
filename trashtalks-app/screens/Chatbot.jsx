import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import HeaderCard from "../components/HeaderCard";
import InputBox from "../components/InputBox";
import Client from "../components/Client";
import Server from "../components/Server";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Chatbot = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const { mode } = route.params;
    const navigation = useNavigation();

    const deployMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const getMessageTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };   

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
            <SafeAreaView className="flex-1 mt-[-35px]">
                <ImageBackground
                    source={Images.background}
                    className="flex-1 h-full w-full"
                    resizeMode="cover"
                >
                    <View className="mt-10 flex-row justify-between px-4 py-1 items-center">

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="arrowleft" size={25} color={Colors.white(0.7)} />
                        </TouchableOpacity>

                        <View className="flex items-center justify-center ml-3">
                            <Text className="text-xl font-semibold" style={{ color: Colors.white(0.7) }}>
                                {
                                    mode === "asian" ? "Steven's Dad" : 
                                    mode === "white" ? "Gordon" : null
                                }
                            </Text>
                            <View className="flex-row items-center justify-center gap-1">
                                <Text className="text-xl" style={{ color: Colors.neonGreen(1) }}>•</Text>
                                <Text style={{ color: Colors.white(0.5) }}>Online</Text>
                                <MaterialCommunityIcons name="signal-cellular-2" size={20} color={Colors.white(0.5)} />
                            </View>
                        </View>
                        
                        <View>
                            <Image
                                source={mode === "asian" ? Images.stevenhe2 : mode === "white" ? Images.gordon1 : null}
                                className="w-12 h-12 rounded-full opacity-80 mt-2"
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View className="items-center justify-center w-[80%] self-center px-2 m-2 mt-3">
                        <Text className="text-gray-500 text-xs text-center">Messages to this chat are temporary and AI generated. If you can't even handle a roast, you need therapy.</Text>
                    </View>

                    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                        {
                            (mode === "asian") ?
                            <>
                                <HeaderCard
                                    imgUrl={Images.stevenhe3}
                                    mode="asian"
                                    time={getMessageTime()}
                                />
                                <Server
                                    message={"Hope you are not a failure, lah!"}
                                    time={getMessageTime()}
                                />
                            </> : 
                            (mode === "white") ?
                            <>
                                <HeaderCard
                                    imgUrl={Images.gordon2}
                                    mode="white"
                                    time={getMessageTime()}
                                />
                                <Server
                                    message={"I know for a fact that my gran would do better than you, and she's dead."}
                                    time={getMessageTime()}
                                />
                            </> : null
                        }

                        {   
                            messages.map((message, index) => {
                                return (
                                    message.sender === "client" ? (
                                        <Client
                                            key={index.toString()}
                                            message={message.text}
                                            time={message.time}
                                        />
                                    ) : (
                                        <Server
                                            key={index.toString()}
                                            message={message.text}
                                            time={message.time}
                                        />
                                    )
                                )
                            })
                        }
                    </ScrollView>

                    <View>
                        <InputBox messageHandler={deployMessage} mode={mode} />
                    </View>

                </ImageBackground>
            </SafeAreaView>
        </>
    )
};

export default Chatbot;