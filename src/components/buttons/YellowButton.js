import Link from "next/link";

export default function YellowButton(props) {
  return (
    <Link href={props.url}>
      <button className="w-auto rounded-2xl bg-primaryYellow px-12 py-4 text-xl font-bold shadow-lg hover:bg-secondaryLightPeach active:bg-secondarySoftCoral">
        {props.text}
      </button>
    </Link>
  );
}
