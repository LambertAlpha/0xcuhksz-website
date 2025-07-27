import Link from "next/link";

export default function TopNavButton({text, href}: {text : string, href : string}) {
  return (
    <Link key={text} href={href} className="hover:underline"><small>{text}</small></Link>
  );
}