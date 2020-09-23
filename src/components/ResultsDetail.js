import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{ uri: "http://infomasjid.my.id/" + result.masjids.foto }}
      ></Image>
      <View style={style.subcontainer} >
        <Text style={style.name}>{result.judul}</Text>
        <Text style={style.tanggal}>Tanggal {result.tgl_berita}</Text>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderWidth: 0,
    borderRadius: 4,
    borderColor: '#FFC600',
    flexDirection: 'row',
    marginBottom: 5,
    height: 80,
    flex: 1,
    backgroundColor: 'white'

  },
  subcontainer: {
    borderLeftColor: 'grey',
    borderLeftWidth: 0,
    flex: 1,
    marginHorizontal: 2,
    paddingHorizontal: 4
  },
  image: {
    marginHorizontal: 5,
    width: 90,
    height: 70,
    borderRadius: 4,
    marginBottom: 5,
    alignSelf: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,

  },
  tanggal: {
    fontSize: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-end',

  }

});

export default ResultsDetail;
