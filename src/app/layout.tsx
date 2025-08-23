import type { Metadata } from "next";
import { Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/common/header";

// VSU Brand Fonts based on brand guidelines
// https://brandbook.vsu.edu.ph/sections/branding-elements

// Montserrat - for titles, headers, and cover pages (Semibold preferred)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, Semibold, Bold
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
        className={`${montserrat.variable} ${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
