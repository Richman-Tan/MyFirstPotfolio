import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';
import richmanimg from '../assets/personal/richmanimg.jpg';
import richmanimgnobg from '../assets/personal/bandw.png';

// Define the DecoderText component inside the Hero component file
const glyphs = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ', 'ー',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
  'バ', 'ビ', 'ブ', 'ベ', 'ボ',
  'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

// Function to shuffle text characters
const shuffle = (content, output, position) => {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index].value };
  });
};

// DecoderText component to animate text characters
const DecoderText = ({ text, delay: startDelay = 0 }) => {
  const [output, setOutput] = useState([]);
  const container = useRef(null);

  useEffect(() => {
    const content = text.split('');
    let position = 0;
    let timeouts = [];

    // Update text positions with a delay for each character
    const animateText = () => {
      if (position <= content.length) {
        setOutput((prevOutput) => shuffle(content, prevOutput, position));
        position += 1;
        timeouts.push(setTimeout(animateText, 100)); // Set delay for each letter (500 = 1 second)
      }
    };

    // Start the animation with the initial delay
    const startAnimation = () => {
      setOutput(shuffle(content, [], 0));
      timeouts.push(setTimeout(animateText, startDelay));
    };

    startAnimation();

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [text, startDelay]);

  return (
    <span ref={container} style={{ display: 'inline-block' }}>
      {output.map((item, index) => (
        <span key={index} style={{ transition: 'all 0.4s ease-out' }}>
          {item.value}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  // State to manage the current job title index
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const jobTitles = ['Software Engineer', 'Frontend Developer', 'AI Enthusiast', 'Tech Innovator']; // List of job titles to cycle through

  // Change job title every 6 seconds (slower than before)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 6000); // Slower interval
    return () => clearInterval(intervalId);
  }, [jobTitles.length]);

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-start sm:pl-12 md:pl-20`}> {/* Adjusted to justify-start and added padding-left */}
          <div>
            {/* Use DecoderText for animated name display */}
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase text-left`}> {/* Set text-left for left alignment */}
              <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
                <DecoderText text="Richman Tan" delay={0.1} /> {/* Slower animated name */}
              </span>
            </h1>

            {/* Display the constantly changing job titles */}
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack text-left`}> {/* Set text-left for left alignment */}
              <span className="sm:text-[40px] text-[30px] font-semibold">
                {jobTitles[jobTitleIndex]} {/* Slower changing job title */}
              </span>
            </p>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2, // Slower bounce effect
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Image Section */}
        <div>
          <img
            className="
              absolute bottom-0 
              ml-[60vw]                 /* Default position for small screens */
              md:ml-[65vw]              /* Moves further right for medium screens */
              lg:ml-[70vw]              /* Moves even further right for large screens */
              xl:ml-[75vw]              /* Moves further right for extra-large screens */
              2xl:ml-[70vw]             /* Moves further right for 2x large screens */
              sm:h-[90vh]               /* Image height for small screens */
              md:h-[70vh]               /* Image height for medium screens */
              lg:h-[75vh]               /* Image height for large screens */
              xl:h-[80vh]               /* Image height for extra-large screens */
            "
            src={richmanimgnobg}
            alt="Richman"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
