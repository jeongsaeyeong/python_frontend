import React from 'react'
import Back from '../../assets/img/back.svg'
import { Link, useNavigate } from 'react-router-dom'

const Join = () => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/joinend')
    }

    return (
        <div className='Join_wrap container'>
            <div className="header">
                <Link to='/'><img src={Back} alt="" /></Link>
            </div>
            <div className="main">
                <h2>회원가입</h2>
                <input type="text" placeholder='아이디를 입력해주세요' />
                <input type="password" placeholder='비밀번호를 입력해주세요' />
                <input type="password" placeholder='비밀번호를 재입력해주세요' />
                <button onClick={() => { Going() }}>회원가입 하기</button>
                <Link to='/login'>로그인 하기</Link>
            </div>
        </div>
    )
}

export default Join