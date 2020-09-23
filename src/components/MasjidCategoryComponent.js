import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MasjidCategoryComponent = ({ title }) => {


    return (
        <View style={styles.container}>
            {
                (title === "Pengumuman") ?
                    <AntDesign name="notification" color="white" size={20} style={styles.iconPickStyle} /> :
                    (title === "Keuangan") ?
                        <MaterialCommunityIcons name="finance" color="#717171" size={20} style={styles.iconStyle} /> :
                        (title === "Pembangunan") ?
                            < MaterialCommunityIcons name="floor-plan" color="#717171" size={20} style={styles.iconStyle} /> :
                            (title === "Program") ?
                                < MaterialCommunityIcons name="progress-check" color="#717171" size={20} style={styles.iconStyle} /> : null

            }


            <Text style={styles.addStyles}>{title}</Text>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconPickStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        alignSelf: "center",
        backgroundColor: "#3F4448"

    },
    iconStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        alignSelf: "center"
    },
    addStyles: {
        fontSize: 10,
        alignSelf: "center"
    }

});

export default MasjidCategoryComponent;