/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';

// Grid
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/base.css'

// Components
import Sidebar from "../components/Sidebar";
import GatepexContents from '../components/GatepexContents';
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from 'primereact/button';
import "@inovua/reactdatagrid-community/theme/default-light.css";

// cookie
import { getCookie } from "../cookie";

const Contents = styled.div`
    display: grid;
    grid-auto-rows: auto 1fr;
`;

const Header = styled.div`
    margin-top: 20px;
    padding: 0 5px;
`;

const TableList = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    a{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #a3a3a3;
        padding: 5px 10px;
        color: #000;
        text-decoration: none;
        font-size: 15px;
        transition: 0.3s;
        &.active{
            background-color: #737373;
        }
    }
    & .icon{
        padding: 5px 8.5px;
        cursor: pointer;
        i{
            font-size: 14px;
            color: #000;
        }
    }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
    font-size: 20px;
    padding: 5px 8px 5px;
    p{
        padding-right: 7px;
        margin-top: 3px;
    }
    i{
        padding: 7px;
        border-radius: 50px;
        transition: 0.5s;
        cursor: pointer;
        :hover{
            background-color: #000;
        }
    }
    label{
        font-size: 10px;
    }
`;

const Tip = styled.div`
    padding: 0 8px 3px;
    margin-bottom: 25px;
    margin-left: 10px;
    font-size: 12px;
    color: #000;
    display: flex;
    gap: 5px;
`;

const DatabaseSettingModalStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #000000af;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DatabaseSettingModalBox = styled.div`
    width: 35%;
    max-width: 50vw;
    padding:25px;
    background-color: #000;
    border-radius: 10px;
    textarea{
        color: #000;
    }
`;

const LoadWait = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000af;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Database() {
    const navigate = useNavigate();
    const location = useLocation();
    let params = useParams();

    const [databaseInfo, setDatabaseInfo] = useState({});

    const [tablesList, setTablesList] = useState([]);

    const [columns, setColumns] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [reload, setReload] = useState(false);
    const [lastReload, setLastReload] = useState("");
    const [dataPK,setDataPK] = useState([]);
    const [upLoadNewData, setUpLoadNewData] = useState([]);

    const load = ()=>{

    };

    const upload = () => {

    };

    useEffect(() => {
        
    }, []);

    const onEditComplete = useCallback((e) => {
        let newData = {
            "pk":{},
            "value":{}
        };

        dataPK.forEach((pk)=>{
            newData["pk"][pk] = e.data[pk]; 
        });
        
        newData["value"][e.columnId] = e.value;

        setUpLoadNewData([newData,...upLoadNewData]);

        e.data[e.columnId] = e.value;

    }, [dataPK, upLoadNewData]);

    useEffect(() => {
        if(params.tables){
            load();
        };
    },[location]);

    const [settingModalAction, setSettingModalAction] = useState(false);

    const settingModal = () => {
        if (settingModalAction) {
            setSettingModalAction(false);
        }else{
            setSettingModalAction(true);
        }
    }

    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState({});
    const [deleteData, setDeleteData] = useState([]);

    const onSelectionChange = useCallback(({ selected }) => {
        setDeleteData([]);
        Object.keys(selected).forEach((e)=>{
            let deldataPK = {};
            dataPK.forEach((pk)=>{
                deldataPK[pk] = selected[e][pk];
            });
            setDeleteData([deldataPK, ...deleteData]);
        });
        setSelected(selected);
    }, [dataPK, deleteData]);


    
    return (
    <>
        {
            settingModalAction&&
            <DatabaseSettingModalStyle>
                <DatabaseSettingModalBox>

                    <div className='flex justify-content-between align-items-center'>
                        <h2>Edit Database</h2>
                        <i onClick={settingModal} style={{cursor:"pointer"}} className='pi pi-times'></i>
                    </div>

                    <label className="font-bold block mt-4">Database Name</label>
                    <InputText className='mt-2 p-inputtext-sm w-full' value={databaseInfo.name} />

                    <div className='grid justify-content-between align-items-center mt-2 mb-3'>
                        <div className='col-6'>
                            <label className="font-bold block">host</label>
                            <InputText className='mt-2 p-inputtext-sm w-full' value={databaseInfo.host} />
                        </div>
                        <div className='col-6'>
                            <label className="font-bold block">port</label>
                            <InputText className='mt-2 p-inputtext-sm w-full' value={databaseInfo.port} />
                        </div>
                        <div className='col-6'>
                            <label className="font-bold block">Username</label>
                            <InputText className='mt-2 p-inputtext-sm w-full' value={databaseInfo.user} />
                        </div>
                        <div className='col-6'>
                            <label className="font-bold block">Password</label>
                            <InputText className='mt-2 p-inputtext-sm w-full' />
                        </div>
                    </div>
                    
                    <label className="font-bold block mb-3">Security & function</label>
                    <div className='grid justify-content-between align-items-center'>
                        
                        <div className='col-5 flex gap-5 justify-content-between align-items-center'>
                            <label className="font-bold block">Public</label>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>

                        <div className='col-5 flex gap-5 justify-content-between align-items-center'>
                            <label className="font-bold block">Public API</label>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>

                    </div>

                    <div className="w-full flex gap-2 justify-content-end mt-5">
                        {/* <Button style={{fontWeight:"bold"}} label="delete" severity="danger" size="small" /> */}
                        <Button style={{fontWeight:"bold"}} label="save" size="small" />
                    </div>
                   
                </DatabaseSettingModalBox>
            </DatabaseSettingModalStyle>
        }

        <GatepexContents>
            <Sidebar page={1} />
            <Contents style={{position:"relative"}}>

                {
                    reload&&
                    <LoadWait>
                        <i className="pi pi-spin pi-spinner" style={{color: "#fff", fontSize: '2.5rem' }}></i>
                    </LoadWait>
                }

                <Header>
                    <Top>
                        <p>database / {databaseInfo.database} {params.tables&&"/"} {params.tables}</p>
                        <i className="pi pi-cog"></i>
                        <i className="pi pi-trash"></i>
                        <i onClick={load} className={`pi ${reload?"pi-spinner pi-spin":"pi-sync"}`}></i>
                        {upLoadNewData.length?<i onClick={upload} className="pi pi-upload"></i>:null}
                    </Top>
                    <Tip>
                        <label className="font-bold block">{databaseInfo.platform}</label>|
                        <label className="font-bold block">{databaseInfo.host}:{databaseInfo.port}</label>|
                        <label className="font-bold block">{lastReload}</label>
                    </Tip>

                    <TableList>
                        
                        <div onClick={settingModal} className='icon'><i className='pi pi-bars'></i></div>
                        {tablesList&&
                            tablesList.map((name, idx)=>
                                <Link to={`/database/${params.database}/${name}`} onClick={load} key={idx} className={params.tables===name?"active":null}>{name}</Link>
                            )
                        }
                        <div className='icon'><i className='pi pi-plus-circle'></i></div>
                        
                    </TableList>
                </Header>
                
                <ReactDataGrid
                    idProperty="gatepex_virtual_id"
                    columns={columns}
                    editable={true}
                    dataSource={dataSource}
                    style={{height: '100%',borderColor: "rgba(0, 0, 0, 0.12)",borderLeft: 'none'}}
                    pagination
                    defaultLimit={25}
                    showColumnMenuTool={false}
                    onEditComplete={onEditComplete}
                    checkboxColumn
                    selected={selected}
                    onSelectionChange={onSelectionChange}
                />

            </Contents>

        </GatepexContents>
    </>
       
    );
};