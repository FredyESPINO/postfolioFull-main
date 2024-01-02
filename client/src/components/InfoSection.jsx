import InfoContainer from "./InfoContainer";
import Navbar from "./Navbar";
import InfiniteContainer from "./InfinitrCards/InfiniteContainer";

import stackData from "../constant";

const InfoSection = ({ setContactMenuOpen }) => {
  return (
    <div className="info">
      <Navbar setContactMenuOpen={setContactMenuOpen} />
      <InfoContainer>
        <h3 className="font-saira text-[25px]   md:text-[30px]  lg:text-[35px] xl:text-[45px] text-center mb-[50px]">
          Juan Alfredo Espino Holguin Frontend portfolio.
        </h3>

        <h1 className="font-youth  text-[70px] sm:text-[20vw] lg:text-[16vw] xl:text-[175px] text-center leading-[50px] sm:leading-[15vw]  lg:leading-[12vw] font-bold ">
          FREDY ESPINO
        </h1>
      </InfoContainer>

      <InfoContainer>
        <h2 className="font-archivo font-bold text-[3.5rem] mb-4">WHO I AM.</h2>
        <p className="font-saira text-lg text-[2rem] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit
          at augue consequat tincidunt. Vivamus eu purus vitae quam convallis
          dapibus. Nulla facilisi. Integer malesuada metus at metus suscipit,
          sed cursus dolor hendrerit. Nullam tempus aliquet sapien, ac lobortis
          lectus tincidunt eget. Fusce ac libero eget ipsum aliquam lobortis ac
          in ipsum. Aliquam erat volutpat. Ut venenatis justo sit amet dolor
          aliquam vestibulum. In hac habitasse platea dictumst. Suspendisse
          potenti. Duis eu sem vel justo consequat eleifend. Vivamus id libero
          quis ligula fermentum consequat.
        </p>
      </InfoContainer>
      <div className="w-full h-fit xl:h-screen bg-white border-b-2 px-14 py-[50px] border-black flex justify-center items-center flex-col">
        <h2 className="font-archivo font-bold text-[3.5rem] mb-4">STACKS.</h2>
        <div className="flex flex-col justify-center items-center h-fit xl:flex-row gap-20">
          <InfiniteContainer
            card={stackData.frontEnd.stacks}
            title={stackData.frontEnd.stackTitle}
          />
          <InfiniteContainer
            card={stackData.backEnd.stacks}
            title={stackData.backEnd.stackTitle}
          />
          <InfiniteContainer
            card={stackData.others.stacks}
            title={stackData.others.stackTitle}
          />
        </div>
      </div>

      <InfoContainer id="contact"></InfoContainer>
    </div>
  );
};

export default InfoSection;
