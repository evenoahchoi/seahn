export default function Comhistory() {
  // 연혁 데이터, 실제 사용 시 외부에서 가져오거나 API로 불러올 수 있음

  return (
    <div className="container mx-auto px-4 py-8">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            02.2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            이호준 대표이사 취임
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            이호준 신임 대표이사가 취임하며, 디지털 혁신과 글로벌 확장을 위한 새로운 경영 전략을 발표하였습니다. 이를 통해 회사는 기술 중심의 비즈니스 모델로 전환하며 새로운 성장 동력을 확보하였습니다.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            12.1999
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            유망중소기업 선정(기업은행)
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            기업은행으로부터 '유망 중소기업'으로 선정되어, 우수한 경영 성과와 혁신적인 제품 개발 능력을 인정받았습니다. 이 선정은 회사의 브랜드 가치와 시장에서의 신뢰도를 크게 향상시켰습니다.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            11.1995
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            현 사업장으로 이전
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            사업의 지속적인 성장과 확장을 지원하기 위해, 현재 위치에 새로운 본사 사무실과 연구 개발 센터를 설립하였습니다. 이 이전은 회사의 미래 비전과 지속 가능한 성장 전략의 일환으로 진행되었습니다.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            12.1993
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            회사 설립(관악구 봉천동 1655-1) 대표이사 이창원
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            관악구 봉천동에서 이창원 대표이사의 리더십 하에 회사가 설립되었습니다. 창립 초기부터 혁신과 품질에 중점을 두며, 업계에서 빠르게 입지를 확립하기 시작했습니다. 이는 우리 회사의 기반을 마련한 중요한 이정표입니다.
          </p>
        </li>
      </ol>
    </div>
  );
}
