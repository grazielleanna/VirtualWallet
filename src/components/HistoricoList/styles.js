import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.40);
    /*background-color: rgba(0,0,0,0.10);*/
`;

export const Tipo = styled.View`
    flex-direction: row;

`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#C62C36' : '#049301'};
    padding: 3px 8px 3px 8px;
    border-radius: 7px;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;

export const ValorText = styled.Text`
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
`;

export const Descricao = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;
