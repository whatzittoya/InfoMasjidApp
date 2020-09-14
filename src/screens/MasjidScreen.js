import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResultsMasjid from "../hooks/useResultsMasjid";
import MasjidResultsList from "../components/MasjidResultsList";

const MasjidScreen = () => {
  const [term, setTerm] = useState("");
  const [searchMasjidApi, resultsMasjid, errorMessage] = useResultsMasjid();

  const filterResultsByCategory = () => {
    return resultsMasjid;
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchMasjidApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <MasjidResultsList
          results={filterResultsByCategory()}
          title="Pengumuman"
        ></MasjidResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MasjidScreen;
