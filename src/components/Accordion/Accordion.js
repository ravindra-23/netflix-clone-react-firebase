import React, { useState } from 'react'
import faqData from '../../data/faq.json'
import { Container, Inner, Title, Frame, Item, Header, Body } from './styles'
import OptForm from '../Optform/OptForm'

const Accordion = () => {
    const [toggleShow, setToggleShow] = useState(false);
  return (
    <Container>
        <Inner>
            <Title>Frequently Asked Questions</Title>
                <Frame>
                    {faqData.map(item => (
                        <Item key={item.id}>
                            <Header onClick={() => setToggleShow(!toggleShow)}>
                                {item.header}
                                {toggleShow ? (<img src='../images/icons/close-slim.png' alt='close' />) : (<img src='../images/icons/add.png' alt='close'/>)}
                            </Header>
                            {toggleShow && <Body>{item.body}</Body>}
                        </Item>
                    ))}
                </Frame>

                <OptForm />
        </Inner>
    </Container>
  )
}

export default Accordion