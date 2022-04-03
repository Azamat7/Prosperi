import WelcomePageInvesting from './WelcomePageInvesting';
import WelcomePageMission from './WelcomePageMission';
import WelcomePageChat from './WelcomePageChat';

const WelcomePage = () => {

  return (
    <div class="flex flex-col">
      <div class="order-1">
        <WelcomePageInvesting />
      </div>
      <div class="order-2 md:order-3">
        <WelcomePageMission />
      </div>
      <div class="order-3 md:order-2">
        <WelcomePageChat />
      </div>
    </div>
  );
}

export default WelcomePage;
