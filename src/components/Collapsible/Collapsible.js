import React, { useState } from 'react'
import { Item, Header, Body } from '../Accordion/styles'

const Collapsible = ({ item }) => {
    const [toggleShow, setToggleShow] = useState(false);
  return (
    <Item>
        <Header onClick={() => setToggleShow(!toggleShow)}>
            {item.header}
            {toggleShow ? (<img src='../images/icons/close-slim.png' alt='close' />) : (<img src='../images/icons/add.png' alt='close'/>)}
        </Header>
        {toggleShow ? <Body>{item.body}</Body> : null}
    </Item>
  )
}

export default Collapsible