import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Menu from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as datas from "../basisData.json";

export default function PemesananScreen({ navigation }) {
  const data = datas.daftarPemesanan;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
          Daftar Pemesanan
        </Text>
      </View>
      <View style={styles.kotakFrame}>
        <ScrollView>
          {data.map((Element, index) => {
            return (
              <View style={styles.kotakRincian} key={index}>
                <View style={styles.bandaraAndIcon}>
                  <Text>{Element.pelabuhanAwal}</Text>
                  <Feather
                    name="arrow-right"
                    size={30}
                    style={{ marginLeft: 20, marginRight: 20 }}
                  ></Feather>
                  <Text>{Element.pelabuhanTujuan}</Text>
                </View>
                <Text style={styles.textBold}>Jadwal Masuk Pelabuhan</Text>
                <Text style={styles.textBiasa}>{Element.tgl}</Text>
                <Text style={styles.textBiasa}>{Element.jam} WIB</Text>
                <Text style={styles.textBold}>Layanan</Text>
                <Text style={styles.textBiasa}>{Element.layanan}</Text>
                <Text numberOfLines={1}>
                  __________________________________________
                </Text>
                <View style={styles.areaTotal}>
                  <Text style={styles.textAreaTotal}>
                    {Element.kategori} x 1
                  </Text>
                  <Text style={styles.textAreaTotal}>Rp. 65.000</Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "green",
                      marginRight: 5,
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Sedang Di Proses
                  </Text>
                  <MaterialIcons name="timer" size={24} color="green" />
                </View>

                <TouchableOpacity
                  style={{
                    marginLeft: "auto",
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    alert("Berhasil Menghapus");
                    navigation.navigate("Daftar Pembatalan");
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      marginRight: 5,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Batalkan
                  </Text>
                  <FontAwesome
                    name="close"
                    size={24}
                    color={"red"}
                  ></FontAwesome>
                </TouchableOpacity>
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
    flex: 0.8,
    width: 330,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },

  kotakRincian: {
    backgroundColor: "#DCDCDC",
    padding: 12,
    borderRadius: 7,
    marginBottom: 15,
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
  areaTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textAreaTotal: {
    fontWeight: "bold",
    fontSize: 12,
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
