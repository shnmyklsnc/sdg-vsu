import { SDG } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function SDGCard({
  sdg,
  size = 110,
}: {
  sdg: SDG;
  size?: number;
}) {
  return (
    <Link href={`/sdgs/${sdg.id}`}>
      <Image width={size} height={size} alt={sdg.title} src={sdg.image} />
    </Link>
  );
}
