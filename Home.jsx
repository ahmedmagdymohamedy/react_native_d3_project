import { View } from "react-native";
import { Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles.jsx";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>HOME PAGE </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Text>Go To page 2</Text>
      </TouchableOpacity>
    </View>
  );
};
