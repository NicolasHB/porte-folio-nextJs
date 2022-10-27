import Link from "next/link";


export default function Navbar() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-black via-slate-700 to-yellow-400">
        <Link href="/" className="text-yellow-400">
            Porte-Folio
        </Link>
        <div className="">
            <Link href="/" >Home</Link>
            <a href="#about">About</a>

        </div>
    </div>
  )
}
