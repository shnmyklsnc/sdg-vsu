import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Roboto, Galada } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import HeaderMobile from "@/components/common/header-mobile";

// VSU Brand Fonts based on brand guidelines
// https://brandbook.vsu.edu.ph/sections/branding-elements

// Montserrat - for titles, headers, and cover pages (Semibold preferred)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Regular, Medium, Semibold, Bold
  display: "swap",
});

// Roboto - for paragraph text (Regular version for most texts)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  style: ["normal", "italic"],
  display: "swap",
});

// Geist Mono - for code snippets (Regular version) (not in VSU brandbook)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"], // Regular
  style: ["normal"],
  display: "swap",
});

// Galada - for fancy text (Regular version)
const galada = Galada({
  variable: "--font-galada",
  subsets: ["latin"],
  weight: ["400"], // Regular
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Visayas State University - Sustainable Development Goals",
  description:
    "Sustainable developement goals of the Visayas State University.",
  keywords:
    "SDG, sustainability, university, impact rankings, THE rankings, VSU, Visayas State University",
  openGraph: {
    title: "THE Impact Rankings Documentation",
    description: "University SDG initiatives and documentation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${galada.variable} ${montserrat.variable} ${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <HeaderMobile />
          <main className="mt-18">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
