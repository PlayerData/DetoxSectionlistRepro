import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, SectionList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
});

const awaitTime = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const refreshData = async () => {
    setLoading(true);

    await awaitTime(200);
    setData(DATA);

    await awaitTime(200);
    setLoading(false);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        onRefresh={refreshData}
        refreshing={loading}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        sections={data || []}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};

export default App;
