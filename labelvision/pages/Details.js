import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, StyleSheet } from "react-native";

function Details() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 100, height: 250, marginBottom: 50 }}
        source={{
          uri: "https://www.plus.nl/INTERSHOP/static/WFS/PLUS-Site/-/PLUS/nl_NL/product/L/155005.png",
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
            Inhoud: 500ml
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/detail2.png")}
          ></Image>
          <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20 }}>
            Nutri-Score: B
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/detail3.png")}
          ></Image>
          <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20 }}>
            Prijs: €4.49
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleModalOpen}
          >
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
            <Text style={styles.modalText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
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
    backgroundColor: "gray",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
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