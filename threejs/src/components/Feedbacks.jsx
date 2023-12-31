import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc/index";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbacksCard = ({
  index,
  testimonial,
  name,
  company,
  image,
  designation,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>
    <div className="mt-1 text-white tracking-wider text-[18px]">
      <p>{testimonial}</p>
      <div className="mt-7 flex justify-center items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@{name}</span>
          </p>
          <p className="mp-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedbacks by ${name}`}
          className="object-contain w-10 h-10 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 flex flex-wrap lg:flex-nowrap gap-6 pd-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
