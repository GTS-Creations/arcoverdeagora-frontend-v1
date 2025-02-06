"use client";

import { useState, useEffect } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";

import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/200/300?t=1",
  "https://picsum.photos/200/300?t=2",
  "https://picsum.photos/200/300?t=3",
  "https://picsum.photos/200/300?t=4",
  "https://picsum.photos/200/300?t=5",
];

export default function Header() {
  const [data, setData] = useState("");

  useEffect(() => {
    function DateFormated() {
      const dataAtual = new Date();

      const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      const meses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ];

      const diaSemana = diasSemana[dataAtual.getDay()];
      const dia = dataAtual.getDate();
      const mes = meses[dataAtual.getMonth()];
      const ano = dataAtual.getFullYear();

      setData(`${dia} ${mes}, ${ano}, ${diaSemana}`);
    }

    DateFormated();
  }, []);

  return (
    <header>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 flex justify-between px-8 py-4">
        <span className="text-white tracking-[0.3rem]">Últimas</span>
        <span className="text-white tracking-widest"> {data} </span>
      </div>

      <div className="flex py-4 px-8">
        <Image alt="Logo Arcoverde Agora" src={logo} priority />

        <div className="relative w-screen h-[300px] mt-[15vh] overflow-hidden flex justify-center items-center">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt=""
              className="absolute w-[200px] h-[300px] rounded-lg shadow-lg"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                duration: 1,
                delay: index * 2,
                repeat: Infinity,
                repeatDelay: 10,
              }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
