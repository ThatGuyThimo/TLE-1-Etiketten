import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from "react-native";
import { stateManager } from "../components/Statemanager";

function Details() {
  const [modalVisible, setModalVisible] = useState(false);
  const { ApiData, setApiData } = useContext(stateManager);
  const nutri = []
  nutri['a'] = require(`../assets/nutri/nutri-a.png`)
  nutri['b'] = require(`../assets/nutri/nutri-b.png`)
  nutri['c'] = require(`../assets/nutri/nutri-c.png`)
  nutri['d'] = require(`../assets/nutri/nutri-d.png`)
  nutri['e'] = require(`../assets/nutri/nutri-e.png`)
  let serving_size = "1L";
  let image =
    "https://imgproxy-retcat.assets.schwarz/EzycSqdC8yFC4DaScuJAzEXdO1ji3wa72scHGvAwZQo/sm:1/w:427/h:320/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvbmwvMS9EODJFNDc3RkZFQjhFQ0ZGRjg0OTk4RjN/EMDg2MDVFMENCODZFNDk1Njk3Q0RENkIxOEUzRDgwQkZDQkRENjJBLmpwZw.jpg";
  let ingredienten = "";
  let nutri_score = "a";
  let product_name = "niet bekend";
  if (ApiData.product?.image_front_url != undefined) {
    image = ApiData.product.image_front_url;
    if(ApiData.product?.serving_size != undefined) {
      serving_size = ApiData.product.serving_size ;
    } else if (ApiData.product?.quantity != undefined) {
      serving_size = ApiData.product.quantity
    } else {
      serving_size = "niet bekend";
    }
    if(ApiData.product?.name != undefined) {
      product_name = ApiData.product.serving_size ;
    } else {
      product_name = "niet bekend";
    }
    if (ApiData.product?.nutriscore_grade != undefined) {
      nutri_score = ApiData.product.nutriscore_grade ;
    } else {
      nutri_score = "niet bekend";
    }
    if(ApiData.product?.ingredients_text_nl != undefined) {
      ingredienten = ApiData.product.ingredients_text_nl;
    } else if (ApiData.product?.ingredients_text_en != undefined) {
      ingredienten = ApiData.product.ingredients_text_en;
    } else {
      ingredienten = "niet bekend";
    }

  }

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20, marginBottom: 20 }}>
          {product_name}
        </Text>
      <Image
        style={{ width: 400, height: 250, marginBottom: 50, resizeMode: "contain" }}
        source={{
          uri: image,
        }}
      ></Image>
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 15,
          paddingVertical: 20,
          paddingHorizontal: 50,
          borderStyle: "solid",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/detail1.png")}
          ></Image>
          <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20 }}>
            Inhoud: {serving_size}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/detail2.png")}
          ></Image>
          {nutri_score == "niet bekend" ? <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20 }}>Nutri-Score: {nutri_score}</Text> : null}

          <Image 
          style={{ width: 120, height: 60 }}
          source={nutri[nutri_score]}>
            {/* Nutri-Score: {nutri_score} */}
          </Image>

        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handleModalOpen}>
            <Text style={styles.buttonText}>Informatie</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>ingredienten: {ingredienten}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleModalClose}
            >
              <Text style={styles.closeButtonText}>Sluiten</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0A3D4C",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export { Details };
