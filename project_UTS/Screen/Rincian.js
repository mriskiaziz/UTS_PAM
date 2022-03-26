import { StyleSheet, Text, View, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import Menu from "./menu";

export default function RincianScreen({ route, navigation }) {
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.kotakFrame}>
        <View style={styles.header}>
          <Text style={styles.text}>Kapalzy</Text>
        </View>
        <View style={styles.kotakDetail}>
          <Text style={styles.textBold}>Kuota tersedia (10000)</Text>
          <Text style={styles.textBold}>Rincian Tiket</Text>
          <View style={styles.kotakRincian}>
            <View style={styles.bandaraAndIcon}>
              <Text>{data.pelabuhanAwal}</Text>
              <Feather
                name="arrow-right"
                size={30}
                style={{ marginLeft: 20, marginRight: 20 }}
              ></Feather>
              <Text>{data.pelabuhanTujuan}</Text>
            </View>
            <Text style={styles.textBold}>Jadwal Masuk Pelabuhan</Text>
            <Text style={styles.textBiasa}> {data.tgl} </Text>
            <Text style={styles.textBiasa}> {data.jam} WIB</Text>
            <Text style={styles.textBold}>Layanan</Text>
            <Text style={styles.textBiasa}> {data.layanan} </Text>
            <Text numberOfLines={1}>
              _______________________________________
            </Text>
            <Text style={styles.textBold}>Dewasa x 1</Text>
          </View>
          <View style={styles.areaTotal}>
            <Text style={styles.textAreaTotal}>Total</Text>
            <Text style={styles.textAreaTotal}>Rp. 65.000</Text>
          </View>
          <View style={styles.areaButton}>
            <Button
              title="Kembali"
              color={"red"}
              onPress={() => {
                navigation.goBack();
              }}
            ></Button>
            <Text> </Text>
            <Button
              title="Lanjutkan"
              onPress={() => {
                navigation.navigate("Informasi", { data });
              }}
            ></Button>
          </View>
        </View>
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
  kotakFrame: {
    height: 580,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "#DCDCDC",
    width: 330,
    elevation: 2,
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
  },
  header: {
    flex: 0.13,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  kotakDetail: {
    width: "auto",
    flex: 0.87,
    padding: 20,
  },
  kotakRincian: {
    backgroundColor: "#e9e9e9",
    padding: 20,
    borderRadius: 7,
  },
  bandaraAndIcon: {
    backgroundColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    justifyContent: "space-around",
  },
  areaButton: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  textBiasa: {
    marginLeft: 10,
  },
  areaTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  textAreaTotal: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
