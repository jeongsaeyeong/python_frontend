import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/back.svg'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        axios.post('/', {
            userId: userId,
            password: password
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='Login_wrap container'>
            <div className="header">
                <Link to='/'><img src={Back} alt="" /></Link>
            </div>
            <div className="main">
                <h2>로그인</h2>
                <input value={userId} onChange={(e)=>{(setUserId(e.target.value))}} type="text" placeholder='아이디를 입력해주세요' />
                <input value={password} onChange={(e)=>{(setPassword(e.target.value))}} type="password" placeholder='비밀번호를 입력해주세요' />
                <button>로그인 하기</button>
                <Link to='/join' onClick={() => { onLogin() }}>회원가입 하기</Link>
            </div>
        </div>
    )
}

export default Login