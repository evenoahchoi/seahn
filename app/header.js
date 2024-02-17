import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="text-gray-600 body-font border-b border-gray-300">
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
                  href="/support/samp"
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
    );
}