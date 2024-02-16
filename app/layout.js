import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "세안전자",
  description: "세안전자 주식회사",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="text-gray-600 body-font border-b border-gray-300">
          {" "}
          {/* 하단 선을 추가 */}
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              href="/"
            >
              <Image
                src="/seahn.png"
                alt="세안전자 로고"
                width={100}
                height={100}
                priority={true}
              />
              <span className="ml-3 text-xl font-bold">세안전자</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              {/* 회사소개 드롭다운 메뉴 */}
              <div className="relative group">
                <Link
                  className="mr-5 hover:text-gray-900 inline-flex items-center"
                  href="/about/ceo"
                >
                  회사소개
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-base z-50 min-w-max dropdown-menu">
                  <Link href="/about/ceo" className="dropdown-link">
                    CEO 인사말
                  </Link>
                  <Link href="/about/comhistory" className="dropdown-link">
                    회사연혁
                  </Link>
                  <Link href="/about/policy" className="dropdown-link">
                    경영방침
                  </Link>
                  <Link href="/about/certy" className="dropdown-link">
                    인증서
                  </Link>
                  <Link href="/about/location" className="dropdown-link">
                    오시는길
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link
                  className="mr-5 hover:text-gray-900 inline-flex items-center"
                  href="/products/transformer"
                >
                  제품정보
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-base z-50 min-w-max dropdown-menu">
                  <Link href="/products/transformer" className="dropdown-link">
                    TRANSFORMER
                  </Link>
                  <Link href="/products/inductor" className="dropdown-link">
                    INDUCTOR
                  </Link>
                  <Link href="/products/linefilter" className="dropdown-link">
                    LINE FILTER
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link
                  className="mr-5 hover:text-gray-900 inline-flex items-center"
                  href="/technology/inductorinfo"
                >
                  기술정보
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-base z-50 min-w-max dropdown-menu">
                  <Link
                    href="/technology/inductorinfo"
                    className="dropdown-link"
                  >
                    INDUCTOR정보
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link
                  className="mr-5 hover:text-gray-900 inline-flex items-center"
                  href="/support"
                >
                  고객지원
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-base z-50 min-w-max dropdown-menu">
                  <Link href="/support/samp" className="dropdown-link">
                    샘플신청
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer class="bg-white text-gray-600 body-font border-t border-gray-300">
          <div class="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                href="/"
              >
                <Image
                  src="/seahn.png"
                  alt="세안전자 로고"
                  width={50}
                  height={50}
                  priority={true}
                />
                <span class="ml-3 text-xl font-bold">세안전자</span>
              </Link>
              <p class="mt-2 text-sm text-gray-500">
                세상을 더욱 살기 좋게 만듭니다
              </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  회사소개
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      href="/about/ceo"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      CEO 인사말
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/comhistory"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      회사연혁
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/policy"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      경영방침
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/certy"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      인증서
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/location"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      오시는길
                    </Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  제품정보
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      href="/products/transformer"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      TRANSFORMER
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/inductor"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      INDUCTOR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/linefilter"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      LINE FILTER
                    </Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  기술정보
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      href="/technology/inductorinfo"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      INDUCTOR정보
                    </Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  고객지원
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a
                      href="/support/samp"
                      class="text-gray-600 hover:text-gray-800"
                    >
                      샘플신청
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
