import { Logo } from "./logo";

export function Brand() {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      <h1 className="text-md font-bold uppercase tracking-wider flex items-start">
        Dezrek
        <span className="text text-[0.5rem] bg-accent">technologies</span>
      </h1>
    </div>
  );
}
