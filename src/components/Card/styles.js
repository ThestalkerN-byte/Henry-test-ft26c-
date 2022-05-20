import styled from "styled-components";

export const CardContainer = styled.div`
color:white ;
    width:500px;    
    height:600px ;
    background-color: ${props => props.bkColor ? props.bkColor : 'black'} ;
    display:grid ;
    grid-template-columns:1fr ;
    grid-template-rows: repeat(3,1fr) ;
`