import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;    

    img {
        max-width: 100%;                
        margin-bottom: 10px;
        border-radius: 10px;
    }

    div {
        word-break: break-word;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        width: 30px;
        height: 30px;
        margin-bottom: 10px;  
        cursor: pointer;    
        
        img {
            margin: 0;            
        }
    }
`;