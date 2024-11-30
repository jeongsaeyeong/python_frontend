import React from 'react'
import Back from '../../assets/img/back.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='Login_wrap container'>
            <div className="header">
                <Link to='/'><img src={Back} alt="" /></Link>
            </div>
            <div className="main">
                <h2>로그인</h2>
                <input type="text" placeholder='아이디를 입력해주세요'/>
                <input type="password" placeholder='비밀번호를 입력해주세요'/>
                <button>로그인 하기</button>
                <Link to='/join'>회원가입 하기</Link>
            </div>
        </div>
    )
}

export default Login