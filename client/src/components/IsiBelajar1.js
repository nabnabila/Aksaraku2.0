import React, { useState } from "react";

// Import images
import ha from "../assets/image/aksara1/ha.png";
import na from "../assets/image/aksara1/na.png";
import ca from "../assets/image/aksara1/ca.png";
import ra from "../assets/image/aksara1/ra.png";
import ka from "../assets/image/aksara1/ka.png";
import da from "../assets/image/aksara1/da.png";
import ta from "../assets/image/aksara1/ta.png";
import sa from "../assets/image/aksara1/sa.png";
import wa from "../assets/image/aksara1/wa.png";
import la from "../assets/image/aksara1/la.png";
import pa from "../assets/image/aksara1/pa.png";
import dha from "../assets/image/aksara1/dha.png";
import ja from "../assets/image/aksara1/ja.png";
import ya from "../assets/image/aksara1/ya.png";
import nya from "../assets/image/aksara1/nya.png";
import ma from "../assets/image/aksara1/ma.png";
import ga from "../assets/image/aksara1/ga.png";
import ba from "../assets/image/aksara1/ba.png";
import tha from "../assets/image/aksara1/tha.png";
import nga from "../assets/image/aksara1/nga.png";
import contohha from "../assets/image/aksara1/contohha.png";
import contohna from "../assets/image/aksara1/contohna.png";
import contohca from "../assets/image/aksara1/contohca.png";
import contohra from "../assets/image/aksara1/contohra.png";
import contohka from "../assets/image/aksara1/contohka.png";
import contohda from "../assets/image/aksara1/contohda.png";
import contohta from "../assets/image/aksara1/contohta.png";
import contohsa from "../assets/image/aksara1/contohsa.png";
import contohwa from "../assets/image/aksara1/contohwa.png";
import contohla from "../assets/image/aksara1/contohla.png";
import contohpa from "../assets/image/aksara1/contohpa.png";
import contohdha from "../assets/image/aksara1/contohdha.png";
import contohja from "../assets/image/aksara1/contohja.png";
import contohya from "../assets/image/aksara1/contohya.png";
import contohnya from "../assets/image/aksara1/contohnya.png";
import contohma from "../assets/image/aksara1/contohma.png";
import contohga from "../assets/image/aksara1/contohga.png";
import contohba from "../assets/image/aksara1/contohba.png";
import contohtha from "../assets/image/aksara1/contohtha.png";
import contohnga from "../assets/image/aksara1/contohnga.png";
// Import audios
import ho from "../assets/audio/audio1/ho.mp3";
import no from "../assets/audio/audio1/no.mp3";
import co from "../assets/audio/audio1/co.mp3";
import ro from "../assets/audio/audio1/ro.mp3";
import ko from "../assets/audio/audio1/ko.mp3";
import doo from "../assets/audio/audio1/do.mp3";
import to from "../assets/audio/audio1/to.mp3";
import so from "../assets/audio/audio1/so.mp3";
import wo from "../assets/audio/audio1/wo.mp3";
import lo from "../assets/audio/audio1/lo.mp3";
import po from "../assets/audio/audio1/po.mp3";
import dho from "../assets/audio/audio1/dho.mp3";
import jo from "../assets/audio/audio1/jo.mp3";
import yo from "../assets/audio/audio1/yo.mp3";
import nyo from "../assets/audio/audio1/nyo.mp3";
import mo from "../assets/audio/audio1/mo.mp3";
import go from "../assets/audio/audio1/go.mp3";
import bo from "../assets/audio/audio1/bo.mp3";
import tho from "../assets/audio/audio1/to.mp3";
import ngo from "../assets/audio/audio1/ngo.mp3";

const IsiBelajar1 = () => {
  const cards = [
    {
      title: "Ha",
      description: "Contoh:",
      image: ha,
      buttonText: "Pelafalan",
      images: contohha,
      example: "aku",
      audio: ho,
    },
    {
      title: "Na",
      description: "Contoh:",
      image: na,
      images: contohna,
      example: "mrana",
      buttonText: "Pelafalan",
      audio: no,
    },
    {
      title: "Ca",
      description: "Contoh:",
      image: ca,
      images: contohca,
      example: "maca",
      buttonText: "Pelafalan",
      audio: co,
    },
    {
      title: "Ra",
      description: "Contoh:",
      image: ra,
      images: contohra,
      example: "ora",
      buttonText: "Pelafalan",
      audio: ro,
    },
    {
      title: "Ka",
      description: "Contoh:",
      image: ka,
      images: contohka,
      example: "kasur",
      buttonText: "Pelafalan",
      audio: ko,
    },
    {
      title: "Da",
      description: "Contoh:",
      image: da,
      images: contohda,
      example: "sida",
      buttonText: "Pelafalan",
      audio: doo,
    },
    {
      title: "Ta",
      description: "Contoh:",
      image: ta,
      images: contohta,
      example: "tari",
      buttonText: "Pelafalan",
      audio: to,
    },
    {
      title: "Sa",
      description: "Contoh:",
      image: sa,
      images: contohsa,
      example: "basa",
      buttonText: "Pelafalan",
      audio: so,
    },
    {
      title: "Wa",
      description: "Contoh:",
      image: wa,
      images: contohwa,
      example: "wani",
      buttonText: "Pelafalan",
      audio: wo,
    },
    {
      title: "La",
      description: "Contoh:",
      image: la,
      images: contohla,
      example: "kawula",
      buttonText: "Pelafalan",
      audio: lo,
    },
    {
      title: "Pa",
      description: "Contoh:",
      image: pa,
      images: contohpa,
      example: "apa",
      buttonText: "Pelafalan",
      audio: po,
    },
    {
      title: "Dha",
      description: "Contoh:",
      image: dha,
      images: contohdha,
      example: "gadhah",
      buttonText: "Pelafalan",
      audio: dho,
    },
    {
      title: "Ja",
      description: "Contoh:",
      image: ja,
      images: contohja,
      example: "jam",
      buttonText: "Pelafalan",
      audio: jo,
    },
    {
      title: "Ya",
      description: "Contoh:",
      image: ya,
      images: contohya,
      example: "wayah",
      buttonText: "Pelafalan",
      audio: yo,
    },
    {
      title: "Nya",
      description: "Contoh:",
      image: nya,
      images: contohnya,
      example: "anyam",
      buttonText: "Pelafalan",
      audio: nyo,
    },
    {
      title: "Ma",
      description: "Contoh:",
      image: ma,
      images: contohma,
      example: "tuma",
      buttonText: "Pelafalan",
      audio: mo,
    },
    {
      title: "Ga",
      description: "Contoh:",
      image: ga,
      images: contohga,
      example: "gawa",
      buttonText: "Pelafalan",
      audio: go,
    },
    {
      title: "Ba",
      description: "Contoh:",
      image: ba,
      images: contohba,
      example: "basa",
      buttonText: "Pelafalan",
      audio: bo,
    },
    {
      title: "Tha",
      description: "Contoh:",
      image: tha,
      images: contohtha,
      example: "kathah",
      buttonText: "Pelafalan",
      audio: tho,
    },
    {
      title: "Nga",
      description: "Contoh:",
      image: nga,
      images: contohnga,
      example: "mangan",
      buttonText: "Pelafalan",
      audio: ngo,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };
  return (
    <div className="mode">
      <div className="carousel-container">
        <button onClick={prevCard}>‹</button>
        <div className="card">
          <h2>{cards[currentIndex].title}</h2>
          <img src={cards[currentIndex].image} alt="Card" />
          <h3 className="m-5">{cards[currentIndex].description}</h3>
          <img src={cards[currentIndex].images} alt="Card" />
          <h4>{cards[currentIndex].example}</h4>
          <button onClick={() => playAudio(cards[currentIndex].audio)}>
            {cards[currentIndex].buttonText}
          </button>
        </div>
        <button onClick={nextCard}>›</button>
      </div>
    </div>
  );
};
export default IsiBelajar1;
