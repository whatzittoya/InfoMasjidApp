import React from 'react';

import { Button, View, StyleSheet } from 'react-native';

const TestScreen = () => {
    return (
        <View>
            <Button title="click me" onPress={() => console.log("kamsia")} />
        </View>

    );
}

const styles = StyleSheet.create({});

export default TestScreen;