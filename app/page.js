import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-mono mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-2">
        <Link href="./week-2/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-2 Assignment</Link>
        <Link href="./week-3/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-3 Assignment</Link>
        <Link href="./week-4/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-4 Assignment</Link>
        <Link href="./week-5/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-5 Assignment</Link>
        <Link href="./week-6/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-6 Assignment</Link>
        <Link href="./week-7/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-7 Assignment</Link>
        <Link href="./week-8/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-8 Assignment</Link>
        <Link href="./week-9/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-9 Assignment</Link>
        <Link href="./week-10/" className="font-mono underline text text-orange-400 hover:text-orange-600">Week-10 Assignment</Link>
      </div>
    </main>
    
  );
}