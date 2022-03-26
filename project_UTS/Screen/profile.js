import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.kotak}>
        <View style={styles.icon}>
          <FontAwesome name="user-circle-o" size={80} color="black" />
        </View>

        <View style={styles.box}>
          <Text style={styles.bold}>Email</Text>
          <Text numberOfLines={1}>_______________________________________</Text>
          <Text style={styles.biasa}>user@gmail.com</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.bold}>Username</Text>
          <Text numberOfLines={1}>_______________________________________</Text>
          <Text style={styles.biasa}>user123</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.bold}>Nomer Telepon</Text>
          <Text numberOfLines={1}>_______________________________________</Text>
          <Text style={styles.biasa}>+620471567615487</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    padding: 40,
  },
  kotak: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
    width: 300,
    height: 500,
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  icon: {
    flex: 0.35,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 0.15,
    width: 300,
    padding: 20,
    paddingBottom: 0,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: -10,
  },
  biasa: {
    fontSize: 16,
    paddingLeft: 8,
  },
  button: {
    borderWidth: 1,
    color: "#FFF",
    borderRadius: 7,
    padding: 10,
    borderColor: "#FFF",
    backgroundColor: "red",
    marginTop: 50,
  },
});
