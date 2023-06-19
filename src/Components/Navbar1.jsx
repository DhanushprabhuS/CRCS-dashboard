import React, { useEffect } from 'react';
import { AiOutlineLogin, AiOutlineMenu, AiOutlineUserAdd, AiTwotoneNotification } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../Contexts/ContextProvider';
import { NavLink } from 'react-router-dom';
import logo from '../Data/logo.png'


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </TooltipComponent>
);

const Navbar1 = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />


            <div className="flex">
                <NavButton title="Latest News" customFunc={() => handleClick('cart')} color={currentColor} icon={<AiTwotoneNotification />} />
                <NavLink to="/User Login">
                    <NavButton title="Login" color={currentColor} customFunc={() => { }} icon={<AiOutlineLogin />} />
                </NavLink>
                <NavLink to="/Register">
                    <NavButton title="New User" color={currentColor} customFunc={() => { }} icon={<AiOutlineUserAdd />} />
                </NavLink>
                <NavLink to="/">
                    <img src={logo} className="h-12" />
                </NavLink>


                {isClicked.cart && (<Cart />)}
                {isClicked.chat && (<Chat />)}
                {isClicked.notification && (<Notification />)}
                {isClicked.userProfile && (<UserProfile />)}
            </div>
        </div>
    );
};

export default Navbar1;