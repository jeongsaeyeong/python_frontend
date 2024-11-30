import React from 'react'
import Mypage from '../../assets/img/mypage.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header_wrap'>
            <div>
                <h1>만원의 행복</h1>
                <Link to='/login'>
                    <img src={Mypage} alt="mypage" />
                </Link>
            </div>
        </div>
    )
}

export default Header