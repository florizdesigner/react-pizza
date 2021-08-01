import React, {useState} from 'react'

// const addCategories = (props) => {}

const Categories = ({ items, onClickItem }) => {

    const [activeItem, setActiveItem] = useState(null)

    return <div className="categories">
        <ul>
            <li onClick={() => {setActiveItem(null)}}
                className={activeItem === null ? 'active' : ''}>Все</li>
            {items &&
                items.map((name, index) => (<li
                onClick={() => setActiveItem(index)}
                className={activeItem === index ? 'active' : ''}
                key={`${name}_${index}`}>{name}</li>))}
        </ul>
    </div>
}

export default Categories