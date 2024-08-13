import { View, Text } from 'react-native';
import Colors from '../constants/Colors';

const Client = ({ message, time }) => {
  return (
    <View className="w-[50%] mr-5 ml-auto">
      <View 
          className="p-4 rounded-t-xl rounded-bl-xl"
          style={{ backgroundColor: Colors.white(0.15), borderWidth: 0.3, borderColor: Colors.white(0.45) }}
      >
        <Text className="text-gray-300">{message}</Text>
      </View>
        <Text className="text-gray-400 text-xs px-2 py-1" style={{ alignSelf: "flex-end" }}>{time}</Text>
    </View>
  );
;}

export default Client;  