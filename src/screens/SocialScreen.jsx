import { ScrollView, View } from "react-native";
import Post from "../components/Post";
import { Button } from "react-native-paper";

export default function Social({ navigation }) {
  return (
    <ScrollView >
      <View style={{alignItems:'center',justifyContent:'center',height:500,}}>
        <Button
        style={{width:300}}
          mode="contained"
          buttonColor="black"
          textColor="#fff"
          onPress={() => {
            navigation.navigate("Post");
          }}
        >Clique aqui para ver seus Posts</Button>
      </View>
    </ScrollView>
  );
}