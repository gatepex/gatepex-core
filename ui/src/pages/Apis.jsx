import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GatepexContents from "../components/GatepexContents";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import ContentsHeader from "../components/ContentsHeader";
import { Button } from 'primereact/button';
import styled from "styled-components";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tools = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  svg{
    vertical-align: 0;
  }
`;

const NotDatabases = styled.div`
  padding: 2rem;
  border: dashed 1px #00000055;
  border-radius: 7px;
  text-align: center;

  .title{
    font-size: 1.125rem;
    margin-top: 0;
    margin-bottom: 0.55rem;
  }

  .info{
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const DatabaseList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const Database = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 2rem;
  border-radius: 7px;

  .info{
    h1{
      font-weight: 500;
      font-size: 1.25rem;
      margin-top: 0;
      margin-bottom: 5px;
    }
    p{
      font-size: 0.85rem;
      color: #71717a;
      font-weight: 400;
      margin: 0;
    }
  }
`;

const Apis = () => {
  const [databaseList,setDatabaseList] = useState([1]);

  return (
    <GatepexContents>
      <Sidebar page={2} />
      <Container>

        <ContentsHeader>
          <span>APIs</span>
        </ContentsHeader>

        <Tools>
          <Link to="/connection"><Button label="Connect database" size="small" /></Link>
          <IconField iconPosition="left">
            <InputIcon>
              <FontAwesomeIcon className="text-sm" icon="fa-solid fa-magnifying-glass" />
            </InputIcon>
            <InputText className="input-sm w-18rem" v-model="value1" placeholder="Search for a databases" />
          </IconField>
        </Tools>

        <Title>APIs</Title>

        <DatabaseList>
          <Database>
              <div className='info'>
                <h1>Test Database</h1>
                <p><span>2024.07.03에 생성됨</span></p>
              </div>
              <Link to="/database">
                <Button className='gatepex-gray' label="Edit" size="small" />
              </Link>
          </Database>
        </DatabaseList>
        
        {
          databaseList.length === 0&&
          <NotDatabases>
            <p className="title">No database</p>
            <p className="info">Connect and start your database.</p>
            <Button label="Connect database" size="small" />
          </NotDatabases>            
        }

      </Container>
    </GatepexContents>
  )
}

/*
크래딧으로 가능한것
- 트래픽 비용

*/

export default Apis;