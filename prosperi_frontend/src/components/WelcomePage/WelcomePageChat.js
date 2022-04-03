import {useEffect, useState} from 'react';
import chat from '../../assets/chat.png';

const WelcomePageChat = () => {

  return (
    <div class="w-screen pt-8 pb-8 px-4 md:px-10 font-primary flex justify-center">
      <div class="flex flex-col relative w-[288px] md:w-[640px] items-center md:items-baseline">
        <div class="w-56 lg:w-72 place-self-start order-1 md:order-1 z-10">
          <p class="text-2xl lg:text-[28px] lg:text-4xl font-bold text-left">Chat with a Personal mentor</p>
        </div>
        <div class="w-72 text-left pt-1 order-2 md:order-2 z-10">
          <p class="font-light text-sm">Get 24/7 online chat access to your personal finance and investment mentor who will advise you on avoiding the most common mistakes people make</p>
        </div>
        <div class="pt-4 lg:pt-5 order-4 md:order-3 z-10">
          <button class="rounded-lg bg-btn-primary text-white h-14 w-72 text-lg font-bold z-10">Get advice</button>
        </div>
        <div class="pt-4 md:pt-0 h-[224px] lg:h-[248px] w-full flex flex-col items-center md:items-end order-3 md:absolute md:right-0">
          <img src={chat} class="h-full" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePageChat;
