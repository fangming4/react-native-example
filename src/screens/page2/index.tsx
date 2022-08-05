import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SimpleContext} from 'context';
import {getState, useAppSelector} from 'hooks';
import {TRootStackParamList} from 'navigation';
import React, {FC, useContext} from 'react';
import {Button, Text, View} from 'react-native';

export const Page2 = () => {
  const {navigate} = useNavigation<NavigationProp<TRootStackParamList>>();
  // const {value} = useContext(SimpleContext);
  const {value} = useAppSelector(getState);
  return (
    <View>
      <Text>{value}</Text>
      <Button
        title="Go to page 1"
        onPress={() => {
          navigate('Page1');
        }}
      />
    </View>
  );
};
