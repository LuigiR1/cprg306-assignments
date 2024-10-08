import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-mono mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-2">
        <Link href="./week-2/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-2 Assignment</Link>
        <Link href="./week-3/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-3 Assignment</Link>
        <Link href="./week-4/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-4 Assignment</Link>
      </div>
    </main>
    
  );
}