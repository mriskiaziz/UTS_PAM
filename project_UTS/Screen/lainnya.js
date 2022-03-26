import React, { useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function lainnya({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.menuAndIcon}>
              <Text style={{ fontWeight: "bold", fontSize: 23 }}>Menu</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesome
                  name="close"
                  size={22}
                  color="black"
                  style={{ padding: 5 }}
                />
              </Pressable>
            </View>
            <View style={styles.boxMenu}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Daftar Pemesanan");
                }}
              >
                <FontAwesome5 name="search" size={35} color="black" />
                <Text>Cek Pesanan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Profile");
                }}
              >
                <FontAwesome5 name="user-alt" size={35} color="black" />
                <Text>Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxMenu}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  Linking.openURL("https://wa.me/+62895330731972/");
                }}
              >
                <FontAwesome5 name="phone-alt" size={35} color="black" />
                <Text>Hubungi Kami</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("History");
                }}
              >
                <Foundation name="book" size={35} color="black" />
                <Text>Riwayat Pesanan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <FontAwesome
          name="bars"
          size={30}
          color="#00008B"
          style={{ paddingLeft: 5 }}
        />
        <Text style={{ fontSize: 10, color: "#00008B" }}>Lainnya</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(220, 220, 220, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFF",
    padding: 10,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuAndIcon: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 110,
  },
  boxMenu: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  box: {
    borderWidth: 1,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 18,
    paddingTop: 18,
    borderRadius: 8,
  },
});
