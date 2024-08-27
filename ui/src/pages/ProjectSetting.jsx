import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GatepexContents from "../components/GatepexContents";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import ContentsHeader from "../components/ContentsHeader";
import styled from "styled-components";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

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
  padding: 50px 2rem 1.5rem;
  border-radius: 5px;
  background-color: #fafafa;
  border: 1px solid #d4d4d8;
  display: grid;
  column-gap: 50px;
  row-gap: 0;
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

  div.division{
    width: 100%;
    height: 1px;
    background-color: #d4d4d8;
    grid-column: span 2;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  div.division.last{
    margin-bottom: 1.5rem;
  }

  div.button-info{
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    .cancel{
      background-color: #737373;
    }
  }

  div.button{
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    grid-column: span 2;
    .cancel{
      background-color: #737373;
    }
  }
`;

const ProjectSetting = () => {
  const [databaseList,setDatabaseList] = useState([1]);
  const [description, setDescription] = useState('');

  const [domain, setDomain] = useState('');

  return (
    <GatepexContents>
      <Sidebar page={9} />
      <Container>

        <ContentsHeader>
          <span>Team Settings</span>
        </ContentsHeader>

        <Title>Project Settings</Title>
        <Box>
          <div>
            <p>General settings</p>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="projectName">Project name</label>
            <InputText className='p-inputtext-sm' id="projectName" aria-describedby="name" />
          </div>
          
          <div>
          </div>
          <div className="flex flex-column gap-2 mt-5">
            <label htmlFor="description">Project description</label>
            <InputTextarea autoResize id="description" placeholder="description..." value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
          </div>

          <div className='division last'></div>

          <div className='button'>
            <Button label="Save" size="small" />
          </div>
        </Box>

        <Title>Custom Domain</Title>
        <Info>Highlight your project's brand by specifying a domain.</Info>
        <Box>
          <div>
            <p>Custom Domain for API</p>
          </div>
          <div>
            <InputText className="p-inputtext-sm w-full" placeholder='example.com' value={domain} onChange={(e) => setDomain(e.target.value)} />
            <p className='info'>In your domain DNS settings, specify <pre>000.000.000.000</pre> for the <strong>A record</strong> or <pre>yourID.gatepex.com</pre> for the <strong>CNAME</strong>.</p>
          </div>

          <div className='division'></div>

          <div>
            <p>Custom Domain for Docs</p>
          </div>
          <div>
            <InputText className="p-inputtext-sm w-full" placeholder='example.com' value={domain} onChange={(e) => setDomain(e.target.value)} />
            <p className='info'>In your domain DNS settings, specify <pre>000.000.000.000</pre> for the <strong>A record</strong> or <pre>yourID.gatepex.com</pre> for the <strong>CNAME</strong>.</p>
          </div>

          <div className='division last'></div>

          <div className='button'>
            <Button label="Cancel" size="small" className='cancel' />
            <Button label="Save" size="small" />
          </div>

        </Box>
      </Container>
    </GatepexContents>
  )
}

export default ProjectSetting;