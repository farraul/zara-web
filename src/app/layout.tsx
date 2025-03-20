import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/commons/Header";
import { helvetica } from "../fonts";
import Provider from "../components/Provider";
import "react-multi-carousel/lib/styles.css";

export const metadata: Metadata = {
  title: "Zara Home",
  description: "We are a shop of fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} antialiased`}>
        <Provider>
          <section className="px-10 xl:px-20 min-h-screen flex flex-col ">
            <Header />
            {children}
          </section>
        </Provider>
      </body>
    </html>
  );
}
