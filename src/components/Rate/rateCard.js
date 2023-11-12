import React from "react"
import styled from 'styled-components'

function RateCard({card}) {
    const {heading, title, text, button, id} = card
    return (
        <Wrapper key={id}>
            <El>
                <Heading>
                    {heading}
                </Heading>
                <Title>
                    {title}
                </Title>
                <Text>
                    {text}
                </Text>
                <Button>
                    {button}
                </Button>
            </El>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; /* Добавил отступ снизу для улучшения визуального восприятия */
`

const El = styled.div`
    width: 280px;
    max-width: 100%; /* Чтобы карточка не выходила за границы экрана на маленьких устройствах */
    height: 450px;
    background-color: #FFFFFF;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 30px;
    margin-right: 20px;
`
const Heading = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`
const Title = styled.h3`
    width: 80%;
    background-color: #6C5D95;
    color: #FFFFFF;
    padding: 7px;
    font-size: 22px;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 5px;
`

const Text = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    white-space: pre-line;
`

const Button = styled.button`
    width: 180px;
    height: 40px;
    background-color: #609F89;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 800;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`

export default RateCard