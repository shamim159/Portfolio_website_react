"use client";
import { motion } from "framer-motion";
import react, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Vanilla",
    title: "Project 1",
    Description:
      "basic vanilla web design showing web design services with logical games",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/vanilla_w_design.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    Description:
      "fullstack application using the mern stack, nextJs, firebase and tailwind css, ",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Express.js" },
      { name: "Node.js" },
    ],
    image: "/assets/work/sam_estate.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-50%">text</div>
          <div className="w-full xl:w-50%">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
