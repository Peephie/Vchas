import { useState, useEffect, useRef } from 'react'
import { PiArrowDownRightThin } from "react-icons/pi";
import anime from "animejs";

const Filter = ({label, onFilterChange, options}) => {
  const expandedRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  let [isExpanded, setIsExpanded] = useState(false);

  function toggleMode() {
    if (selectedOptions.length > 0) {
      return;
    }
  
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 100
    });
  
    if (isExpanded) {
      timeline
      .add({
        targets: '.arrow',
        rotate: {
          value: 0,
          easing: 'easeInOutSine'
        },
      })
      .add({
        targets: '.label',
        fontstyle: ''
      })
      .add({
        targets: expandedRef.current,
        opacity: 0,
        translateX: {
          value: '-15px'
        },
        complete: () => setIsExpanded(false)
      })
    } else {
      setIsExpanded(true);
    }
  }

  useEffect (() => {
    if (!isExpanded) {
      return;
    }
  
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 100
    });
  
    timeline
    .add({
      targets: '.arrow',
      rotate: {
        value: -45,
        easing: 'easeInOutSine'
      },
    })
    .add({
      targets: '.label',
      fontstyle: 'italic'
    })
    .add({
      targets: expandedRef.current,
      opacity: 1,
      translateX: {
        value: ['-15px', 0]
      }
    })
    
  }, [isExpanded])

  useEffect(() => {
    const optionNodes = document.querySelectorAll('.option');
  
    for (const option of optionNodes) {
      if (selectedOptions.indexOf(option.dataset.option) !== -1) {
        option.classList.remove('text-peach');
        option.classList.add('text-red');
      } else {
        option.classList.remove('text-red');
        option.classList.add('text-peach');
      }
    }

    onFilterChange(selectedOptions);
    // onFilterChange(returnValue);
  }, [selectedOptions])

  function setSelectedOption(option) {
    const buffOptions = [...selectedOptions];
    const index = buffOptions.indexOf(option);
  
    if (index === -1) {
      buffOptions.push(option);
    } else {
      buffOptions.splice(index, 1);
    }

    setSelectedOptions(buffOptions);
  }

  return (
    <div className='flex items-center' >
      <div className='cursor-pointer flex items-center' onClick={toggleMode}>
        <span className='mr-2 divide-y-2 divide-coral font-raleway text-xl'>
          <span className='label'>
            {label}
          </span>
          <div className="mt-1"/>
        </span>
        <PiArrowDownRightThin className='arrow h-full w-auto inline mr-5' viewBox='60 60 136 136'/>
      </div>
    
      {isExpanded &&
        <div className="expandedSection flex h-full w-fit items-center relative opacity-0" ref={expandedRef}>
          {options.map((option) => {
            return <div 
              className={`option cursor-pointer text-xl mr-3 lowercase`} 
              onClick={() => {setSelectedOption(option)}}
              key={option}
              data-option={option}
            >
              {option}
            </div>
          })}
        </div>
      }
    </div>
  );
}

export default Filter