import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Page, Sort, Search, Inject, Toolbar, DetailRow, ExcelExport } from '@syncfusion/ej2-react-grids';

import { societyData, societyGrid } from '../Data/dummy';
import { Header } from '../Components'
const Employees = () => {
  const gridTemplate = (props) => {
    return (
      <div className='flext justify-center content-center'>
        <table className='table-fixed border-separate border-spacing-2 border border-slate-500'>
          <tbody>
            <tr>
              <td>
                <span className='font-bold'>Name : </span>
                {props['Name of Society']}
              </td>
            </tr>
            <tr>
              <td>
                <span className='font-bold'>Address : </span>
                {props['Address']}
              </td>
              <td>
                <span className='font-bold'>District : </span>
                {props['District']}
              </td>
              <td>
                <span className='font-bold'>State : </span>
                {props['State']}
              </td>
            </tr>
            <tr>
              <td>
                <span className='font-bold'>Reg.Date : </span>
                {props['Date of Registration']}
              </td>
              <td>
                <span className='font-bold'>Area of Operation : </span>
                {props['Area of Operation']}
              </td>
            </tr>
            <tr>
              <td>
                <span className='font-bold'>Sector : </span>
                {props['Sector Type']}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const pageSettings = { pageSize: 8 };
  const sortSettings = {
    columns: [
      { field: 'Name of Society', direction: 'Ascending' },
      { field: 'Date of Registration', direction: 'Ascending' },
      { field: 'District', direction: 'Ascending' },
      { field: 'State', direction: 'Ascending' },
      { field: 'Sector Type', direction: 'Ascending' }
    ]
  };

  let grid;
  const toolbar = ['ExcelExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'grid_excelexport') {
      grid.excelExport();
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Table" title="List of Cooperative Societies / Banks registered under MSCS Act w.e.f. 1986 onwards" />
      <GridComponent
        id='grid'
        dataSource={societyData}
        allowPaging
        allowSorting
        toolbar={['Search', 'ExcelExport', 'Filter on each type']}
        toolbarClick={toolbarClick}
        width='auto'
        rowHeight={50}
        detailTemplate={gridTemplate}
        pageSettings={pageSettings}
        sortSettings={sortSettings}
        allowFiltering={true}
        allowExcelExport={true}

        ref={g => grid = g}
      >
        <ColumnsDirective>
          {societyGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Sort, Toolbar, ExcelExport, Filter, DetailRow]} />
      </GridComponent>
    </div>
  );
};
export default Employees;