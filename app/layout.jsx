import { JetBrains_Mono as JetBrainsMono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrainsMono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
