import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles.jsx";
export const Details = ({ navigation }) => {
  return (
    <View>
      <Text>Details PAGE WORKED</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigator.navigate("Home");
        }}
      >
        <Text>Go To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Camera");
        }}
      >
        <Text>Go To Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ImgPicker");
        }}
      >
        <Text>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
};
