import React from "react";
import styles from "./FilterCheckBoxStyle";
import Checkbox from "expo-checkbox";
import {View, Text} from "react-native";


const FilterCheckBox = (props) => {
    return(
        <View style={styles.checkboxContainer}>
            <Checkbox
                value={props.isSelected}
                onValueChange={props.setSelection}
                style={styles.checkbox}
            />
            <Text>Tükenen Müzikleri Getir: {props.isSelected ? "👍" : "👎"}</Text>
        </View>
    );
}

export default FilterCheckBox;