import dayjs from "dayjs";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center">
      <p className="text-gray-500">@{dayjs().get("year")} biii_grrr</p>
    </footer>
  );
}
