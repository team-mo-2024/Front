import React, { useEffect, useState } from 'react';

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [id_code, setIdCode] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [idCodeValid, setIdCodeValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleId = (e) => {
        const value = e.target.value;
        setId(value);
        const regex = /^[0-9]*$/;
        if (regex.test(value)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(value)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }

    const handleIdCode = (e) => {
        const value = e.target.value;
        setIdCode(value);
        const regex = /^[0-9]{3}-[0-9]{3}$/;
        if (regex.test(value)) {
            setIdCodeValid(true);
        } else {
            setIdCodeValid(false);
        }
    }

    useEffect(() => {
        if (idValid && passwordValid && idCodeValid) {
            setNotAllow(false);
            return;
        } else {
            setNotAllow(true);
        }
    }, [idValid, passwordValid, idCodeValid]);

    return (
        <div className='page'>
            <div className='titleWrap'>
                TeamMo의 모든 서비스를 이용하기
                <br/>
                위해서는 로그인이 필요합니다.
                <br/>
                지금 바로 가입하세요 !
            </div>

            <div className='contentWrap'>
                <div className='inputTitle'>아이디</div>
                <div className='inputWrap'>
                    <input
                        type='text'
                        className='input'
                        placeholder='동호수'
                        value={id}
                        onChange={handleId}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {!idValid && id.length > 0 && (
                        <div>올바른 동호수를 입력해주세요.</div>
                    )}
                </div>

                <div className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input
                        type='password'
                        className='input'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {!passwordValid && password.length > 0 && (
                        <div>올바른 비밀번호를 입력해주세요.</div>
                    )}
                </div>

                <div className='inputTitle'>아파트 식별코드</div>
                <div className='inputWrap'>
                    <input
                        type='text'
                        className='input'
                        placeholder='123-456'
                        value={id_code}
                        onChange={handleIdCode}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {!idCodeValid && id_code.length > 0 && (
                        <div>올바른 아파트 식별코드를 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                <button disabled={notAllow} className='bottomButton'>
                    LOGIN
                </button>
            </div>
        </div>
    );
}