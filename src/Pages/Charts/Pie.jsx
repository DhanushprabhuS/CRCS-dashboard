import React from 'react';

import { pieChartData, typeDataWithPercentages } from '../../Data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../Components';
import Doughnut from '../../Components/Charts/Pie';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Type Wise" title="Registered Societies from 1986 onwards under MSCS, 2002" />
    <div className="w-full">
      <PieChart id="chart-pie" data={typeDataWithPercentages} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;