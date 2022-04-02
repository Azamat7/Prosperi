import {useEffect, useState, useContext} from 'react';
import { PriceContext } from '../../context/price';
import astrounaut from '../../assets/astronaut.png';


const WelcomePageInvesting = () => {

  const price = useContext(PriceContext);

  return (
    <div class="bg-secondary w-screen pt-8 pb-8 px-4 flex flex-col items-center font-primary">
      <div class="">
        <p class="text-[28px] leading-9	 w-64 lg:w-full lg:text-[40px] font-bold text-center">Investing is easier than you think</p>
      </div>
      <div class="pt-4 h-52 lg:h-72">
        <img src={astrounaut} class="h-full" />
      </div>
      <div class="text-sm lg:text-xl font-normal tracking-tight">
        <div class="pt-4">
          <span role="img" aria-label="sheep">👌</span>
          <p class="inline-block px-4">You can start with {price}$</p>
        </div>
        <div class="pt-3">
          <span role="img" aria-label="sheep">👌</span>
          <p class="inline-block px-4">No need for a Finance degree</p>
        </div>
        <div class="pt-3">
          <span role="img" aria-label="sheep">👌</span>
          <p class="inline-block px-4">No need to be a market expert</p>
        </div>
      </div>
      <div class="pt-6 lg:pt-5">
        <button class="rounded-lg bg-btn-primary text-white h-14 w-72 text-lg lg:text-md font-bold">Start investing now</button>
      </div>
    </div>
  );
}

export default WelcomePageInvesting;
