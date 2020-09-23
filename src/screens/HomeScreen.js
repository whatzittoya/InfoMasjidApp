import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import MasjidHeader from '../components/MasjidHeaderComponent';
import CategoryComp from '../components/MasjidCategoryComponent';
import ResultsList from "../components/ResultsList";

import MasjidHook from '../hooks/HookMasjidProfile';
import useResultsBerita from "../hooks/useResultsBerita";




const HomeScreen = () => {

    const [searchMasjidApi, resultsMasjid, errorMessage] = MasjidHook();
    const [searchBeritaApi, resultsBerita, errorBeritaessage] = useResultsBerita();




    const filterResultsByCategory = (category) => {
        console.log(resultsBerita);
        return resultsBerita.filter((resultBerita) => {
            return resultBerita.kategori_berita === category;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <MasjidHeader title="mesjid Header" results={resultsMasjid} />
            <View style={styles.CatContainer} >
                <CategoryComp title="Pengumuman" />
                <CategoryComp title="Keuangan" />
                <CategoryComp title="Pembangunan" />
                <CategoryComp title="Program" />
            </View>

            <ScrollView keyboardShouldPersistTaps='always' >

                <ResultsList
                    results={resultsBerita}
                    title="Pengumuman"
                ></ResultsList>

            </ScrollView>


        </View >
    );
};


const styles = StyleSheet.create({
    CatContainer: {
        flexDirection: "row",
        marginTop: 10,
        borderWidth: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "space-around",
        marginHorizontal: 15,
        borderRadius: 10
        , shadowOffset: { width: 10, height: 10, },
        shadowColor: 'black',
        shadowOpacity: 1.0
    },
    beritaStyle: {
        marginTop: 10
    }
});

export default HomeScreen;