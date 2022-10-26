import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setData } from "../redux/actions";

const Buttons = ({ navigation }) => {
  const dipsatch = useDispatch();
  const { data, active } = useSelector((state) => state.dataReducer);
  const handleNext = () => {
    if (active === data?.length - 1) {
      dipsatch(setActive(data?.length - 1));
    } else {
      dipsatch(setActive(active + 1));
    }
  };

  const hanldeYes = () => {
    const newData = data;
    newData[active].ready = true;
    dipsatch(setData(newData));
  };
  const handleNo = () => {
    const newData = data;
    newData[active].ready = false;
    dipsatch(setData(newData));
  };
  if (data[active].ready === undefined && data[active].photo === undefined) {
    return (
      <View style={styles.box}>
        <TouchableOpacity style={styles.nextBtn} onPress={handleNo}>
          <Text style={styles.nextTxt}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={hanldeYes}>
          <Text style={styles.nextTxt}>Yes</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (data[active]?.ready && data[active].photo == undefined) {
    return (
      <TouchableOpacity
        style={styles.photoBtn}
        onPress={() => navigation.navigate("Camera")}
      >
        <Text style={styles.photoTxt}>Photo</Text>
      </TouchableOpacity>
    );
  }
  if ((data[active]?.ready && data[active].photo) || !data[active]?.ready) {
    if (active !== data?.length - 1) {
      return (
        <TouchableOpacity style={styles.photoBtn} onPress={handleNext}>
          <Text style={styles.photoTxt}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.photoBtn}
          onPress={() => navigation.navigate("AllData")}
        >
          <Text style={styles.photoTxt}>Finish</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default Buttons;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nextBtn: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#321243",
    color: "white",
  },
  nextTxt: {
    color: "white",
    padding: 16,
  },
  photoBtn: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#321243",
    color: "white",
  },
  photoTxt: {
    color: "white",
    padding: 16,
  },
});
