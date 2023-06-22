import React, { useCallback, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Participants from "../../components/Participants";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
// import { Container } from './styles';

const Home: React.FC = () => {
  const [inputParticipant, setInputParticipant] = useState<
    string | undefined
  >();
  const [participants, setParticipants] = useState<string[]>(["Anilton"]);
  const dateFormat = useMemo(() => {
    return format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  }, []);

  const handleAddParticipant = useCallback(
    (newParticipant: string | undefined) => {
      if (newParticipant) {
        if (participants.includes(newParticipant)) {
          Alert.alert("Erro", "Participante já adicionado!");
        } else {
          setParticipants((prevState) => [...prevState, newParticipant]);
          setInputParticipant(undefined);
        }
      }
    },
    [participants]
  );

  const handleRemoveParticipant = useCallback(
    (participant: string) => {
      if (participants.includes(participant)) {
        Alert.alert(
          "Alerta",
          "Você realmente deseja deletar esse Participante?",
          [
            {
              text: "Sim",
              onPress: () => {
                setParticipants((prevState) =>
                  prevState.filter((part) => part !== participant)
                );
              },
            },
            {
              text: "Não",
              onPress: () => {
                return;
              },
            },
          ]
        );
      } else {
        Alert.alert("Erro", "Participante não encontrado!");
      }
    },
    [participants]
  );

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <View style={styles.background}>
        <Text style={styles.title}>Nome do Evento</Text>
        <Text style={styles.subTitle}>{dateFormat}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={inputParticipant}
            style={styles.input}
            placeholderTextColor={"#6c6c6c"}
            placeholder="Nome do participante"
            onChangeText={(text) => setInputParticipant(text)}
          />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => handleAddParticipant(inputParticipant)}
          >
            <Text style={styles.buttonAddText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{
            marginTop: 24,
          }}
          data={participants}
          renderItem={({ item: participant }) => (
            <Participants
              participant={participant}
              handleRemoveParticipant={handleRemoveParticipant}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;
