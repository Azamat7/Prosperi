import {useEffect, useState} from 'react';
import astrounautOnMoon from '../../assets/astronaut_on_moon.png';

const WelcomePageMission = () => {

  return (
    <div class="w-screen pt-8 pb-8 px-4 flex flex-col items-center font-primary">
      <div class="pt-4 h-52">
        <img src={astrounautOnMoon} class="h-full" />
      </div>
      <div class="w-72 text-center pt-[30px]">
        <p class="font-primary font-light italic text-sm">Our mission is to help millions of people around the globe to make more educated decisions on how to approach their investments.</p>
      </div>
    </div>
  );
}

export default WelcomePageMission;
