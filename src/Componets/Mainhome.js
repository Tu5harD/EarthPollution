import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url:
      "https://static01.nyt.com/images/2022/04/08/climate/08cli-airpollution1/merlin_166509372_6713c81b-96bb-46cf-a086-4d6e7086e5ab-superJumbo.jpg",
  },
  {
    url:
      "https://t4.ftcdn.net/jpg/01/82/65/61/360_F_182656191_YKF0yj0Hbgo12xw8m9BgDvcHbECRy63M.jpg",
  },
  {
    url:
      "https://media.istockphoto.com/id/497747722/photo/industrial-pipe-discharging-liquid-waste.jpg?s=612x612&w=0&k=20&c=iTQH1f_2_4ttGnRjRLxZT1q4mE3khiwycjR4mw40rPc=",
  },
  {
    url:
      "https://media.istockphoto.com/id/1207411602/photo/asian-farmer-working-in-the-field-and-spraying-chemical-or-fertilizer-to-young-green-corn.jpg?s=612x612&w=0&k=20&c=jpWfWIJ7M-svtkVgVI7t8DQSL2S-KIL_Xn4t3Gkrmdw=",
  },
  {
    url:
      "https://i0.wp.com/geolearn.in/wp-content/uploads/2021/05/pexels-pixabay-459728.jpg",
  },
  {
    url:
      "https://c.ndtvimg.com/2019-02/hhob87v8_delhi-noise-pollution-generic_625x300_13_February_19.jpg",
  },
 
];

const Mainhome = () => {
  return (
    <>
      <SimpleImageSlider
        width={"100%"}
        height={700}
        images={images}
        showBullets={false}
        showNavs={true}
        slideDuration={0.3}
        autoPlay={true}
      />
    </>
  );
};
export default Mainhome;
