import { useEffect, useRef, useState } from "react"
import { FetchAllProducts } from "../../services"
import { Aside, ButtonFilterModal, ButtonMobile, ButtonOrderModal, ButtonToCharge, DCustomSelect, DivCardBox, DivChk, DivColors, DivFilter, DivFilterModal, DivOption, DivOptionSize, DivOrd, DivPrice, DivSize, DivTittleModal, Footer, ImgLogo, ImgSacola, Input, Label, Main, Modal, ModalFilter, ModalOrder, NavMenu, OptionOrd, PAll, PCloseModal, PDetail, PTittle, PTittleModal, Section, SelectOrd } from "../../styles/MainScreen.style"
import { Card } from "../card/Card"

export const TelaPrincipal = () => {
    const [products, setProducts] = useState([])
    const [pagina, setPagina] = useState(0)
    const pagRef = useRef([])
    const [buttonModalOrder, setButtonModalOrder] = useState(false)
    const [buttonModalFilter, setButtonModalFilter] = useState(false)
    const [buttonModalColor, setButtonModalColor] = useState(false)
    const [buttonModalSize, setButtonModalSize] = useState(false)
    const [buttonModalPrice, setButtonModalPrice] = useState(false)

    useEffect(() => {
        (async () => {
            const data = await FetchAllProducts()

            pagRef.current = data
            setProducts(pagRef.current.slice(pagRef.current, 9))
        })()
    }, [])

    useEffect(() => {
        setProducts(fetchPage(pagRef.current, products.length + 3))
    }, [pagina])


    const fetchPage = (array, theAmount) => {
        const page = array.slice(0, theAmount)
        return page
    }

    return (
        <>
            <Modal modal={buttonModalOrder}>
                <DivTittleModal>
                    <PTittleModal>ordenar</PTittleModal>
                    <PCloseModal modal={buttonModalOrder} onClick={() => buttonModalOrder === false ?
                        setButtonModalOrder(true) : setButtonModalOrder(false)}>&times;</PCloseModal>
                </DivTittleModal>
                <ButtonOrderModal>Mais recente</ButtonOrderModal>
                <ButtonOrderModal>Maior preço</ButtonOrderModal>
                <ButtonOrderModal>Menor preço</ButtonOrderModal>
            </Modal>

            <ModalFilter modalFilter={buttonModalFilter}>
                <DivTittleModal>
                    <PTittleModal>Filtrar</PTittleModal>
                    <PCloseModal modalFilter={buttonModalFilter} onClick={() => buttonModalFilter === false ?
                        setButtonModalFilter(true) : setButtonModalFilter(false)}>&times;</PCloseModal>
                </DivTittleModal>
                <DivFilter>
                    <ButtonFilterModal>cores</ButtonFilterModal>
                    <ButtonFilterModal onClick={() => buttonModalColor === false ?
                        setButtonModalColor(true) : setButtonModalColor(false)}>V</ButtonFilterModal>
                </DivFilter>
                <DivFilterModal>
                    <DivColors color={buttonModalColor}>
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
                </DivFilterModal>
                <DivFilter>
                    <ButtonFilterModal>Tamanhos</ButtonFilterModal>
                    <ButtonFilterModal onClick={() => buttonModalSize === false ?
                        setButtonModalSize(true) : setButtonModalSize(false)}>V</ButtonFilterModal>
                </DivFilter>
                <DivFilterModal>
                   
                    <DivSize size={buttonModalSize}>
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
                </DivFilterModal>
                <DivFilter>
                    <ButtonFilterModal>faixa de preço</ButtonFilterModal>
                    <ButtonFilterModal onClick={() => buttonModalPrice === false ?
                        setButtonModalPrice(true) : setButtonModalPrice(false)}>V</ButtonFilterModal>
                </DivFilter>
                <DivFilterModal>
                    
                    <DivPrice price={buttonModalPrice}>
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
                </DivFilterModal>
            </ModalFilter>


            <NavMenu>
                <ImgLogo />
                <ImgSacola />
            </NavMenu>

            <Section>
                <DivOrd>
                    <PDetail>Blusas</PDetail>

                    <DCustomSelect>

                        <ButtonMobile modalFilter={buttonModalFilter} onClick={() => buttonModalFilter === false ?
                            setButtonModalFilter(true) : setButtonModalFilter(false)}>Filtrar</ButtonMobile>

                        <ButtonMobile modal={buttonModalOrder} onClick={() => buttonModalOrder === false ?
                            setButtonModalOrder(true) : setButtonModalOrder(false)}>Ordenar</ButtonMobile>

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