import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Data';

const CharacterCard = ({ name, imgUrl, imgStyles, description, descStyles, mode }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ backgroundColor: Colors.white(0.1), borderColor: Colors.white(0.3), borderWidth: 0.5 }}
            className="h-[48%] w-full rounded-3xl justify-center items-center overflow-hidden"
            onPress={() => navigation.navigate("chat", {
                mode: mode
            })}
        >
            <Image
                source={imgUrl}
                className={`${imgStyles} absolute bottom-0`}
                resizeMode="cover"
            />
            <Text className="text-gray-300 uppercase absolute top-3 font-bold">{name}</Text>
            <Text 
                className={`text-gray-400 p-3 ${descStyles}`}
                style={{ fontSize: 10 }}
            >
                {description}
            </Text>
        </TouchableOpacity>
    );
};

export default CharacterCard;