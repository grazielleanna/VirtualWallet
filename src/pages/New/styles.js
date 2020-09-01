import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #E5E5E5;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#6C6C80'
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255, 0.9);
    margin-top: 30px;
    font-size: 16px;
    border-radius: 8px;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #322153;
    border-radius: 8px;
`;

export const SubmitText = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: #FFF;
`;