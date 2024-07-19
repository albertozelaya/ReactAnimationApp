import { motion } from "framer-motion";
import { heroDivisas, personalHero1, homeHero2 } from "../../public/assets";

const slides = [
  { id: 1, url: heroDivisas, alt: "Image 1" },
  { id: 2, url: personalHero1, alt: "Image 2" },
  { id: 3, url: homeHero2, alt: "Image 3" },
];

const CarouselItem = ({ slide }) => (
  <motion.div
    className="carousel-item"
    key={slide.id}
    animate={{
      // x: ["-100%", "0%", "0%", "100%"],
      // transition: {
      //   ease: "linear",
      //   duration: 6,
      //   repeat: Infinity,
      // },
    }}
  >
    <img src={slide.url} alt={slide.alt} className="h-screen w-screen object-cover"/>
  </motion.div>
);

export const CarouselFrame = () => {
  return (
    <div className="carousel">
      {slides.map((slide) => (
        <CarouselItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

// const Carousel = () => {
//   const duplicatedSlides = [...slides, ...slides];
//   return (
//     <motion.div
//       className="carousel"
//       animate={{ x: ["-100%", "0%"], transition: { ease: "linear", duration: 10, repeat: Infinity } }}
//     >
//       {slides.map((slide) => (
//         <CarouselItem key={slide.id} slide={slide} />
//       ))}
//     </motion.div>
//   );
// };
