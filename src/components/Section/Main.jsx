import React from 'react'
import Sample from '../../assets/img/sample.png'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <h2>오늘의 추천 가게</h2>
            <div className="list_wrap">
                <div className="list">
                    <img src={Sample} alt="" />
                    <div className='content'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main