import { motion } from "framer-motion";
import PropTypes from 'prop-types';
// import bg from '/bg.mp4'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title, disabled, i = 1, }) => (
  <motion.span
    className={disabled ? `wf text-[#3a57fb] leading-[0.85] md:text-[13vw] md:flex  justify-center items-center text-center tracking-tight ` : `wf leading-[0.85] text-[#3a57fb] md:text-[16vw] md:flex  justify-center items-center text-center tracking-tight  `}
    variants={banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
     letter == " " ? <span key={i++}><br /></span>
     :
     <motion.span
     key={i++}
     className='row-letter'
     variants={letterAni}>
     {letter}
   </motion.span>
    ))}
  </motion.span>
);
AnimatedLetters.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  i: PropTypes.number,
  size: PropTypes.number,
};


const BannerRowBottom = ({ title, disabled, size }) => {
  return (
    <div className={"banner-row center "}>
      <AnimatedLetters title={title} size={size} disabled={disabled} />
    </div>
  );
};
BannerRowBottom.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.number,
};

const Banner = ({ msg, disabled, size }) => {
  return (
    <motion.div className='banner ' variants={banner}>
      <BannerRowBottom title={msg} size={size} disabled={disabled} />
    </motion.div>
  );
};
Banner.propTypes = {
  msg: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.number,
}

export default function Hero() {

  return (
    <div id="home" className="">

      <div className="hidden xl:flex mt-10 h-[screen] flex-col justify-center items-center ">

        <motion.p
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: .5,
            delay: 0.6,
          }}
          className="absolute right-6 top-[48%] italic text-sm">- <span className="font-bold">01</span>/04
        </motion.p>

        <div className="ml-10 hidden md:flex flex-col justify-center items-center">
          <Banner msg="ANNUAL&nbsp;INTER" size={10} disabled={true} /><br />
          <Banner msg="COLLEGE&nbsp;FEST" size={10} disabled={true} /> <br />
          <Banner msg="TALENZZIAA" size={10} />
        </div>

        <svg className="relative top-[-15%] z-40 h-[15%] w-[10%]" viewBox="0 0 183 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={{ rotate: "360deg" }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }} d="M116.617 19.1496L116.617 19.1501C123.226 30.4127 135.272 37.368 148.33 37.4595L148.33 37.4595L149.248 37.4659C171.445 37.6213 185.284 61.5923 174.32 80.8929L173.867 81.6903L173.867 81.6904C167.417 93.0448 167.417 106.956 173.867 118.31L173.867 118.311L174.32 119.107C174.32 119.107 174.32 119.107 174.32 119.108C185.284 138.408 171.445 162.377 149.25 162.534C149.249 162.534 149.249 162.534 149.248 162.534L148.332 162.54L148.33 162.54C135.272 162.632 123.226 169.588 116.617 180.85L116.617 180.85L116.153 181.641C116.153 181.641 116.153 181.641 116.153 181.641C104.92 200.786 77.2409 200.786 66.0079 181.641L65.5438 180.85L65.5438 180.85C58.9355 169.587 46.8888 162.632 33.8309 162.54L33.8289 162.54L32.9137 162.534C32.913 162.534 32.9124 162.534 32.9118 162.534C10.7165 162.377 -3.12204 138.408 7.84045 119.108C7.84062 119.107 7.8408 119.107 7.84097 119.107L8.29345 118.311L8.29393 118.31C14.7438 106.956 14.7438 93.0448 8.29395 81.6904L8.29388 81.6903L7.84095 80.893C7.84092 80.893 7.8409 80.8929 7.84088 80.8929C-3.12269 61.5923 10.7169 37.6214 32.9135 37.4659C32.9136 37.4659 32.9136 37.4659 32.9136 37.4659L33.8306 37.4595L33.8307 37.4595C46.8889 37.368 58.9356 30.4128 65.5438 19.1499L66.0079 18.3589C77.2409 -0.786287 104.92 -0.78621 116.153 18.3586C116.153 18.3587 116.153 18.3588 116.153 18.3588L116.617 19.1496Z" fill="#F27CEC" stroke="#FAF1E8" strokeWidth="8" />
          <motion.path animate={{ rotate: "-95deg" }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, }} direction="alternate-reverse" d="M86.1883 130.796C86.3403 130.022 86.5654 129.254 86.6074 128.471C87.0261 122.114 87.4422 115.783 87.8242 109.423C88.3863 99.8094 88.946 90.2199 89.5081 80.6058C90.2377 68.2285 90.9282 55.8724 91.6945 43.4979C91.8325 41.3953 92.0828 39.2774 92.4039 37.1898C92.502 36.5833 92.8615 35.9491 93.3919 35.4517C93.7219 35.11 94.5601 34.859 95.1856 34.8855C95.8111 34.9121 96.7711 35.2855 96.9224 35.6174C97.4423 36.6923 97.9548 37.8403 97.9176 38.9433C97.6784 47.9198 97.3683 56.8659 97.0191 65.8334C96.4378 79.6733 95.7807 93.5314 95.1626 107.368C94.9624 111.924 94.6863 116.497 94.4494 121.05C94.4147 122.128 94.4532 123.213 94.4596 124.983C95.8698 124.189 96.6054 123.856 97.1627 123.459C98.9201 122.153 100.502 120.758 102.325 119.531C104.026 118.416 106.064 118.361 107.61 119.152C109.298 120.002 109.258 121.13 108.811 122.273C108.617 122.725 108.278 123.164 107.974 123.606C104.223 129.297 100.433 135.009 96.6455 140.696C96.467 141.001 96.2201 141.251 95.9683 141.55C92.4306 145.858 89.8723 145.943 85.6378 141.763C82.9833 139.137 80.5633 136.383 78.141 133.653C75.4524 130.631 72.803 127.588 70.2269 124.551C68.4761 122.49 68.5209 120.946 70.3 120.157C72.3114 119.264 75.0598 119.858 77.1478 121.872C78.6961 123.375 80.0073 125.031 81.3625 126.616C82.5859 128.044 83.7335 129.489 84.9202 130.914C85.2965 130.846 85.7412 130.833 86.1883 130.796Z" fill="white" />
        </svg>

      </div>

    


      <div className="md:hidden mt-14 w-[100vw] ">
        <span className="wf text-text h-fit flex flex-col justify-center items-center md:hidden text-[#3a57fb] leading-[0.85] break-words tracking-tighter text-[40vw]">

          <div >
            <Banner msg="TAL ENZ ZIAA" size={10} disabled={true} />
            {/* <Banner msg="ENZ" size={10} disabled={true} />
            <Banner msg="ZIAA" size={10} disabled={true} /> */}
          </div>

          {/* <span className="flex justify-center items-center">TAL</span> */}
          {/* <span className="flex justify-center items-center">ENZ</span>
          <span className="flex justify-center items-center">ZIAA</span> */}

          <motion.svg initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: .2 }} className="relative top-[-12%] z-40 h-[25%] w-[25%]" viewBox="0 0 183 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path animate={{ rotate: "360deg" }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }} d="M116.617 19.1496L116.617 19.1501C123.226 30.4127 135.272 37.368 148.33 37.4595L148.33 37.4595L149.248 37.4659C171.445 37.6213 185.284 61.5923 174.32 80.8929L173.867 81.6903L173.867 81.6904C167.417 93.0448 167.417 106.956 173.867 118.31L173.867 118.311L174.32 119.107C174.32 119.107 174.32 119.107 174.32 119.108C185.284 138.408 171.445 162.377 149.25 162.534C149.249 162.534 149.249 162.534 149.248 162.534L148.332 162.54L148.33 162.54C135.272 162.632 123.226 169.588 116.617 180.85L116.617 180.85L116.153 181.641C116.153 181.641 116.153 181.641 116.153 181.641C104.92 200.786 77.2409 200.786 66.0079 181.641L65.5438 180.85L65.5438 180.85C58.9355 169.587 46.8888 162.632 33.8309 162.54L33.8289 162.54L32.9137 162.534C32.913 162.534 32.9124 162.534 32.9118 162.534C10.7165 162.377 -3.12204 138.408 7.84045 119.108C7.84062 119.107 7.8408 119.107 7.84097 119.107L8.29345 118.311L8.29393 118.31C14.7438 106.956 14.7438 93.0448 8.29395 81.6904L8.29388 81.6903L7.84095 80.893C7.84092 80.893 7.8409 80.8929 7.84088 80.8929C-3.12269 61.5923 10.7169 37.6214 32.9135 37.4659C32.9136 37.4659 32.9136 37.4659 32.9136 37.4659L33.8306 37.4595L33.8307 37.4595C46.8889 37.368 58.9356 30.4128 65.5438 19.1499L66.0079 18.3589C77.2409 -0.786287 104.92 -0.78621 116.153 18.3586C116.153 18.3587 116.153 18.3588 116.153 18.3588L116.617 19.1496Z" fill="#F27CEC" stroke="#FAF1E8" strokeWidth="8" />
            <motion.path animate={{ rotate: "-95deg" }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, }} direction="alternate-reverse" d="M86.1883 130.796C86.3403 130.022 86.5654 129.254 86.6074 128.471C87.0261 122.114 87.4422 115.783 87.8242 109.423C88.3863 99.8094 88.946 90.2199 89.5081 80.6058C90.2377 68.2285 90.9282 55.8724 91.6945 43.4979C91.8325 41.3953 92.0828 39.2774 92.4039 37.1898C92.502 36.5833 92.8615 35.9491 93.3919 35.4517C93.7219 35.11 94.5601 34.859 95.1856 34.8855C95.8111 34.9121 96.7711 35.2855 96.9224 35.6174C97.4423 36.6923 97.9548 37.8403 97.9176 38.9433C97.6784 47.9198 97.3683 56.8659 97.0191 65.8334C96.4378 79.6733 95.7807 93.5314 95.1626 107.368C94.9624 111.924 94.6863 116.497 94.4494 121.05C94.4147 122.128 94.4532 123.213 94.4596 124.983C95.8698 124.189 96.6054 123.856 97.1627 123.459C98.9201 122.153 100.502 120.758 102.325 119.531C104.026 118.416 106.064 118.361 107.61 119.152C109.298 120.002 109.258 121.13 108.811 122.273C108.617 122.725 108.278 123.164 107.974 123.606C104.223 129.297 100.433 135.009 96.6455 140.696C96.467 141.001 96.2201 141.251 95.9683 141.55C92.4306 145.858 89.8723 145.943 85.6378 141.763C82.9833 139.137 80.5633 136.383 78.141 133.653C75.4524 130.631 72.803 127.588 70.2269 124.551C68.4761 122.49 68.5209 120.946 70.3 120.157C72.3114 119.264 75.0598 119.858 77.1478 121.872C78.6961 123.375 80.0073 125.031 81.3625 126.616C82.5859 128.044 83.7335 129.489 84.9202 130.914C85.2965 130.846 85.7412 130.833 86.1883 130.796Z" fill="white" />
          </motion.svg>
        </span>

      </div>


    </div>
  )
}
