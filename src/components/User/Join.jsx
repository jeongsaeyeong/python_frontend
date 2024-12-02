import React, { useState } from 'react'
import Back from '../../assets/img/back.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Join = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const navigation = useNavigate();

    const Going = () => {
        navigation('/joinend')
    }

    const onJoin = () => {
        if (!userId || !password || password !== repassword) {
            alert('빈칸을 모두 채워주세요! 그리고 비밀번호가 일치하는지 확인하세요.')
            return
        }

        axios.post('http://127.0.0.1:8000/user/join', {
            username: userId,
            password: password
        })
        .then((res) => {
            console.log("Response from API:", res.data);  // Check the response
            Going();
        })
        .catch((err) => {
            console.log("Error response:", err.response);  // Check the error response
            alert("회원가입에 실패했습니다.");
        });
    }

    return (
        <div className='Join_wrap container'>
            <div className="header">
                <Link to='/'><img src={Back} alt="" /></Link>
            </div>
            <div className="main">
                <h2>회원가입</h2>
                <input
                    value={userId}
                    onChange={(e) => { setUserId(e.target.value) }} // userId 상태 업데이트
                    type="text"
                    placeholder='아이디를 입력해주세요'
                />
                <input
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} // password 상태 업데이트
                    type="password"
                    placeholder='비밀번호를 입력해주세요'
                />
                <input
                    value={repassword}
                    onChange={(e) => { setRepassword(e.target.value) }} // repassword 상태 업데이트
                    type="password"
                    placeholder='비밀번호를 재입력해주세요'
                />
                <button onClick={() => { onJoin() }}>회원가입 하기</button>
                <Link to='/login'>로그인 하기</Link>
            </div>
        </div>
    )
}

export default Join