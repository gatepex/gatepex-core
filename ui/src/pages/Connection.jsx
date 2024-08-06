import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

// Primereact
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import styled from "styled-components";
import { Dropdown } from 'primereact/dropdown';

// cookie
import { getCookie } from "../cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Full = styled.div`
  width: 100%;

  input{
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 35px;
`;

const Container = styled.div`
  width: 550px;
  max-width: 550px;
  margin: 0 auto;
`;

const Back = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-size: 14px;
  margin-bottom: 15px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
`;

const Connection = () => {
  const navigate = useNavigate();

  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [DBName, setDBName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedSoftware, setSelectedSoftware] = useState({code:"mysql",  name: 'MySQL' });

  const [text, setText] = useState({});
  useEffect(() => {
      
  },[]);
  
  const software = [
    {code:"mysql",  name: 'MySQL' }
  ];

  // Public, Private
  const [selectedScope, setSelectedScope] = useState();
  const scope = [
    {code:1,  name: text?.connection?.scopeList[0]},
    {code:0,  name: text?.connection?.scopeList[1]}
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const test = () => {
    setLoading(true);
    
  };

  const AddDatabase = () => {
   
  };

  const scopeSet = (e) => {
    setSelectedScope(e);
  };

  const localSet = (e) => {
    setSelectedSoftware(e);
    e.code === "local"&&setHost("");
    e.code === "local"&&setPort("");
    e.code === "local"&&setDBName("");
    e.code === "local"&&setAdminName("");
    e.code === "local"&&setPassword("");
  };

  return (
    <Container style={{minHeight: "100vh",display: "flex", justifyContent: "center", flexDirection: "column"}}>
      
      {/* Back */}
      <Link to="/">
        <Back><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> 뒤로가기</Back>
      </Link>

      {/* Database Connection */}
      <Title>데이터베이스 연결</Title>

      <Full>
        <div className="grid mb-4">
          
          <div className="col-3 pt-0">
            {/* Platform */}
            <label htmlFor="integeronly" className="block mb-2">Database</label>
            <Dropdown
              value={selectedSoftware}
              onChange={(e) => localSet(e.value)}
              options={software} 
              optionLabel="name" 
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>

          <div className="col-6 pt-0">
            {/* Host */}
            <label htmlFor="integeronly" className="block mb-2">Host</label>
            <InputText value={host} onChange={(e) => setHost(e.target.value)} className="p-inputtext-sm" placeholder="127.0.0.1" disabled={selectedSoftware.code === "local"?true:false} />
          </div>

          <div className="col-3 pt-0">
            {/* Port */}
            <label htmlFor="integeronly" className="block mb-2">Port</label>
            <InputText value={port} onChange={(e) => setPort(e.target.value)} className="p-inputtext-sm" placeholder="3306" disabled={selectedSoftware.code === "local"?true:false} />
          </div>
        </div>

        <div className="grid">

          <div className="col-3">
            {/* Scope */}
            <label htmlFor="integeronly" className="block mb-2">공개 범위</label>
            <Dropdown
              value={selectedScope}
              onChange={(e) => scopeSet(e.value)}
              options={scope}
              optionLabel="name" 
              placeholder="선택"
              className="w-full p-inputtext-sm"
            />
          </div>

          <div className="col-9">
            {/* Database Name */}
            <label htmlFor="integeronly" className="block mb-2">Database Name</label>
            <InputText value={DBName} onChange={(e) => setDBName(e.target.value)} className="p-inputtext-sm" placeholder="myDatabaseName" disabled={selectedSoftware.code === "local"?true:false} />
          </div>

        </div>

        <div className="grid my-4">
          <div className="col-6">
            {/* User */}
            <label htmlFor="integeronly" className="block mb-2">Database User</label>
            <InputText value={adminName} onChange={(e) => setAdminName(e.target.value)} className="p-inputtext-sm" placeholder="admin" disabled={selectedSoftware.code === "local"?true:false} />
          </div>

          <div className="col-6">
            {/* Password */}
            <label htmlFor="integeronly" className="block mb-2">User password</label>
            <Password value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-inputtext-sm" toggleMask feedback={false} disabled={selectedSoftware.code === "local"?true:false} />
          </div>
        </div>
      </Full>

      <div className="mt-4 flex justify-content-between align-items-center gap-1">
        <div>

          {/* Database connection failed. */}
          {
            error&&
            <label htmlFor="integeronly" className="block text-red-500">데이터베이스에 연결할 수 없습니다.</label>
          }

          {/* Database connection was successful. */}
          {
            success&&
            <label htmlFor="integeronly" className="block text-teal-500">데이터베이스 연결을 성공적으로 진행하였습니다.</label>
          }
        </div>
        <div className="flex gap-1">
          {/* Test Connection */}
          <Button label={"연결 테스트"} loading={loading} onClick={test} outlined />
          {/* Apply */}
          <Button label={"확인"} disabled={!(success)} onClick={AddDatabase} />
        </div>
      </div>
      
    </Container>
  )
}

export default Connection;