import { View, Text } from 'react-native';

const Server = ({ message, time }) => {
    return (
      <View className="w-[60%] ml-5 mr-auto">
        <View 
            className="p-4 rounded-t-xl rounded-br-xl"
            style={{ backgroundColor: Colors.white(0.1), borderWidth: 0.3, borderColor: Colors.white(0.45) }}
        >
          <Text className="text-gray-300">{message}</Text>
        </View>
          <Text className="text-gray-400 text-xs py-1 px-2" style={{ alignSelf: "flex-start" }}>{time}</Text>
      </View>
    );
};

export default Server;