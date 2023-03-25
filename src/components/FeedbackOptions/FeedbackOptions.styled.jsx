import styled from "@emotion/styled";
import { theme } from "utils/theme";

export const Button = styled.button`
width: 80px;
height: 40px;
:not(:last-child){
    margin-right: 20px;
}
padding: 10px;
border: transparent;
border-radius: 10px;
font-size: 18px;
cursor: pointer;
background-color: ${theme.color.white};
box-shadow: ${theme.boxShadow};`;

export const FeedbackDiv = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;`