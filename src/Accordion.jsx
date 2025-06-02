import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const Accordion = ({items}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleChange = (index) => {
        setOpenIndex( openIndex === index ? null : index)
    }

  return !items || (items.length === 0) ? <div className='not-found'>No item found 🙅🏻‍♂️</div> : (
    <div className='accordion'> 
        {
            items.map((item, index) => (
                <div className='accordion-items' key={index}>
                    <button className='accordion-title' onClick={() =>  handleChange(index)}>
                        {item.title} { openIndex === index ? <HiChevronUp style={{float:'right'}} /> : <HiChevronDown style={{float:'right'}} /> }
                    </button>
                    {
                        openIndex === index && <div className='accordion-content'>{item.content}</div>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Accordion;