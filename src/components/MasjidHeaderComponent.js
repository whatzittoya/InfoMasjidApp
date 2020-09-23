import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";



const MasjidHeaderComponent = ({ title, results }) => {

    console.log('oke');


    return (
        <>

            {

                /* 
                <Text> {results.length} </Text>
                <Text> {resultsMasjid.length} </Text>
                 <Text> {results.nama} </Text>
                results.map((postData, idx) => {
    
                    return (
                        <View style={styles.container} key={postData.masjid_id}>
                            <Text style={styles.setup}>ubah</Text>
                            <Image style={styles.imagestyle} source={{ uri: "http://infomasjid.my.id/" + postData.foto }} ></Image>
                            <Text style={styles.namaStyle}> {postData.nama}</Text>
                            <Text style={styles.alamatStyle}> {postData.alamat}</Text>
                        </View>
                    );
                })
                */
            }
        </>
    );
};


const styles = StyleSheet.create({
    imagestyle: {
        width: 150,
        height: 150,
        borderRadius: 50,
        alignSelf: 'center',
        top: -18
    },
    namaStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    alamatStyle: {
        fontSize: 10,
        alignSelf: 'center'
    },
    container: {
        marginHorizontal: 15,
        borderWidth: 0,
        height: 200,
        marginTop: 10
    },
    setup: {
        alignSelf: "flex-end",
        fontSize: 10,
        color: 'blue'
    }
});

export default MasjidHeaderComponent;