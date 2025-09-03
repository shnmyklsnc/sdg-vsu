import { SDG } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function SDGCard({
  sdg,
  size = 125,
}: {
  sdg: SDG;
  size?: number;
}) {
  return (
    <Link href={`/sdgs/${sdg.id}`}>
      <Image
        width={size}
        height={size}
        alt={`Logo image of SDG ${sdg.id}`}
        src={sdg.image}
        className=""
      />
    </Link>
  );
}
