import React, {useContext} from 'react';
import styled from 'styled-components'
import {DialogBox} from "../DialogBox";
import {ProgressContext} from "../../contexts/ProgressContext";
import {Button} from "../Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 98px 30px 12% 30px;
  overflow: hidden;
`;

const DialogBoxStyled = styled(DialogBox)`
  margin-top: 12px;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 134px;
  max-width: 40%;
  z-index: 3;
  transform: translate(10%, 38%);
  pointer-events: none;
`;

const ButtonStyled = styled(Button)`
  margin-top: 12px;
`;

const person1 = process.env.PUBLIC_URL + '/static/images/person_1.png';

const dialogText = 'Выпив кофе, ты встретился \n' +
  'с коллегой, который передал тебе \n' +
  'книгу нового сотрудника и сообщил, \n' +
  'что нужно оформить документы \n' +
  'и пройти инструктаж для начала \n' +
  'работы. Далее состоится встреча \n' +
  'с куратором стажировки \n' +
  'и знакомство с коллегами.';

export const Screen4 = () => {
  const { setNext } = useContext(ProgressContext);

  return (
    <Wrapper>
      <DialogBoxStyled text={dialogText} padding={'16px 20% 16px 20px'} />
      <Image src={person1} />
      <ButtonStyled onClick={setNext}>Далее</ButtonStyled>
    </Wrapper>
  );
};