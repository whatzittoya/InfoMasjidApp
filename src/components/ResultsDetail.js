import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{ uri: "http://infomasjid.my.id/" + result.masjids.foto }}
      ></Image>
      <Text style={style.name}>{result.judul}</Text>
      <Text>Tanggal {result.tgl_berita}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 260,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ResultsDetail;
