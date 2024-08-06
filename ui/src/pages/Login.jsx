import styled from 'styled-components';

// components
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const PageStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;

    @media (max-width: 1280px) {
        display: block;
    }
`;

const Box = styled.div`
    background-color: #fafafa;
    border-right: #e5e7eb solid 2px;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15%;
    .logo{
        display: flex;
        align-items: flex-start;
        width: 100%;
        text-align: left;
        margin-bottom: 6px;
        letter-spacing: -1.5px;
        font-size: 32px;
        span{
            font-size: 20px;
            margin-left: 3px;
        }
    }
    .info{
        color: #a1a1aa;
        width:100%;
        text-align: left;
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 50px;
    }
    .sign-up{
        color: #737373;

        a{
            color: #1d4ed8;
            font-weight: 500;
            text-decoration: underline;
        }
    }
    .terms{
        color: #737373;
        font-size: 12px;
        text-align: center;
    }
`;

const Contents = styled.div`
    display: block;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20%;
    h1{
        font-size: 38px;
        font-weight: 400;
    }

    p{
        color: #737373;
    }
    @media (max-width: 1280px) {
        display: none;
    }
`;

const Login = () => {
    return (
        <PageStyle>
            <Box>
                <div className='w-full mt-8'>
                    <h1 className='logo'>Gatepex<span>™</span></h1>
                    <p className='info'>Sign in to your account</p>

                    <div className="flex flex-column gap-2 w-full">
                        <label htmlFor="username">Email</label>
                        <InputText className='w-full p-inputtext-sm' id="username" placeholder="name@example.com" />
                    </div>
                    <div className="flex flex-column gap-2 w-full mt-3">
                        <label htmlFor="username">Password</label>
                        <Password className="w-full p-inputtext-sm" feedback={false} toggleMask />
                    </div>

                    <Button className='w-full mt-5' label="Sign in"  />

                    <p className='sign-up mt-5'>Don't have an account? <a>Sign Up Now</a></p>                    
                </div>
                <p className='terms'>By continuing, you agree to our Terms and Privacy Policy and agree to receive payment instructions by email.</p>
            </Box>
            <Contents>
                <div>
                    <h1>Now it's time to connect your database and API and manage them all at once.</h1>
                </div>
            </Contents>
        </PageStyle>
    )
}

export default Login;