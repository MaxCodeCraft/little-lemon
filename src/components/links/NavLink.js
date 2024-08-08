"use client";
import Link from "next/link";

export default function NavLink(props) {
  return (
    <Link href={props.url}>
      <p className="cursor-pointer text-xl font-semibold hover:text-primaryYellow">
        {props.title}
      </p>
    </Link>
  );
}
