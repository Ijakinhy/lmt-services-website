"use client";

import React, { useRef, useState } from "react";
import teamMember1 from "/public/teamMember-1.webp";
import teamMember2 from "/public/teamMember-2.webp";
import teamMember3 from "/public/teamMember-3.webp";
import teamMember4 from "/public/teamMember-4.webp";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type Team = {
  profile: StaticImageData;
  name: string;
  role: string;
};

const team: Team[] = [
  { profile: teamMember1, name: "Mat Zalman", role: "CEO" },
  { profile: teamMember2, name: "Megan Zalman", role: "Marketing Director" },
  { profile: teamMember3, name: "Mat Zalman", role: "Senior Backend Developer" },
  { profile: teamMember4, name: "Rukundo Zalman", role: "Senior Developer" },
  { profile: teamMember1, name: "Mat Zalman", role: "CEO" },
  { profile: teamMember2, name: "Megan Zalman", role: "Marketing Director" },
  { profile: teamMember3, name: "Mat Zalman", role: "Senior Backend Developer" },
  { profile: teamMember4, name: "Rukundo Zalman", role: "Senior Developer" },
];

/// team  card
const TeamMemberCard = ({ member, isMobile }: { member: Team; isMobile: boolean }) => (
  <div role="listitem" className={isMobile ? "snap-start min-w-[406px] mx-auto" : ""}>
    <div className={`min-h-[202px] ${isMobile ? "min-w-[406px]" : "lg:w-[306px]"}`}>
      <Image
        src={member.profile}
        width={400}
        height={400}
        alt={`${member.name} - ${member.role}`}
        className={`w-full h-full hover:grayscale transition-all ease-in-out duration-500 rounded-[${isMobile ? "40px" : "40px"}]`}
      />
    </div>
    <div className="text-center mt-5">
      <h3 className="text-[#242627] dark:text-white text-[20px] leading-[1.3em] font-semibold">{member.name}</h3>
      <p className="font-sans text-[#777777] dark:text-blue-900  capitalize text-[14px] mt-1">{member.role}</p>
    </div>
  </div>
);

const Team = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);


  const handleTouchEnd = () => setIsDragging(false);
  const scrollLeftDesktop = () => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRightDesktop = () => {
    if (desktopScrollRef.current) {
      desktopScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <>
      <h2 className="text-[#0a0d31] dark:text-white text-[25px] lg:text-[48px] leading-[1.2em] max-w-[38rem] font-sans font-bold ">
        Meet some of our 80+ team members
      </h2>

      <div className="hidden lg:flex mt-24 items-center space-x-4">
        <Button onClick={scrollLeftDesktop} variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>

        <div
          ref={desktopScrollRef}
          className="flex overflow-x-auto space-x-7 scrollbar-hide snap-x snap-mandatory no-scrollbar"
          role="list"
        >
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} isMobile={false} />
          ))}
        </div>

        <Button onClick={scrollRightDesktop} variant="outline">
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>


      <div className="block lg:hidden mt-16 relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[rgba(255,255,255,0.9)] dark:from-[rgba(15,23,42,0.9)] to-transparent backdrop-blur-sm" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[rgba(255,255,255,0.9)] dark:from-[rgba(15,23,42,0.9)] to-transparent backdrop-blur-sm" />


        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-10 snap-x snap-mandatory space-x-4 pr-8 cursor-grab active:cursor-grabbing no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="list"
        >
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} isMobile={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
