import {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg';
import questionMark from '../../assets/question_mark.svg';
import featherMenu from '../../assets/feather_menu.svg';

const Navigation = () => {
  const location = useLocation();

  return (
    <div class={`${location.pathname === '/' ? 'bg-secondary' : ''} w-full pt-1 pb-1 px-4 flex justify-center`}>
        <div class="flex flex-row items-center w-full md:w-[640px] justify-between">
            <Link to="/">
              <div class="flex flex-row items-center cursor-pointer">
                  <img src={logo} class="h-[40px] self-start" />
                  <p class="font-light font-bold text-[15px] font-logo">Prosperi.io</p>
              </div>
            </Link>
            <div class="flex flex-row items-center">
                <img src={questionMark} class="h-6 pr-[15px] cursor-pointer" />
                <img src={featherMenu} class="h-6 cursor-pointer" />
            </div>
        </div>
    </div>
  );
}

export default Navigation;
