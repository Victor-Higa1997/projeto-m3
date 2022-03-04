import styled from "styled-components";

export const DivCard = styled.div`
    height: 426px;
    /* border: 0.1rem solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
    @media(max-width: 600px) {
        margin: 1%;
    }
`
export const ImgCard = styled.img`
    height: 293px;
    width: 195px;
    /* border: 0.1rem solid black; */
`
export const PTitle = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin: 12px 0px;
    /* border: 0.1rem solid black; */
`
export const PValue = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    /* border: 0.1rem solid black; */
`
export const PParcel = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* border: 0.1rem solid black; */
`
export const ButtonComprar = styled.button`
    background-color: #000000;
    color: #FFFFFF;
    width: 195px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 49px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    border: none;
    margin-top: auto;
    cursor: pointer;
`