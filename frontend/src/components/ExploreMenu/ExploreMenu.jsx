import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {


    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
                Chose from our wide range of delicious dishes. Our menu is designed to cater to all your cravings.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div className='explore-menu-item' key={index} onClick={() => setCategory(prev => prev === item.menu_name ? 'all' : item.menu_name)}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                }
                )}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
