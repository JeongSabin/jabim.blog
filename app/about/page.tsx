import Image from "next/image";
import profileImg from "../../public/img/IMG_7842.dng";
import MailSvg from "../../public/svg/mail.svg";
import GithubSvg from "../../public/svg/github.svg";
import DiscordSvg from "../../public/svg/discord.svg";
import ProfileIntro from "@/components/ProfileIntro";
import Link from "next/link";
import { Metadata } from "next";

const profile = {
  text: "안녕하세요",
  img: profileImg,
  name: "정사빈",
  job: "ML/DL Researcher (Vision, NLP)",
  mail: "mailto:im@jabim.io",
  github: "https://github.com/https://github.com/JeongSabin",
  discord: "https://discord.gg/aC5NzpYb",
};

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function About() {
  return (
    <section className="flex justify-center flex-wrap mt-10 px-6">
      <article className="max-w-[768px] w-full mx-auto text-center">
        {/* <h2 className="font-bold text-2xl md:text-3xl">{profile.text}</h2> */}
        <div className="overflow-hidden w-[150px] h-[150px] rounded-[75px] md:w-[200px] md:h-[200px] md:rounded-[100px] mt-[30px] mx-auto">
          <Image
            src={profile.img}
            width={200}
            height={200}
            alt="profile"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
        </div>
        <h3 className="font-bold text-2xl mt-5">{profile.name}</h3>
        <h4 className="font-bold text-lg">{profile.job}</h4>
        <nav className="flex justify-center items-center mt-[7px]">
          <Link
            href={profile.mail}
            className="hover:bg-black/10 dark:hover:bg-white/30 rounded-md p-1 cursor-pointer"
          >
            <MailSvg className="w-[30px] h-[22px]" />
          </Link>
          <Link
            href={profile.github}
            className="hover:bg-black/10 dark:hover:bg-white/30 rounded-md p-1 cursor-pointer mx-[10px]"
          >
            <GithubSvg className="w-[30px] h-[31px]" />
          </Link>
          <Link
            href={profile.discord}
            className="hover:bg-black/10 dark:hover:bg-white/30 rounded-md p-1 cursor-pointer"
          >
            <DiscordSvg className="w-[30px] h-[23px]" />
          </Link>
        </nav>
        <hr className="h-px w-full my-5 bg-[#D4D4D4] dark:bg-[#686868]" />
        <section className="prose prose-lg mx-auto dark:prose-invert text-left">
          <ProfileIntro />
        </section>
      </article>
    </section>
  );
}
