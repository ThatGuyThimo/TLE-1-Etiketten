import { Text, View } from 'react-native';
import { useCameraPermission, Camera } from 'react-native-vision-camera';

const { hasPermission, requestPermission } = useCameraPermission()

function CameraView() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text>Camera!</Text>
      // </View>
      <Camera
      style={StyleSheet.CameraStyle}
      device={device}
      isActive={true}
      />
    );
  }

  const styles = StyleSheet.create({
    CameraStyle: {
        // backgroundColor: "#ff9a4d",
        // position: "absolute",
        justifyContent: "center",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
    },
  });

  export {CameraView}