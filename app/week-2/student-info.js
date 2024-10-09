import Link from "next/link";

export default function StudentInfo(){
    return (
        <main>
            <h1 className="font-mono text-orange-600">Luigi Rossi</h1>
            <Link href="https://github.com/LuigiR1/cprg306-assignments" className="font-mono underline text text-orange-400 hover:text-orange-600">Github Link</Link>
        </main>
    );
}
