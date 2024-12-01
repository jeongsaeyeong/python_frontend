import React from 'react'
import HartBin from '../../assets/img/hart_bin.svg'
import Homefull from '../../assets/img/home_full.svg'
import SearchBin from '../../assets/img/search_bin.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <div>
                <Link to='/scrap'><img src={HartBin} alt="" /></Link>
                <Link to='/'><img src={Homefull} alt="" /></Link>
                <Link to='/filter'><img src={SearchBin} alt="" /></Link>
            </div>
        </div>
    )
}

export default Nav