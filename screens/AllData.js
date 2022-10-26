import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const AllData = () => {
  const { data } = useSelector((state) => state.dataReducer);
  const { width } = Dimensions.get("window");
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text>
          {index + 1}. Title: {item.title}
        </Text>
        {item.sub_title && <Text>Sub Title: {item.sub_title}</Text>}
        {item.ready ? <Text>Ready: Yes</Text> : <Text>Ready: No</Text>}
        {item.photo !== undefined && (
          <Image
            source={{ uri: item?.photo }}
            style={{ width: width / 2, height: width / 2 }}
          />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: "700", textAlign: "center" }}>All Data</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.lists}
      />
    </SafeAreaView>
  );
};

export default AllData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lists: {
    flex: 1,
    paddingHorizontal: 50,
  },
});
