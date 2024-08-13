import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useState } from "react";
import { IP, link } from "../constants/IP";
import * as Progress from 'react-native-progress';

const InputBox = ({ messageHandler, mode }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleMessaging = async () => {
        if(!message.trim()) {
            return;
        }
        setLoading(true);
        messageHandler({
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sender: "client"
        });
        try {
            const response = await fetch(`${link}/chat/${mode}-mode`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({message: message}),
            });
            const data = await response.json();
            messageHandler({
                text: data.response,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sender: "server"
            })
        }
        catch(error) {
            
        }
        finally {
            setLoading(false);
        }
        setMessage("");
    };

    return (
        <View 
            className="flex-row justify-between items-center px-3 py-2 mx-3 my-2 rounded-lg"
            style={{ borderWidth: 0.5, borderColor: Colors.white(0.7), backgroundColor: Colors.white(0.15) }}
        >
            {
                loading ?
                <View className="flex-row gap-2 items-center justify-center">
                    <Progress.Circle 
                        size={28} 
                        indeterminate={true} 
                        borderWidth={3}
                        color={Colors.white(0.7)}
                    />
                    <Text className="text-gray-300">
                        Processing...
                    </Text>
                </View> :
                <>
                    <TextInput
                        multiline={true}
                        className="text-gray-100 max-w-[85%] w-[85%] max-h-[60px]"
                        placeholder={(mode === "asian") ? "Tip: Be respectful to Asian uncles Or..." : (mode === "white") ? "Tip: He cooks good (I meant food)" : null}
                        placeholderTextColor={Colors.white(0.6)}
                        value={message}
                        onChangeText={(value) => setMessage(value)}
                    />
                    <TouchableOpacity 
                        activeOpacity={0.6}
                        className="w-[30px] h-[30px] items-center justify-center rounded-md" 
                        style={{ backgroundColor: message.length < 1 ? Colors.white(0.5) : Colors.green }}
                        onPress={handleMessaging}
                        disabled={message.length < 1}
                    >
                        <AntDesign name="arrowright" size={17} color={Colors.black(0.7)} />  
                    </TouchableOpacity>
                </>
            }
        </View>
    );
};

export default InputBox;