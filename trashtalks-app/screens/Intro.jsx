import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Intro = () => {
    const navigation = useNavigation();

    return (
        <View>
            {/* 
            <TouchableOpacity>
                <Text>AI bot</Text>   
            </TouchableOpacity> */}

            <TouchableOpacity
                onPress={() => navigation.navigate("chat", {
                    mode: "asian"
                })}
            >
                <Text>Steven He</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("chat", {
                    mode: "white"
                })}
            >
                <Text>Gordon Ramsay</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Intro;