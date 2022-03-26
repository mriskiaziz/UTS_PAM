import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as datas from "../basisData.json";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HistoryScreen() {
  const data = datas.riwayatPemesanan;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.kotak}>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                padding: 15,
                marginBottom: 10,
              }}
            >
              History Pemesanan
            </Text>
          </View>
          {data.map((element, index) => {
            return (
              <View style={styles.box} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderWidth: 1,
                    padding: 8,
                    marginBottom: 8,
                    borderRadius: 7,
                  }}
                >
                  <Text>{element.pelabuhanAwal}</Text>
                  <Feather
                    name="arrow-right"
                    size={20}
                    style={{ marginLeft: 20, marginRight: 20 }}
                  ></Feather>
                  <Text>{element.pelabuhanTujuan}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text>{element.nama}</Text>
                    <Text>{element.tgl}</Text>
                  </View>
                  <Text style={{ marginLeft: "auto" }}>
                    Rp. {element.harga}
                  </Text>
                </View>

                <View>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "rgba(220, 220, 220, 0.3)",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 1,
                          width: 270,
                          height: 450,
                          backgroundColor: "white",
                        }}
                      >
                        <View>
                          <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                          >
                            <FontAwesome
                              name="close"
                              size={25}
                              color="black"
                              style={{ padding: 5, marginLeft: "auto" }}
                            />
                          </Pressable>
                        </View>
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <MaterialCommunityIcons
                            name="sail-boat"
                            size={70}
                            color="black"
                          />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                          <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 0.4, paddingLeft: 20 }}>
                              <Text style={styles.text}>Nama</Text>
                              <Text style={styles.text}>Umur</Text>
                              <Text style={styles.text}>Identitas</Text>
                              <Text style={styles.text}>Pel. Awal</Text>
                              <Text style={styles.text}>Pel. Tujuan</Text>
                              <Text style={styles.text}>Layanan</Text>
                              <Text style={styles.text}>Kategori</Text>
                            </View>
                            <View style={{ flex: 0.5 }}>
                              <Text style={styles.textBiasa}>
                                : {element.nama}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.umur}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.identitas}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.pelabuhanAwal}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.pelabuhanTujuan}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.layanan}
                              </Text>
                              <Text style={styles.textBiasa}>
                                : {element.kategori}
                              </Text>
                            </View>
                          </View>
                          <Text
                            style={{
                              marginLeft: "auto",
                              marginRight: 20,
                              fontSize: 20,
                              fontWeight: "bold",
                              padding: 10,
                            }}
                          >
                            Rp. {element.harga}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>

                <Pressable onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      color: "green",
                      marginLeft: "auto",
                      fontWeight: "bold",
                    }}
                  >
                    Rincian
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
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
  box: {
    backgroundColor: "#DCDCDC",
    borderWidth: 1,
    width: 250,
    padding: 15,
    marginBottom: 15,
    borderRadius: 7,
  },
  text: {
    padding: 10,
    fontWeight: "bold",
    paddingRight: 0,
  },
  textBiasa: {
    padding: 10,
    paddingRight: 0,
  },
});
