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
    margin-left: 10%;
    @media(max-width: 600px) {
        display: none;
    }
`
export const DivColors = styled.div`
    height: 170px;
    width: 150px;
    @media(max-width: 600px) {
        display: ${props => !props.color ? 'none' : 'inline'};
    }    
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
    height: 165px;
    width: 170px;
    @media(max-width: 600px) {
        display: ${props => !props.size ? 'none' : 'block'};
    }    
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
    height: 165px;
    width: 170px;
    @media(max-width: 600px) {
        display: ${props => !props.price ? 'none' : 'inline'};
    }    
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

export const Modal = styled.div`
    display: none;
    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        background-color: white;
        position: fixed;
        display: ${props => !props.modal ? 'none' : 'inline'};
    }    
`
export const ModalFilter = styled.div`
    display: none;
    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        background-color: white;
        position: fixed;
        display: ${props => !props.modalFilter ? 'none' : 'inline'};
    }
`
export const DivTittleModal = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 0.1rem solid #C7C7C7;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PTittleModal = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 38px;
    text-transform: uppercase;
    margin:  0 8%;
`
export const PCloseModal = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 38px;
    text-transform: uppercase;
    margin:  0 8%;
    
`
export const ButtonOrderModal = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    margin: 30px 0 0 16px;    
`
export const DivFilter = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 19px;
`
export const ButtonFilterModal = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 33px;
    color: #666666;
    margin:  0 8%;
`

export const DivFilterModal = styled.div`
    padding: 0px 0px 0px 8%;
    height: auto;
`
export const DivBModal = styled.div`
    display: none;
    @media(max-width: 600px) {
        display: ${props => !props.visible ? 'none' : 'flex'};
        width: auto;
        height: auto;
        align-items: center;
        justify-content: space-between;
        margin-top: 25px;
    }
`
export const ButtonModalAplicar = styled.div`
    width: 180px;
    height: 35px;
    left: 16px;
    top: 885px;
    background: #00C0EE;
    margin: 0 2% 0 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;
`
export const ButtonModalLimpar = styled.div`
    width: 180px;
    height: 35px;
    left: 199px;
    top: 885px;
    margin: 0 8% 0 2%;
    border: 1px solid #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-transform: uppercase;
    color: #666666;
`