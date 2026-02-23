'use client';

import { BlogPosts } from "app/components/posts";
import { MontserratFont } from "./ui/fonts";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import rocket from "../public/anims/Rocket.json";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    setIsVisible(true);
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative flex flex-col h-full">
      {/* Flying Rocket */}
      <motion.div
        className="top-16 -left-32 z-10 fixed pointer-events-none"
        animate={{
          x: [0, screenWidth + 200],
          y: [0, -50, 30, -20, 50, 0],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-32 md:w-40 h-32 md:h-40" style={{ transform: 'rotate(90deg)' }}>
          <Lottie animationData={rocket} loop={true} />
        </div>
      </motion.div>

      <div className="flex flex-row flex-1">
        <div className="relative flex flex-col justify-center gap-6 md:gap-12 h-full py-8 md:py-0">
          {/* Decorative element */}
          <div className={`absolute -left-8 top-1/4 w-1 h-32 ${isVisible ? 'animate-scale-in animation-delay-600' : 'opacity-0'
            }`}></div>

          <div className="space-y-2 md:space-y-4">
            {/* <div className={`inline-block px-4 py-2 rounded-full bg-neutral-100 text-sm font-medium text-neutral-700 ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
              }`}>
              Welcome to my universe
            </div> */}

            <h1
              className={`font-semibold text-left tracking-tighter ${MontserratFont.className} text-4xl md:text-9xl bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
                }`}
            >
              Hi there! ✋🏻 <br />
            </h1>
          </div>

          <h3 className={`font-light text-sm md:text-3xl md:leading-[150%] tracking-wider text-neutral-600 max-w-4xl ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'
            }`}>
            Hi there! I'm <span className="font-semibold text-neutral-900">Hyunwoo</span>, a software developer and entrepreneur. Born in Korea, recently moved to Montreal. Want to know more? Check out the About page or reach out via email below.
          </h3>

          {/* Quick links and Contact */}
          <div className={`flex flex-col gap-6 md:gap-8 mt-2 md:mt-4 ${isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'}`}>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <a href="/about" className="group bg-neutral-900 hover:bg-neutral-800 hover:shadow-2xl px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl font-bold text-white text-xs md:text-base transition-all hover:-translate-y-1 hover:scale-105 duration-300 flex items-center gap-2 shadow-lg shadow-neutral-200">
                About Me <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a href="/portfolio" className="group bg-white hover:bg-neutral-50 hover:shadow-2xl px-4 md:px-8 py-2 md:py-4 border-2 border-neutral-900 rounded-xl md:rounded-2xl font-bold text-neutral-900 text-xs md:text-base transition-all hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg shadow-neutral-100">
                View Portfolio
              </a>
            </div>

            <div className="flex flex-col gap-1 md:gap-2 pt-2 md:pt-4">
              <p className="text-[9px] md:text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">contact me</p>
              <a
                href="mailto:ryanleehw@gmail.com"
                className="text-lg md:text-3xl font-light text-neutral-500 hover:text-neutral-900 transition-all duration-300 underline decoration-neutral-200 underline-offset-4 md:underline-offset-8 decoration-1 hover:decoration-neutral-900 hover:decoration-2"
              >
                ryanleehw@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* <ul className="">
            <li>Living in Seoul, South Korea with family</li>
            <li>
              Software developer with <strong>+10 years</strong> experience
              working at large corporations as well as running own startups.
            </li>
            <li>
              Apple Products Lover
            </li>
            <li>
              Traveler - Enjoy Traveling World
            </li>
            <li>
              Video Gamer - 주로 혼자하는 게임을 좋아해. RPG , Action, Adventure, Simulation 장르는 가리지 않는 편. 모바일은 거의 안해.
            </li>
            <li>
              Cooker - 요리하는것에 관심이 있어. 주로 한식이지만 서양식이나 일본식도 가끔 시도를 해보는 편
            </li>
            <li>
              Reader - 책을 예전저처럼 자주 읽지는 못하지만 책에 관심은 여전히 있음. 비문학으로 스타트업 관련된 경제나 경영 분야 책을 읽어 주식이 어쩌고 돈 버는 법 어쩌구 같은 책은 
              좀 싫어하는 편. 과학 관련 책도 좋아해. 칼세이건의 코스모스 같은 책. 자기계발 류의 서적도 예전보다는 덜 읽지만 여전히 가끔 읽어.
              소설은 거의 판타지, SF 장르 위주로 읽는 편. 취향이 아주 확고해서 다른 장르는 거의 안읽는 편.
            </li>
            <li>
              BacketBall Fan - NBA는 내가 유일하게 챙겨보는 스포츠. 풀게임은 아주 관심가는것만 보고 주로 유뷰트나 nba.com 에서 하이라이트를 봄. 커리의 경기를 좋아했고 최근에는 자 모란트의 , 엔서니 에드워즈
              SGA 같은 루키들의 경기를 보는것도 좋아함. 2주에 한번씩 동호회 팀에서 실제 주말마다 농구를 즐기기도 함.
            </li>
            <li>
              그외엔 뭐가 잇을까? 영화 보는것 좋아하지만 크게 관심이 있진 않음 주로 유명한것 위주로 봐. 마찬가지로 액션, 판타지 , SF.  음악은 나이 먹으면서 잘 안듣게 됬음. 지금은 주로 핫한 SNS 노래 같은
              플레이리스트를 재생하는 편. 예전에는 힙합 , 락, 클래식 등 다양하게 들었었음
              수영 좋아함. 매주 가려고 노력하지만 멀어서 잘 못가고 있음
              헬스 좋아햇었음. 마찬가지로 육아로 인해 잘 못가고 있음
            </li>
            <li>
              Full-stack Web developer with React, Node.js, Next.js and
              TypeScript.
            </li>
            <li>
              Mobile App developer with Cross Platform likes React Native or
              Native with Swift, Kotlin.
            </li>
          </ul> */}
      </div>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
