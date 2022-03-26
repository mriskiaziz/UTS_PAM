import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Menu from "./menu";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import * as datas from "../basisData.json";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function BerandaScreen({ navigation }) {
  const [pelabuhanAwal, setPelabuhanAwal] = useState("");
  const [pelabuhanTujuan, setPelabuhanTujuan] = useState("");
  const [layanan, setLayanan] = useState("");
  const [tgl, setTgl] = useState("");
  const [jam, setJam] = useState("");
  const [kategori, setKategori] = useState("");

  const data = {
    pelabuhanAwal: pelabuhanAwal,
    pelabuhanTujuan: pelabuhanTujuan,
    layanan: layanan,
    tgl: tgl,
    jam: jam,
    kategori: kategori,
  };

  const bacaKategori = datas.kategori;
  const getKategori = bacaKategori.map((e) => {
    return {
      label: e,
      value: e,
    };
  });

  const bacalayanan = datas.layanan;
  const getlayanan = bacalayanan.map((e) => {
    return {
      label: e,
      value: e,
    };
  });

  const bacapelAwal = datas.jadwal;
  const getpelAwal = bacapelAwal.map((e) => {
    return {
      label: e.pelabuhanAwal,
      value: e.pelabuhanAwal,
    };
  });

  const bacapelTujuan = datas.jadwal;
  const getpelTujuan = bacapelTujuan.map((e) => {
    return {
      label: e.pelabuhanTujuan,
      value: e.pelabuhanTujuan,
    };
  });

  // tanggal dan jam
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const [mode, setmode] = useState("date");

  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const showMode = (currentMode) => {
    setIsPickerShow(true);
    setmode(currentMode);
  };

  const onChange = (event, value) => {
    const val = new Date(value);
    setDate(value);

    setTgl(
      hari[val.getDay()] +
        ", " +
        val.getDate() +
        " " +
        bulan[val.getMonth()] +
        " " +
        val.getFullYear()
    );

    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };
  const onChangeHours = (event, value) => {
    const val = new Date(value);

    setJam(val.getHours() + "." + val.getMinutes());

    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.kotakFrame}>
        <View style={styles.header}>
          <Text style={styles.text}>Kapalzy</Text>
        </View>
        <View style={styles.kotak}>
          <View style={styles.kotakInput}>
            <Text>Pelabuhan Awal</Text>
            <View style={styles.areaIconAndInput}>
              <Ionicons name="md-boat-outline" size={27} />
              <View style={styles.textInput}>
                <RNPickerSelect
                  onValueChange={(value) => setPelabuhanAwal(value)}
                  useNativeAndroidPickerStyle={false}
                  items={getpelAwal}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          <View style={styles.kotakInput}>
            <Text>Pelabuhan Tujuan</Text>
            <View style={styles.areaIconAndInput}>
              <Ionicons name="md-boat" size={27} />
              <View style={styles.textInput}>
                <RNPickerSelect
                  onValueChange={(value) => setPelabuhanTujuan(value)}
                  useNativeAndroidPickerStyle={false}
                  items={getpelTujuan}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          <View style={styles.kotakInput}>
            <Text>Kelas Layanan</Text>
            <View style={styles.areaIconAndInput}>
              <MaterialIcons name="airline-seat-recline-normal" size={27} />
              <View style={styles.textInput}>
                <RNPickerSelect
                  onValueChange={(value) => setLayanan(value)}
                  useNativeAndroidPickerStyle={false}
                  items={getlayanan}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          <View style={styles.kotakInput}>
            <Text>Tanggal Masuk Pelabuhan</Text>
            <View style={styles.areaIconAndInput}>
              <Icons name="calendar" size={27} />
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => showMode("date")}
              >
                <Text style={styles.textDate}>{tgl}</Text>
              </TouchableOpacity>
              {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  is24Hour={true}
                  onChange={onChange}
                  style={styles.datePicker}
                />
              )}
            </View>
          </View>

          <View style={styles.kotakInput}>
            <Text>Jam Masuk Pelabuhan</Text>
            <View style={styles.areaIconAndInput}>
              <AntDesign name="clockcircle" size={27} />
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => showMode("time")}
              >
                <Text style={styles.textDate}>{jam}</Text>
              </TouchableOpacity>
              {isPickerShow && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  is24Hour={true}
                  onChange={onChangeHours}
                  style={styles.datePicker}
                />
              )}
            </View>
          </View>

          <View style={styles.kategoriPengunjung}>
            <View style={styles.textInput}>
              <RNPickerSelect
                onValueChange={(value) => setKategori(value)}
                useNativeAndroidPickerStyle={false}
                items={getKategori}
                style={pickerSelectStyles}
              />
            </View>
          </View>

          <FontAwesome5.Button
            name="plus"
            backgroundColor="#FF8C00"
            onPress={() => {
              if (pelabuhanAwal != "" && pelabuhanTujuan != "") {
                navigation.navigate("Rincian", { data });
              } else {
                alert("Isikan Semua Data");
              }
            }}
            style={{ width: 150, justifyContent: "center" }}
          >
            Buat Tiket
          </FontAwesome5.Button>
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
    backgroundColor: "#FFF",
    height: 580,
    marginBottom: 20,
    width: 330,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
  kotak: {
    width: "auto",
    flex: 0.85,
    alignItems: "center",
  },
  kotakInput: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 2,
    paddingBottom: 15,
  },
  textInput: {
    backgroundColor: "#e9e9e9",
    borderRadius: 7,
    width: 230,
    marginLeft: 5,
  },
  areaIconAndInput: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
    padding: 2,
  },
  kategoriPengunjung: {
    width: 260,
    height: 40,
    backgroundColor: "#e9e9e9",
    padding: 8,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 6,
  },
  textDate: { padding: 5 },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
