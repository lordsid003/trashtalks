import { View, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from '../constants/Data';

const InfoCard = ({ title, description }) => {
    return (
        <View 
            className="w-[45%] rounded-xl h-full"
            style={{ backgroundColor: Colors.white(0.05), borderColor: Colors.white(0.5), borderWidth: 0.5 }}
        >
            <View className="px-3 pt-3 flex-row justify-between items-center">
                <MaterialIcons name="info-outline" size={16} color={Colors.white(0.7)} />
                <Text className="text-gray-400 font-semibold uppercase">{title}</Text>
            </View>
            <View className="p-3">
                <Text className="text-gray-500 text-xs">
                    {description}
                </Text>
            </View>
        </View>
    );
};

export default InfoCard;