import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <>

      <FlatList
        data={results}
        keyExtractor={(result) => result.berita_id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BeritaShow", { id: item.berita_id })
              }
            >
              <ResultsDetail result={item}></ResultsDetail>
            </TouchableOpacity>
          );
        }
        }
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#F4F6F9",
    height: 320

  },
});

export default withNavigation(ResultsList);
