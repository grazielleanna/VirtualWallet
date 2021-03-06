import styled from 'styled-components/native';


export const Background = styled.View`
    flex: 1;
    background-color: #E5E5E5;

`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-top: 60px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background: #FFF;
    width: 90%;
    font-size: 17px;
    color: #222;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 7px;
`;


export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #322153;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    margin-bottom: 5px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #6C6C80;
    font-size: 16px;
    font-weight: bold;
`;
