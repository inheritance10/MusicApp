import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import data_song from './data_song.json';
import SongCard from "./src/components/SongCard/SongCard";
import SearchBar from "./src/components/SearchBar/SearchBar";
import {useState} from "react";
import FilterCheckBox from "./src/components/FilterCheckBox/FilterCheckBox";


export default function App() {

  const [list, setList] = useState(data_song);
  const [isSelected, setSelected] = useState(false);

  const renderSong = ({item}) => <SongCard song={item}/>

  const renderSeperator = () => <View style={styles.seperator} />


  const handleSearch = (text) => {
     const filteredList = data_song.filter((song) => {
        const searchedText = text.toLowerCase();
        const songTitle = song.title.toLowerCase();

        return songTitle.indexOf(searchedText) > -1;
     });

     setList(filteredList);
  }

  const handleSetSelection = (selected) => {
      let filteredList = [];
      setSelected(selected);
      if (selected){
           filteredList = data_song.filter((song) => {

              return song.isSoldOut === true
          });
          setList(filteredList)
      }else{
          setList(data_song)
      }
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
        <FilterCheckBox isSelected={isSelected} setSelection={handleSetSelection} />
      <FlatList
          data={list}
          renderItem={renderSong}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeperator}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator:{
    borderWidth: 0.2,
    backgroundColor: '#f1f1f1'
  }
});
