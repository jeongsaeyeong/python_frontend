import React from 'react'
import List from '../List/List'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <h2>오늘의 추천 가게</h2>
            <div className="main">
                <List />
            </div>
        </div>
    )
}

export default Main