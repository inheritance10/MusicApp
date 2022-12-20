import React from "react";
import styles from "./SongCardStyle";
import {Text, View} from "react-native";

const SoldOut = () => {
    return(
        <View style={styles.soldout_container}>
            <Text style={styles.soldout_title}>
                TÜKENDİ
            </Text>
        </View>
    );
}

export default SoldOut;
