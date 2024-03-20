import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center ">
        여기는 메인페이지에요
        <Link href={"/fullpage"}>fullpage 가기</Link>
        <Link href={"/fullpage#3"}>fullpage의 3페이지로 이동</Link>
      </div>
    </main>
  );
}
