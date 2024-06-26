import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { CiSearch } from "react-icons/ci";

import React from "react";
import GridProjects from "./GridProjects";

const page = () => {
  return (
    <div className="w-full flex flex-row">
      <Sidebar projet={false} />
      <div className="w-auto ml-[20%] pl-[5%] pr-[10%] py-[5%] flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-[#262626] mb-4">
          Mes projets
        </h1>
        <p className="text-[#A1A1A1] mb-6">
          La liste de vos projets se trouve ici. Choisissez le projet donc vous
          voulez travailler La liste de vos projets se trouve ici. Choisissez le
          projet donc vous voulez travailler
        </p>
        <div className="recherche flex flex-row gap-10 w-full mb-4">
          <div className="flex flex-row px-10 py-2 rounded-xl items-center bg-white gap-5 w-3/4">
            <CiSearch color="#A1A1A1" className="" size={25} />
            <input
              className="focus:outline-none w-full"
              type="text"
              placeholder="Recherche par mots-clés"
            />
          </div>
          <button className="text-blanc px-8 py-3 rounded-xl bg-black text-white w-1/5">
            Recherche
          </button>
        </div>
        <GridProjects />
        <a href="/ProjectCreation" className="flex justify-center">
          <button className="text-white bg-noir px-6 py-2 w-fit mt-4 rounded-lg">
            Créer un projet
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
