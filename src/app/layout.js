import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Gaurav Narnaware | Full Stack Developer",
  description:
    "I'm a full stack developer with a passion for building scalable and efficient web applications.",
  openGraph: {
    title: "Gaurav Narnaware | Full Stack Developer",
    description:
      "I'm a full stack developer with a passion for building scalable and efficient web applications.",
    images: "/Profile.webp",
  },
  icons: {
    icon: "/Profile.webp",
  },
  twitter: {
    card: "Gaurav Narnaware",
    title: "Gaurav Narnaware | Full Stack Developer",
    description:
      "I'm a full stack developer with a passion for building scalable and efficient web applications.",
    images: "/Profile.webp",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-black md:border md:rounded-md md:border-gray-800  md:p-5 my-5 max-w-[800px] mx-auto p-5 text-white `}
      >
        {children}
      </body>
    </html>
  );
}
