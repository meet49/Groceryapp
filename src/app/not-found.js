import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white bg-[url('../app/assets/img/bg6.png')] h-[1067.85px] text-center pt-60">
      <h2 className="font-bold text-4xl text-[#609E45]">Oops!</h2>
      <p className="text-2xl">The page you looking for is dosen’t exit.</p>
      <span className="bg-[url('../app/assets/img/bg7.png')] bg-no-repeat bg-cover bg-clip-text font-black text-transparent text-[250px]">404</span>
      <p>The page you look for does not exist or another error occured
        pls kindly refreash or retun to <b className="text-[#EF682E]">home page.</b></p>
      <div className="flex gap-5 justify-center items-center mt-5">
        <button className="h-[60px] w-[164px] text-white bg-[#609E45] rounded-md font-bold text-base">
          <Link href="/">Go to Homepage</Link>
        </button>
        <button className="h-[60px] w-[164px] bg-white text-[#609E45] border-2 border-[#609E45] rounded-md font-bold text-base">
        <Link href="/faq">Help Center</Link>

        </button>
      </div>
    </div>
  );
}