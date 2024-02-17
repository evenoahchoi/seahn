import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: "세안전자",
  description: "세안전자 주식회사",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
