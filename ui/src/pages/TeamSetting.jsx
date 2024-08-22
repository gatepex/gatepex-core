import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GatepexContents from "../components/GatepexContents";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import ContentsHeader from "../components/ContentsHeader";
import styled from "styled-components";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
`;
const Info = styled.p`
  margin-top: 0.7rem;
  margin-bottom: 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: #71717a;
`;

const Box = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fafafa;
  border: 1px solid #d4d4d8;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
  align-items:flex-start;
  p{
    margin: 0;
    font-size: 18px;
  }
  p.info{
    margin-top: 1rem;
    font-size: 13px;
    color: #71717a;
    pre{
      display: inline-block;
      background-color: #71717a;
      color: #fff;
      margin: 0 1px;
      padding: 4px 6px;
      border-radius: 4px;
      font-size: 11px;
    }
  }

  div.button{
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    grid-column: 2;
    grid-row: 2;

    .cancel{
      background-color: #737373;
    }
  }
`;

const TeamSetting = () => {
  const [databaseList,setDatabaseList] = useState([1]);

  const [domain, setDomain] = useState('');

  return (
    <GatepexContents>
      <Sidebar page={7} />
      <Container>

        <ContentsHeader>
          <span>Team Settings</span>
        </ContentsHeader>

        <Title>Project Settings</Title>
        <Box>

        </Box>

        <Title>Custom Domain</Title>
        <Info>Highlight your project's brand by specifying a domain.</Info>
        <Box>
          <div>
            <p>Add domain and connect DNS</p>
          </div>
          <div>
            <InputText className="p-inputtext-sm w-full" placeholder='example.com' value={domain} onChange={(e) => setDomain(e.target.value)} />            
            <p className='info'>In your domain DNS settings, specify <pre>111.111.111.111</pre> for the <strong>A record</strong> or <pre>3243243.gatepex.com</pre> for the <strong>CNAME</strong>.</p>
          </div>
          <div className='button'>
            <Button label="Save" size="small" />
          </div>
        </Box>
      </Container>
    </GatepexContents>
  )
}

export default TeamSetting;