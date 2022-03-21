import React from 'react'
import faqData from '../../data/faq.json'
import { Container, Inner, Title, Frame } from './styles'
import OptForm from '../Optform/OptForm'
import Collapsible from '../Collapsible/Collapsible'

const Accordion = () => {
  return (
    <Container>
        <Inner>
            <Title>Frequently Asked Questions</Title>
                <Frame>
                    {faqData.map(item => (
                        <Collapsible key={item.id} item={item} />
                    ))}
                </Frame>

                <OptForm />
        </Inner>
    </Container>
  )
}

export default Accordion