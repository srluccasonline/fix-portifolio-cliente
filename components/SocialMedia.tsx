import { Github, Instagram, Linkedin, Mail, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import Reveal from "./Reveal";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      name: "whatsapp",
      link: "https://wa.me/5561983209025?text=Ol%C3%A1,%20venho%20pelo%20link%20do%20site!!",
      icon: <Phone />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/fernando-ya%C3%B1ez/",
      icon: <Linkedin />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/feryanez20/",
      icon: <Instagram />,
    },
  ];
  return (
    <Reveal>
      <div className="flex flex-row gap-4">
        {socialMediaLinks.map(({ name, link, icon }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            className="bg-[#9bb3cb] transition-all hover:bg-[#7fc7ff]  p-2 rounded-lg dark:text-[#09090b] dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
          >
            {icon}
          </Link>
        ))}
      </div>
    </Reveal>
  );
};

export default SocialMedia;
