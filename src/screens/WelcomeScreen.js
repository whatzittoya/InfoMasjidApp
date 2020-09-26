import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Picker,
    TouchableOpacity,
    Button
} from "react-native";

import { withNavigation } from 'react-navigation';

import useResultsMasjid from '../hooks/useResultsMasjid';

const WelcomeScreen = ({ navigation }) => {

    const [selectedMasjid, setSelectedMasjid] = useState();
    const [searchMasjidApi, resultsMasjid, errorMessage] = useResultsMasjid();

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}  ></Image>
            <Text style={styles.header}>InfoMasjid</Text>
            <Text style={styles.QuoteStyles}>“Hanyalah yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan hari kemudian, serta tetap mendirikan salat, menunaikan zakat dan tidak takut (kepada siapa pun) selain kepada Allah, maka merekalah orang-orang yang diharapkan termasuk golongan orang-orang yang mendapat petunjuk.” (at-Taubah: 18)</Text>

            <Text style={styles.optionText}>Silahkan pilih mesjid</Text>
            <View style={styles.pickStyles}>
                <Picker selectedValue={selectedMasjid}
                    style={styles.MasjidOption}
                    itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedMasjid(itemValue)} >
                    <Picker.Item label="Masjid 1" color="green" value="masjid1" />
                    <Picker.Item label="Masjid 2" value="masjid2" />
                </Picker>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { id: selectedMasjid })
                }>
                <View style={styles.btnContainer}>

                    <Text style={styles.btnLanjutkanStyle}>Lanjutkan..</Text>

                </View>
            </TouchableOpacity>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    header: {
        fontWeight: 'bold',
        fontSize: 26,
        letterSpacing: 3
    },
    QuoteStyles: {
        marginHorizontal: 20,
        marginVertical: 20,
        alignSelf: "center",
        fontStyle: 'italic',
        fontSize: 12,
        textAlign: "center"
    },
    pickStyles: {
        width: 200,
        height: 50,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderBottomWidth: 0,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: "#E7EAED"
    },
    MasjidOption: {
        height: 50,
        width: 200,

    },
    btnContainer: {
        backgroundColor: "blue",
        borderRadius: 20,
        alignSelf: "center",
        width: 300,
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
        marginTop: 15

    },
    btnLanjutkanStyle: {
        fontSize: 18,
        color: "white",
        textAlign: "center"

    },
    optionText: {
        letterSpacing: 1
    }
});

export default withNavigation(WelcomeScreen);
