import React, { FC } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../App';

export const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="新規作成"
        onPress={() => {
          navigation.navigate('AboutScreen');
        }}
      />
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Empty />}
        onRefresh={refreshing}
        refreshing={isRefresh}
      /> */}
    </View>
  );
};