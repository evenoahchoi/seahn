import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="bg-white text-gray-600 body-font border-t border-gray-300">
          <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                href="/"
              >
                <Image
                  src="/seahn.png"
                  alt="세안전자 로고"
                  width={50}
                  height={50}
                  priority={true}
                />
                <span className="ml-3 text-xl font-bold">세안전자</span>
              </Link>
              <p className="mt-2 text-sm text-gray-500">
                세상을 더욱 살기 좋게 만듭니다
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  회사소개
                </h2>
                <div className="list-none mb-10">
                  <li>
                    <Link href="/about/ceo"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      CEO 인사말
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/comhistory"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      회사연혁
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/policy"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      경영방침
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/certy"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      인증서
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/location"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      오시는길
                    </Link>
                  </li>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  제품정보
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link
                      href="/products/transformer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      TRANSFORMER
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/inductor"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      INDUCTOR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/linefilter"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      LINE FILTER
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  기술정보
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link
                      href="/technology/inductorinfo"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      INDUCTOR정보
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  고객지원
                </h2>
                <div className="list-none mb-10">
                  <li>
                    <Link
                      href="/support/samp"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      샘플신청
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    );
}