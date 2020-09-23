import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResultsBerita from "../hooks/useResultsBerita";
import ResultsList from "../components/ResultsList";

import Constants from "expo-constants";

const BeritaScreen = () => {
  const [term, setTerm] = useState("");
  const [searchBeritaApi, resultsBerita, errorMessage] = useResultsBerita();

  const filterResultsByCategory = (category) => {
    console.log(resultsBerita);
    return resultsBerita.filter((resultBerita) => {
      return resultBerita.kategori_berita === category;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#7BAF90' }}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchBeritaApi(term)}
        ></SearchBar>
      </View>

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/*<Text>{Constants.installationId} </Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByCategory("Pengumuman")}
          title="Pengumuman"
        ></ResultsList>
        {/* 
       <ResultsList
          results={filterResultsByCategory("Perencanaan Pembangunan")}
          title="Perencanaan Pembangunan"
        ></ResultsList>
        <ResultsList
          results={filterResultsByCategory("Program Masjid")}
          title="Program Masjid"
        ></ResultsList>
        <ResultsList
          results={filterResultsByCategory("Laporan Keuangan")}
          title="Laporan Keuangan"
        ></ResultsList>
       */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAED'
  },
});

export default BeritaScreen;
