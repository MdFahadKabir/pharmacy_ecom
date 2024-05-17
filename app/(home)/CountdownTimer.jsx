"use client"

import React from 'react';
import { useCountdown } from '../../utils/hooks/useCountdown'


const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className='border border-[#5E615C] lg:rounded-2xl rounded-xl text-center text-[#666666]  xl:py-4 lg:py-2 md:py-2.5  lg:w-20 md:w-16'>
      <p className='font-bold xl:text-[28px] lg:text-lg md:text-base  poppins'>{value}</p>
      <span className='lg:text-sm md:text-xs font-medium '>{type}</span>
    </div>
  );
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="md:flex items-center justify-center xl:gap-4 lg:gap-2 gap-1.5 hidden">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    );
  };
  

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};


export default CountdownTimer;