import React, { useState } from "react";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel
} from "@syncfusion/ej2-react-charts";

import {
    barCustomSeries,
    barPrimaryXAxis,
    barPrimaryYAxis,
    barStateSeries,
    barYearSeries,
    lineYearSeries,
} from "../../Data/dummy";

import { useStateContext } from "../../Contexts/ContextProvider";
import { ChartsHeader } from "../../Components";

const Bar2 = () => {
    const { currentMode, currentColor } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category="Year Wise" title="Registered Societies from 1986 onwards under MSCS, 2002" />
            <ChartComponent
                id="area-chart"
                height="420px"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === "Dark" ? "#33373E" : "#fff"}
                palettes={[currentColor]}
            >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {lineYearSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Bar2;
