import React, { useState } from 'react'
import styled from 'styled-components'

const FAQAccordion = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

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
    </>
  );
};


const AccordionContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  background-color: #FFFFFF;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
`;

const ContentContainer = styled.div`
  padding: 15px;
`;

const ArrowIcon = styled.span`
  font-size: 18px;
`;


export default FAQAccordion;