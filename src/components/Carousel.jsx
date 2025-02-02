import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { heroDivisas, homeHero1, homeHero2, personalHero1 } from "../../public/assets";

export const Carousel = () => {
  return (
    <div className="">
      <Card/>
    </div>
  );
};

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 ">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const Card = ({ card }) => {
  return (
    <div className=""><img src={heroDivisas} alt="" className="h-screen w-screen"/></div>
  );
};

const cards = [
  {
    url: homeHero1,
    id: 1,
  },
  {
    url: homeHero2,
    id: 1,
  },
  {
    url: personalHero1,
    id: 1,
  },
  {
    url: heroDivisas,
    id: 1,
  },
];
