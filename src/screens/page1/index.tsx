import React, {useContext, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Modal, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TRootStackParamList} from 'navigation';
import {SimpleContext} from 'context';
import {useAppDispatch} from 'hooks';
import {increaseValue} from 'actions';
import {SimpleModal} from 'modals';

export const Page1 = () => {
  const {navigate} = useNavigation<NavigationProp<TRootStackParamList>>();
  // const {value, setValue} = useContext(SimpleContext);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const onPressGoto = () => {
    setShowModal(true);
  };
  return (
    <View>
      <Button title="Go to page 2" onPress={onPressGoto} />
      <SimpleModal showModal={showModal} />
    </View>
  );
};
