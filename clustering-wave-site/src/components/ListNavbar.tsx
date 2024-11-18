import { Link } from "react-router-dom";

type Props = {
  path: string;
  label: string;
  isActive: boolean;
};

export default function ListNavbar({ path, label, isActive }: Props) {
  const active = <p className="w-full h-1 bg-white rounded-md mt-1"></p>;

  return (
    <li className="p-1 text-sm lg:text-lg hover:text-[#6BA3BE]">
      <Link to={path}>{label}</Link>
      {isActive && active}
    </li>
  );
}
