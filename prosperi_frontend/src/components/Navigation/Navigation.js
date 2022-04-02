import {useEffect, useState} from 'react';
import logo from '../../assets/logo.svg';
import questionMark from '../../assets/question_mark.svg';
import featherMenu from '../../assets/feather_menu.svg';

const Navigation = () => {

  return (
    <div class="bg-secondary w-full pt-1 pb-1 px-4 flex justify-center">
        <div class="flex flex-row items-center w-full md:w-[640px] justify-between">
            <div class="flex flex-row items-center">
                <img src={logo} class="h-[40px] self-start" />
                <p class="font-light font-bold text-[15px] font-logo">Prosperi.io</p>
            </div>
            <div class="flex flex-row items-center">
                <img src={questionMark} class="h-6 pr-[15px] cursor-pointer" />
                <img src={featherMenu} class="h-6 cursor-pointer" />
            </div>
        </div>
    </div>
  );
}

export default Navigation;
