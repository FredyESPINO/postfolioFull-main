import InfoContainer from "./InfoContainer";
import Navbar from "./Navbar";
import Silder from "./slider/Silder";

const InfoSection = () => {
  return (
    <div className="info">
      <Navbar />
      <InfoContainer>
        <h3 className="font-saira text-[25px]  md:text-[30px]  lg:text-[35px] xl:text-[45px] text-center mb-[50px]">
          Portafolio fron end de Juan Alfredo Espino Holguin
        </h3>

        <h1 className="font-archivo  text-[70px] sm:text-[20vw] lg:text-[16vw] xl:text-[175px] text-center leading-[50px] sm:leading-[15vw]  lg:leading-[12vw] font-bold ">
          FREDY ESPINO
        </h1>
      </InfoContainer>

      <InfoContainer>
        <Silder arrayItems={"test"} heightContainer={"75px"} />
      </InfoContainer>

      <InfoContainer></InfoContainer>
    </div>
  );
};

export default InfoSection;
