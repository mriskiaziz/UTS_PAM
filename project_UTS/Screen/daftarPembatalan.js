import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Menu from "./menu";
import * as datas from "../basisData.json";

export default function BatalScreen({ navigation }) {
  const data = datas.daftarPembatalan;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
          Daftar Pembatalan
        </Text>
      </View>
      <View style={styles.kotakFrame}>
        <ScrollView style={{ padding: 10 }}>
          {data.map((element, index) => {
            return (
              <View style={styles.kotakRincian} key={index}>
                <View style={styles.bandaraAndIcon}>
                  <Text>{element.pelabuhanAwal}</Text>
                  <Feather
                    name="arrow-right"
                    size={30}
                    style={{ marginLeft: 20, marginRight: 20 }}
                  ></Feather>
                  <Text>{element.pelabuhanTujuan}</Text>
                </View>
                <Text style={styles.textBold}>Jadwal Masuk Pelabuhan</Text>
                <Text style={styles.textBiasa}>{element.tgl}</Text>
                <Text style={styles.textBiasa}>{element.jam}</Text>
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                >
                  Telah Dibatalkan
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {Menu({ navigation })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#00008B",
    flex: 0.08,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
  },
  kotakFrame: {
    backgroundColor: "#FFF",
    flex: 0.8,
    width: 330,
    padding: 10,
    paddingTop: 10,
  },

  kotakRincian: {
    backgroundColor: "#DCDCDC",
    padding: 12,
    borderRadius: 7,
    marginBottom: 15,
    width: 285,
  },
  bandaraAndIcon: {
    backgroundColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    borderRadius: 5,
    justifyContent: "space-around",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 5,
  },
  textBiasa: {
    marginLeft: 10,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 330,
    backgroundColor: "#DCDCDC",
    marginTop: 7,
  },
});
