import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import {MoCard} from "./Add";




const SearchBox = () => {
  const [items, setItems] = useState([
	
	]);
	

	const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
            itemImg: inputValue1,
		
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		

		setItems(newItems);
		calculateTotal();
	};

	

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<input value={inputValue1} onChange={(event) => setInputValue1(event.target.value)} className='add-item-input' placeholder='Add an item...' />
          <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
	);
};

export {SearchBox}