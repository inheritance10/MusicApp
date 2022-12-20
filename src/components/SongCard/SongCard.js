import styles from "./SongCardStyle";

import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SoldOut from "./SoldOut";


const SongCard = (props) => {
    return(
      <View style={styles.container}>
          <Image source={{uri: props.song.imageUrl}} style={styles.image}/>
          <View style={styles.inner_container}>
              <Text style={styles.title}>{props.song.title}</Text>
                  <View style={styles.info_container}>
                      <Text style={styles.artist}>{props.song.artist}</Text>
                      <Text style={styles.year}>{props.song.year}</Text>
                      <Ionicons icon=""/>
                      <TouchableOpacity>
                      </TouchableOpacity>
                  </View>
              {props.song.isSoldOut && <SoldOut />}
          </View>
      </View>
    );
}

export default SongCard;