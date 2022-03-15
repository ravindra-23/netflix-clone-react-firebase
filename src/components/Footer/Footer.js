import React from 'react'
import { Container, Title, Break, Row, Column, Text, Link } from './styles'

const Footer = () => {
  return (
    <Container>
        <Title>Questions? Contact Us.</Title>
        <Break />
        <Row>
            <Column>
                <Link>Audio and Subtitles</Link>
                <Link>Media Centre</Link>
                <Link>Privacy</Link>
                <Link>Contact Us</Link>
            </Column>

            <Column>
                <Link>Audio Description</Link>
                <Link>Investor Relations</Link>
                <Link>Legal Notices</Link>
            </Column>

            <Column>
                <Link>Help Centre</Link>
                <Link>Jobs</Link>
                <Link>Legal Notices</Link>
                <Link>Cookie Preferences</Link>
            </Column>
            <Column>
                <Link>Gift Cards</Link>
                <Link>Terms of Use</Link>
                <Link>Coorporate Information</Link>
            </Column>
        </Row>
        <Break />

        <Text>Netflix India</Text>
    </Container>
  )
}

export default Footer