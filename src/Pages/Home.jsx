import React from 'react';
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import logo from '../Data/logo.png'

import { Pie, Button, SparkLine } from '../Components';
import { formList, weeklyNewsSmall, cooperatives, SparklineYearData, typeDataWithPercentagesMajor } from '../Data/dummy';
import { useStateContext } from '../Contexts/ContextProvider';
import { AiFillCreditCard, AiFillHdd, AiOutlineFieldTime } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { NavLink } from 'react-router-dom';



const HomeButton = ({ title, customFunc, icon, color }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            {icon}
        </button>
    </TooltipComponent>
);

const Home = () => {
    const { currentColor, currentMode, setLatestState, handleClick } = useStateContext();

    return (
        <div className="mt-16">
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-xl w-full lg:w-100 p-8 pt-9">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-2xl text-gray-600 dark:text-gray-400">Multi State Cooperative Societies ACT, 2002</p>
                            <br />
                            <p className="text-large">An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy
                                ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The <b>Multi State Cooperative Societies Bill</b> was introduced in the Parliament.
                                The bill having been passed by both the Houses of Parliament received the assent of the President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).</p>
                        </div>
                        <img src={logo} alt="" className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4 h-36" />
                    </div>
                    <div className="mt-6">
                        <NavLink to="/home">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Dashboard"
                                borderRadius="10px"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="flex m-3 flex-wrap justify-center gap-10 items-center">

                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                    <button
                        type="button"
                        style={{ color: '#E5FAFB', backgroundColor: '#03C9D7' }}
                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                    >
                        <AiOutlineFieldTime />
                    </button>
                    <p className="m-1">
                        <span className="text-lg font-semibold">Latest Hearings</span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">Notice issued for hearing</p>

                    <div className='ml-40 mt-3'>
                        <NavLink to="/Latest">
                            <HomeButton title="View details" customFunc={() => { setLatestState(0); }} color={currentColor} icon={<BsFillArrowDownRightCircleFill />} />
                        </NavLink>
                    </div>
                </div>

                <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                    <button
                        type="button"
                        style={{ color: 'rgb(255, 244, 229)', backgroundColor: 'rgb(254, 201, 15)' }}
                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                    >
                        <AiFillHdd />
                    </button>
                    <p className="m-1">
                        <span className="text-lg font-semibold">Latest Certificates</span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">Certificates issued</p>
                    <div className='ml-40 mt-3'>
                        <NavLink to="/Latest">
                            <HomeButton title="View details" customFunc={() => { setLatestState(1); }} color={currentColor} icon={<BsFillArrowDownRightCircleFill />} />
                        </NavLink>
                    </div>
                </div>

                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">

                    <button
                        type="button"
                        style={{ color: 'rgb(235, 250, 242)', backgroundColor: 'rgb(0, 194, 146)' }}
                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                    >
                        <AiFillCreditCard />
                    </button>

                    <p className="m-1">
                        <span className="text-lg font-semibold">Latest Order Sheet</span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">Hearing order sheet</p>
                    <div className='ml-40 mt-3'>
                        <NavLink to="/Latest">
                            <HomeButton title="View details" customFunc={() => { setLatestState(2); }} color={currentColor} icon={<BsFillArrowDownRightCircleFill />} />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">News</p>
                        <button type="button" onClick={() => handleClick('cart')} className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>
                    <div className="mt-10">
                        {weeklyNewsSmall.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{ background: item.iconBg }}
                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3 h-12"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm">36 Recent Registration</p>
                </div>
                <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Application Forms Download</p>
                        <button type="button" className="text-xl font-semibold text-gray-400">
                            <IoIosMore />
                        </button>
                    </div>
                    <div className="mt-10">
                        {formList.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <TooltipComponent content={"Form " + item.amount + " download"} position="BottomCenter">
                                        <button
                                            type="button"
                                            style={{ background: currentColor }}
                                            className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3 h-12"
                                        >
                                            <a href={item.link}>{item.icon}</a>
                                        </button>
                                    </TooltipComponent>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}><b>{item.amount}</b></p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className=" rounded-2xl md:w-400 p-4 m-3"
                    style={{ backgroundColor: currentColor }}
                >
                    <div className="flex justify-between items-center ">
                        <p className="font-semibold text-white text-2xl">Registration Count</p>

                        <div>
                            <p className="text-2xl text-white font-semibold mt-8">2010 - 2023</p>
                            <p className="text-gray-200">Year wise count</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineYearData} width="320" color="rgb(242, 252, 253)" />
                    </div>
                </div>

                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10"
                >
                    <div>
                        <p className="text-2xl font-semibold ">Registered Societies</p>
                        <p className="text-gray-400">Major type wise</p>
                    </div>

                    <div className="w-40">
                        <Pie id="pie-chart" data={typeDataWithPercentagesMajor} legendVisiblity={false} height="160px" />
                    </div>
                </div>

                <div className="w-600 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">List of National Co-operative Societies</p>
                        <button type="button" className="text-xl font-semibold text-gray-400">
                            <IoIosMore />
                        </button>
                    </div>
                    <div className="mt-10">
                        {cooperatives.map((item, idx) => (
                            <div key={item} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <div>
                                        <p className="text-md font-semibold">{idx + 1} . {item}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;