import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import lainnya from "./lainnya";

export default function Menu({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerView}
        onPress={() => {
          navigation.navigate("Beranda");
        }}
      >
        <FontAwesome name="home" size={30} color="#00008B" />
        <Text style={{ fontSize: 10, color: "#00008B" }}>Beranda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerView}
        onPress={() => {
          navigation.navigate("Daftar Pemesanan");
        }}
      >
        <FontAwesome name="book" size={30} color="#00008B" />
        <Text style={{ fontSize: 10, color: "#00008B" }}>Pesanan Saya</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerView}
        onPress={() => {
          navigation.navigate("Daftar Pembatalan");
        }}
      >
        <MaterialCommunityIcons name="table-cancel" size={30} color="#00008B" />
        <Text style={{ fontSize: 10, color: "#00008B" }}>Pembatalan</Text>
      </TouchableOpacity>

      {lainnya({ navigation })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    width: 350,
    backgroundColor: "#FFF",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  footerView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
