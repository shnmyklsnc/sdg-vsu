"use client";

import Link from "next/link";
import Image from "next/image";
import { SiFacebook, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { LinkPreview } from "../ui/link-preview";
import { AtSign, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-primary bg-secondary relative flex flex-col gap-4 overflow-hidden px-3 py-6">
      <div className="flex justify-between">
        <Link
          key="light"
          className="flex items-center gap-2 dark:hidden"
          href="/"
        >
          <Image
            src="/logo/VSU Brand Logo.png"
            alt="Visayas State University Brand Logo"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/logo/VSU Text Logo.png"
            alt="Visayas State University Text Logo"
            width={110}
            height={110}
            priority
          />
        </Link>
        <Link
          key="dark"
          className="hidden items-center gap-2 dark:flex"
          href="/"
        >
          <Image
            src="/logo/VSU Brand Logo (White).png"
            alt="Visayas State University Brand Logo"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/logo/VSU Text Logo (White).png"
            alt="Visayas State University Text Logo"
            width={110}
            height={110}
            priority
          />
        </Link>
      </div>

      {/* Social links */}
      <div
        role="list"
        aria-label="Social links"
        className="border-primary flex gap-4 border-b-1 pb-4 dark:border-white/70"
      >
        <span className="font-extrabold text-[#146939] dark:text-white/70">
          We Are Social:
        </span>
        <div className="flex items-center gap-4" aria-label="Socials">
          <LinkPreview url="https://facebook.com/visayasstateu">
            <SiFacebook className="h-4 w-4 text-[#146939] transition-colors duration-300 hover:text-[#0866ff] dark:text-white/70 dark:hover:text-[#0866ff]" />
          </LinkPreview>
          <LinkPreview url="https://x.com/visayasstateu">
            <SiX className="h-4 w-4 text-[#146939] transition-colors duration-300 hover:text-[##000000] dark:text-white/70 dark:hover:text-[##000000]" />
          </LinkPreview>
          <LinkPreview url="https://www.youtube.com/visayasstateu">
            <SiYoutube className="h-4 w-4 text-[#146939] transition-colors duration-300 hover:text-[#FF0000] dark:text-white/70 dark:hover:text-[#FF0000]" />
          </LinkPreview>
        </div>
      </div>

      {/* Contact info */}
      <div
        aria-label="Contact info"
        role="list"
        className="border-primary space-y-2 border-b-1 px-4 pb-4 dark:border-white/70"
      >
        <address className="xs:text-base flex items-center gap-2 text-sm font-medium text-[#146939] not-italic dark:text-white/70">
          <MapPin className="xs:h-8 xs:w-8 mb-2 h-4 w-4" />
          Visca, Baybay City, Leyte <br /> Philippines 6541
        </address>
        <address className="xs:text-base flex items-center gap-2 text-sm font-medium text-[#146939] not-italic dark:text-white/70">
          <Phone className="xs:h-8 xs:w-8 mb-2 h-4 w-4" />
          Trunkline +63 (53) 565 0600 <br /> Fax +63 (53) 563 7067
        </address>
        <address className="xs:text-base flex items-center gap-2 text-sm font-medium text-[#146939] not-italic dark:text-white/70">
          <AtSign className="xs:h-8 xs:w-8 h-4 w-4" />
          uimpa@vsu.edu.ph
        </address>
      </div>

      <span className="xs:text-base my-4 w-full text-center text-sm font-bold tracking-tight text-[#146939] dark:text-white/70">
        &copy; {new Date().getFullYear()} Visayas State University
      </span>

      {/* Diamond Tiles Background with Fade */}
      <div
        className="xs:h-[450px] xs:w-[450px] xs:-top-10 xs:-right-10 absolute -top-12 -right-5 h-[320px] w-[320px]"
        style={{
          backgroundImage: 'url("/logo/OBELISK.png")',
          backgroundSize: "450px",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 100%)",
        }}
      />
    </footer>
  );
}
