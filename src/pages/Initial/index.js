import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, AreaText, Title, Description, AreaButton, ButtonIcon, Text, TextButton, Footer } from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default function Initial() {
 const navigation = useNavigation();

 function handleNavigationLogin(){
     navigation.navigate('SignIn');
 }

 return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': undefined }>
            <Container>
                <Image source={require('../../assets/logomenor.png')} style={{marginLeft: 20, marginTop: 10}} />
            </Container>
            <ImageBackground source={require('../../assets/background.png')} style={{ width: 210, height: 210, opacity: 0.2, marginTop: 140, marginLeft: -42}} />
            
            <AreaText>
                <Title>Sua carteira virtual na palma da mão.</Title>
                <Description>Informe sua renda e gastos para controlar seu saldo.</Description>
            </AreaText>

            <RectButton onPress={handleNavigationLogin}>
                <AreaButton>
                    <ButtonIcon>
                        <Text>
                            <Icon name="arrow-right" color='#FFF' size={24} />
                        </Text>
                    </ButtonIcon>
                    <TextButton>
                        Realizar login
                    </TextButton>
                    </AreaButton>
            </RectButton>
    </KeyboardAvoidingView>
    );
}