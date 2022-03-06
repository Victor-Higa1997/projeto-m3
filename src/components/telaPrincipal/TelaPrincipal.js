import { useEffect, useRef, useState } from "react"
import { FetchAllProducts } from "../../services"
import { Aside, ButtonMobile, ButtonToCharge, DCustomSelect, DivCardBox, DivChk, DivColors, DivOption, DivOptionSize, DivOrd, DivPrice, DivSize, Footer, ImgLogo, ImgSacola, Input, Label, Main, NavMenu, OptionOrd, PAll, PDetail, PTittle, Section, SelectOrd } from "../../styles/MainScreen.style"
import { Card } from "../card/Card"

export const TelaPrincipal = () => {
    const [products, setProducts] = useState([])
    const [pagina, setPagina] = useState(0);
    const pagRef = useRef([])

    useEffect(() => {
        (async () => {
            const data = await FetchAllProducts()

            pagRef.current = data
            setProducts(pagRef.current.slice(pagRef.current, 9))

            console.log(pagRef.current)
        })()
    }, [])

    useEffect(() => {
        console.log(pagRef.current.length)
        setProducts(fetchPage(pagRef.current, products.length + 3))
    }, [pagina])


    const fetchPage = (array, theAmount) => {
        const page = array.slice(0, theAmount)
        console.log(array)
        return page
    }

    return (
        <>
            <NavMenu>
                <ImgLogo />
                <ImgSacola />
            </NavMenu>

            <Section>
                <DivOrd>
                    <PDetail>Blusas</PDetail>


                    <DCustomSelect>
                        <ButtonMobile>Filtrar</ButtonMobile>
                        <ButtonMobile>Ordenar</ButtonMobile>

                        <SelectOrd>
                            <OptionOrd disabled selected>Ordenar por:</OptionOrd>
                            <OptionOrd >Mais recentes</OptionOrd>
                            <OptionOrd >Menor preço</OptionOrd>
                            <OptionOrd >Maior preço</OptionOrd>
                        </SelectOrd>
                    </DCustomSelect>
                </DivOrd>

                <Main>
                    <Aside>
                        <DivColors>
                            <PTittle>cores</PTittle>
                            <DivChk>
                                <Input id="amarelo" />
                                <Label for="amarelo">Amarelo</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="azul" />
                                <Label for="azul">Azul</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="branco" />
                                <Label for="branco">Branco</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="cinza" />
                                <Label for="cinza">Cinza</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">Laranja</Label>
                            </DivChk>
                            <PAll>ver todas as cores</PAll>
                        </DivColors>
                        <DivSize>
                            <PTittle>tamanhos</PTittle>
                            <DivOption>
                                <DivOptionSize>P</DivOptionSize>
                                <DivOptionSize>M</DivOptionSize>
                                <DivOptionSize>G</DivOptionSize>
                                <DivOptionSize>GG</DivOptionSize>
                                <DivOptionSize>U</DivOptionSize>
                                <DivOptionSize>36</DivOptionSize>
                                <DivOptionSize>38</DivOptionSize>
                                <DivOptionSize>40</DivOptionSize>
                                <DivOptionSize>36</DivOptionSize>
                                <DivOptionSize>38</DivOptionSize>
                                <DivOptionSize>40</DivOptionSize>
                            </DivOption>
                        </DivSize>
                        <DivPrice>
                            <PTittle>faixa de preço</PTittle>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">de R$0 até R$50</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">de R$51 até R$150</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">de R$151 até R$300</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">de R$301 até R$500</Label>
                            </DivChk>
                            <DivChk>
                                <Input id="laranja" />
                                <Label for="laranja">a partir de R$500</Label>
                            </DivChk>
                        </DivPrice>
                    </Aside>
                    <DivCardBox>
                        
                        {
                            products.map(values =>
                                <Card value={values} />
                            )
                        }
                    </DivCardBox>
                </Main>
                <ButtonToCharge onClick={() => setPagina(pagina + 1)}>carregar mais</ButtonToCharge>
            </Section>
            <Footer>M3: IMPLANTAÇÃO DE E-COMMERCE VTEX</Footer>
        </>
    )
}