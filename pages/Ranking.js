import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";

import { Item, ItemsHeader } from "../components/RankingItems";

export const Ranking = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rankingRef = ref(db, "Jugadores");

  useEffect(() => {
    let datos = [];

    onValue(rankingRef, (snapshot) => {
      setLoading(true);

      snapshot.forEach((child) => {
        let obj = { name: child.val().name, kills: child.val().kills };
        datos.push(obj);
      });

      datos.sort((a, b) => (a.kills < b.kills ? 1 : -1));
      setData(datos);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => <Item name={item.name} kills={item.kills} />;

  return (
    <>
      <ItemsHeader />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, id) => id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
