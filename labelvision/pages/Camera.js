import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";
import { Loading } from "./Loading";

function CameraView() {
  const [hasPermission, setHasPermission] = useState(null);
  const  [scanned, setScanned] = useState(false);
  const  [text, setText] = useState('Not yet scanned');

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
  const  handleBarCodeScanned = ({type, barcoderesult}) => {
    setScanned(true);
    setText(barcoderesult);
    console.log('Type: ' + type + '\nData: ' + barcoderesult);
    useEffect(() => {
      fetch(url + barcoderesult)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);
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
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 600, width: 600 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      <View style={styles.container}>
      {loading ? (
          <Text>Loading...</Text>
      ) : (
          data.map((post) => {
            return (
                <View>
                  <Text style={styles.title}>{post.title}</Text>
                  <Text>{post.body}</Text>
                </View>
            );
          })
      )}
    </View>;

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato'/>}
    </View>
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
});

export {CameraView};