import Image from "next/image";

export default function Ceo() {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col md:flex-row">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              세안전자 대표 이호준입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              존경하는 고객 여러분, 저희 세안전자는 트랜스포머, 인덕터,
              라인필터를 전문으로 하는 전자기기 유통 회사로서, 지난 몇 년간
              눈부신 성장을 이루어왔습니다.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              오늘날 저희는 연매출 100억 원을 달성하는 등 업계에서 주목받는
              기업으로 자리매김하였습니다. 이 모든 성과는 변함없는 고객님들의
              신뢰와 지지 덕분입니다.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              저희는 단순히 전자기기를 유통하는 회사를 넘어, 지속 가능한 미래를
              위한 가치 창출에 앞장서고자 합니다. 이를 위해 ESG(환경, 사회,
              지배구조) 경영을 기업 문화의 핵심으로 삼고, 지속 가능한 사업
              모델을 구축하기 위해 노력하고 있습니다. 환경 보호는 우리 모두의
              책임이며, 저희 세안전자는 친환경 제품 공급을 통해 이 책임을 다하기
              위해 최선을 다하고 있습니다.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              사회적 책임을 다하는 기업으로서, 저희는 지역 사회와의 상생을
              중요하게 여기며, 다양한 사회 공헌 활동을 통해 사회에 기여하고자
              합니다. 또한, 투명하고 윤리적인 경영을 통해 모든 이해관계자들에게
              신뢰받는 기업이 되기 위해 끊임없이 노력하고 있습니다.
            </p>
            <p className="mb-8 leading-relaxed">
              앞으로도 저희 세안전자는 기술 혁신과 지속 가능한 경영을 통해 더
              나은 미래를 만들어 가는 데 앞장설 것입니다. 우리의 노력이 작은
              변화를 일으키고, 그 변화가 세상을 더 나은 곳으로 만드는 데 기여할
              수 있다고 믿습니다.{" "}
            </p>
            <p className="mb-8 leading-relaxed">
              고객 여러분의 변함없는 지지와 성원에 깊이 감사드리며, 앞으로도
              저희 세안전자와 함께 성장해 나가길 바랍니다. 지속 가능한 미래를
              위해 함께 나아가겠습니다. 감사합니다.
            </p>
            <p className="mb-8 leading-relaxed font-bold">
              세안전자 CEO 이호준
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* Next.js Image 컴포넌트 사용 예시 */}
            <Image
              className="object-cover object-center rounded"
              src="/ceo.jpg" // 프로젝트의 public 폴더 내 이미지 경로
              alt="CEO 이미지"
              width={720} // 이미지의 실제 너비
              height={600} // 이미지의 실제 높이
              layout="responsive" // 이미지의 레이아웃을 반응형으로 설정
            />
          </div>
        </div>
      </section>
    </div>
  );
}
