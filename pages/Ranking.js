import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";

import {
  Item,
  ItemsHeader,
  LoadingIndicator,
} from "../components/RankingItems";

export const Ranking = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const rankingRef = ref(db, "Jugadores");

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const getData = useCallback(async () => {
    let datos = [];
    setData([]);

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

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => <Item name={item.name} kills={item.kills} />;

  return (
    <>
      <ItemsHeader />
      {!loading ? (
        <SafeAreaView
          style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
        >
          {data.length > 1 && (
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListHeaderComponent={() => <View style={{ height: 10 }} />}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, id) => id}
            />
          )}
        </SafeAreaView>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};
