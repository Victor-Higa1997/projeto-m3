import styled from "styled-components";
import logom3 from '../img/logom3.png'
import image3 from '../img/image3.png'

export const NavMenu = styled.nav`
    width: 100%;
    height: 50px;
    border-bottom: 0.1rem solid #C7C7C7;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ImgLogo = styled.image`
    width: 119px;
    height: 30px;
    background-image: url(${logom3});
    background-repeat: no-repeat;
    margin-left: 10%;
`
export const ImgSacola = styled.image`
    width: 17px;
    height: 20px;
    background-image: url(${image3});
    background-repeat: no-repeat;
    margin-right: 10%;
`
export const DivCardBox = styled.div`
    height: auto;
    width: 58%;
    /* border: 0.1rem solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media(max-width: 600px) {
        width: 100%;
    }
`
export const Section = styled.section`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DivOrd = styled.section`
    width: 100%;
    height: 80px;
    /* border: 0.1rem solid black; */
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    @media(max-width: 600px) {
        margin: 0;
        width: 100%;
        height: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const PDetail = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 44px;
    margin-left: 10%;
    @media(max-width: 600px) {
        margin-left: 0;
        line-height: 0;
    }
`
export const DCustomSelect = styled.div`
    margin-right: 10%;
    
    @media(max-width: 600px) {
        margin-right: 0;
        margin-top: 2%;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 45%;
    }
`
export const SelectOrd = styled.select`
    width: 142px;
    height: 36px;
    padding: 0px 0px 0px 12px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    outline: 0;
    @media(max-width: 600px) {
        width: 100%;
        display: none;
    }
    
`
export const OptionOrd = styled.option`
    font-family: Open Sans;
    font-size: 16px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: row;

`
export const Aside = styled.aside`
    height: auto;
    width: 200px;
    /* border: 0.1rem solid black; */
    margin-left: 10%;
    @media(max-width: 600px) {
        display: none;
    }
`
export const DivColors = styled.div`
    height: 200px;
    width: 150px;
    /* border: 0.1rem solid black; */
`
export const PTittle = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`
export const Input = styled.input.attrs({type: 'checkbox'})`
    width: 16px;
    height: 16px;
    cursor: pointer;
`
export const Label= styled.label`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    height: 14px;
    margin-left: 6px;
`
export const DivChk = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const PAll = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #666666;
    line-height: 100%;
    text-decoration-line: underline;
    cursor: pointer;
`
export const DivSize = styled.div`
    height: 175px;
    width: 170px;
    /* border: 0.1rem solid black; */
`
export const DivOption = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const DivOptionSize = styled.div`
    height: 32px;
    width: 32px;
    color: #00000080;
    border: 1px solid #00000080;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin: 3px;
    cursor: pointer;
    &:hover{
        border: 1px solid #00C0EE;
        color: #000000;
    }
`
export const DivPrice = styled.div`
    height: 175px;
    width: 170px;
    /* border: 0.1rem solid black; */
`
export const ButtonToCharge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 175px;
    height: 35px;
    background: #00C0EE;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 50px;
    cursor: pointer;
`

export const Footer = styled.footer`
    margin-top: 40px;
    width: 100%;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const ButtonMobile = styled.button`
    display: none;

    @media(max-width: 600px) {
        display: inline;
        width: 46%;
        height: 50px;
        border: 1px solid #666666;
        color: #666666;
        background-color: white;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
    }
    
`
