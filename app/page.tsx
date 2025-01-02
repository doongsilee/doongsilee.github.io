import { BlogPosts } from "app/components/posts";
import { MontserratFont } from "./ui/fonts";

export default function Page() {
  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-row flex-1">
        <div className="flex flex-col justify-center gap-12 h-full">
          <h1
            className={`font-semibold text-left tracking-tighter ${MontserratFont.className} md:text-9xl text-5xl`}
          >
            Hi there! ✋🏻 <br />
          </h1>
          <h3 className="font-light text-xl md:text-3xl leading-loose tracking-wider">
            I'm Hyunwoo. <br />
            Software engineer & Entrepreneur living in South Korea.
          </h3>
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
