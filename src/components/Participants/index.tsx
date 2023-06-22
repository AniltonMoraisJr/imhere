import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

interface ParticipantsProps {
  participant: string;
  handleRemoveParticipant: (participant: string) => void;
}

const Participants: React.FC<ParticipantsProps> = ({
  participant,
  handleRemoveParticipant,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{participant}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRemoveParticipant(participant)}
      >
        <MaterialIcons name="delete-outline" color={"#f2f2f2"} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Participants;
