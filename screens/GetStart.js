import React from "react";
import { Text, StyleSheet } from "react-native";
import Dots from "react-native-dots-pagination";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons";
import Screen from "../components/Screen";

const GetStart = ({ navigation }) => {
  const { data, active } = useSelector((state) => state.dataReducer);

  return (
    <SafeAreaView style={styles.container}>
      <Screen data={data} active={active} />
      <Text style={styles.counter}>
        {active + 1}/{data.length}
      </Text>
      <Dots length={data.length} active={active} />
      <Buttons navigation={navigation} />
    </SafeAreaView>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  counter: {
    textAlign: "center",
  },
});
