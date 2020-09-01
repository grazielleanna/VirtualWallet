import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #E5E5E5;
    align-items: center;
`;

export const Nome = styled.Text`
    text-align: center;
    font-size: 28px;
    margin-top: 35%;
    margin-bottom: 25px;
    color: #322153;
`;

export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #322153;
    width: 95%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #C62C36;
    width: 95%;
    height: 45px;
    border-radius: 10px;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;
