import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  console.log(results);
  return (
    <>
      <FlatList
        data={results}
        nestedScrollEnabled={true}
        keyExtractor={(result) => result.berita_id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.list}>
              <TouchableOpacity
                style={styles.detail}
                onPress={() =>
                  navigation.navigate("BeritaShow", { id: item.berita_id })
                }
              >
                <ResultsDetail result={item}></ResultsDetail>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#F4F6F9",
    height: 320,
  },
  list: {
    flexDirection: "row",
    paddingTop: 10,
    backgroundColor: "white",
    marginBottom: 3,
    marginHorizontal: 5,
    borderRadius: 4,
    justifyContent: "space-between",
  },
  detail: {
    flex: 2,
  },
});

export default withNavigation(ResultsList);
