import styled from 'style-components'

export const MainContainer = styled div `
    display : flex;
    flex-direction:column;
    justify-content : center;
    align-items : center;
    padding : 20px;
    height : 100vh;
    width : 90%;
    max-width : 1110px;
    margin: auto;
    @media screen and (min-width : 992px){
        flex-direction :row;
        justify-content : space-around
    }
`
export const FormContainer = styled form `
    background-color : transparent;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-radius : 8px;
    max-width : 350px;
    width : 100%
    @media screen and (min-width : 992px){
        width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
    }

`
export const LoginWebsiteLogo = styled img `
    width : 185px;
`
export const LoginButton = styled button `
    color : #fffff;
    background-color : #3b82f6;
    border-radius : 8px;
    padding : 20px;
    width : 100%;
    height : 40px;
    margin-top : 20px;
    margin-bottom : 2px;
    border : none;
    outline : none;
    cursor : pointer;
`