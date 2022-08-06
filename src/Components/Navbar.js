
import React from 'react';
import { Link } from 'react-router-dom';
// import Marquee from 'react-fast-marquee'
import '../Style/Style.css'

const Navbar = ({ cart, setCart }) => {
    let salesInfo = 'Flash Sales !!!'
    let goodsInfo = ' Get your Jewelries and Bags'
    


    return (
        <div>
            <marquee style={{ backgroundColor: 'purple', color: 'white' }}>
                <h2>{salesInfo} {goodsInfo}</h2>
            </marquee>
            <header>
                <h2 className='martName'>Lanny's Mart</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> Home </Link>
                        </li>
                        <li>
                            <Link to='/Cart'>Cart({cart.length})</Link>
                        </li>
                    </ul>
                </nav>
            </header>


        </div>
    )
}

export default Navbar