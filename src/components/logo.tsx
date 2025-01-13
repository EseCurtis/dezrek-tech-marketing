import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-dark.png"
        alt="Dezrek Technologies Logo"
        className="h-5 w-5"
        width={711.58}
        height={711.58}
      />
    </div>
  );
}
