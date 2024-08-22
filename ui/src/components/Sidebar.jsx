import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import { Divider } from 'primereact/divider';


const SidebarStyle = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-right: #e5e7eb solid 1px;
`;

const Logo = styled.div`
    display: flex;
    font-size: 18px;
    align-items: flex-start;
    font-weight: 900;
    padding: 12px 12px 0;
    user-select: none;
    span{
        font-size: 12px;
    }
`;

const MenuList = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    a{
        display: block;
        padding: 8px 12px;
        border-radius: 7px;
        transition: 0.3s;
        text-decoration: none;
        color: #737373;
        font-size: 14px;
        margin-bottom: 5px;
        border: 1px solid transparent;
        &.active,&:hover{
            color: #18181b;
            background-color: #f5f5f5;
        }
        &.link.active, &.link:hover{
            border: 1px solid rgba(0, 0, 0, 0.12);
        }
        & svg{
            margin-right: 7px;
        }
    }
`;

const Account = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    & a:hover{
        background: none;
    }
`;

const Title = styled.div`
    color: #737373;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    .more{
        font-weight: 400;
        color: #2563eb;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

const TeamsList = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    justify-content: space-between;
    border-radius: 7px;
    color: #737373;
    border: 1px solid rgba(0, 0, 0, 0.12);
    transition: 0.3s;
    margin-top: 10px;
    cursor: pointer;

    &.active,&:hover{
        color: #18181b;
        background-color: #f5f5f5;
    }

    & a{
        padding: 0 2px;
        margin: 0;
        svg{
            margin: 0;
        } 
    } 
`;

const Profile = styled.div`
    font-family: sans-serif;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        background-color: #4b5563;
        width: 27px;
        height: 27px;
        border-radius: 50px;
    }    
`;

const Teams = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    margin-top: 2px;
`;


export default function Sidebar(props) {

    const [account,setAccount] = useState({});
    const [text, setText] = useState({});

    useEffect(() => {
    
    },[]);

    return (
       <SidebarStyle>
            <div>
                <Logo>Gatepex<span>™</span></Logo>
                <Divider />
                <MenuList>
                    {/* Databases */}
                    <Link to="/" className={"link "+(props.page===1?'active':null)}><FontAwesomeIcon icon="fa-solid fa-database" />Databases</Link>
                    {/* APIs */}
                    <Link to="/apis" className={"link "+(props.page===2?'active':null)}><FontAwesomeIcon icon="fa-solid fa-link" />APIs</Link>
                    {/* Authentication */}
                    <Link to="/auth" className={"link "+(props.page===9?'active':null)}><FontAwesomeIcon icon="fa-solid fa-user" />Authentication</Link>
                    {/* Function */}
                    <Link to="/functions" className={"link "+(props.page===3?'active':null)}><FontAwesomeIcon icon="fa-solid fa-file" />Functions</Link>
                    <Divider />
                    <Link to="/logs" className={"link "+(props.page===4?'active':null)}><FontAwesomeIcon icon="fa-solid fa-chart-simple" />Logs</Link>
                    <Divider />
                    <Link to="/team" className={"link "+(props.page===5?'active':null)}><FontAwesomeIcon icon="fa-solid fa-user-group" />TEAM</Link>
                    <Link to="/Payments" className={"link "+(props.page===6?'active':null)}><FontAwesomeIcon icon="fa-solid fa-receipt" />Payments and billings</Link>
                    <Link to="/team/settings" className={"link "+(props.page===7?'active':null)}><FontAwesomeIcon icon="fa-solid fa-gear" />Settings</Link>
                </MenuList>
            </div>

            <MenuList>
                <Divider />
                <Title>
                    <span>TEAM</span>
                    <span className='more'>View more</span>
                </Title>

                <TeamsList className='active'>
                    <Teams>
                        Minjun's Teams
                    </Teams>
                    <Link to="/teams/settings"><FontAwesomeIcon icon="fa-solid fa-check" /></Link>
                </TeamsList>

                <TeamsList>
                    <Teams>
                        Test1's Teams
                    </Teams>
                    <Link to="/teams/settings"></Link>
                </TeamsList>

                <Divider />
                <Account>
                    {
                        account.id?
                        <Profile>
                            <span>M</span>
                            Minjun
                        </Profile>
                        :
                        <Profile>
                            <span>G</span>
                            Gatepex
                        </Profile>
                    }
                    <Link to="/settings"><FontAwesomeIcon icon="fa-solid fa-bars" /></Link>
                </Account>
            </MenuList>
       </SidebarStyle>
    );
}