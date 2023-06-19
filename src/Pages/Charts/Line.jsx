import React from 'react';
import { ChartsHeader, LineChart } from '../../Components'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Year Wise" title="Registered Societies from 1986 onwards under MSCS, 2002" />
      <div className='w-full '>
        <LineChart />
      </div>
    </div>
  )
}

export default Line