import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, RefreshControl } from 'react-native';
import LanguageCard from './components/LanguageCard';
import languages from './data/LanguagesList.js';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Воображаем очень нужные данные для обновления
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <LanguageCard 
            name={item.name} 
            experience={item.experience} 
            logo={item.logo} 
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
  },
});
