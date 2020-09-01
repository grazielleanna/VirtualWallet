import React, { useState, useEffect, useContext } from 'react';
import { Platform, ActivityIndicator, Animated, Keyboard, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

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
        duration: 500,
      })
    ]).start();
    
  }, []);

  /*function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 180,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(logo.y, {
        toValue: 180,
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

  function handleLogin(){
    signIn(email, password);
  }

 return (
   <Background>
       <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Image source={require('../../assets/logo.png')} style={{  marginTop: 50}} />

        <Animated.View 
          style={[{flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%', marginBottom: 20,},
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ],
            }
          ]}
        >
          
         <AreaInput>
          <Input placeholder="Email" autoCorrect={false} autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} />
         </AreaInput>

         <AreaInput>
          <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
         </AreaInput>

         <SubmitButton onPress={handleLogin}>
           {
             loadingAuth ? (
               <ActivityIndicator size={20} color="#FFF" />
             ) : (
              <SubmitText>Acessar</SubmitText>
             )
           }
         </SubmitButton>
        
         <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
         </Link>

        </Animated.View>
       </Container>
   </Background>
  );
}