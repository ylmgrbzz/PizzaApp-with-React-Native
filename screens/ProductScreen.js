import React, { useState } from "react";
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../components/Button";

const ProductScreen = ({ navigation, route }) => {
  const food = route.params;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
            <View>
              <MaterialCommunityIcons
                name="chevron-left"
                color="#eab19c"
                size={35}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Image source={food.image} style={styles.productImage} />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 110,
            paddingTop: 60,
            backgroundColor: "white",
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            elevation: 13,
            shadowOpacity: 0.2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {food.product}
            </Text>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color="#eab19c"
              size={35}
            />
          </View>
          <Text
            style={{
              marginTop: 10,
              lineHeight: 22,
              fontSize: 14,
              color: "gray",
            }}
          >
            {food.detail}
          </Text>

          <View
            style={{
              marginTop: 35,
              marginBottom: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  marginTop: 10,
                  lineHeight: 30,
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                {food.price}
              </Text>
            </View>

            <View
              style={{
                marginRight: 40,
                width: 40,
                height: 40,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 40,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                  shadowOpacity: 0.2,
                }}
                onPress={decrement}
              >
                <Text style={{ fontWeight: "bold" }}>-</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{count}</Text>
              </View>
              <View
                style={{
                  marginRight: 40,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 40,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    shadowOpacity: 0.2,
                  }}
                  onPress={increment}
                >
                  <Text style={{ fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button title="Sepete Ekle" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    paddingVertical: 20,
  },
  productImage: {
    resizeMode: "cover",
    shadowOpacity: 0.5,
    width: 400,
    height: 200,
  },
});
