import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    margin-top: 30px;
`;

export const AreaText = styled.View`
    flex: 1;
    justify-content: center;
    min-height: 150px;
`;

export const Title = styled.Text`
    max-width: 260px;
    margin-left: 20px;
    font-size: 30px;
    color: #322153;
    font-weight: bold;
`;

export const Description = styled.Text`
    margin-top: 10px;
    margin-left: 20px;
    max-width: 260px;
    line-height: 24px;
    color: #6C6C80;
    font-size: 18px;
`;

export const AreaButton = styled.View`
    background-color: #322153;
    height: 60px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    width: 90%;
    margin: 40px auto;
`;


export const ButtonIcon = styled.View`
    width: 60px;
    height: 60px;
    background-color: rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
`;


export const Text = styled.Text``;

export const TextButton = styled.Text`
    flex: 1;
    justify-content: center;
    text-align: center;
    color: #FFF;
    font-size: 22px;
`;