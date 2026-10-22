// Marks copy that's waiting on a decision. Search the project for <Tbd> before launch.
export default function Tbd({ children }: { children: React.ReactNode }) {
  return <span className="tbd">{children}</span>;
}
