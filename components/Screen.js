import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Screen = () => {
  const { data, active } = useSelector((state) => state.dataReducer);
  return (
    <View style={styles.container}>
      <Text>{data[active].title}</Text>
      <Text>{data[active].sub_title}</Text>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
