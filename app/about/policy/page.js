import Head from 'next/head';

export default function Policy() {
  return (
    <>
      <Head>
        <title>경영방침 - 세안전자 주식회사</title>
      </Head>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">경영방침</h1>
          <p className="text-gray-500 text-lg mb-2">
            HOME &gt; 회사소개 &gt; <strong className="text-gray-800">경영방침</strong>
          </p>
        </div>

        <div className="bg-white p-10 shadow-xl rounded-lg border border-gray-200">
          <h4 className="text-3xl font-semibold text-gray-800 mb-6">품질 환경방침</h4>
          <p className="mb-6 text-gray-600 text-lg">
            (주)세안전자는 Line filter 제조 및 설계 전문업체로서 품질과
            환경경영을 기업경영의 주 요소로 인식하고 품질환경 경영시스템을
            체계적으로 구축, 실행, 유지 및 이를 지속적으로 개선함으로써 당사
            제품을 사용하는 고객에게 만족을 주고 지역사회에 기여함은 물론 지구
            환경보전에 최선을 다한다.
          </p>

          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            고객만족을 위한 품질경영시스템 구축
          </h5>
          <p className="mb-6 text-gray-600 text-lg">
            고객 중심적 사고를 통한 고객만족을 목표로, 품질 및 기술력을
            향상시키며 불량률 Zero의 달성을 위해 각 부서별 추진 목표 및 계획을
            수립한다. 이에 품질경영시스템을 구축하고 이를 효과적으로 실행한다.
          </p>

          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            환경경영시스템(ISO/KS A 14001) 운영
          </h5>
          <p className="mb-6 text-gray-600 text-lg">
            당사의 활동, 제품 또는 서비스로 인해 발생되는 환경 영향을 최소화하고,
            개선하기 위해 환경경영시스템을 구축하고 이를 효과적으로 실행한다.
          </p>

          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            오염방지 및 지속적인 개선
          </h5>
          <p className="mb-6 text-gray-600 text-lg">
            재사용, 재활용, 주요 오염물질의 사용억제 또는 대체를 통해 폐기물
            발생 유해물질 및 에너지 사용을 최대한 억제하고 지속적인 개선을 통해
            환경오염물질 배출을 최소화 한다.
          </p>

          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            고객요구사항 충족 및 환경법규 준수
          </h5>
          <p className="mb-6 text-gray-600 text-lg">
            고객 요구사항 충족을 위해 고객 요구 및 만족도를 주기적으로 평가하고,
            환경 관련 법규준수를 위해 지속적인 교육훈련과 내부관리 기준을
            설정하고 이를 충실히 이행하며, 환경 방침을 이해관계자에게 공개하여
            투명한 환경경영을 실현한다.
          </p>
        </div>
      </div>
    </>
  );
}
