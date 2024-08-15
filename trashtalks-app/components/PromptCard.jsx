import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Data';

const PromptCard = ({text}) => {
    return (
        <View 
            className="w-36 px-3 pb-3 pt-1 rounded-xl"
            style={{ backgroundColor: Colors.white(0.3) }}
        >
            <MaterialCommunityIcons name="format-quote-open" size={24} color={Colors.black(0.6)}/>
            <Text className="text-xs font-semibold" style={{ color: Colors.black(0.6) }}>{text}</Text>
        </View>
    );
};

export default PromptCard;