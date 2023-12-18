import React, { useState, useEffect, useContext} from "react";
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";
import { Loading } from "./Loading";
import { stateManager } from "../components/Statemanager";
import axios from "axios";

function CameraView() {
  const [hasPermission, setHasPermission] = useState(null);
  const  [scanned, setScanned] = useState(false);
  const  [text, setText] = useState('Not yet scanned');
  const { ApiData, setApiData } = useContext(stateManager);

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const  handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data); 
    console.log('Type: ' + type + '\nData: ' + data);
    console.log(url + data);
    axios.get(`${url}${data}`, {'User-Agent': "LabelVision 0.0.1 thimodehaan@gmail.com"}).then((response) => {
      useEffect(() => {
        setApiData(response.data)
      }).cat
      console.log(response.data);
    }).catch((error) => {
      if(error.response.status === 502) {
        // server is down
        console.log(error);
        setApiData("Server is down :(")
        // do something here to handle the server being down 
      }
    });
  }

  // Check permissions and return the screens
  if(hasPermission === null){
    return (
        // <View style={styles.container}>
        //   <Text>Requesting for camera permission</Text>
        // </View>
        <Loading/>
    )
  }

  if(hasPermission === false){
    return (
        <View style={styles.container}>
          <Text style={{margin: 10}}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
        </View>
    )
  }

  const url = "https://world.openfoodfacts.net/api/v2/product/"

  // Return the View
  return (
    <Pressable style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 600, width: 600 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Pressable style={styles.button1} onPress={() => setScanned(false)} color='#ffffff'>
        <Text style={styles.text}>Scan Again?</Text>
      </Pressable>
        }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodebox:{
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  },

  maintext: {
    fontSize: 16,
    margin: 20,
  },

  button1: {
    width: 131,
    height: 43,
    backgroundColor: '#0A3D4C',
    borderRadius: 20,
  },

  text: {
    display: "flex",
    fontSize: 20,
    fontWeight: "bold",
    color: '#ffffff',
    textAlign: "center",
    alignItems: "center",
    marginTop: 9
  }
});

export {CameraView};