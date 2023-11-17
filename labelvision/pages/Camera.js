import { Text, View, StyleSheet } from 'react-native';
import { useCameraPermission, Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';

function CameraView() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice('back')

  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13'],
    onCodeScanned: (codes) => {
      console.log(codes[0].value)
    }
  })

  const cameraView = <Camera device={device} isActive={true} codeScanner={codeScanner} style={styles.CameraStyle}/>


  if (!hasPermission) {
  	requestPermission()

    if(hasPermission) {
      return (
        cameraView
      );
    } else {
      return (
        <View style={styles.PermissionView}>
          <Text style={styles.PermissionText}>Permission to use the camera needed to function properly!</Text>
        </View>
      )
    }
  
  } else {
    return (
      cameraView
    );
  }
}

  const styles = StyleSheet.create({
    CameraStyle: {
        height: "100%",
        width: "100%",
    },
    PermissionView: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
    },
    PermissionText: {
      color: '#FF0000',
      textAlign: 'center'
    }
  });

  export {CameraView}