import { View, Text, Image } from 'react-native';
import { Images, Colors } from '../constants/Data';

const Server = ({ message, time, meme, mode }) => {
    return (
      <View className="w-[60%] ml-5 mr-auto">
        <View 
            className="p-4 rounded-t-xl rounded-br-xl"
            style={{ backgroundColor: Colors.white(0.1), borderWidth: 0.5, borderColor: Colors.white(0.45) }}
        >
          {
            meme &&
            <Image
              source={(mode === "asian") ? Images.stevenhe1 : (mode === "white") ? Images.gordon3 : null}
              className="w-full h-40 self-center mb-2"
              resizeMode='contain'
            /> 
          }
          <Text className="text-gray-300">{message}</Text>
        </View>
          <Text className="text-gray-400 text-xs py-1 px-2" style={{ alignSelf: "flex-start" }}>{time}</Text>
      </View>
    );
};

export default Server;