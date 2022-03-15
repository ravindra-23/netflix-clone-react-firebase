import React from 'react'
import infoData from '../../data/info.json'
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles'

const Info = () => {
  return (
    <Container>
        {infoData.map(item => (
            <Item key={item.id}>
                <Inner direction={item.direction}>
                    <Pane>
                        <Title>{item.title}</Title>
                        <SubTitle>{item.subTitle}</SubTitle>
                    </Pane>
                    <Pane>
                        <Image src={item.image} alt={item.alt} />
                    </Pane>
                </Inner>
            </Item>
        ))}
    </Container>
  )
}

export default Info