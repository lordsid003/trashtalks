import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Colors, Images } from "../constants/Data";
import CharacterCard from "../components/CharacterCard";
import InfoCard from "../components/InfoCard";
import PromptCard from "../components/PromptCard";
 
const Home = () => {
    const prompts = [
        "I can cook 1-minute rice in 58 seconds, Uncle.",
        "How do you boil water, chef?",
        "Uncle, how do I get a girlfriend?",
        "Chef, Can u give me the recipe for truffle cake?",
        "What is the integral of sin x, Uncle?"
    ];
    const navigation = useNavigation();

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>

            <SafeAreaView className="flex-1 mt-[-64]">

                <ImageBackground
                    source={Images.background}
                    className="flex-1 justify-center h-full w-full"
                    resizeMode="cover"
                >
                
                <View className="flex-row mt-10 items-center justify-between px-5">

                    <Image
                        source={Images.title}
                        className="w-24 h-16"
                    />
                    <TouchableOpacity 
                        activeOpacity={0.6}
                        onPress={() => navigation.navigate("info")}
                    >
                        <MaterialIcons name="info-outline" size={30} color={Colors.white(0.7)} />
                    </TouchableOpacity>

                </View>

                <View className="h-[45%] justify-center flex-row px-5 py-2 gap-2">

                    <View
                        style={{ backgroundColor: Colors.white(0.2), borderColor: Colors.white(0.3), borderWidth: 0.5 }}
                        className="h-full w-1/2 rounded-3xl justify-center items-center overflow-hidden"
                    >
                        <Image
                            source={Images.ai}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                        <Text className="absolute top-10 text-gray-400 font-semibold"># TrashTalking with AI</Text>
                        <Text 
                            className="absolute text-gray-400 p-4 text-md bottom-5 text-center"
                        >
                            It's not an AI assistant, {"\n"} It's the Boss.
                        </Text>
                        
                    </View>

                    <View className="h-full w-1/2 flex justify-between pl-1">
                        
                        <CharacterCard
                            name="Steven He's Dad"
                            imgUrl={Images.stevenhe4}
                            imgStyles={"w-40 h-20 right-0"}
                            description={"A famous youtube comic playing as an Asian dad, make sure you call him 'Uncle' always"}
                            descStyles={"w-[100%] text-center self-start mt-[-50]"}
                            mode="asian"
                        />

                        <CharacterCard
                            name="Gordon Ramsay"
                            imgUrl={Images.gordon4}
                            imgStyles={"w-20 h-36 left-1"}
                            description={"A famous Celebrity Chef, Gordon will respond only if you call him by his title: 'Chef'"}
                            descStyles={"w-[60%] text-center self-end mt-5"}
                            mode="white"
                        />

                    </View>

                </View>
                
                <View className="justify-center px-4 py-2">

                    <Text className="text-gray-200 font-semibold text-lg m-3">
                        Try Now
                    </Text>
        
                    <View className="w-full flex-row items-center justify-evenly gap-1">
                        <InfoCard
                            title={"Modes"}
                            description={
                                `Select a character above to experience the app. Currently, the app offers 2 modes: Asian & Brit.`
                            }
                        />
                        <InfoCard
                            title={"Tips"}
                            description={
                                `Steven's dad responds to 'Uncle' and Gordon responds to 'Chef'. Make sure to be respectful.`
                            }
                        />
                    </View>
                    
                </View>

                <View className="justify-center px-4 py-2">

                    <Text className="text-gray-200 font-semibold text-lg mx-3 my-1">
                        Sample Prompts
                    </Text>

                    <FlatList
                        data={prompts}
                        renderItem={({ item }) => {
                            return (
                                <PromptCard
                                    text={item}
                                />
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ padding: 1, gap: 10 }}
                    />

                </View>

                </ImageBackground>
            </SafeAreaView>
        </>
    );
}

export default Home;