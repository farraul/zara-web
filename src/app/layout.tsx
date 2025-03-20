import type { Metadata } from "next";
import { helvetica } from "../fonts";
import Provider from "../components/Provider";
import MainLayout from "../components/layout/MainLayout";
import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css";

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
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
