import Image from "next/image";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a
      href={link}
      className="basis-1/3 flex-1"
      rel="noreferrer"
      target="_blank"
    >
      <Image
        className="rounded-3xl object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={image}
      />
      <h3 className="font-medium text-2xl lg:text-3xl dark:text-white mt-[10px]">{title}</h3>
      <p className="text-lg text-gray-500 tracking-wide leading-5 aos-init">
        {description}
      </p>

      <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md mt-5">
        View website
      </button>
    </a>
  );
};

export default ProjectCard;