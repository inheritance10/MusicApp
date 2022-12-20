import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 8,
        flexDirection: "row",
        marginTop: 15
    },
    inner_container:{
        justifyContent: "center",
        marginLeft: 10,
        flex: 1
    },
    info_container:{
        flexDirection: "row",
        padding:8,
        alignItems: "center"
    },
    title:{
      fontWeight: "bold",
      fontSize: 27
    },
    year:{
      fontWeight: "bold",
      fontSize: 12,
        color: 'gray',
        marginLeft: 10
    },
    artist:{
        fontWeight: "bold"
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    content_container:{
        flexDirection: "row"
    },
    soldout_container:{
        alignSelf: "flex-end",
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        borderWidth: 0.7,
        borderRadius: 8,
        borderColor: 'red'
    },
    soldout_title:{
        color: 'red',
        padding: 5
    }
});


export default styles;

