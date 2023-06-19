import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiFillInfoCircle, AiOutlineForm, AiOutlineTable, AiFillStar, AiOutlineUserAdd, AiOutlineLogin, AiFillSecurityScan } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart, FiHome } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft, BsFillFileBarGraphFill, BsFillPieChartFill, BsCalendar3 } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const stateData = [
  [
    { x: 'Andhra Pradesh', y: 22 },
    { x: 'Arunachal Pradesh', y: 1 },
    { x: 'Assam', y: 6 },
    { x: 'Bihar', y: 19 },
    { x: 'Chandigarh', y: 1 },
    { x: 'Chhattisgarh', y: 8 },
    { x: 'Dadraand Nagar Haveli', y: 1 },
    { x: 'Goa', y: 1 },
    { x: 'Gujarat', y: 49 },
    { x: 'Haryana', y: 21 },
    { x: 'Himachal Pradesh', y: 1 },
    { x: 'Jammu and Kashmir', y: 2 },
    { x: 'Jharkhand', y: 9 },
    { x: 'Karnataka', y: 30 },
    { x: 'Kerala', y: 33 },
    { x: 'Madhya Pradesh', y: 29 },
    { x: 'Maharashtra', y: 654 },
    { x: 'Manipur', y: 4 },
    { x: 'Meghalaya', y: 1 },
    { x: 'New Delhi', y: 159 },
    { x: 'Odisha', y: 19 },
    { x: 'Pondicherry', y: 5 },
    { x: 'Punjab', y: 23 },
    { x: 'Rajasthan', y: 74 },
    { x: 'Sikkim', y: 1 },
    { x: 'Tamil Nadu', y: 131 },
    { x: 'Telangana', y: 13 },
    { x: 'Uttar Pradesh', y: 163 },
    { x: 'Uttarakhand', y: 5 },
    { x: 'West Bengal', y: 70 },
  ]
]

export const barStateSeries = [
  {
    dataSource: stateData[0],
    xName: 'x',
    yName: 'y',
    name: 'Count',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },

  },
]


export const yearData = [
  [

    { x: '1918', y: 95 },
    { x: '1919', y: 1 },
    { x: '1943', y: 1 },
    { x: '1944', y: 1 },
    { x: '1955', y: 5 },
    { x: '1974', y: 4 },
    { x: '1975', y: 7 },
    { x: '1976', y: 2 },
    { x: '1977', y: 1 },
    { x: '1978', y: 1 },
    { x: '1979', y: 1 },
    { x: '1980', y: 2 },
    { x: '1982', y: 3 },
    { x: '1984', y: 7 },
    { x: '1985', y: 3 },
    { x: '1987', y: 7 },
    { x: '1988', y: 10 },
    { x: '1989', y: 5 },
    { x: '1990', y: 2 },
    { x: '1991', y: 11 },
    { x: '1992', y: 9 },
    { x: '1993', y: 14 },
    { x: '1994', y: 7 },
    { x: '1995', y: 7 },
    { x: '1996', y: 9 },
    { x: '1997', y: 4 },
    { x: '1998', y: 20 },
    { x: '1999', y: 15 },
    { x: '2000', y: 20 },
    { x: '2001', y: 15 },
    { x: '2002', y: 16 },
    { x: '2003', y: 35 },
    { x: '2004', y: 28 },
    { x: '2006', y: 15 },
    { x: '2007', y: 16 },
    { x: '2008', y: 35 },
    { x: '2009', y: 28 },
    { x: '2010', y: 15 },
    { x: '2011', y: 16 },
    { x: '2012', y: 31 },
    { x: '2013', y: 33 },
    { x: '2014', y: 54 },
    { x: '2015', y: 95 },
    { x: '2016', y: 247 },
    { x: '2017', y: 194 },
    { x: '2018', y: 250 },
    { x: '2019', y: 83 },
    { x: '2020', y: 19 },
    { x: '2021', y: 67 },
    { x: '2022', y: 8 },
    { x: '2023', y: 26 },

  ]
]

export const SparklineYearData = [
  { x: '2010', yval: 15 },
  { x: '2011', yval: 16 },
  { x: '2012', yval: 31 },
  { x: '2013', yval: 33 },
  { x: '2014', yval: 54 },
  { x: '2015', yval: 95 },
  { x: '2016', yval: 247 },
  { x: '2017', yval: 194 },
  { x: '2018', yval: 250 },
  { x: '2019', yval: 83 },
  { x: '2020', yval: 19 },
  { x: '2021', yval: 67 },
  { x: '2022', yval: 8 },
  { x: '2023', yval: 26 },

];


export const lineYearSeries = [
  {
    dataSource: yearData[0],
    xName: 'x',
    yName: 'y',
    name: 'Count',
    width: '2',
    marker: {
      visible: true,
      height: 10
    },
    type: 'Line',

  }
]

export const typeData = [
  [
    { x: 'Transport', y: 1 },
    { x: 'Cooperative banking', y: 68 },
    { x: 'Marketing', y: 37 },
    { x: 'Labour', y: 1 },
    { x: 'Tourism', y: 9 },
    { x: 'Agro', y: 294 },
    { x: 'Others', y: 39 },
    { x: 'National Federation', y: 21 },
    { x: 'Federation', y: 10 },
    { x: 'Construction', y: 9 },
    { x: 'Welfare', y: 21 },
    { x: 'Seed', y: 1 },
    { x: "Credit", y: 612 },
    { x: 'Export', y: 1 },
    { x: 'Consumer', y: 11 },
    { x: 'Housing', y: 145 },
    { x: 'Multipurpose', y: 103 },
    { x: 'Hospital', y: 21 },
    { x: 'Dairy', y: 97 },
    { x: 'Organic', y: 1 },
    { x: 'Textile', y: 40 },
  ]
]

export const barTypeSeries = [
  {
    dataSource: typeData[0],
    xName: 'x',
    yName: 'y',
    name: 'Count',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },

  },
]


export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  {
    label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1]
  },

  {
    label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2]
  },

  {
    label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3]
  },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center'
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center'
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center'
  },

  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];





export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center'
  },
];


export const societyGrid = [
  {
    field: 'Sr. No',
    headerText: 'Sr. No',
    width: '10',
    textAlign: 'Center'
  },
  {
    field: 'Name of Society',
    headerText: 'Name',
    width: '130',
    textAlign: 'Center',
  },
  {
    field: 'Address',
    headerText: 'Address',
    width: '15 0',
    textAlign: 'Center',
  },
  {
    field: 'State',
    headerText: 'State',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'District',
    headerText: 'District',
    width: '150',
    textAlign: 'Center',
  },

  {
    field: 'Date of Registration',
    headerText: 'Reg.Date',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'Area of Operation',
    headerText: 'Area of Operation',
    width: '180',
    textAlign: 'Center'
  },
  {
    field: 'Sector Type',
    headerText: 'Sector Type',
    width: '100',
    textAlign: 'Center'
  },
];


export const societyData = [
  {
    'Sr. No.': 1,
    'Name of Society': 'saharayn universal multipurose society limited',
    'Address': 'At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh',
    'State': 'UTTAR PRADESH',
    'District': 'KUSHI NAGAR',
    'Date of Registration': '',
    'Area of Operation': 'Haryana, UttarPradesh, Himachal, Punjab',
    'Sector Type': 'Credit'
  },
  {
    'Sr. No.': 2,
    'Name of Society': 'JMJ Multi State Agro Cooperative Society Ltd.',
    'Address': 'TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala',
    'State': 'KERALA',
    'District': '',
    'Date of Registration': '13/10/2022',
    'Area of Operation': 'Bihar, West bengal, Odisha',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 3,
    'Name of Society': 'Devbhoomi Agro Multi State Cooperative Society Ltd.',
    'Address': 'S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661',
    'State': 'UTTARAKHAND',
    'District': '',
    'Date of Registration': '04/10/2022',
    'Area of Operation': 'Tamil Nadu, karnataks',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 4,
    'Name of Society': 'Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.',
    'Address': 'Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra',
    'State': 'MAHARASHTRA',
    'District': '',
    'Date of Registration': '04/10/2022',
    'Area of Operation': 'Haryana, Punajb',
    'Sector Type': 'Health/Hospital'
  },
  {
    'Sr. No.': 5,
    'Name of Society': 'Agriculture Development Cooperative Federation',
    'Address': 'A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab 160055',
    'State': 'PUNJAB',
    'District': '',
    'Date of Registration': '22/09/2022',
    'Area of Operation': 'Manipur, Meghalaya',
    'Sector Type': 'Federation'
  },
  {
    'Sr. No.': 6,
    'Name of Society': 'Prosperity Multi State Housing Cooperative Society ltd.',
    'Address': 'Jayem Arcade 385 A6, First Floor, Kamarajar Road, Peelamedu, Coimbatore 641004',
    'State': 'TAMIL NADU',
    'District': '',
    'Date of Registration': '15/09/2022',
    'Area of Operation': 'Maharashtra, Gujarat, Rajasthan',
    'Sector Type': 'Housing'
  },
  {
    'Sr. No.': 7,
    'Name of Society': 'Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)',
    'Address': 'Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana',
    'State': 'TELANGANA',
    'District': '',
    'Date of Registration': '12/09/2022',
    'Area of Operation': 'Gujarat, Rajasthan',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 8,
    'Name of Society': 'Shri Sharda Agro Multi State Co- operative Society Ltd.',
    'Address': 'Shri Sharda Agro Multi State Co-operative Society Ltd.',
    'State': 'UTTAR PRADESH',
    'District': '',
    'Date of Registration': '02/09/2022',
    'Area of Operation': 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 9,
    'Name of Society': 'Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.',
    'Address': 'Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra',
    'State': 'MAHARASHTRA',
    'District': '',
    'Date of Registration': '31/08/2022',
    'Area of Operation': 'Andhra Pradesh, Telangna',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 10,
    'Name of Society': 'Travancore Cochin Tourism Cooperative Society Ltd',
    'Address': 'Idukki, Kerala 685584',
    'State': 'KERALA',
    'District': 'IDUKKI',
    'Date of Registration': '31/08/2022',
    'Area of Operation': 'Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar',
    'Sector Type': 'Tourism'
  },
  {
    'Sr. No.': 11,
    'Name of Society': 'Janamaitheri Agricultural Cooperative Society Ltd.',
    'Address': 'Janamaitheri Agricultural Cooperative Society Ltd.',
    'State': 'KERALA',
    'District': 'THIRUVANANTHAPURAM',
    'Date of Registration': '16/08/2022',
    'Area of Operation': 'Maharashtra, Gujarat, Rajasthan',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 12,
    'Name of Society': 'Swaraj Multipurpose Federation of Cooperative Society Ltd',
    'Address': 'Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road, Faridabad 121001 Haryana',
    'State': 'HARYANA',
    'District': '',
    'Date of Registration': '16/08/2022',
    'Area of Operation': 'Gujarat, Rajasthan',
    'Sector Type': 'Federation'
  },
  {
    'Sr. No.': 13,
    'Name of Society': 'Green Safe Multi State Agriculture Cooperative Society Ltd.',
    'Address': 'Coimbatore, Tamil Nadu',
    'State': 'TAMIL NADU',
    'District': 'COIMBATORE',
    'Date of Registration': '12/08/2022',
    'Area of Operation': 'Haryana, Delhi',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 14,
    'Name of Society': 'Mango Growers cooperative society Ltd. (MANCO)',
    'Address': 'Visakhapatnam',
    'State': 'ANDHRA PRADESH',
    'District': 'VISAKHAPATANAM',
    'Date of Registration': '10/08/2022',
    'Area of Operation': 'Haryana, Delhi, UttarPradesh',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 15,
    'Name of Society': 'Srijan Krishi Vipnan Multi State Cooperative Society Ltd.',
    'Address': 'Lucknow',
    'State': 'UTTAR PRADESH',
    'District': 'LUCKNOW',
    'Date of Registration': '29/07/2022',
    'Area of Operation': 'Uttrakhand, Himachal Pradesh, Jammu & Kashmir',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 16,
    'Name of Society': 'Kamal Multispeciality Cooperative Hospital & Research center Ltd.',
    'Address': 'Beed Maharashtra',
    'State': 'MAHARASHTRA',
    'District': 'BEED',
    'Date of Registration': '22/07/2022',
    'Area of Operation': 'Maharashtra, Gujarat, Rajasthan',
    'Sector Type': 'Health/Hospital'
  },
  {
    'Sr. No.': 17,
    'Name of Society': 'Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.',
    'Address': 'Ahmednagar',
    'State': 'MAHARASHTRA',
    'District': 'AHMEDNAGAR',
    'Date of Registration': '24/06/2022',
    'Area of Operation': 'Haryana, Punjab, Rajasthan',
    'Sector Type': 'Health/Hospital'
  },
  {
    'Sr. No.': 18,
    'Name of Society': 'The Urban Care Multi State Agro Cooperative Society Ltd.',
    'Address': 'Kerala',
    'State': 'KERALA',
    'District': 'KOZHIKODE',
    'Date of Registration': '27/06/2022',
    'Area of Operation': 'Haryana, Rajasthan',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 19,
    'Name of Society': 'Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)',
    'Address': 'Kerala',
    'State': 'KERALA',
    'District': 'THRISSUR',
    'Date of Registration': '27/06/2022',
    'Area of Operation': 'Gujarat, Rajasthan, Haryana, Delhi',
    'Sector Type': 'Fisheries'
  },
  {
    'Sr. No.': 20,
    'Name of Society': 'Swayam Samruddhi Multi State Cooperative Society Ltd.',
    'Address': 'Hyderabad, Telangana',
    'State': 'TELANGANA',
    'District': 'HYDERABAD',
    'Date of Registration': '15/06/2022',
    'Area of Operation': 'Kerala, karnataka, Maharashtra, Gujarat',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 21,
    'Name of Society': 'Shree Sai Seva Multi Specialty Cooperative Hospital and Research center ltd',
    'Address': 'Ahmednagar, Maharashtra',
    'State': 'MAHARASHTRA',
    'District': 'AHMEDNAGAR',
    'Date of Registration': '26/05/2022',
    'Area of Operation': 'Haryana, Punjab, Rajasthan',
    'Sector Type': 'Health/Hospital'
  },
  {
    'Sr. No.': 22,
    'Name of Society': 'Evergreen Valley Multi State Cooperative Agriculture & Rural Development Society Ltd.',
    'Address': 'Thrissur',
    'State': 'KERALA',
    'District': 'THRISSUR',
    'Date of Registration': '26/05/2022',
    'Area of Operation': 'Haryana, Punjab, Rajasthan',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 23,
    'Name of Society': 'Green Valley Agro Marketing Cooperative Society Ltd.',
    'Address': 'Pune',
    'State': 'MAHARASHTRA',
    'District': 'PUNE',
    'Date of Registration': '24/05/2022',
    'Area of Operation': 'Haryana, Delhi, UttarPradesh',
    'Sector Type': 'Agro'
  },
  {
    'Sr. No.': 24,
    'Name of Society': 'Shri Siddhi Vinayak Multi State Cooperative Housing Society Ltd.',
    'Address': 'Nashik',
    'State': 'MAHARASHTRA',
    'District': 'NASHIK',
    'Date of Registration': '24/05/2022',
    'Area of Operation': 'Gujarat, Rajasthan, Haryana',
    'Sector Type': 'Housing'
  },

  {
    "Sr. No.": 25,
    "Name of Society": "Jewan Kothi Multi State Agro Cooperative Society Ltd.",
    "Address": "Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "BASTI",
    "Date of Registration": "06/06/2022",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 26,
    "Name of Society": "Bharathimanass Agriculture Cooperative Ltd. (BHARATHIMANAS)",
    "Address": "Manipur",
    "State": "MANIPUR",
    "District": "BISHNUPUR",
    "Date of Registration": "03/06/2022",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 27,
    "Name of Society": "Youth Employability Skill Training Cooperative Educational Society Ltd.",
    "Address": "PATHANAMTHITTA",
    "State": "KERALA",
    "District": "ERNAKULAM",
    "Date of Registration": "02/06/2022",
    "Area of Operation": "Tamil Nadu, karnataks",
    "Sector Type": "Others"
  },
  {
    "Sr. No.": 28,
    "Name of Society": "Jai Ratnagarbha Agriculture Multi State Cooperative Society Ltd.",
    "Address": "Prayag Raj, uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "BAREILLY",
    "Date of Registration": "28/05/2022",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 29,
    "Name of Society": "Shikharji Multi State Agro Processing and Marketing Cooperative Society Ltd",
    "Address": "Buldana, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "BULDHANA",
    "Date of Registration": "27/05/2022",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 30,
    "Name of Society": "News Agriculture Export & Marketing Cooperative society Ltd.",
    "Address": "Kalkaji, Delhi",
    "State": "NEW DELHI",
    "District": "NEW DELHI",
    "Date of Registration": "21/05/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 31,
    "Name of Society": "Krashnadi Multi State Vehicle Services Cooperative Society Ltd.",
    "Address": "Beed, maharashtra",
    "State": "MAHARASHTRA",
    "District": "BEED",
    "Date of Registration": "12/05/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Others"
  },
  {
    "Sr. No.": 32,
    "Name of Society": "Lotus Multi Specialty Cooperative Hospital and Research Center Ltd.",
    "Address": "Osmanabad, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "BEED",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Health/Hospital"
  },
  {
    "Sr. No.": 33,
    "Name of Society": "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
    "Address": "Osmanabad, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "OSMANABAD",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Health/Hospital"
  },
  {
    "Sr. No.": 34,
    "Name of Society": "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
    "Address": "Kolhaour, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "KOLHAPUR",
    "Date of Registration": "27/04/2022",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Health/Hospital"
  },
  {
    "Sr. No.": 35,
    "Name of Society": "Vanashri Cooperative Power & Agro Progressive ltd",
    "Address": "Sangli , Maharashtra",
    "State": "MAHARASHTRA",
    "District": "SANGLI",
    "Date of Registration": "26/04/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 36,
    "Name of Society": "Samrudh Marathwada Multi State Vehicle Services Cooperative Society Ltd.",
    "Address": "Beed, maharashtra",
    "State": "MAHARASHTRA",
    "District": "BEED",
    "Date of Registration": "20/04/2022",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Others"
  },
  {
    "Sr. No.": 37,
    "Name of Society": "Bharathiyajkl Machuwara Samudaay Cooperative Ltd. (BHARATHIJKLMASACO)",
    "Address": "Baramulla, Kashmir",
    "State": "JAMMU AND KASHMIR",
    "District": "BADGAM",
    "Date of Registration": "18/04/2022",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Fisheries"
  },
  {
    "Sr. No.": 38,
    "Name of Society": "Prestige Agro Multi State Cooperative Society Ltd",
    "Address": "Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "BULANDSHAHR",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Haryana, Delhi, UttarPradesh",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 39,
    "Name of Society": "Vidhata Hamal Multi State Cooperative Society Ltd",
    "Address": "Bhandara, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "BHANDARA",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 40,
    "Name of Society": "Dr Appasahed Urf Sa. Re. Patil Jayysinghpur Udgaon Sahakari Bank Ltd",
    "Address": "Kolhapur, maharashtra",
    "State": "MAHARASHTRA",
    "District": "KOLHAPUR",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 41,
    "Name of Society": "Krushisadhna Mahila Multi State Agro Cooperative society Ltd",
    "Address": "Nashik maharashtra",
    "State": "MAHARASHTRA",
    "District": "NASIK",
    "Date of Registration": "01/04/2022",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 42,
    "Name of Society": "Seva Sadan Multi Specialty Cooperative Hospital and Research Center Ltd",
    "Address": "Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)",
    "State": "MAHARASHTRA",
    "District": "AHMEDNAGAR",
    "Date of Registration": "21/03/2022",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 43,
    "Name of Society": "Bulandshahr Agro MultiState cooperative Society Ltd",
    "Address": "Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393",
    "State": "UTTAR PRADESH",
    "District": "BULANDSHAHR",
    "Date of Registration": "21/03/2022",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 44,
    "Name of Society": "B K Dhanlakshmi Multi State Agro Cooperative Society Limited",
    "Address": "Mayflower signature, Office 7B, 7th Floor, Avinashi Road, Peelumedu, Coimbatore- 641004, Tamil Nadu",
    "State": "TAMIL NADU",
    "District": "COIMBATORE",
    "Date of Registration": "08/03/2022",
    "Area of Operation": "Kerala, karnataka, Maharashtra, Gujarat",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 45,
    "Name of Society": "The Walmik Multi State Cooperative Handloom Weavers Cooperative Society Ltd",
    "Address": "Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur, Maharashtra-440009",
    "State": "MAHARASHTRA",
    "District": "NAGPUR",
    "Date of Registration": "01/03/2022",
    "Area of Operation": "Chattisgarh, Madhya Pradesh, Uttar Pradesh",
    "Sector Type": "Handloom"
  },

  {
    "Sr. No.": 51,
    "Name of Society": "Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd",
    "Address": "S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "SANGLI",
    "Date of Registration": "10/11/2021",
    "Area of Operation": "Haryana, Uttar Pradesh, Himachal Pradesh, Punjab",
    "Sector Type": "Health/Hospital"
  },
  {
    "Sr. No.": 52,
    "Name of Society": "Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd",
    "Address": "15-A, 3-4-757/22, APHB Building Near Raghavendra Swamy Temple Opposite Telangana Grameena Bank, Barkatpura, Hyderabad 500027, Telangana",
    "State": "TELANGANA",
    "District": "ADILABAD",
    "Date of Registration": "12/04/2017",
    "Area of Operation": "Bihar, West Bengal, Odisha",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 53,
    "Name of Society": "The Bhuj Mercantile Coop. Bank Ltd",
    "Address": "Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006, Gujarat",
    "State": "GUJARAT",
    "District": "AHMEDABAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Tamil Nadu, Karnataka",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 54,
    "Name of Society": "Heaven Multi State Agro Cooperative Society Ltd",
    "Address": "Kh No 403, Babhani Nagar, Andar, Sominath Nagar, Ward No. 7, Deoria Kasiya Bypass Road, Deoria, Uttar Pradesh 274001",
    "State": "UTTAR PRADESH",
    "District": "MORADABAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Haryana, Punjab",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 55,
    "Name of Society": "The Sutex Cooperative Bank Ltd",
    "Address": "Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat",
    "State": "GUJARAT",
    "District": "VALSAD",
    "Date of Registration": "14/09/2021",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 56,
    "Name of Society": "The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd",
    "Address": "Shop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat",
    "State": "GUJARAT",
    "District": "BATOD",
    "Date of Registration": "09/08/2021",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 57,
    "Name of Society": "BharathiMana Fishermen development Cooperative Society ltd. (BHARATHIMANACO)",
    "Address": "Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur",
    "State": "MANIPUR",
    "District": "BISHNUPUR",
    "Date of Registration": "06/07/2021",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Fisheries"
  },
  {
    "Sr. No.": 58,
    "Name of Society": "Agrovision Farmer Multi State Cooperative Society Ltd.",
    "Address": "H.No 3, Gate No 1, Krishna Colony, Near Universal School, Gorakhpur Kasya Road, Deoria, Uttar Pradesh 274001",
    "State": "UTTAR PRADESH",
    "District": "DEORIA",
    "Date of Registration": "27/05/2021",
    "Area of Operation": "Maharashtra, Goa, Karnataka, Andhra Pradesh",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 59,
    "Name of Society": "Chitrakoot Multi State Agriculture Marketing Cooperative Society Ltd. (CMAMCS)",
    "Address": "H.No 104, Village & Post Sahewa, thana-Girwan, Tehsil Atarra, Banda, Uttar Pradesh 210120",
    "State": "UTTAR PRADESH",
    "District": "BANDA",
    "Date of Registration": "29/04/2021",
    "Area of Operation": "Andhra Pradesh, Telangana",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 60,
    "Name of Society": "CP Agrotech Multi State Cooperative Society Ltd.",
    "Address": "C/O Manoj Kumar, Mohalla-Kannon Goyan, Kasba-Jhinjhana, Jhinjhana Rural, Shamli, Uttar Pradesh 247773",
    "State": "UTTAR PRADESH",
    "District": "MUZAFFARNAGAR",
    "Date of Registration": "16/03/2021",
    "Area of Operation": "Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 61,
    "Name of Society": "Simplydesi Selfhelp Products, Processing and Marketing Multi State Cooperative Society Ltd",
    "Address": "52, Ananda Park Extension, East Punjabi Bagh, New Delhi 110026",
    "State": "NEW DELHI",
    "District": "NEW DELHI",
    "Date of Registration": "24/02/2021",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Fisheries"
  },
  {
    "Sr. No.": 62,
    "Name of Society": "Bharati North East Fisherman Co-operative Ltd. (BHARATICO)",
    "Address": "C/O Swambha Basumatary, near Simlaguri Post Office, Simlaguri, Dhaliagaon, Chirang(BTR), Assam 783381",
    "State": "ASSAM",
    "District": "CHIRANG",
    "Date of Registration": "15/02/2021",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Fisheries"
  },
  {
    "Sr. No.": 63,
    "Name of Society": "Chambal Agriculture Marketing Cooperative Ltd",
    "Address": "525, rajput Nagar, Bharouli road, Bhind, Madhya Pradesh 477001",
    "State": "MADHYA PRADESH",
    "District": "BHIND",
    "Date of Registration": "15/01/2021",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Marketing"
  },
  {
    "Sr. No.": 64,
    "Name of Society": "Sharda Agro Multi State Cooperative Society Ltd",
    "Address": "Bhopal, Madhya Pradesh",
    "State": "MADHYA PRADESH",
    "District": "BHOPAL",
    "Date of Registration": "14/12/2020",
    "Area of Operation": "Haryana, Delhi, Uttar Pradesh",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 65,
    "Name of Society": "N E Railway Cooperative Credit Society Ltd",
    "Address": "Chief Workshop Manager Office, NE Railway, Izzatnagar, Bareilly, Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "BAREILLY",
    "Date of Registration": "24/11/2020",
    "Area of Operation": "Uttarakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Credit"
  },
  {
    "Sr. No.": 66,
    "Name of Society": "Ramraja Multi state Agro Cooperative Society ltd.",
    "Address": "102, Elegant Tower, Royal City, Shivpuri Road, Jhansi, 284003 Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "JHANSI",
    "Date of Registration": "12/11/2020",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 67,
    "Name of Society": "Vitthal Rao Shinde Sahakari Sahkar Karkhana Ltd",
    "Address": "Gangamainagar, Post Pimpalner, Taluka Madha, Solapur, 413210 Maharashtra",
    "State": "MAHARASHTRA",
    "District": "SOLAPUR",
    "Date of Registration": "05/11/2020",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Industrial/Textile"
  },
  {
    "Sr. No.": 68,
    "Name of Society": "Ambika Multi State Health Service for the Weaker Section Cooperative Society Ltd",
    "Address": "Sai Illam, Floor-2, 53/2, Bharatheshwarar, 3rd Street, Kodambakkam, Chennai 600024, Tamil Nadu",
    "State": "TAMIL NADU",
    "District": "CHENNAI",
    "Date of Registration": "14/09/2020",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Health/Hospital"
  },
  {
    "Sr. No.": 69,
    "Name of Society": "Tambola Lottery Cooperative Society Ltd",
    "Address": "84, Jai Jawan Society, Gurukul Road, Memnagar, Ahmedabad 380052, Gujarat",
    "State": "GUJARAT",
    "District": "AHMEDABAD",
    "Date of Registration": "13/08/2020",
    "Area of Operation": "Bihar, West Bengal, Odisha, Jharkhand",
    "Sector Type": "Lottery"
  },
  {
    "Sr. No.": 70,
    "Name of Society": "The New India Urban Coop. Bank Ltd",
    "Address": "New India Bank Bhavan, 24, Amaravati Road, Nagpur 440001 Maharashtra",
    "State": "MAHARASHTRA",
    "District": "NAGPUR",
    "Date of Registration": "17/07/2020",
    "Area of Operation": "Haryana, Punjab",
    "Sector Type": "Cooperative Bank"
  },

  {
    "Sr. No.": 73,
    "Name of Society": "Farm to Foreign Exports Entrepreneur Development Multi State Cooperative Society Ltd",
    "Address": "H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427",
    "State": "ANDHRA PRADESH",
    "District": "WEST GODAVARI",
    "Date of Registration": "16/01/2020",
    "Area of Operation": "Haryana, UttarPradesh, Himachal, Punjab",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 74,
    "Name of Society": "Dharitri Jute and Eco Friendly Products Multi State Cooperative Society Ltd",
    "Address": "D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana",
    "State": "TELANGANA",
    "District": "ADILABAD",
    "Date of Registration": "12/12/2019",
    "Area of Operation": "Bihar, West bengal, Odisha",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 75,
    "Name of Society": "The Malabar Multi State Agro Cooperative Society Limited",
    "Address": "1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
    "State": "KERALA",
    "District": "KANNUR",
    "Date of Registration": "20/10/2019",
    "Area of Operation": "Haryana, Punajb",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 76,
    "Name of Society": "Sai Raam Multi State Agri Cooperative Society Ltd",
    "Address": "No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008",
    "State": "TAMIL NADU",
    "District": "DHARMAPURI",
    "Date of Registration": "06/12/2019",
    "Area of Operation": "Manipur, Meghalaya",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 77,
    "Name of Society": "Prabhavana Multi State Womens’ Jute and Allied Fibre Products Cooperative Society Ltd",
    "Address": "House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana 500013",
    "State": "TELANGANA",
    "District": "ADILABAD",
    "Date of Registration": "27/09/2019",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 78,
    "Name of Society": "The Gayatri Cooperative Urban Bank Ltd",
    "Address": "7-1,72, 73,74 Gayatri Towers, Tehsil Chowrasta, Jagtial Town, Dist. Jagtail, Telangana",
    "State": "TELANGANA",
    "District": "KARIMNAGAR",
    "Date of Registration": "23/08/2019",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 79,
    "Name of Society": "Shri Saibaba Multi State Cooperative Dudh Utpadak & Prakriya Sangh Ltd",
    "Address": "A/p Lohgaon, Tal- Rahata, Dist. Ahmednagar, PIN 413712 Maharashtra",
    "State": "MAHARASHTRA",
    "District": "AHMEDNAGAR",
    "Date of Registration": "06/08/2019",
    "Area of Operation": "Maharashtra,Goa.Karnataka, Andhra Pradesh",
    "Sector Type": "Dairy"
  },
  {
    "Sr. No.": 80,
    "Name of Society": "Subhiksha Organic Farmers Multi State Cooperative Society Ltd",
    "Address": "Krushi Nivasa, At Kuruvalli,Thirthahalli, Shimoga, Karnataka 577432",
    "State": "KARNATAKA",
    "District": "SHIMOGA",
    "Date of Registration": "03/07/2019",
    "Area of Operation": "Andhra Pradesh, Telangna",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 81,
    "Name of Society": "The Panipat Urban Cooperative Bank Ltd (PUCB)",
    "Address": "510/8, G T Road,Panipat, Haryana 132103",
    "State": "HARYANA",
    "District": "PANIPAT",
    "Date of Registration": "14/05/2019",
    "Area of Operation": "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 82,
    "Name of Society": "Green Earth Agro Cooperative Society Ltd",
    "Address": "3/170, Vishwas Khand, Gomti Society , Lucknow 226010, Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "LUCKNOW",
    "Date of Registration": "03/05/2019",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 83,
    "Name of Society": "Bihar Cooperative Federation Ltd",
    "Address": "Budh Marg, Patna 800001, Bihar",
    "State": "BIHAR",
    "District": "PATNA",
    "Date of Registration": "03/10/2018",
    "Area of Operation": "Gujarat, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 84,
    "Name of Society": "Bharathi Cooperative Housing Society Ltd",
    "Address": "87-A, Perambur High Road, Perambur Post, Chennai 600011 Tamil Nadu",
    "State": "TAMIL NADU",
    "District": "CHENNAI",
    "Date of Registration": "18/05/2018",
    "Area of Operation": "Haryana, Delhi",
    "Sector Type": "Housing"
  },
  {
    "Sr. No.": 85,
    "Name of Society": "The Surat People’s Cooperative Bank Ltd",
    "Address": "Vasudhara Bhavan, Timalyawad, Nanpura, Surat, Gujarat",
    "State": "GUJARAT",
    "District": "",
    "Date of Registration": "28/03/2018",
    "Area of Operation": "Haryana, Delhi, UttarPradesh, ",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 86,
    "Name of Society": "Sanmati Sahakari Bank Ltd",
    "Address": "9/114, Laxmi Market, Ichalkaranji Kolhapur, Maharashtra 416115",
    "State": "MAHARASHTRA",
    "District": "JALGAON",
    "Date of Registration": "27/03/2018",
    "Area of Operation": "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 87,
    "Name of Society": "Reserve Bank Staff & Officers cooperative Credit Society Ltd",
    "Address": "C/ Reserve Bank of India, Amar Building, 2nd Floor, Sir P Road, Fort, Mumbai, 400001, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "MUMBAI",
    "Date of Registration": "13/02/2018",
    "Area of Operation": "Maharashtra, Gujarat, Rajasthan",
    "Sector Type": "Credit"
  },
  {
    "Sr. No.": 88,
    "Name of Society": "Dev Lok Housing Cooperative Ltd",
    "Address": "A-55, Dwarka, Sector-19, New Delhi",
    "State": "NEW DELHI",
    "District": "NEW DELHI",
    "Date of Registration": "02/02/2018",
    "Area of Operation": "Haryana, Punjab, Rajasthan",
    "Sector Type": "Housing"
  },
  {
    "Sr. No.": 89,
    "Name of Society": "Maa Vaishno Agro Multi State Cooperative Society Ltd",
    "Address": "Shop No. 25, Block-A, Old LIC Building, Near BSNL Exchange, Super Market, Lalitpur, 284403, Uttar Pradesh",
    "State": "UTTAR PRADESH",
    "District": "LALITPUR",
    "Date of Registration": "19/01/2018",
    "Area of Operation": "Haryana, Rajasthan",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 90,
    "Name of Society": "Sree Balki Multi State Cooperative Housing Society Ltd",
    "Address": "No. 9, Elango Street, Kabilar, Nagar, Manavala Nagar, Tiruvallur 602002, Tamil Nadu",
    "State": "TAMIL NADU",
    "District": "THIRUVALLUR",
    "Date of Registration": "05/01/2018",
    "Area of Operation": "Gujarat, Rajasthan, Haryana, Delhi",
    "Sector Type": "Housing"
  },
  {
    "Sr. No.": 91,
    "Name of Society": "Southern Multi State Agro Cooperative Society Ltd",
    "Address": "27 Gokulam, Mount Pleasant Road, Conoor , Ooty, Tamil Nadu 643102",
    "State": "TAMIL NADU",
    "District": "COIMBATORE",
    "Date of Registration": "19/12/2017",
    "Area of Operation": "Kerala, Tamil Nadu",
    "Sector Type": "Agro"
  },
  {
    "Sr. No.": 92,
    "Name of Society": "Sindhanur Urban Cooperative Bank Ltd",
    "Address": "Koppal Main Road, Sindhanur -584128, Karnataka",
    "State": "KARNATAKA",
    "District": "KOPPAL",
    "Date of Registration": "13/11/2017",
    "Area of Operation": "Karnataka, Maharashtra, Andhra Pradesh",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 93,
    "Name of Society": "The Cooperative Department Employee’s Cooperative Credit Society Ltd",
    "Address": "Ganpat Bhawan, Sabji Mandi Road, Jaipur - 302001, Rajasthan",
    "State": "RAJASTHAN",
    "District": "JAIPUR",
    "Date of Registration": "08/11/2017",
    "Area of Operation": "Rajasthan, Haryana, Delhi",
    "Sector Type": "Credit"
  },
  {
    "Sr. No.": 94,
    "Name of Society": "Koyna Urban Cooperative Bank Ltd",
    "Address": "Ganesh Complex, 1166, Shukrawar Peth, Satara 415002, Maharashtra",
    "State": "MAHARASHTRA",
    "District": "SATARA",
    "Date of Registration": "30/10/2017",
    "Area of Operation": "Maharashtra, Karnataka, Andhra Pradesh",
    "Sector Type": "Cooperative Bank"
  },
  {
    "Sr. No.": 95,
    "Name of Society": "The Udaipur Mahila Urban Cooperative Bank Ltd",
    "Address": "8, 9, Geeta Complex, Hazareshwar Colony, University Road, Udaipur 313001, Rajasthan",
    "State": "RAJASTHAN",
    "District": "UDAIPUR",
    "Date of Registration": "30/10/2017",
    "Area of Operation": "Rajasthan, Madhya Pradesh, Gujarat",
    "Sector Type": "Cooperative Bank"
  }
];



/**---------------------------------------Latest Hearing data */

const latestGridDownload = (props) => (
  <div className="flex gap-4">
    <div>
      <a href='https://mscs.dac.gov.in/Proposals/ALL_REG_MSCS.pdf'><p className='hover:text-red-500'>{props.Notice}</p></a>
    </div>
  </div>
);

export const latestHearingDataGrid = [
  {
    field: 'Sr. No',
    headerText: 'Sr. No',
    width: '10',
    textAlign: 'Center'
  },
  {
    field: 'Society Name',
    headerText: 'Name',
    width: '190',
    textAlign: 'Center',
  },
  {
    field: 'State/UT',
    headerText: 'State/UT',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'District Name',
    headerText: 'District Name',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'Hearing ON',
    headerText: 'Hearing ON',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },
  {
    field: 'Notice',
    headerText: 'Notice',
    template: latestGridDownload,
    width: '100',
    textAlign: 'Center'
  },
];


export const latestHearingData = [
  {
    "S No": 1,
    "Society Name": "Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "MUMBAI",
    "Hearing ON": "13 Jun 2023",
    "Notice": "Download"
  },
  {
    "S No": 2,
    "Society Name": "Tamil Nadu Multi State Societies Cooperative Housing Federation Ltd.",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Hearing ON": "09 Jun 2023",
    "Notice": "Download"
  },
  {
    "S No": 3,
    "Society Name": "Global Federation of Natural Farming Cooperative Ltd.",
    "State/UT": "UTTAR PRADESH",
    "District Name": "DEORIA",
    "Hearing ON": "09 Jun 2023",
    "Notice": "Download"
  },
  {
    "S No": 4,
    "Society Name": "Shantishwar Multi State cooperative Credit society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "AURANGABAD",
    "Hearing ON": "31 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 5,
    "Society Name": "Vikas multi state Agro Coop. Society ltd.",
    "State/UT": "KERALA",
    "District Name": "PALAKKAD",
    "Hearing ON": "31 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 6,
    "Society Name": "Krishi Bazaar Multitstate Cooperative Society Ltd.",
    "State/UT": "NEW DELHI",
    "District Name": "NEW DELHI",
    "Hearing ON": "26 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 7,
    "Society Name": "Vaiga multi State Credit Cooperative Society Ltd.",
    "State/UT": "KERALA",
    "District Name": "ERNAKULAM",
    "Hearing ON": "03 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 8,
    "Society Name": "The Unati Multi Purpose Multi State Cooperative Society Ltd.",
    "State/UT": "PUNJAB",
    "District Name": "HOSHIARPUR",
    "Hearing ON": "03 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 9,
    "Society Name": "Anjanai Urban Multi state Cooperative Credit Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "NANDED",
    "Hearing ON": "03 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 10,
    "Society Name": "Maxvalue Agro Multi State Cooperative Society Ltd.",
    "State/UT": "KERALA",
    "District Name": "THRISSUR",
    "Hearing ON": "03 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 11,
    "Society Name": "Mata Ramabai Ambedkar Multi State Cooperative Society Ltd.",
    "State/UT": "NEW DELHI",
    "District Name": "NEW DELHI",
    "Hearing ON": "03 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 12,
    "Society Name": "South Alliance Multi State Housing and Construction Cooperative Society Ltd.",
    "State/UT": "KERALA",
    "District Name": "KOZHIKODE",
    "Hearing ON": "02 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 13,
    "Society Name": "Ratnasundar Multi State Vehicle Services Coop. Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "BEED",
    "Hearing ON": "02 May 2023",
    "Notice": "Download"
  },
  {
    "S No": 14,
    "Society Name": "Shree Venkateshwara Multi State Cooperative Credit Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Hearing ON": "28 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 15,
    "Society Name": "Shree Balaji Multi State Cooperative Credit Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Hearing ON": "28 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 16,
    "Society Name": "Agriculture Development Marketing Cooperative Society Ltd.",
    "State/UT": "UTTAR PRADESH",
    "District Name": "MEERUT",
    "Hearing ON": "25 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 17,
    "Society Name": "Technopark multi state cooperative hospital society ltd.",
    "State/UT": "KERALA",
    "District Name": "THIRUVANANTHAPURAM",
    "Hearing ON": "25 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 18,
    "Society Name": "United Federation of Export Marketing Cooperative ltd.",
    "State/UT": "ANDHRA PRADESH",
    "District Name": "KRISHNA",
    "Hearing ON": "18 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 19,
    "Society Name": "The Akash Agro Green Care multistate Agricultural Cooperative Society ltd.",
    "State/UT": "TAMIL NADU",
    "District Name": "TIRUCHIRAPPALLI",
    "Hearing ON": "18 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 20,
    "Society Name": "Rajveer Multistate Vehicle Services Cooperative Society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "BEED",
    "Hearing ON": "11 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 21,
    "Society Name": "CT Multi State Cooperative Credit Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "NANDED",
    "Hearing ON": "11 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 22,
    "Society Name": "Suraj Group multistate cooperative society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "NANDED",
    "Hearing ON": "11 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 23,
    "Society Name": "Pyramid Agro multi state cooperative society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Hearing ON": "05 Apr 2023",
    "Notice": "Download"
  },
  {
    "S No": 24,
    "Society Name": "Bharathi Thenali Fisherman Cooperative Society Ltd.",
    "State/UT": "TELANGANA",
    "District Name": "MANCHERIAL",
    "Hearing ON": "28 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 25,
    "Society Name": "Lakshyavedh multi state cooperative credit society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Hearing ON": "17 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 26,
    "Society Name": "The Rajnandini Urban Multi State Coopearative Credit Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "NANDED",
    "Hearing ON": "17 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 27,
    "Society Name": "Apollo life multistate multi purpose cooperative Society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "CHANDRAPUR",
    "Hearing ON": "17 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 28,
    "Society Name": "Lakshyavedh multi specialty cooperative Hospital and Research Center Ltd. society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Hearing ON": "17 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 29,
    "Society Name": "Saiprerana Multi State Cooperative Agro purpose Society ltd. Rahuri",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Hearing ON": "09 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 30,
    "Society Name": "Sarvam multi state cooperative Housing Society ltd.",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Hearing ON": "09 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 31,
    "Society Name": "Oriental Agro Multi State Cooperative Society limited",
    "State/UT": "TAMIL NADU",
    "District Name": "COIMBATORE",
    "Hearing ON": "09 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 32,
    "Society Name": "Vishwa Sampada Agro multi state cooperative society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "BEED",
    "Hearing ON": "09 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 33,
    "Society Name": "Shree Ganesh multi state Cooperative Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Hearing ON": "02 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 34,
    "Society Name": "Janardhan multistate cooperative credit society ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "CHANDRAPUR",
    "Hearing ON": "02 Mar 2023",
    "Notice": "Download"
  },
  {
    "S No": 35,
    "Society Name": "Wasteland farmers agro multi state cooperative Society Ltd.",
    "State/UT": "MAHARASHTRA",
    "District Name": "SOLAPUR",
    "Hearing ON": "01 Mar 2023",
    "Notice": "Download"
  }
];

const latestCertificateGridDownload = (props) => (
  <div className="flex gap-4">
    <div>
      <a href='https://mscs.dac.gov.in/Proposals/ALL_REG_MSCS.pdf'><p className='hover:text-red-500'>{props.Certificate}</p></a>
    </div>
  </div>
);

export const latestCertificateDataGrid = [
  {
    field: 'Sr No',
    headerText: 'S No',
    width: '10',
    textAlign: 'Center'
  },
  {
    field: 'Society Name',
    headerText: 'Society Name',
    width: '190',
    textAlign: 'Center',
  },
  {
    field: "Proposal Type",
    headerText: "Proposal Type",
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'State/UT',
    headerText: 'State/UT',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'District Name',
    headerText: 'District Name',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: "Certificate Date",
    headerText: "Certificate Date",
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },
  {
    field: "Certificate",
    headerText: "Certificate",
    template: latestCertificateGridDownload,
    width: '100',
    textAlign: 'Center'
  },
];



export const latestCertificateData = [
  {
    "S No": 1,
    "Society Name": "Mahesh Multi State Cooperative Credit Society Ltd.",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Certificate Date": "12 Jun 2023",
    "Certificate": "Download"
  },
  {
    "S No": 2,
    "Society Name": "Heaven Multi State Agro Cooperative Society Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "UTTAR PRADESH",
    "District Name": "DEORIA",
    "Certificate Date": "06 Jun 2023",
    "Certificate": "Download"
  },
  {
    "S No": 3,
    "Society Name": "Chambal Agriculture Marketing Cooperative Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "MADHYA PRADESH",
    "District Name": "BHIND",
    "Certificate Date": "06 Jun 2023",
    "Certificate": "Download"
  },
  {
    "S No": 4,
    "Society Name": "Vikas multi state Agro Coop. Society ltd.",
    "Proposal Type": "New Registration",
    "State/UT": "KERALA",
    "District Name": "PALAKKAD",
    "Certificate Date": "31 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 5,
    "Society Name": "Lakshyavedh multi specialty cooperative Hospital and Research Center Ltd. society ltd.",
    "Proposal Type": "New Registration",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Certificate Date": "30 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 6,
    "Society Name": "The Ismailia Cooperative Credit Society Ltd.",
    "Proposal Type": "Conversion",
    "State/UT": "TELANGANA",
    "District Name": "HYDERABAD",
    "Certificate Date": "26 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 7,
    "Society Name": "Lustiness Janhit Credit Cooperative Society Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "NEW DELHI",
    "District Name": "NEW DELHI",
    "Certificate Date": "26 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 8,
    "Society Name": "Manav Kalyan Credit Coop. Society Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "NEW DELHI",
    "District Name": "NEW DELHI",
    "Certificate Date": "25 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 9,
    "Society Name": "Jeeva Shakthi Housing Multi State Coop.Society Ltd.",
    "Proposal Type": "New Registration",
    "State/UT": "TAMIL NADU",
    "District Name": "CUDDALORE",
    "Certificate Date": "25 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 10,
    "Society Name": "Janta Raja Multi State Coopertive Credit Society Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Certificate Date": "24 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 11,
    "Society Name": "Fingrowth Cooperative Bank Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "RAJASTHAN",
    "District Name": "JAIPUR",
    "Certificate Date": "22 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 12,
    "Society Name": "Fabtech Multi State Cooperative Credit society Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "SOLAPUR",
    "Certificate Date": "02 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 13,
    "Society Name": "Bharathi Thenali Fisherman Cooperative Society Ltd.",
    "Proposal Type": "New Registration",
    "State/UT": "TELANGANA",
    "District Name": "MANCHERIAL",
    "Certificate Date": "02 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 14,
    "Society Name": "Central Warehousing Corporation Employees Coop. Thrift & Credit Society Ltd.,",
    "Proposal Type": "Re-consideration for Amendment",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Certificate Date": "02 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 15,
    "Society Name": "The Simpson & Group Companies Employee''s Coop. Society Ltd.",
    "Proposal Type": "Amendments",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Certificate Date": "01 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 16,
    "Society Name": "State Bank of India Staff Co-operative Society Limited",
    "Proposal Type": "Amendments",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Certificate Date": "01 May 2023",
    "Certificate": "Download"
  },
  {
    "S No": 17,
    "Society Name": "The Loni Urban Multi state Credit and Thrift Coopertive Society ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "UTTAR PRADESH",
    "District Name": "GHAZIABAD",
    "Certificate Date": "29 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 18,
    "Society Name": "Shivpratap nagari Cooperative Credit Society Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "SANGLI",
    "Certificate Date": "26 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 19,
    "Society Name": "The Central Arecanut and Cocoa Marketing & Processing Co-operative Limited (CAMPCO)",
    "Proposal Type": "Re-consideration for Amendment",
    "State/UT": "KARNATAKA",
    "District Name": "DAKSHIN KANNAD",
    "Certificate Date": "26 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 20,
    "Society Name": "Citizens Cooperative Bank Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "GUJARAT",
    "District Name": "RAJKOT",
    "Certificate Date": "20 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 21,
    "Society Name": "The Railway Sharmik Sahakari Bank Ltd.",
    "Proposal Type": "Amendments",
    "State/UT": "RAJASTHAN",
    "District Name": "BIKANER",
    "Certificate Date": "11 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 22,
    "Society Name": "Syndicate Bank Officers Cooperative Thrift & Credit Society Ltd",
    "Proposal Type": "Amendments",
    "State/UT": "TAMIL NADU",
    "District Name": "CHENNAI",
    "Certificate Date": "11 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 23,
    "Society Name": "Pyramid Agro multi state cooperative society ltd.",
    "Proposal Type": "New Registration",
    "State/UT": "MAHARASHTRA",
    "District Name": "AHMEDNAGAR",
    "Certificate Date": "05 Apr 2023",
    "Certificate": "Download"
  },
  {
    "S No": 24,
    "Society Name": "Devrahi Farmer Multi State Cooperative Society ltd.",
    "Proposal Type": "Re-Submission of New Registration",
    "State/UT": "UTTAR PRADESH",
    "District Name": "DEORIA",
    "Certificate Date": "31 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 25,
    "Society Name": "Mahesh Nagari Multi State Cooperative Credit Society Ltd.",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Certificate Date": "31 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 26,
    "Society Name": "CITIZENCREDIT Cooperative Bank Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "MUMBAI",
    "Certificate Date": "31 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 27,
    "Society Name": "The Varachha Coop. Bank Ltd.",
    "Proposal Type": "Conversion",
    "State/UT": "GUJARAT",
    "District Name": "SURAT",
    "Certificate Date": "27 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 28,
    "Society Name": "Annapurna Mahila Cooperative Credit Society Ltd.,",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Certificate Date": "25 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 29,
    "Society Name": "Mahila Urban Coop Bank",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "PUNE",
    "Certificate Date": "24 Mar 2023",
    "Certificate": "Download"
  },
  {
    "S No": 30,
    "Society Name": "The Thane Bharat Sahakari Bank Ltd.",
    "Proposal Type": "Amendments",
    "State/UT": "MAHARASHTRA",
    "District Name": "THANE",
    "Certificate Date": "24 Mar 2023",
    "Certificate": "Download"
  }
];


const latestOrderGridDownload = (props) => (
  <div className="flex gap-4">
    <div>
      <a href='https://mscs.dac.gov.in/Proposals/ALL_REG_MSCS.pdf'><p className='hover:text-red-500'>{props["Download File"]}</p></a>
    </div>
  </div>
);

export const latestOrderDataGrid = [
  {
    field: 'S No',
    headerText: 'S No',
    width: '10',
    textAlign: 'Center'
  },
  {
    field: "Subject of the Topic",
    headerText: "Subject of the Topic",
    width: '250',
    textAlign: 'Center',
  },
  {
    field: "Date",
    headerText: "Date",
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },
  {
    field: "Download File",
    headerText: "Download",
    template: latestOrderGridDownload,
    width: '100',
    textAlign: 'Center'
  },
];

export const latestOrderData = [
  {
    "S No": 1,
    "Subject of the Topic": "Home Multi State Cooperative Housing Society Ltd",
    "Date": "05 Apr 2023",
    "Download File": "Download"
  },
  {
    "S No": 2,
    "Subject of the Topic": "Lokmanya Multipurpose Cooperative Society Limited, Belgaum, Karnataka: Order Sheet of Hearing held on 14.02.2022",
    "Date": "14 Feb 2022",
    "Download File": "Download"
  },
  {
    "S No": 3,
    "Subject of the Topic": "Lotus Agricultural and Marketing Cooperative Society Ltd., Pitampura, New Delhi: Order Sheet of Hearing held on 04.02.2022",
    "Date": "04 Feb 2022",
    "Download File": "Download"
  },
  {
    "S No": 4,
    "Subject of the Topic": "Kisan Agro -Tech Cooperative Society Ltd., New Delhi: Order Sheet of Hearing held on 04.02.2022",
    "Date": "04 Feb 2022",
    "Download File": "Download"
  },
  {
    "S No": 5,
    "Subject of the Topic": "Shree Swastik Credit Cooperative Society Limited, Pali, Rajasthan:Order Sheet of Hearing held on 28.01.2022",
    "Date": "28 Jan 2022",
    "Download File": "Download"
  },
  {
    "S No": 6,
    "Subject of the Topic": "Home Multi State Cooperative Housing Society Ltd., New Delhi:Order Sheet of Hearing held on 20.01.2022",
    "Date": "20 Jan 2022",
    "Download File": "Download"
  },
  {
    "S No": 7,
    "Subject of the Topic": "Hearing of complaints against Malaika Multi State Cooperative Credit Society Ltd., Mumbai, Maharashtra before the Central Registrar of Cooperative Societies (CRCS) through video conferencing (VC)",
    "Date": "14 Jan 2022",
    "Download File": "Download"
  },
  {
    "S No": 8,
    "Subject of the Topic": "Panchawati Multi-State Cooperative Credit Society Limited, Bangalore: Order Sheet of Hearing held on 12.01.2022",
    "Date": "12 Jan 2022",
    "Download File": "Download"
  },
  {
    "S No": 9,
    "Subject of the Topic": "Pride Multi-State Credit Cooperative Society Ltd., Hooghly, West Bengal: Order Sheet of Hearing held on 05.01.2022",
    "Date": "05 Jan 2022",
    "Download File": "Download"
  },
  {
    "S No": 10,
    "Subject of the Topic": "Hearing In the matter of Zoroastrian Cooperative Bank Limited before Central Registrar of Cooperative Societies: Order Sheet of Hearing held on 06.01.2022",
    "Date": "26 Nov 2021",
    "Download File": "Download"
  },
  {
    "S No": 11,
    "Subject of the Topic": "Buldana Urban Cooperative Credit Society Ltd. Buldana , Maharashtra :Order Sheet of Hearing held on 23.11.2021",
    "Date": "23 Nov 2021",
    "Download File": "Download"
  },
  {
    "S No": 12,
    "Subject of the Topic": "Karampura Multistate Cooperative Group Housing Society Limited, Delhi: Order Sheet of Hearing held on 10.11.2021",
    "Date": "10 Nov 2021",
    "Download File": "Download"
  },
  {
    "S No": 13,
    "Subject of the Topic": "Golden Dwarka Society Ltd., New Delhi: Order Sheet of Hearing held on 04.11.2021",
    "Date": "04 Nov 2021",
    "Download File": "Download"
  },
  {
    "S No": 14,
    "Subject of the Topic": "Shree Gokuldhara Cooperative Housing Society Ltd., New Delhi: Order Sheet of Hearing held on 27.10.2021",
    "Date": "27 Oct 2021",
    "Download File": "Download"
  },
  {
    "S No": 15,
    "Subject of the Topic": "Chitralekha Cooperative Housing Society Ltd., New Delhi: Order Sheet of Hearing held on 27.10.2021",
    "Date": "27 Oct 2021",
    "Download File": "Download"
  },
  {
    "S No": 16,
    "Subject of the Topic": "Malabar Hill Cooperative Housing Society Ltd., New Delhi: Order Sheet of Hearing held on 27.10.2021",
    "Date": "27 Oct 2021",
    "Download File": "Download"
  }
];



export const links = [
  {
    title: 'Home',
    links: [
      {
        name: 'home',
        icon: <FiHome />,
      },
    ],
  },
  {
    title: 'Reg.Societies',
    links: [
      {
        name: 'Latest',
        icon: <AiFillStar />,
      },
      {
        name: 'Regisetred List',
        icon: <AiOutlineTable />,
      },
    ],
  },

  {
    title: 'Charts',
    links: [
      {
        name: 'State wise',
        icon: <BsFillFileBarGraphFill />,
      },
      {
        name: 'Year wise',
        icon: <BsCalendar3 />,
      },
      {
        name: 'Type wise',
        icon: <BsFillPieChartFill />,
      },
    ],
  },
  {
    title: 'CRCS MIS',
    links: [
      {
        name: 'Register',
        icon: <AiOutlineUserAdd />,
      },
      {
        name: 'User login',
        icon: <AiOutlineLogin />,
      },
      {
        name: 'Admin login',
        icon: <AiFillSecurityScan />,
      },
    ],
  },

];


export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Under Section 97 of the Multi State Co-operative Societies Act,2002',
    desc: 'Johnathan Doe',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Prithvi Credit Cooperative Society Ltd: Notice issued for winding up-reg ',
    desc: 'Johnathan Doe',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'URGENT :Creation of User (registration) of the societies/banks on the portal of the Multi State Cooperative Societies -reg',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];


export const weeklyNewsSmall = [
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Liquidator extension orderNew',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Under Section 97 of the Multi State Co-operative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Prithvi Credit Cooperative Society Ltd: Notice issued for winding up-reg',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'URGENT :Creation of User (registration) of the societies/banks on the portal of the Multi State Cooperative Societies -reg',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Power conferred under section 108 of the Multi State Cooperative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  }
]

export const weeklyNews = [
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Liquidator extension orderNew',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Under Section 97 of the Multi State Co-operative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Prithvi Credit Cooperative Society Ltd: Notice issued for winding up-reg',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'URGENT :Creation of User (registration) of the societies/banks on the portal of the Multi State Cooperative Societies -reg',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Power conferred under section 108 of the Multi State Cooperative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Sanjivani Credit Cooperative Society Ltd, Rajasthan: Notice issued to initiate winding up of the Society',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023.pdfNew',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Gazette notification dated 24-02-2003 regarding delegation of powers of Arbitration to State RCS',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Liquidator extension orderNew',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Under Section 97 of the Multi State Co-operative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Prithvi Credit Cooperative Society Ltd: Notice issued for winding up-reg',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'URGENT :Creation of User (registration) of the societies/banks on the portal of the Multi State Cooperative Societies -reg',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Power conferred under section 108 of the Multi State Cooperative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Sanjivani Credit Cooperative Society Ltd, Rajasthan: Notice issued to initiate winding up of the Society',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023.pdfNew',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Gazette notification dated 24-02-2003 regarding delegation of powers of Arbitration to State RCS',
    iconBg: '#00C292',
    pcColor: 'green-600',
  }

];



export const cooperatives = [
  "National Cooperative Land Development Banks Federation Limited, Mumbai",
  "National Federation of State Cooperative Banks Limited, Mumbai",
  "National Cooperative Union of India Limited, New Delhi",
  "National Agricultural Cooperative Marketing Federation of India Limited, New Delhi",
  "National Cooperative Consumers Federation of India Limited, New Delhi",
  "National Federation of Cooperative Sugar Factories Limited, New Delhi",
  "National Cooperative Housing Federation Limited, New Delhi",
  "Indian Farmers Fertiliser Cooperative Limited, New Delhi",
  "All India Federation of Cooperative Spinning Mills Limited, Mumbai",
  "National Cooperative Dairy Federation of India Limited, Anand",
  "All India Handloom Fabrics Marketing Cooperative Society Limited, New Delhi",
  "National Federation of Urban Cooperative Banks and Credit Societies Limited, New Delhi",
  "Krishak Bharati Cooperative Limited, New Delhi",
  "National Federation of Fishermens Cooperative Limited, New Delhi",
  "National Federation of Labour Cooperative Limited, New Delhi",
  "Tribal Cooperative Marketing Development Federation of India Limited, New Delhi",
  "National Cooperative Organics Limited, Anand Gujarat",
  "Bharatiya Beej Sahakari Samiti Limited, New Delhi",
  "National Cooperative Exports Limited, New Delhi"
];


export const formList = [
  {
    icon: <AiOutlineForm />,
    amount: 'I',
    title: 'Application for registration of a Multi-State Cooperative Society under the Multi-State Cooperative Societies Act, 2002',
    iconBg: '#00C292',
    pcColor: 'red-600',
    link: 'https://mscs.dac.gov.in/Form/Form1.pdf'
  },
  {
    icon: <AiOutlineForm />,
    amount: 'II',
    title: 'Register of applications for registration of multi-state co-operative societies received by the Central Registrar',
    iconBg: '#00C292',
    pcColor: 'red-600',
    link: 'https://mscs.dac.gov.in/Form/Form2.pdf'
  },
  {
    icon: <AiOutlineForm />,
    amount: 'III',
    title: 'Nomination form for elections of Board of Directors',
    iconBg: '#00C292',
    pcColor: 'red-600',
    link: 'https://mscs.dac.gov.in/Form/Form3.pdf'
  },
  {
    icon: <AiOutlineForm />,
    amount: 'IV',
    title: 'Application for appointing election agent',
    iconBg: '#FB9678',
    pcColor: 'red-600',
    link: 'https://mscs.dac.gov.in/Form/Form4.pdf'
  },
  {
    icon: <AiOutlineForm />,
    amount: 'V',
    title: 'Nomination form for election of office bearers',
    iconBg: '#FB9678',
    pcColor: 'red-600',
    link: 'https://mscs.dac.gov.in/Form/Form5.pdf'
  }

];

/*

{
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Power conferred under section 108 of the Multi State Cooperative Societies Act,2002',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Sanjivani Credit Cooperative Society Ltd, Rajasthan: Notice issued to initiate winding up of the Society',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'old',
    title: 'Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023.pdfNew',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <AiFillInfoCircle />,
    amount: 'new',
    title: 'Gazette notification dated 24-02-2003 regarding delegation of powers of Arbitration to State RCS',
    iconBg: '#00C292',
    pcColor: 'green-600',
  }

*/

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },

];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];


export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const typeDataWithPercentages = [

  { x: 'Transport', y: 1, text: '0.08%' },
  { x: 'Cooperative banking', y: 68, text: '5.51%' },
  { x: 'Marketing', y: 37, text: '3.01%' },
  { x: 'Labour', y: 1, text: '0.08%' },
  { x: 'Tourism', y: 9, text: '0.69%' },
  { x: 'Agro', y: 294, text: '22.62%' },
  { x: 'Others', y: 39, text: '3.01%' },
  { x: 'National Federation', y: 21, text: '1.64%' },
  { x: 'Federation', y: 10, text: '0.78%' },
  { x: 'Construction', y: 9, text: '0.69%' },
  { x: 'Welfare', y: 21, text: '1.64%' },
  { x: 'Seed', y: 1, text: '0.08%' },
  { x: "Credit", y: 612, text: '42.75%' },
  { x: 'Export', y: 1, text: '0.08%' },
  { x: 'Consumer', y: 11, text: '0.92%' },
  { x: 'Housing', y: 145, text: '18.16%' },
  { x: 'Multipurpose', y: 103, text: '12.94%' },
  { x: 'Hospital', y: 21, text: '2.64%' },
  { x: 'Dairy', y: 97, text: '12.35%' },
  { x: 'Organic', y: 1, text: '0.08%' },
  { x: 'Textile', y: 40, text: '3.21%' },

];

export const typeDataWithPercentagesMajor = [
  { x: 'Agro', y: 294, text: '22.62%' },
  { x: "Credit", y: 612, text: '42.75%' },
  { x: 'Housing', y: 145, text: '18.16%' },
  { x: 'Multipurpose', y: 103, text: '25.29%' },
];




export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
  {
    x: new Date('2012-04-23'),
    open: 81.5157,
    high: 88.2857,
    low: 79.2857,
    close: 86.1428,
    volume: 965935749,
  },
  {
    x: new Date('2012-04-30'),
    open: 85.4,
    high: 85.4857,
    low: 80.7385,
    close: 80.75,
    volume: 615249365,
  },
  {
    x: new Date('2012-05-07'),
    open: 80.2143,
    high: 82.2685,
    low: 79.8185,
    close: 80.9585,
    volume: 541742692,
  },
  {
    x: new Date('2012-05-14'),
    open: 80.3671,
    high: 81.0728,
    low: 74.5971,
    close: 75.7685,
    volume: 708126233,
  },
  {
    x: new Date('2012-05-21'),
    open: 76.3571,
    high: 82.3571,
    low: 76.2928,
    close: 80.3271,
    volume: 682076215,
  },
  {
    x: new Date('2012-05-28'),
    open: 81.5571,
    high: 83.0714,
    low: 80.0743,
    close: 80.1414,
    volume: 480059584,
  },
  {
    x: new Date('2012-06-04'),
    open: 80.2143,
    high: 82.9405,
    low: 78.3571,
    close: 82.9028,
    volume: 517577005,
  },
  {
    x: new Date('2012-06-11'),
    open: 83.96,
    high: 84.0714,
    low: 80.9571,
    close: 82.0185,
    volume: 499693120,
  },
  {
    x: new Date('2012-06-18'),
    open: 81.5657,
    high: 84.2857,
    low: 81.4814,
    close: 83.1571,
    volume: 442172142,
  },
  {
    x: new Date('2012-06-25'),
    open: 82.4714,
    high: 83.4285,
    low: 80.8014,
    close: 83.4285,
    volume: 371529102,
  },
  {
    x: new Date('2012-07-02'),
    open: 83.5328,
    high: 87.7628,
    low: 83.3714,
    close: 86.5543,
    volume: 385906790,
  },
  {
    x: new Date('2012-07-09'),
    open: 86.4714,
    high: 88.5528,
    low: 84.6685,
    close: 86.4243,
    volume: 524235196,
  },
  {
    x: new Date('2012-07-16'),
    open: 86.4457,
    high: 87.9071,
    low: 86.1643,
    close: 86.3285,
    volume: 419537217,
  },
  {
    x: new Date('2012-07-23'),
    open: 84.9143,
    high: 87.0971,
    low: 81.4285,
    close: 83.5943,
    volume: 680773023,
  },
  {
    x: new Date('2012-07-30'),
    open: 84.4171,
    high: 88.2828,
    low: 83.9743,
    close: 87.9571,
    volume: 475109323,
  },
  {
    x: new Date('2012-08-06'),
    open: 88.1843,
    high: 89.2857,
    low: 87.8943,
    close: 88.8143,
    volume: 312826308,
  },
  {
    x: new Date('2012-08-13'),
    open: 89.0557,
    high: 92.5985,
    low: 89.0357,
    close: 92.5871,
    volume: 392867193,
  },
  {
    x: new Date('2012-08-20'),
    open: 92.8585,
    high: 96.4114,
    low: 92.5871,
    close: 94.746,
    volume: 708614692,
  },
  {
    x: new Date('2012-08-27'),
    open: 97.1414,
    high: 97.2671,
    low: 93.8928,
    close: 95.0343,
    volume: 383807217,
  },
  {
    x: new Date('2012-09-03'),
    open: 95.1085,
    high: 97.4971,
    low: 94.9285,
    close: 97.2057,
    volume: 355722047,
  },
  {
    x: new Date('2012-09-10'),
    open: 97.2071,
    high: 99.5685,
    low: 93.7143,
    close: 98.7543,
    volume: 724042207,
  },
  {
    x: new Date('2012-09-17'),
    open: 99.9071,
    high: 100.7243,
    low: 99.0885,
    close: 100.0135,
    volume: 500166040,
  },
  {
    x: new Date('2012-09-24'),
    open: 98.1228,
    high: 99.3028,
    low: 94.3357,
    close: 95.3007,
    volume: 714507994,
  },
  {
    x: new Date('2012-10-01'),
    open: 95.88,
    high: 96.6785,
    low: 92.95,
    close: 93.2271,
    volume: 638543622,
  },
  {
    x: new Date('2012-10-08'),
    open: 92.4114,
    high: 92.5085,
    low: 89.0785,
    close: 89.9591,
    volume: 747127724,
  },
  {
    x: new Date('2012-10-15'),
    open: 90.3357,
    high: 93.2557,
    low: 87.0885,
    close: 87.12,
    volume: 646996264,
  },
  {
    x: new Date('2012-10-22'),
    open: 87.4885,
    high: 90.7685,
    low: 84.4285,
    close: 86.2857,
    volume: 866040680,
  },
  {
    x: new Date('2012-10-29'),
    open: 84.9828,
    high: 86.1428,
    low: 82.1071,
    close: 82.4,
    volume: 367371310,
  },
  {
    x: new Date('2012-11-05'),
    open: 83.3593,
    high: 84.3914,
    low: 76.2457,
    close: 78.1514,
    volume: 919719846,
  },
  {
    x: new Date('2012-11-12'),
    open: 79.1643,
    high: 79.2143,
    low: 72.25,
    close: 75.3825,
    volume: 894382149,
  },
  {
    x: new Date('2012-11-19'),
    open: 77.2443,
    high: 81.7143,
    low: 77.1257,
    close: 81.6428,
    volume: 527416747,
  },
  {
    x: new Date('2012-11-26'),
    open: 82.2714,
    high: 84.8928,
    low: 81.7514,
    close: 83.6114,
    volume: 646467974,
  },
  {
    x: new Date('2012-12-03'),
    open: 84.8071,
    high: 84.9414,
    low: 74.09,
    close: 76.1785,
    volume: 980096264,
  },
  {
    x: new Date('2012-12-10'),
    open: 75,
    high: 78.5085,
    low: 72.2257,
    close: 72.8277,
    volume: 835016110,
  },
  {
    x: new Date('2012-12-17'),
    open: 72.7043,
    high: 76.4143,
    low: 71.6043,
    close: 74.19,
    volume: 726150329,
  },
  {
    x: new Date('2012-12-24'),
    open: 74.3357,
    high: 74.8928,
    low: 72.0943,
    close: 72.7984,
    volume: 321104733,
  },
  {
    x: new Date('2012-12-31'),
    open: 72.9328,
    high: 79.2857,
    low: 72.7143,
    close: 75.2857,
    volume: 540854882,
  },
  {
    x: new Date('2013-01-07'),
    open: 74.5714,
    high: 75.9843,
    low: 73.6,
    close: 74.3285,
    volume: 574594262,
  },
  {
    x: new Date('2013-01-14'),
    open: 71.8114,
    high: 72.9643,
    low: 69.0543,
    close: 71.4285,
    volume: 803105621,
  },
  {
    x: new Date('2013-01-21'),
    open: 72.08,
    high: 73.57,
    low: 62.1428,
    close: 62.84,
    volume: 971912560,
  },
  {
    x: new Date('2013-01-28'),
    open: 62.5464,
    high: 66.0857,
    low: 62.2657,
    close: 64.8028,
    volume: 656549587,
  },
  {
    x: new Date('2013-02-04'),
    open: 64.8443,
    high: 68.4014,
    low: 63.1428,
    close: 67.8543,
    volume: 743778993,
  },
  {
    x: new Date('2013-02-11'),
    open: 68.0714,
    high: 69.2771,
    low: 65.7028,
    close: 65.7371,
    volume: 585292366,
  },
  {
    x: new Date('2013-02-18'),
    open: 65.8714,
    high: 66.1043,
    low: 63.26,
    close: 64.4014,
    volume: 421766997,
  },
  {
    x: new Date('2013-02-25'),
    open: 64.8357,
    high: 65.0171,
    low: 61.4257,
    close: 61.4957,
    volume: 582741215,
  },
  {
    x: new Date('2013-03-04'),
    open: 61.1143,
    high: 62.2043,
    low: 59.8571,
    close: 61.6743,
    volume: 632856539,
  },
  {
    x: new Date('2013-03-11'),
    open: 61.3928,
    high: 63.4614,
    low: 60.7343,
    close: 63.38,
    volume: 572066981,
  },
  {
    x: new Date('2013-03-18'),
    open: 63.0643,
    high: 66.0143,
    low: 63.0286,
    close: 65.9871,
    volume: 552156035,
  },
  {
    x: new Date('2013-03-25'),
    open: 66.3843,
    high: 67.1357,
    low: 63.0886,
    close: 63.2371,
    volume: 390762517,
  },
  {
    x: new Date('2013-04-01'),
    open: 63.1286,
    high: 63.3854,
    low: 59.9543,
    close: 60.4571,
    volume: 505273732,
  },
  {
    x: new Date('2013-04-08'),
    open: 60.6928,
    high: 62.57,
    low: 60.3557,
    close: 61.4,
    volume: 387323550,
  },
  {
    x: new Date('2013-04-15'),
    open: 61,
    high: 61.1271,
    low: 55.0143,
    close: 55.79,
    volume: 709945604,
  },
  {
    x: new Date('2013-04-22'),
    open: 56.0914,
    high: 59.8241,
    low: 55.8964,
    close: 59.6007,
    volume: 787007506,
  },
  {
    x: new Date('2013-04-29'),
    open: 60.0643,
    high: 64.7471,
    low: 60,
    close: 64.2828,
    volume: 655020017,
  },
  {
    x: new Date('2013-05-06'),
    open: 65.1014,
    high: 66.5357,
    low: 64.3543,
    close: 64.71,
    volume: 545488533,
  },
  {
    x: new Date('2013-05-13'),
    open: 64.5014,
    high: 65.4143,
    low: 59.8428,
    close: 61.8943,
    volume: 633706550,
  },
  {
    x: new Date('2013-05-20'),
    open: 61.7014,
    high: 64.05,
    low: 61.4428,
    close: 63.5928,
    volume: 494379068,
  },
  {
    x: new Date('2013-05-27'),
    open: 64.2714,
    high: 65.3,
    low: 62.7714,
    close: 64.2478,
    volume: 362907830,
  },
  {
    x: new Date('2013-06-03'),
    open: 64.39,
    high: 64.9186,
    low: 61.8243,
    close: 63.1158,
    volume: 443249793,
  },
  {
    x: new Date('2013-06-10'),
    open: 63.5328,
    high: 64.1541,
    low: 61.2143,
    close: 61.4357,
    volume: 389680092,
  },
  {
    x: new Date('2013-06-17'),
    open: 61.6343,
    high: 62.2428,
    low: 58.3,
    close: 59.0714,
    volume: 400384818,
  },
  {
    x: new Date('2013-06-24'),
    open: 58.2,
    high: 58.38,
    low: 55.5528,
    close: 56.6471,
    volume: 519314826,
  },
  {
    x: new Date('2013-07-01'),
    open: 57.5271,
    high: 60.47,
    low: 57.3171,
    close: 59.6314,
    volume: 343878841,
  },
  {
    x: new Date('2013-07-08'),
    open: 60.0157,
    high: 61.3986,
    low: 58.6257,
    close: 60.93,
    volume: 384106977,
  },
  {
    x: new Date('2013-07-15'),
    open: 60.7157,
    high: 62.1243,
    low: 60.5957,
    close: 60.7071,
    volume: 286035513,
  },
  {
    x: new Date('2013-07-22'),
    open: 61.3514,
    high: 63.5128,
    low: 59.8157,
    close: 62.9986,
    volume: 395816827,
  },
  {
    x: new Date('2013-07-29'),
    open: 62.9714,
    high: 66.1214,
    low: 62.8857,
    close: 66.0771,
    volume: 339668858,
  },
  {
    x: new Date('2013-08-05'),
    open: 66.3843,
    high: 67.4128,
    low: 64.8071,
    close: 64.9214,
    volume: 368486781,
  },
  {
    x: new Date('2013-08-12'),
    open: 65.2657,
    high: 72.0357,
    low: 65.2328,
    close: 71.7614,
    volume: 711563584,
  },
  {
    x: new Date('2013-08-19'),
    open: 72.0485,
    high: 73.3914,
    low: 71.1714,
    close: 71.5743,
    volume: 417119660,
  },
  {
    x: new Date('2013-08-26'),
    open: 71.5357,
    high: 72.8857,
    low: 69.4286,
    close: 69.6023,
    volume: 392805888,
  },
  {
    x: new Date('2013-09-02'),
    open: 70.4428,
    high: 71.7485,
    low: 69.6214,
    close: 71.1743,
    volume: 317244380,
  },
  {
    x: new Date('2013-09-09'),
    open: 72.1428,
    high: 72.56,
    low: 66.3857,
    close: 66.4143,
    volume: 669376320,
  },
  {
    x: new Date('2013-09-16'),
    open: 65.8571,
    high: 68.3643,
    low: 63.8886,
    close: 66.7728,
    volume: 625142677,
  },
  {
    x: new Date('2013-09-23'),
    open: 70.8714,
    high: 70.9871,
    low: 68.6743,
    close: 68.9643,
    volume: 475274537,
  },
  {
    x: new Date('2013-09-30'),
    open: 68.1786,
    high: 70.3357,
    low: 67.773,
    close: 69.0043,
    volume: 368198906,
  },
  {
    x: new Date('2013-10-07'),
    open: 69.5086,
    high: 70.5486,
    low: 68.3257,
    close: 70.4017,
    volume: 361437661,
  },
  {
    x: new Date('2013-10-14'),
    open: 69.9757,
    high: 72.7514,
    low: 69.9071,
    close: 72.6985,
    volume: 342694379,
  },
  {
    x: new Date('2013-10-21'),
    open: 73.11,
    high: 76.1757,
    low: 72.5757,
    close: 75.1368,
    volume: 490458997,
  },
  {
    x: new Date('2013-10-28'),
    open: 75.5771,
    high: 77.0357,
    low: 73.5057,
    close: 74.29,
    volume: 508130174,
  },
  {
    x: new Date('2013-11-04'),
    open: 74.4428,
    high: 75.555,
    low: 73.1971,
    close: 74.3657,
    volume: 318132218,
  },
  {
    x: new Date('2013-11-11'),
    open: 74.2843,
    high: 75.6114,
    low: 73.4871,
    close: 74.9987,
    volume: 306711021,
  },
  {
    x: new Date('2013-11-18'),
    open: 74.9985,
    high: 75.3128,
    low: 73.3814,
    close: 74.2571,
    volume: 282778778,
  },
  {
    x: new Date('2013-11-25'),
    open: 74.4314,
    high: 79.7614,
    low: 74.4285,
    close: 79.4385,
    volume: 327405302,
  },
  {
    x: new Date('2013-12-02'),
    open: 79.7143,
    high: 82.1622,
    low: 78.6885,
    close: 80.0028,
    volume: 522055676,
  },
  {
    x: new Date('2013-12-09'),
    open: 80.1286,
    high: 81.5671,
    low: 79.0957,
    close: 79.2043,
    volume: 387271099,
  },
  {
    x: new Date('2013-12-16'),
    open: 79.2885,
    high: 80.377,
    low: 76.9714,
    close: 78.4314,
    volume: 457580848,
  },
  {
    x: new Date('2013-12-23'),
    open: 81.1428,
    high: 81.6971,
    low: 79.9285,
    close: 80.0128,
    volume: 274253503,
  },
  {
    x: new Date('2013-12-30'),
    open: 79.6371,
    high: 80.1828,
    low: 77.2043,
    close: 77.2828,
    volume: 275734934,
  },
  {
    x: new Date('2014-01-06'),
    open: 76.7785,
    high: 78.1228,
    low: 75.8728,
    close: 76.1343,
    volume: 393462075,
  },
  {
    x: new Date('2014-01-13'),
    open: 75.7014,
    high: 80.0285,
    low: 75.6971,
    close: 77.2385,
    volume: 439557459,
  },
  {
    x: new Date('2014-01-20'),
    open: 77.2843,
    high: 79.6128,
    low: 77.2028,
    close: 78.01,
    volume: 385585525,
  },
  {
    x: new Date('2014-01-27'),
    open: 78.5814,
    high: 79.2571,
    low: 70.5071,
    close: 71.5143,
    volume: 813702575,
  },
  {
    x: new Date('2014-02-03'),
    open: 71.8014,
    high: 74.7042,
    low: 71.3286,
    close: 74.24,
    volume: 434447570,
  },
  {
    x: new Date('2014-02-10'),
    open: 74.0943,
    high: 77.9971,
    low: 74,
    close: 77.7128,
    volume: 379011880,
  },
  {
    x: new Date('2014-02-17'),
    open: 78,
    high: 78.7414,
    low: 74.9428,
    close: 75.0357,
    volume: 289609443,
  },
  {
    x: new Date('2014-02-24'),
    open: 74.7357,
    high: 76.1071,
    low: 73.6571,
    close: 75.1771,
    volume: 367569649,
  },
  {
    x: new Date('2014-03-03'),
    open: 74.7743,
    high: 76.3928,
    low: 74.6871,
    close: 75.7771,
    volume: 275972640,
  },
  {
    x: new Date('2014-03-10'),
    open: 75.48,
    high: 77.0943,
    low: 74.7143,
    close: 74.9557,
    volume: 287729528,
  },
  {
    x: new Date('2014-03-17'),
    open: 75.3857,
    high: 76.6057,
    low: 75.0286,
    close: 76.1243,
    volume: 303531061,
  },
  {
    x: new Date('2014-03-24'),
    open: 76.9171,
    high: 78.4285,
    low: 76.3214,
    close: 76.6943,
    volume: 338387221,
  },
  {
    x: new Date('2014-03-31'),
    open: 77.0328,
    high: 77.64,
    low: 75.7971,
    close: 75.9743,
    volume: 245749459,
  },
  {
    x: new Date('2014-04-07'),
    open: 75.4314,
    high: 76.0343,
    low: 73.8771,
    close: 74.23,
    volume: 312008139,
  },
  {
    x: new Date('2014-04-14'),
    open: 74.5571,
    high: 75.3943,
    low: 73.0471,
    close: 74.9914,
    volume: 241209047,
  },
  {
    x: new Date('2014-04-21'),
    open: 75.0485,
    high: 81.7128,
    low: 74.8514,
    close: 81.7057,
    volume: 476651465,
  },
  {
    x: new Date('2014-04-28'),
    open: 81.8285,
    high: 85.6328,
    low: 81.7928,
    close: 84.6543,
    volume: 473712709,
  },
  {
    x: new Date('2014-05-05'),
    open: 84.3057,
    high: 86.3442,
    low: 82.9043,
    close: 83.6489,
    volume: 365535013,
  },
  {
    x: new Date('2014-05-12'),
    open: 83.9271,
    high: 85.3614,
    low: 83.6285,
    close: 85.3585,
    volume: 260931637,
  },
  {
    x: new Date('2014-05-19'),
    open: 85.4071,
    high: 87.8184,
    low: 85.3328,
    close: 87.7328,
    volume: 294298274,
  },
  {
    x: new Date('2014-05-26'),
    open: 87.9828,
    high: 92.0243,
    low: 87.9471,
    close: 90.4285,
    volume: 400232120,
  },
  {
    x: new Date('2014-06-02'),
    open: 90.5657,
    high: 93.0371,
    low: 88.9285,
    close: 92.2243,
    volume: 412158024,
  },
  {
    x: new Date('2014-06-09'),
    open: 92.7,
    high: 95.05,
    low: 90.88,
    close: 91.28,
    volume: 292422550,
  },
  {
    x: new Date('2014-06-16'),
    open: 91.51,
    high: 92.75,
    low: 90.9,
    close: 90.91,
    volume: 234325480,
  },
  {
    x: new Date('2014-06-23'),
    open: 91.32,
    high: 92,
    low: 89.65,
    close: 91.98,
    volume: 213712160,
  },
  {
    x: new Date('2014-06-30'),
    open: 92.1,
    high: 94.1,
    low: 92.09,
    close: 94.03,
    volume: 138936570,
  },
  {
    x: new Date('2014-07-07'),
    open: 94.14,
    high: 96.8,
    low: 93.52,
    close: 95.22,
    volume: 229782440,
  },
  {
    x: new Date('2014-07-14'),
    open: 95.86,
    high: 97.1,
    low: 92.57,
    close: 94.43,
    volume: 248104390,
  },
  {
    x: new Date('2014-07-21'),
    open: 94.99,
    high: 97.88,
    low: 93.72,
    close: 97.671,
    volume: 273021350,
  },
  {
    x: new Date('2014-07-28'),
    open: 97.82,
    high: 99.44,
    low: 94.81,
    close: 96.13,
    volume: 235868530,
  },
  {
    x: new Date('2014-08-04'),
    open: 96.37,
    high: 96.58,
    low: 93.28,
    close: 94.74,
    volume: 222522120,
  },
  {
    x: new Date('2014-08-11'),
    open: 95.27,
    high: 98.19,
    low: 94.8355,
    close: 97.98,
    volume: 178806580,
  },
  {
    x: new Date('2014-08-18'),
    open: 98.49,
    high: 101.47,
    low: 97.98,
    close: 101.32,
    volume: 246446280,
  },
  {
    x: new Date('2014-08-25'),
    open: 101.79,
    high: 102.9,
    low: 100.7,
    close: 102.5,
    volume: 232858250,
  },
  {
    x: new Date('2014-09-01'),
    open: 103.06,
    high: 103.74,
    low: 97.79,
    close: 98.97,
    volume: 322045910,
  },
  {
    x: new Date('2014-09-08'),
    open: 99.3,
    high: 103.08,
    low: 96.14,
    close: 101.66,
    volume: 460851840,
  },
  {
    x: new Date('2014-09-15'),
    open: 102.81,
    high: 103.05,
    low: 98.89,
    close: 100.96,
    volume: 296425730,
  },
  {
    x: new Date('2014-09-22'),
    open: 101.8,
    high: 102.94,
    low: 97.72,
    close: 100.75,
    volume: 337617850,
  },
  {
    x: new Date('2014-09-29'),
    open: 98.65,
    high: 101.54,
    low: 98.04,
    close: 99.62,
    volume: 246900230,
  },
  {
    x: new Date('2014-10-06'),
    open: 99.95,
    high: 102.38,
    low: 98.31,
    close: 100.73,
    volume: 279646740,
  },
  {
    x: new Date('2014-10-13'),
    open: 101.33,
    high: 101.78,
    low: 95.18,
    close: 97.67,
    volume: 356408760,
  },
  {
    x: new Date('2014-10-20'),
    open: 98.315,
    high: 105.49,
    low: 98.22,
    close: 105.22,
    volume: 355329760,
  },
  {
    x: new Date('2014-10-27'),
    open: 104.85,
    high: 108.04,
    low: 104.7,
    close: 108,
    volume: 219443560,
  },
  {
    x: new Date('2014-11-03'),
    open: 108.22,
    high: 110.3,
    low: 107.72,
    close: 109.01,
    volume: 199332700,
  },
  {
    x: new Date('2014-11-10'),
    open: 109.02,
    high: 114.19,
    low: 108.4,
    close: 114.18,
    volume: 203976340,
  },
  {
    x: new Date('2014-11-17'),
    open: 114.27,
    high: 117.57,
    low: 113.3,
    close: 116.47,
    volume: 232574480,
  },
  {
    x: new Date('2014-11-24'),
    open: 116.85,
    high: 119.75,
    low: 116.62,
    close: 118.93,
    volume: 181158620,
  },
  {
    x: new Date('2014-12-01'),
    open: 118.81,
    high: 119.25,
    low: 111.27,
    close: 115,
    volume: 266118290,
  },
  {
    x: new Date('2014-12-08'),
    open: 114.1,
    high: 114.85,
    low: 109.35,
    close: 109.73,
    volume: 259311140,
  },
  {
    x: new Date('2014-12-15'),
    open: 110.7,
    high: 113.24,
    low: 106.26,
    close: 111.78,
    volume: 326382400,
  },
  {
    x: new Date('2014-12-22'),
    open: 112.16,
    high: 114.52,
    low: 111.97,
    close: 113.99,
    volume: 119248900,
  },
  {
    x: new Date('2014-12-29'),
    open: 113.79,
    high: 114.77,
    low: 107.35,
    close: 109.33,
    volume: 151780640,
  },
  {
    x: new Date('2015-01-05'),
    open: 108.29,
    high: 113.25,
    low: 104.63,
    close: 112.01,
    volume: 282690970,
  },
  {
    x: new Date('2015-01-12'),
    open: 112.6,
    high: 112.8,
    low: 105.2,
    close: 105.99,
    volume: 303531140,
  },
  {
    x: new Date('2015-01-19'),
    open: 107.84,
    high: 113.75,
    low: 106.5,
    close: 112.98,
    volume: 198362640,
  },
  {
    x: new Date('2015-01-26'),
    open: 113.74,
    high: 120,
    low: 109.03,
    close: 117.16,
    volume: 461747290,
  },
  {
    x: new Date('2015-02-02'),
    open: 118.05,
    high: 120.51,
    low: 116.08,
    close: 118.93,
    volume: 270190470,
  },
  {
    x: new Date('2015-02-09'),
    open: 118.55,
    high: 127.48,
    low: 118.43,
    close: 127.08,
    volume: 301354470,
  },
  {
    x: new Date('2015-02-16'),
    open: 127.49,
    high: 129.5,
    low: 126.92,
    close: 129.495,
    volume: 193883960,
  },
  {
    x: new Date('2015-02-23'),
    open: 130.02,
    high: 133.6,
    low: 126.61,
    close: 128.46,
    volume: 369856960,
  },
  {
    x: new Date('2015-03-02'),
    open: 129.25,
    high: 130.28,
    low: 125.76,
    close: 126.6,
    volume: 246472020,
  },
  {
    x: new Date('2015-03-09'),
    open: 127.96,
    high: 129.57,
    low: 121.63,
    close: 123.59,
    volume: 325921230,
  },
  {
    x: new Date('2015-03-16'),
    open: 123.88,
    high: 129.2451,
    low: 122.87,
    close: 125.9,
    volume: 266016400,
  },
  {
    x: new Date('2015-03-23'),
    open: 127.12,
    high: 128.04,
    low: 122.6,
    close: 123.25,
    volume: 208731730,
  },
  {
    x: new Date('2015-03-30'),
    open: 124.05,
    high: 126.49,
    low: 123.1,
    close: 125.32,
    volume: 161628950,
  },
  {
    x: new Date('2015-04-06'),
    open: 124.47,
    high: 128.1218,
    low: 124.33,
    close: 127.1,
    volume: 181454510,
  },
  {
    x: new Date('2015-04-13'),
    open: 128.37,
    high: 128.57,
    low: 124.46,
    close: 124.75,
    volume: 170090870,
  },
  {
    x: new Date('2015-04-20'),
    open: 125.57,
    high: 130.63,
    low: 125.17,
    close: 130.28,
    volume: 206698310,
  },
  {
    x: new Date('2015-04-27'),
    open: 132.31,
    high: 134.54,
    low: 124.58,
    close: 128.95,
    volume: 417115180,
  },
  {
    x: new Date('2015-05-04'),
    open: 129.5,
    high: 130.57,
    low: 123.36,
    close: 127.62,
    volume: 270197900,
  },
  {
    x: new Date('2015-05-11'),
    open: 127.39,
    high: 129.49,
    low: 124.82,
    close: 128.77,
    volume: 207858180,
  },
  {
    x: new Date('2015-05-18'),
    open: 128.38,
    high: 132.97,
    low: 128.36,
    close: 132.54,
    volume: 216438970,
  },
  {
    x: new Date('2015-05-25'),
    open: 132.6,
    high: 132.91,
    low: 129.12,
    close: 130.28,
    volume: 197468800,
  },
  {
    x: new Date('2015-06-01'),
    open: 131.2,
    high: 131.39,
    low: 128.36,
    close: 128.65,
    volume: 170465550,
  },
  {
    x: new Date('2015-06-08'),
    open: 128.9,
    high: 130.18,
    low: 125.62,
    close: 127.17,
    volume: 219812710,
  },
  {
    x: new Date('2015-06-15'),
    open: 126.1,
    high: 128.31,
    low: 125.71,
    close: 126.6,
    volume: 197925030,
  },
  {
    x: new Date('2015-06-22'),
    open: 127.49,
    high: 129.8,
    low: 126.51,
    close: 126.75,
    volume: 195104520,
  },
  {
    x: new Date('2015-06-29'),
    open: 125.46,
    high: 126.94,
    low: 124.48,
    close: 126.44,
    volume: 150747530,
  },
  {
    x: new Date('2015-07-06'),
    open: 124.94,
    high: 126.23,
    low: 119.22,
    close: 123.28,
    volume: 274904180,
  },
  {
    x: new Date('2015-07-13'),
    open: 125.03,
    high: 129.62,
    low: 124.32,
    close: 129.62,
    volume: 188579340,
  },
  {
    x: new Date('2015-07-20'),
    open: 130.97,
    high: 132.97,
    low: 121.99,
    close: 124.5,
    volume: 336423370,
  },
  {
    x: new Date('2015-07-27'),
    open: 123.09,
    high: 123.91,
    low: 120.91,
    close: 121.3,
    volume: 191087840,
  },
  {
    x: new Date('2015-08-03'),
    open: 121.5,
    high: 122.57,
    low: 112.1,
    close: 115.52,
    volume: 383883210,
  },
  {
    x: new Date('2015-08-10'),
    open: 116.53,
    high: 119.99,
    low: 109.63,
    close: 115.96,
    volume: 344549090,
  },
  {
    x: new Date('2015-08-17'),
    open: 116.04,
    high: 117.65,
    low: 105.645,
    close: 105.76,
    volume: 318855760,
  },
  {
    x: new Date('2015-08-24'),
    open: 110.87,
    high: 113.31,
    low: 102.6,
    close: 113.29,
    volume: 498047270,
  },
  {
    x: new Date('2015-08-31'),
    open: 112.03,
    high: 114.53,
    low: 107.36,
    close: 109.27,
    volume: 297402060,
  },
  {
    x: new Date('2015-09-07'),
    open: 111.65,
    high: 114.21,
    low: 109.77,
    close: 114.21,
    volume: 251859600,
  },
  {
    x: new Date('2015-09-14'),
    open: 116.58,
    high: 116.89,
    low: 111.87,
    close: 113.45,
    volume: 276281980,
  },
  {
    x: new Date('2015-09-21'),
    open: 113.67,
    high: 116.69,
    low: 112.37,
    close: 114.71,
    volume: 238617740,
  },
  {
    x: new Date('2015-09-28'),
    open: 113.85,
    high: 114.57,
    low: 107.31,
    close: 110.38,
    volume: 313017610,
  },
  {
    x: new Date('2015-10-05'),
    open: 109.88,
    high: 112.28,
    low: 108.21,
    close: 112.12,
    volume: 261920950,
  },
  {
    x: new Date('2015-10-12'),
    open: 112.73,
    high: 112.75,
    low: 109.56,
    close: 111.04,
    volume: 184208970,
  },
  {
    x: new Date('2015-10-19'),
    open: 110.8,
    high: 119.228,
    low: 110.11,
    close: 119.08,
    volume: 221612230,
  },
  {
    x: new Date('2015-10-26'),
    open: 118.08,
    high: 121.22,
    low: 113.99,
    close: 119.5,
    volume: 319660750,
  },
  {
    x: new Date('2015-11-02'),
    open: 119.87,
    high: 123.82,
    low: 119.61,
    close: 121.06,
    volume: 194953700,
  },
  {
    x: new Date('2015-11-09'),
    open: 120.96,
    high: 121.81,
    low: 112.27,
    close: 112.34,
    volume: 216054740,
  },
  {
    x: new Date('2015-11-16'),
    open: 111.38,
    high: 119.92,
    low: 111,
    close: 119.3,
    volume: 189492500,
  },
  {
    x: new Date('2015-11-23'),
    open: 119.27,
    high: 119.73,
    low: 117.12,
    close: 117.81,
    volume: 109582040,
  },
  {
    x: new Date('2015-11-30'),
    open: 117.99,
    high: 119.41,
    low: 114.22,
    close: 119.03,
    volume: 205415620,
  },
  {
    x: new Date('2015-12-07'),
    open: 118.98,
    high: 119.86,
    low: 112.851,
    close: 113.18,
    volume: 188609110,
  },
  {
    x: new Date('2015-12-14'),
    open: 112.18,
    high: 112.8,
    low: 105.81,
    close: 106.03,
    volume: 314856190,
  },
  {
    x: new Date('2015-12-21'),
    open: 107.28,
    high: 109,
    low: 105.57,
    close: 108.03,
    volume: 126450510,
  },
  {
    x: new Date('2015-12-28'),
    open: 107.59,
    high: 109.43,
    low: 104.82,
    close: 105.26,
    volume: 123621760,
  },
  {
    x: new Date('2016-01-04'),
    open: 102.61,
    high: 105.85,
    low: 96.43,
    close: 96.96,
    volume: 343000960,
  },
  {
    x: new Date('2016-01-11'),
    open: 98.97,
    high: 101.19,
    low: 95.36,
    close: 97.13,
    volume: 303375940,
  },
  {
    x: new Date('2016-01-18'),
    open: 98.41,
    high: 101.46,
    low: 93.42,
    close: 101.42,
    volume: 242982970,
  },
  {
    x: new Date('2016-01-25'),
    open: 101.52,
    high: 101.53,
    low: 92.39,
    close: 97.34,
    volume: 376481100,
  },
  {
    x: new Date('2016-02-01'),
    open: 96.47,
    high: 97.33,
    low: 93.69,
    close: 94.02,
    volume: 216608840,
  },
  {
    x: new Date('2016-02-08'),
    open: 93.13,
    high: 96.35,
    low: 92.59,
    close: 93.99,
    volume: 230794620,
  },
  {
    x: new Date('2016-02-15'),
    open: 95.02,
    high: 98.89,
    low: 94.61,
    close: 96.04,
    volume: 167001070,
  },
  {
    x: new Date('2016-02-22'),
    open: 96.31,
    high: 98.0237,
    low: 93.32,
    close: 96.91,
    volume: 158759600,
  },
  {
    x: new Date('2016-02-29'),
    open: 96.86,
    high: 103.75,
    low: 96.65,
    close: 103.01,
    volume: 201482180,
  },
  {
    x: new Date('2016-03-07'),
    open: 102.39,
    high: 102.83,
    low: 100.15,
    close: 102.26,
    volume: 155437450,
  },
  {
    x: new Date('2016-03-14'),
    open: 101.91,
    high: 106.5,
    low: 101.78,
    close: 105.92,
    volume: 181323210,
  },
  {
    x: new Date('2016-03-21'),
    open: 105.93,
    high: 107.65,
    low: 104.89,
    close: 105.67,
    volume: 119054360,
  },
  {
    x: new Date('2016-03-28'),
    open: 106,
    high: 110.42,
    low: 104.88,
    close: 109.99,
    volume: 147641240,
  },
  {
    x: new Date('2016-04-04'),
    open: 110.42,
    high: 112.19,
    low: 108.121,
    close: 108.66,
    volume: 145351790,
  },
  {
    x: new Date('2016-04-11'),
    open: 108.97,
    high: 112.39,
    low: 108.66,
    close: 109.85,
    volume: 161518860,
  },
  {
    x: new Date('2016-04-18'),
    open: 108.89,
    high: 108.95,
    low: 104.62,
    close: 105.68,
    volume: 188775240,
  },
  {
    x: new Date('2016-04-25'),
    open: 105,
    high: 105.65,
    low: 92.51,
    close: 93.74,
    volume: 345910030,
  },
  {
    x: new Date('2016-05-02'),
    open: 93.965,
    high: 95.9,
    low: 91.85,
    close: 92.72,
    volume: 225114110,
  },
  {
    x: new Date('2016-05-09'),
    open: 93,
    high: 93.77,
    low: 89.47,
    close: 90.52,
    volume: 215596350,
  },
  {
    x: new Date('2016-05-16'),
    open: 92.39,
    high: 95.43,
    low: 91.65,
    close: 95.22,
    volume: 212312980,
  },
  {
    x: new Date('2016-05-23'),
    open: 95.87,
    high: 100.73,
    low: 95.67,
    close: 100.35,
    volume: 203902650,
  },
  {
    x: new Date('2016-05-30'),
    open: 99.6,
    high: 100.4,
    low: 96.63,
    close: 97.92,
    volume: 140064910,
  },
  {
    x: new Date('2016-06-06'),
    open: 97.99,
    high: 101.89,
    low: 97.55,
    close: 98.83,
    volume: 124731320,
  },
  {
    x: new Date('2016-06-13'),
    open: 98.69,
    high: 99.12,
    low: 95.3,
    close: 95.33,
    volume: 191017280,
  },
  {
    x: new Date('2016-06-20'),
    open: 96,
    high: 96.89,
    low: 92.65,
    close: 93.4,
    volume: 206149160,
  },
  {
    x: new Date('2016-06-27'),
    open: 93,
    high: 96.465,
    low: 91.5,
    close: 95.89,
    volume: 184254460,
  },
  {
    x: new Date('2016-07-04'),
    open: 95.39,
    high: 96.89,
    low: 94.37,
    close: 96.68,
    volume: 111769640,
  },
  {
    x: new Date('2016-07-11'),
    open: 96.75,
    high: 99.3,
    low: 96.73,
    close: 98.78,
    volume: 142244590,
  },
  {
    x: new Date('2016-07-18'),
    open: 98.7,
    high: 101,
    low: 98.31,
    close: 98.66,
    volume: 147358320,
  },
  {
    x: new Date('2016-07-25'),
    open: 98.25,
    high: 104.55,
    low: 96.42,
    close: 104.21,
    volume: 252358930,
  },
  {
    x: new Date('2016-08-01'),
    open: 104.41,
    high: 107.65,
    low: 104,
    close: 107.48,
    volume: 168265830,
  },
  {
    x: new Date('2016-08-08'),
    open: 107.52,
    high: 108.94,
    low: 107.16,
    close: 108.18,
    volume: 124255340,
  },
  {
    x: new Date('2016-08-15'),
    open: 108.14,
    high: 110.23,
    low: 108.08,
    close: 109.36,
    volume: 131814920,
  },
  {
    x: new Date('2016-08-22'),
    open: 108.86,
    high: 109.32,
    low: 106.31,
    close: 106.94,
    volume: 123373540,
  },
  {
    x: new Date('2016-08-29'),
    open: 106.62,
    high: 108,
    low: 105.5,
    close: 107.73,
    volume: 134426100,
  },
  {
    x: new Date('2016-09-05'),
    open: 107.9,
    high: 108.76,
    low: 103.13,
    close: 103.13,
    volume: 168312530,
  },
  {
    x: new Date('2016-09-12'),
    open: 102.65,
    high: 116.13,
    low: 102.53,
    close: 114.92,
    volume: 388543710,
  },
  {
    x: new Date('2016-09-19'),
    open: 115.19,
    high: 116.18,
    low: 111.55,
    close: 112.71,
    volume: 200842480,
  },
  {
    x: new Date('2016-09-26'),
    open: 111.64,
    high: 114.64,
    low: 111.55,
    close: 113.05,
    volume: 156186800,
  },
  {
    x: new Date('2016-10-03'),
    open: 112.71,
    high: 114.56,
    low: 112.28,
    close: 114.06,
    volume: 125587350,
  },
  {
    x: new Date('2016-10-10'),
    open: 115.02,
    high: 118.69,
    low: 114.72,
    close: 117.63,
    volume: 208231690,
  },
  {
    x: new Date('2016-10-17'),
    open: 117.33,
    high: 118.21,
    low: 113.8,
    close: 116.6,
    volume: 114497020,
  },
  {
    x: new Date('2016-10-24'),
    open: 117.1,
    high: 118.36,
    low: 113.31,
    close: 113.72,
    volume: 204530120,
  },
  {
    x: new Date('2016-10-31'),
    open: 113.65,
    high: 114.23,
    low: 108.11,
    close: 108.84,
    volume: 155287280,
  },
  {
    x: new Date('2016-11-07'),
    open: 110.08,
    high: 111.72,
    low: 105.83,
    close: 108.43,
    volume: 206825070,
  },
  {
    x: new Date('2016-11-14'),
    open: 107.71,
    high: 110.54,
    low: 104.08,
    close: 110.06,
    volume: 197790040,
  },
  {
    x: new Date('2016-11-21'),
    open: 110.12,
    high: 112.42,
    low: 110.01,
    close: 111.79,
    volume: 93992370,
  },
  {
    x: new Date('2016-11-28'),
    open: 111.43,
    high: 112.465,
    low: 108.85,
    close: 109.9,
    volume: 155229390,
  },
  {
    x: new Date('2016-12-05'),
    open: 110,
    high: 114.7,
    low: 108.25,
    close: 113.95,
    volume: 151624650,
  },
  {
    x: new Date('2016-12-12'),
    open: 113.29,
    high: 116.73,
    low: 112.49,
    close: 115.97,
    volume: 194003220,
  },
  {
    x: new Date('2016-12-19'),
    open: 115.8,
    high: 117.5,
    low: 115.59,
    close: 116.52,
    volume: 113106370,
  },
  {
    x: new Date('2016-12-26'),
    open: 116.52,
    high: 118.0166,
    low: 115.43,
    close: 115.82,
    volume: 84354060,
  },
  {
    x: new Date('2017-01-02'),
    open: 115.8,
    high: 118.16,
    low: 114.76,
    close: 117.91,
    volume: 103680760,
  },
  {
    x: new Date('2017-01-09'),
    open: 117.95,
    high: 119.93,
    low: 117.94,
    close: 119.04,
    volume: 138446660,
  },
  {
    x: new Date('2017-01-16'),
    open: 118.34,
    high: 120.5,
    low: 118.22,
    close: 120,
    volume: 113576380,
  },
  {
    x: new Date('2017-01-23'),
    open: 120,
    high: 122.44,
    low: 119.5,
    close: 121.95,
    volume: 124406640,
  },
  {
    x: new Date('2017-01-30'),
    open: 120.93,
    high: 130.49,
    low: 120.62,
    close: 129.08,
    volume: 248063580,
  },
  {
    x: new Date('2017-02-06'),
    open: 129.13,
    high: 132.94,
    low: 128.9,
    close: 132.12,
    volume: 136252280,
  },
  {
    x: new Date('2017-02-13'),
    open: 133.08,
    high: 136.27,
    low: 132.75,
    close: 135.72,
    volume: 136326260,
  },
  {
    x: new Date('2017-02-20'),
    open: 136.23,
    high: 137.48,
    low: 135.28,
    close: 136.66,
    volume: 87773190,
  },
  {
    x: new Date('2017-02-27'),
    open: 137.14,
    high: 140.2786,
    low: 136.28,
    close: 139.78,
    volume: 127757050,
  },
  {
    x: new Date('2017-03-06'),
    open: 139.365,
    high: 139.98,
    low: 137.05,
    close: 139.14,
    volume: 99061270,
  },
  {
    x: new Date('2017-03-13'),
    open: 138.85,
    high: 141.02,
    low: 138.82,
    close: 139.99,
    volume: 120881720,
  },
  {
    x: new Date('2017-03-20'),
    open: 140.4,
    high: 142.8,
    low: 139.73,
    close: 140.64,
    volume: 129178500,
  },
  {
    x: new Date('2017-03-27'),
    open: 139.39,
    high: 144.5,
    low: 138.62,
    close: 143.66,
    volume: 126819590,
  },
  {
    x: new Date('2017-04-03'),
    open: 143.71,
    high: 145.46,
    low: 143.05,
    close: 143.34,
    volume: 105274540,
  },
  {
    x: new Date('2017-04-10'),
    open: 143.6,
    high: 143.8792,
    low: 140.06,
    close: 141.05,
    volume: 87342130,
  },
  {
    x: new Date('2017-04-17'),
    open: 141.48,
    high: 142.92,
    low: 140.45,
    close: 142.27,
    volume: 89092650,
  },
  {
    x: new Date('2017-04-24'),
    open: 143.5,
    high: 144.9,
    low: 143.18,
    close: 143.65,
    volume: 90423600,
  },
  {
    x: new Date('2017-05-01'),
    open: 145.1,
    high: 148.98,
    low: 144.27,
    close: 148.96,
    volume: 173861760,
  },
  {
    x: new Date('2017-05-08'),
    open: 149.03,
    high: 156.42,
    low: 149.03,
    close: 156.1,
    volume: 173087500,
  },
  {
    x: new Date('2017-05-15'),
    open: 156.01,
    high: 156.65,
    low: 149.71,
    close: 153.06,
    volume: 156993820,
  },
  {
    x: new Date('2017-05-22'),
    open: 154,
    high: 154.9,
    low: 152.67,
    close: 153.61,
    volume: 103151450,
  },
  {
    x: new Date('2017-05-29'),
    open: 153.42,
    high: 155.45,
    low: 152.22,
    close: 155.45,
    volume: 88670120,
  },
  {
    x: new Date('2017-06-05'),
    open: 154.34,
    high: 155.98,
    low: 146.02,
    close: 148.98,
    volume: 158814040,
  },
  {
    x: new Date('2017-06-12'),
    open: 145.74,
    high: 147.5,
    low: 142.2,
    close: 142.27,
    volume: 219638930,
  },
  {
    x: new Date('2017-06-19'),
    open: 143.66,
    high: 147.16,
    low: 143.66,
    close: 146.28,
    volume: 132832660,
  },
  {
    x: new Date('2017-06-26'),
    open: 147.17,
    high: 148.28,
    low: 142.28,
    close: 144.02,
    volume: 126890110,
  },
  {
    x: new Date('2017-07-03'),
    open: 144.88,
    high: 145.3001,
    low: 142.41,
    close: 144.18,
    volume: 78465450,
  },
  {
    x: new Date('2017-07-10'),
    open: 144.11,
    high: 149.33,
    low: 143.37,
    close: 149.04,
    volume: 109759170,
  },
  {
    x: new Date('2017-07-17'),
    open: 148.82,
    high: 151.74,
    low: 148.57,
    close: 150.27,
    volume: 104744470,
  },
  {
    x: new Date('2017-07-24'),
    open: 150.58,
    high: 153.99,
    low: 147.3,
    close: 149.5,
    volume: 105536280,
  },
  {
    x: new Date('2017-07-31'),
    open: 149.9,
    high: 159.75,
    low: 148.13,
    close: 156.39,
    volume: 170204830,
  },
  {
    x: new Date('2017-08-07'),
    open: 157.06,
    high: 161.83,
    low: 154.63,
    close: 157.48,
    volume: 149860480,
  },
  {
    x: new Date('2017-08-14'),
    open: 159.32,
    high: 162.51,
    low: 156.72,
    close: 157.5,
    volume: 133829670,
  },
  {
    x: new Date('2017-08-21'),
    open: 157.5,
    high: 160.74,
    low: 155.1101,
    close: 159.86,
    volume: 112238670,
  },
  {
    x: new Date('2017-08-28'),
    open: 160.14,
    high: 164.94,
    low: 159.93,
    close: 164.05,
    volume: 125610990,
  },
  {
    x: new Date('2017-09-04'),
    open: 163.75,
    high: 164.25,
    low: 158.53,
    close: 158.63,
    volume: 101419110,
  },
  {
    x: new Date('2017-09-11'),
    open: 160.5,
    high: 163.96,
    low: 157.91,
    close: 159.88,
    volume: 220431100,
  },
  {
    x: new Date('2017-09-18'),
    open: 160.11,
    high: 160.5,
    low: 157.995,
    close: 158.67,
    volume: 27939544,
  },
];
export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];
