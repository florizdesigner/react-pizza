import React from 'react'
import {Categories, PizzaBlock, SortPopup} from '../../components';

const Main = (props) => {
    return <div className="container">
        <div className="content__top">
            <Categories onClickItem={() => {console.log(1)}} items={['Мясные','Вегетарианская','Острые','Гриль','Закрытые']}/>
            <SortPopup items={['цене', 'популярности', 'алфавиту']}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {props.items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
    </div>
}

export default Main