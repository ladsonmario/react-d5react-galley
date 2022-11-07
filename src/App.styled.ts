import styled from 'styled-components';

export const Container = styled.div`
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;

    h1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .area {
        max-width: 980px;
        margin: auto;
        padding: 30px 0;
    }
`;

export const Warning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
    .content {
        font-size: 18px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media(max-width: 800px) {
        padding: 10px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 440px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Upload = styled.form`
    width: 100%;
    background-color: #3d3f43;
    padding: 15px;
    margin-bottom: 30px;

    input[type="submit"] {
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    @media(max-width: 600px) {
        display: flex;
        flex-direction: column;        
        align-items: center;

        input[type="submit"] {
            margin: 15px 0 0 0;            
            width: 100%;
            padding: 10px 15px;        
        }
    }
`;