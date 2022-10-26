import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from "expo-camera";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/actions";

// import { shareAsync } from "expo-sharing";
// import * as MediaLibrary from "expo-media-library";

export default function CameraScreen({ navigation }) {
  let cameraRef = useRef();
  const dispatch = useDispatch();
  const { data, active } = useSelector((state) => state.dataReducer);

  const [photo, setPhoto] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      // const mediaLibraryPermission =
      //   await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      // setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    // let sharePic = () => {
    //   shareAsync(photo.uri).then(() => {
    //     setPhoto(undefined);
    //   });
    // };

    // let savePhoto = () => {
    //   MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
    //     setPhoto(undefined);
    //   });

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo?.uri }} />
        {/* <Button title="Share" onPress={sharePic} /> */}
        {/* {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined} */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "90%",
          }}
        >
          <Icon
            name="delete"
            type="delete"
            color="black"
            size={40}
            onPress={() => setPhoto(undefined)}
          />
          <Icon
            name="check"
            type="check"
            color="black"
            size={40}
            onPress={() => {
              const newData = data;
              newData[active].photo = photo.uri;
              dispatch(setData(newData));
              navigation.navigate("GetStart");
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <TouchableOpacity style={styles.buttonContainer} onPress={takePic}>
          <Icon name="camera" type="camera" color="white" size={60} />
        </TouchableOpacity>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  camera: {
    height: "100%",
    width: "100%",
    padding: 50,
    flex: 1,
    justifyContent: "flex-end",
  },
});
