import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GatepexContents from "../components/GatepexContents";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import ContentsHeader from "../components/ContentsHeader";
import styled from "styled-components";
import { Divider } from 'primereact/divider';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Tag = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background-color: #f5f5f5;
    color: #000;
    font-size: 12px;
    padding: 0.35rem 0.5rem;
    border-radius: 4px;

    .status{
        border-radius: 50px;
        width: 10px;
        height: 10px;
    }

    .active{
        background-color: #22c55e;
    }

    .stop{
        background-color: #e11d48;
    }

    .issue{
        background-color: #f59e0b;
    }
`;

const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

const Main = () => {

  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth);
  }, []);

  return (
    <GatepexContents>
        <Sidebar page={1} />
        <Container>
            <ContentsHeader>
                <span>Home</span>
            </ContentsHeader>

            <Header>
                <Title>Minjun Project</Title>
                <div className='flex gap-2'>
                    <Tag>
                        <div className='status stop'></div>
                        Auth Status
                    </Tag>
                    <Tag>
                        <div className='status issue'></div>
                        API Status
                    </Tag>
                    <Tag>
                        <div className='status active'></div>
                        Databases Connect
                    </Tag>
                </div>
            </Header>

            <Divider />

            <Header>
                <Title>Auth Status</Title>
                <div className='flex gap-2'>
                    <Tag>
                        <div className='status stop'></div>
                        Auth Status
                    </Tag>
                </div>
            </Header>

            <div className='mt-5' ref={elementRef}>
              <LineChart className='max-w-full' width={width} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </div>

        </Container>
    </GatepexContents>
  )
}

export default Main;