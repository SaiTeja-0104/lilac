import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD',
  description: 'Anxiety & Trauma Therapy in Santa Monica, CA',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${pop.variable} antialiased overflow-x-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
