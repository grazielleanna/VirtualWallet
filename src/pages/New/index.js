import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

import { Background, Input, SubmitButton, SubmitText } from './styles';
import Picker from '../../components/Picker';

export default function New() {
  const navigation = useNavigation();
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const { user: usuario} = useContext(AuthContext);

  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Descrição ${descricao} - Valor: ${parseFloat(valor)} `,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )

  }

  async function handleAdd(){
    let uid = usuario.uid;

    let key = await firebase.database().ref('historico').child(uid).push().key;

    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      descricao: descricao,
      date: format(new Date(), 'dd/MM/yyyy')
    })

    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);
    });
    Keyboard.dismiss();
    setValor('');
    setDescricao('');
    setTipo('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView style={{ alignItems: 'center'}}>
            <Input 
              placeholder="Valor desejado" 
              keyboardType="numeric" 
              returnKeyType="next" 
              onSubmitEditing={ () => Keyboard.dismiss()} 
              value={valor}
              onChangeText={ (text) => setValor(text)}
            />
            <Input 
              placeholder="Descrição do registro" 
              onSubmitEditing={ () => Keyboard.dismiss()}
              value={descricao}
              onChangeText={ (text) => setDescricao(text)}
            />

            <Picker onChange={setTipo} />

            <SubmitButton onPress={handleSubmit}>
              <SubmitText>Registrar</SubmitText>
            </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}