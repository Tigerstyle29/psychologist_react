import React, { useState } from 'react'
import styled from 'styled-components'

const FAQAccordion = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  }

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  }

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  }

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  }

  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  }

  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion1}>
          <Title>На какой платформе проходят занятия?</Title>
          <ArrowIcon>{isOpen1 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen1 && (
          <ContentContainer>
            <p>Telegram, WhatsApp или Skype по вашему выбору</p>
          </ContentContainer>
        )}
      </AccordionContainer>

      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion2}>
          <Title>Сколько длится одно занятие?</Title>
          <ArrowIcon>{isOpen2 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen2 && (
          <ContentContainer>
            <p>1 час. Опоздания считаются частью встречи, поэтому старайтесь не опаздывать.</p>
          </ContentContainer>
        )}
      </AccordionContainer>

      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion3}>
          <Title>Какая минимальная продолжительность курса?</Title>
          <ArrowIcon>{isOpen3 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen3 && (
          <ContentContainer>
            <p>Рассчитывайте на 10 сессий. Этого хватит, чтобы снять острое состояние.</p>
          </ContentContainer>
        )}
      </AccordionContainer>

      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion4}>
          <Title>Как часто нужно встречаться?</Title>
          <ArrowIcon>{isOpen4 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen4 && (
          <ContentContainer>
            <p>Оптимально — раз в неделю</p>
          </ContentContainer>
        )}
      </AccordionContainer>

      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion5}>
          <Title>Могу ли я отменить, или перенести встречу?</Title>
          <ArrowIcon>{isOpen5 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen5 && (
          <ContentContainer>
            <p>Конечно, но нужно предупредить не позднее, чем за сутки до консультации.</p>
          </ContentContainer>
        )}
      </AccordionContainer>

      <AccordionContainer>
        <TitleContainer onClick={toggleAccordion6}>
          <Title>Есть ли у вас академическое психологическое образование?</Title>
          <ArrowIcon>{isOpen6 ? '-' : '+'}</ArrowIcon>
        </TitleContainer>
        {isOpen6 && (
          <ContentContainer>
            <p>В данный момент я обучаюсь в магистратуре по направлению «Психология».</p>
          </ContentContainer>
        )}
      </AccordionContainer>
    </>
  )
}


const AccordionContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TitleContainer = styled.div`
  background-color: #FFFFFF;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  margin: 0;
`

const ContentContainer = styled.div`
  background-color: #FFFFFF;
  padding: 15px;
`

const ArrowIcon = styled.span`
  font-size: 18px;
`

export default FAQAccordion;