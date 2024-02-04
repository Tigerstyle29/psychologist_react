import styled from 'styled-components';

const Appointment = () => {
  return (
    <AppointmentSection id="consultation">
      <Title>Как записаться на консультацию</Title>
      <AppointmentInfo>
        <Step>
          <StepNumber>1</StepNumber>
          <StepText>Подберите удобное время и дату для консультации.</StepText>
        </Step>
        <Step>
          <StepNumber>2</StepNumber>
          <StepText>Выберите удобную форму обратной связи на сайте.</StepText>
        </Step>
        <Step>
          <StepNumber>3</StepNumber>
          <StepText>Ожидайте подтверждения записи от нашего специалиста.</StepText>
        </Step>
        <Step>
          <StepNumber>4</StepNumber>
          <StepText>Приходите на консультацию и начните работу над собой.</StepText>
        </Step>
      </AppointmentInfo>
    </AppointmentSection>
  )
}

const AppointmentSection = styled.section`
    background-color: #E6E2F0;
    padding: 40px;
    text-align: center;
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 48px;
    line-height: 55px; 
    margin-bottom: 20px;
`

const AppointmentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Step = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`

const StepNumber = styled.div`
    font-size: 26px;
    font-weight: bold;
    width: 30px; /* Ширина цифры */
    text-align: center;
    color: #609f89;
`

const StepText = styled.p`
    font-size: 26px;
    color: #333;
    margin-left: 15px;
`

export default Appointment;