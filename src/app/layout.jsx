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
  title: "นิวศิญา | โรงแรมหรูใจตัวเมืองมหาสารคาม",
  description:
    'โรงแรม "นิวศิญา" ให้บริการห้องพักหรูหราพร้อมสิ่งอำนวยความสะดวกครบครัน ตั้งอยู่ใจตัวเมืองมหาสารคามสะดวกต่อการเดินทาง',
  openGraph: {
    title: "นิวศิญา | โรงแรมหรูใจตัวเมืองมหาสารคาม",
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
    title: "นิวศิญา | โรงแรมหรูใจกลางเมือง",
    description: 'พักผ่อนอย่างมีระดับที่โรงแรม "นิวศิญา"',
    images: ["https://newsiya.com/hero-img.png"],
  },
};

export const revalidate = 3600;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
