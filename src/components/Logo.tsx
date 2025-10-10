import Image from "next/image"

export default function Logo() {
  return (
    <Image
        src="/logo-fullwhite.png"
        alt="Hyper Nexium Logo"
        width={120}
        height={40}
        className="  w-[100px]  md:w-[120px]"
    />
  )
}
