import React from 'react'
import { useNavigate } from 'react-router-dom'

const Joindone = () => {
    const navigation = useNavigate();

    const Going = () => {
        navigation('/login')
    }

    return (
        <div className='Joindone_wrap container'>
            <div className="main">
                <h1>회원가입 완료!</h1>
                <button onClick={() => { Going() }}>메인 화면으로 가기</button>
            </div>
        </div>
    )
}

export default Joindone