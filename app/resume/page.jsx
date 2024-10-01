"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    " I am dedicated software developer with 4 years of experience crafting innovative and efficient solutions. Passionate about leveraging technology to drive business growth and create exceptional user experiences. Committed to staying up-to-date with industry trends and continuously expanding my technical knowledge.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sam Ali",
    },
    {
      fieldName: "Phone",
      fieldValue: "+447771112471",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "British",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "shaminali786123@gmail.com",
    },
  ],
};

//experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "Aspiring full-stack developer with a solid foundation in banking and a passion for technology. Leveraging my experience in client-facing roles to develop strong interpersonal skills and a deep understanding of customer needs. Currently completing a rigorous software development bootcamp, acquiring a comprehensive skill set in web technologies.",
  items: [
    {
      company: "Barclays UK",
      position: "Customer Care/Process Analyst",
      duration: "2018 - 2024",
    },
    {
      company: "Vodafone UK",
      position: "Sales Advisor",
      duration: "2014 - 2018",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "I graduated from University with a degree in business economics, which provided me with a strong understanding of market dynamics and financial analysis. After graduating, I gained practical experience in the corporate world through roles in the telecoms and banking industries.When the pandemic disrupted the job market, I saw an opportunity to pivot my career. I dedicated my time to learning coding through online courses on platforms like Codecademy, Udemy, and The Odin Project. Now, I'm immersed in a software development bootcamp, where I'm acquiring essential skills in programming languages, development methodologies, and practical application building.",
  items: [
    {
      institution: "Just IT",
      subject: "Software Development Bootcamp",
      duration: "07/2024 - Present",
    },
    {
      institution: "The Odin Project - Online",
      subject: "Backend Programming",
      duration: "03/2024 - Present",
    },
    {
      institution: "Udemy - Online",
      subject: "Backend Programming",
      duration: "02/2022 - 03/2022",
    },
    {
      institution: "CodeCademy - Online",
      subject: "Frontend design",
      duration: "2021 - 2022",
    },
    {
      institution: "Knowledge Train",
      subject: "Prince 2: Project Management",
      duration: "09/2018 - 10/2018",
    },
    {
      institution: "University of East London",
      subject: "Business Economics",
      duration: "2011 - 2014",
    },
  ],
};

// skills data

const skills = {
  title: "My skills",
  description:
    "Skilled in crafting comprehensive web applications, proficient in both frontend and backend development, leveraging a diverse set of frameworks and technologies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.subject}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-30px] mb-10">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mt-10">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
