import "../styles/globals.css";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import Footer from "../components/Footer";

const maehongson = localFont({
  src: [
    {
      path: "../fonts/Maehongson/pk_maehongson_regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Maehongson/pk_maehongson-semi_bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-maehongson",
});

export const metadata = {
  title: "โรงแรมนิวศิญา",
  description: "โรงแรมนิวศิญา ตั้งอยู่ใจตัวเมืองมหาสารคามสะดวกต่อการเดินทาง",
  keywords: [
    "โรงแรมนิวศิญา",
    "โรงแรมมหาสารคาม",
    "ที่พักมหาสารคาม",
    "นิวศิญา",
    "มหาสารคาม",
    "โรงแรม",
  ],
  openGraph: {
    title: "โรงแรมนิวศิญา",
    description:
      'เพลิดเพลินกับการพักผ่อนที่โรงแรม "นิวศิญา" ซึ่งมีทั้งความสะดวกสบายและบรรยากาศที่เป็นกันเอง',
    url: "https://newsiya.com/",
    images: [
      {
        url: "https://newsiya.com/hero-img.png",
        width: 800,
        height: 600,
        alt: "ภาพโรงแรม นิวศิญา",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "โรงแรมนิวศิญา",
    description: "พักผ่อนอย่างมีระดับที่โรงแรมนิวศิญา",
    images: ["https://newsiya.com/hero-img.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "128x128",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
};

export const revalidate = 3600;

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#333b44"
        />
        <meta name="msapplication-TileColor" content="#333b44" />
        <meta name="theme-color" content="#333b44" />
      </head>
      <body className={maehongson.className + " "}>
        <Navbar />
        {children}
        <section id="footer" className="bg-primary !py-0">
          <Footer />
        </section>
      </body>
    </html>
  );
}
