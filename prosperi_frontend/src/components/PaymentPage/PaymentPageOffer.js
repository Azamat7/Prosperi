import {useEffect, useState, useContext} from 'react';
import one from '../../assets/1.svg';
import two from '../../assets/2.svg';
import three from '../../assets/3.svg';
import chatWithCoach from '../../assets/chat_with_coach.svg';
import easyReadings from '../../assets/easy_readings.svg';
import mdrna from '../../assets/mdrna.svg';
import nvax from '../../assets/nvax.svg';

const ChatWithYourCoach = () => {
    return (
        <div class="md:grid md:grid-cols-3 pt-[9px] md:pt-0">
            <div class="md:col-span-2 justify-self-start self-center">
                <div class="flex flex-row items-center space-x-[6px]">
                    <img src={one} class="h-[38px] md:h-[42px] self-start" />
                    <p class="text-[22px] md:text-[28px] font-bold">Chat with your coach</p>
                </div>
                <p class="hidden md:block md:w-80 md:pl-11 pt-3 text-lg font-normal">Get all answers and avoid mistakes using 24/7 chat with your personal coach.</p>
            </div>
            <div class="pt-4 md:pt-0 h-[294px] flex flex-col place-self-end md:col-span-1">
                <img src={chatWithCoach} class="h-full" />
            </div>
        </div>
    );
}

const EasyReadings = () => {
    return (
        <div class="md:grid md:grid-cols-4 pt-4 md:pt-10">
            <div class="pt-4 md:pt-0 h-[294px] flex flex-col place-self-start md:col-span-2 hidden md:block">
                <img src={easyReadings} class="h-full" />
            </div>
            <div class="md:col-span-2 justify-self-end self-center">
                <div class="flex flex-row items-center space-x-[6px]">
                    <img src={two} class="h-[38px] md:h-[42px] self-start" />
                    <p class="text-[22px] md:text-[28px] font-bold">Easy Readings</p>
                </div>
                <p class="md:w-80 md:pl-11 pt-3 text-lg font-normal">Your plan will include only those summaries that target your investment goals.</p>
            </div>
        </div>
    );
}

const InvestmentStrategies = () => {
    return (
        <div class="md:grid md:grid-cols-5 pt-[9px] md:pt-10">
            <div class="md:col-span-3 justify-self-start self-end">
                <div class="flex flex-row items-center space-x-[6px]">
                    <img src={three} class="h-[38px] md:h-[42px] self-start" />
                    <p class="text-[22px] md:text-[28px] font-bold md:w-80">Investment strategies of the best</p>
                </div>
                <p class="md:w-80 md:pl-11 pt-2 md:pt-3 text-lg font-normal">We carefully pick the key investment rules from the best in their field and compile them in simple-to-follow summaries.</p>
            </div>
            <div class="pt-2 md:pt-0 flex flex-col place-self-start justify-self-start self-start md:col-span-2">
                <img src={mdrna} class="h-[101px] md:h-24" />
                <img src={nvax} class="h-28 pt-[14px] hidden md:block" />
            </div>
        </div>
    );
}

const PaymentPageOffer = () => {

  return (
    <div class="w-screen px-4 flex flex-col items-center font-primary">
        <div class="md:w-[640px]">
            <p class="text-[28px] md:text-[40px] pt-7 md:pt-9 font-bold place-self-start">What you get</p>
            <ChatWithYourCoach />
            <EasyReadings />
            <InvestmentStrategies />
        </div>
    </div>
  );
}

export default PaymentPageOffer;
