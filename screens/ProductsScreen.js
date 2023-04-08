import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import datas from "../model/data";

const ProductsScreen = ({ navigation }) => {
  const categories = [
    "Margarita",
    "Piknik",
    "Parti",
    "Pepperoni Pizza",
    "Sebze",
    "Sucukbol",
    "Akdeniz",
    "Karışık",
  ];

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Product", item);
        }}
        style={styles.card}
      >
        <View style={{ alignItems: "center", top: -20 }}>
          <Image style={{ height: 140, width: 280 }} source={item.image} />
        </View>
        <Text style={styles.cardTitle}>{item.product}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
          <MaterialCommunityIcons name="plus-box" color="#eab19c" size={35} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, marginRight: 10 }}>👋🏻</Text>
            <View>
              <Text>Hoşgeldin!</Text>
              <Text style={styles.headerText}>YLMGRBZ</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              style={{ marginRight: 20 }}
              name="magnify"
              color="gray"
              size={26}
            />
            <TextInput placeholder="Pizza ara.." />
          </View>
          <MaterialCommunityIcons name="menu" color="gray" size={26} />
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((value) => {
              return (
                <TouchableOpacity
                  style={{
                    marginTop: 5,
                    marginRight: 5,
                    borderRadius: 30,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowOpacity: 0.1,
                    backgroundColor: "#eab19c",
                  }}
                >
                  <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>{value}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <FlatList
            data={datas}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            style={{ paddingHorizontal: 45, paddingBottom: 30 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  subContainer: {
    backgroundColor: "white",
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    backgroundColor: "#f6f6f6",
    padding: 15,
    margin: 15,
  },
  categoryContainer: {
    paddingHorizontal: 15,
  },
  categoryText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    elevation: 13,
    height: 210,
    width: 300,
    marginTop: 50,
    marginRight: 20,
    shadowOpacity: 0.2,
    borderRadius: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 15,
    marginHorizontal: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
