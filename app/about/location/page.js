import Image from "next/image";

export default function Location() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <a
              href="https://map.naver.com/p/entry/place/1650919378?placePath=%2Fhome&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <Image
                src="/map.png"
                alt="지도1"
                width={900}
                height={900}
                priority={true}
              />
            </a>
            {/* 박스 전체를 flex container로 만들고, 주소를 포함하는 div의 너비를 조정합니다. */}
            <div className="bg-white relative flex flex-wrap py-1 rounded shadow-md w-3/4">
              {/* 주소 정보가 더 많은 공간을 차지하도록 flex-grow와 flex-basis를 사용합니다. */}
              <div className="flex-grow flex-basis-0 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                {/* whitespace-nowrap 클래스를 추가하여 주소가 한 줄에 나오도록 합니다. */}
                <p className="mt-1 text-base whitespace-nowrap">
                  경기 군포시 엘에스로 13 신일IT유토 1301호
                </p>
              </div>
              <div className="flex-grow flex-basis-0 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="mt-1 text-base">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-base">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              오시는길
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              안양역에서 소외된 모두 왼발을 한보 앞으로
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              그 담엔 오른발의 차례 눈앞을 향해
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              행진 전인권의 열정과 Attacking
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              누구도 막지 못해 넘치는 패기
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              날 믿지 못하는 부정적인 시선과 얘기는 곧 증발해 Evaporate
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              꿈의 눈물로 땀으로 적도보다 뜨거운 열기로
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              시간과 공간도 가두지 못하는 혈기로
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              Hands up put'em high don't let your gun cry
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              don't you put'em down low don't let your passion die
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              새빨간 색의 피는 누구나 흘리니까
            </p>
            <p className="leading-relaxed mb-5 text-gray-600">
              죽을 때는 빌린 내 몸 흙이 될 테니까
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
