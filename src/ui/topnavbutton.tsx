import Link from "next/link";
import { inter } from "./fonts";

export default function TopNavButton({text, href}: {text : string, href : string}) {
  return (
    <Link key={text} href={href} className={`${inter.className} font-[500] hover:underline text-2xl`}><small>{text}</small></Link>
  );
}