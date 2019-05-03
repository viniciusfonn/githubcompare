import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Container = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;
      padding-top: 60px;
`;

const Form = styled.form`
      margin-top:20px;
      width: 100%;
      max-width: 400px;
      display: flex;

      input {
            flex:1;
            height: 55px;
            padding: 0 20px;
            background: white;
            border: 0;
            font-size: 18px;
            color: #444;
            border-radius:3px;
      }

      button {
            height: 55px;
            padding: 0 20px;
            margin-left: 10px;
            background: #63f5b8;
            color: #fff;
            border: none;
            font-size: 42px;
            font-weight: bold;
            border-radius: 3px;

            &:hover {
                  background: #52D89f;
                  cursor: pointer;
            }
      }
`;

const Main = () =>(
      <Container>
            <img src={logo} alt="GitHub Compare"/>

            <Form action="">
                  <input  type="text" placeholder="Usuário/Repositório"/>
                  <button type="submit">+</button>
            </Form>
      </Container>
);


export default Main;
