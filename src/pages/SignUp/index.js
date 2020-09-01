import React, { useState, useEffect, useContext } from 'react';
import { Keyboard, Image, Platform, ActivityIndicator, Animated } from 'react-native';

import { AuthContext } from '../../contexts/auth'
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 250, y: 250}));


  useEffect(() => {

    //keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    //keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500
      })
    ]).start();
    
  }, []);

  /*function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(logo.y, {
        toValue: 250,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();

  }*/

  function handleSignUp(){
    signUp(email, password, nome);
  }

 return (
   <Background>
       <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
         <Image source={require('../../assets/logo.png')} style={{ marginTop: 50}} />

        <Animated.View 
          style={[{flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%', marginBottom: 20},
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ],
            }
          ]}
        >
         <AreaInput>
          <Input placeholder="Nome" autoCorrect={false} autoCapitalize="none" value={nome} onChangeText={(text) => setNome(text)} />
         </AreaInput>
         <AreaInput>
          <Input placeholder="Email" autoCorrect={false} autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} />
         </AreaInput>

         <AreaInput>
          <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
         </AreaInput>
        
        
         <SubmitButton onPress={handleSignUp} >
         {
             loadingAuth ? (
               <ActivityIndicator size={20} color="#FFF" />
             ) : (
              <SubmitText>Cadastrar</SubmitText>
             )
           }
         </SubmitButton>
        </Animated.View>
       </Container>
   </Background>
  );
}