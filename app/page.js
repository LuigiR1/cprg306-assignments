import Link from "next/link";


export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-2">
        <Link href="./week-2/" className="underline text text-white hover:text-orange-600">Week-2</Link>
        <Link href="./week-3/" className="underline text text-white hover:text-orange-600">Week-3</Link>
      </div>
    </main>
    
  );
}