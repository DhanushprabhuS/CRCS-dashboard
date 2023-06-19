import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar, DetailRow, Filter, ExcelExport } from '@syncfusion/ej2-react-grids';

import { latestHearingData, latestHearingDataGrid, latestCertificateData, latestCertificateDataGrid, latestOrderDataGrid, latestOrderData } from '../Data/dummy';
import { Header } from '../Components'
import { useStateContext } from '../Contexts/ContextProvider';
const Latest = () => {

    const Headings = ["Notice Issued for Hearing", "Latest Certificates", "Hearing Order Sheet"];
    const Data = [latestHearingData, latestCertificateData, latestOrderData];
    const DataGrid = [latestHearingDataGrid, latestCertificateDataGrid, latestOrderDataGrid];

    const { latest, setLatestState } = useStateContext();

    const gridTemplate0 = (props) => {
        return (
            <div className='flext justify-center content-center'>
                <table className='table-fixed border-separate border-spacing-2 border border-slate-500'>
                    <tbody>
                        <tr>
                            <td>
                                <span className='font-bold'>Name : </span>
                                {props["Society Name"]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-bold'>State/UT : </span>
                                {props["State/UT"]}
                            </td>
                            <td>
                                <span className='font-bold'>District : </span>
                                {props["District Name"]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-bold'>Hearing : </span>
                                {props["Hearing ON"]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };


    const gridTemplate1 = (props) => {
        return (
            <div className='flext justify-center content-center'>
                <table className='table-fixed border-separate border-spacing-2 border border-slate-500'>
                    <tbody>
                        <tr>
                            <td>
                                <span className='font-bold'>Name : </span>
                                {props["Society Name"]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-bold'>District : </span>
                                {props["District Name"]}
                            </td>
                            <td>
                                <span className='font-bold'>State/UT : </span>
                                {props["State/UT"]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-bold'>Proposal Type : </span>
                                {props["Proposal Type"]}
                            </td>
                            <td>
                                <span className='font-bold'>Certificate Date : </span>
                                {props["Certificate Date"]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const gridTemplate2 = (props) => {
        return (
            <div className='flext justify-center content-center'>
                <table className='table-fixed border-separate border-spacing-2 border border-slate-500'>
                    <tbody>
                        <tr>
                            <td>
                                <span className='font-bold'>Subject : </span>
                                {props["Subject of the Topic"]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className='font-bold'>Date : </span>
                                {props["Date"]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    const GridTemp = [gridTemplate0, gridTemplate1, gridTemplate2];
    const pageSettings = { pageSize: 8 };

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();
        }
    };


    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <div className="flex justify-center">

                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        onClick={() => setLatestState(0)}
                        checked={latest === 0}
                    />
                    <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="inlineRadio1"
                    >Hearings</label
                    >
                </div>


                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        onClick={() => setLatestState(1)}
                        checked={latest === 1} />
                    <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="inlineRadio2"
                    >Certificates</label
                    >
                </div>

                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        onClick={() => setLatestState(2)}
                        checked={latest === 2}
                    />
                    <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="inlineRadio3"
                    >Order Sheets</label
                    >
                </div>
            </div>
            <Header category="Table" title={Headings[latest]} />
            <GridComponent
                dataSource={Data[latest]}
                allowPaging
                allowSorting
                toolbar={['Search', 'ExcelExport', 'Filter on each type']}
                toolbarClick={toolbarClick}
                width='auto'
                rowHeight={60}
                pageSettings={pageSettings}
                detailTemplate={GridTemp[latest]}
                allowFiltering
                allowExcelExport={true}
            >
                <ColumnsDirective>
                    {DataGrid[latest].map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar, Filter, ExcelExport, DetailRow]} />
            </GridComponent>
        </div>
    );
};
export default Latest;