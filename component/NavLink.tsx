import { FC } from "react";
import Link from "next/link";

const NavLink: FC<{ link: string; children: string }> = ({
  link,
  children,
}) => {
  return (
    <Link href={link}>
      <a className="py-4 px-2 text-white font-semibold hover:text-indigo-300 transition duration-300">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
