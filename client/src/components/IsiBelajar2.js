import React, { useState } from "react";
// Import audios
import ha from "../assets/image/aksara2/pasanganha.png";
import na from "../assets/image/aksara2/pasanganna.png";
import ca from "../assets/image/aksara2/pasanganca.png";
import ra from "../assets/image/aksara2/pasanganra.png";
import ka from "../assets/image/aksara2/pasanganka.png";
import da from "../assets/image/aksara2/pasanganda.png";
import ta from "../assets/image/aksara2/pasanganta.png";
import sa from "../assets/image/aksara2/pasangansa.png";
import wa from "../assets/image/aksara2/pasanganwa.png";
import la from "../assets/image/aksara2/pasanganla.png";
import pa from "../assets/image/aksara2/pasanganpa.png";
import dha from "../assets/image/aksara2/pasangandha.png";
import ja from "../assets/image/aksara2/pasanganja.png";
import ya from "../assets/image/aksara2/pasanganya.png";
import nya from "../assets/image/aksara2/pasangannya.png";
import ma from "../assets/image/aksara2/pasanganma.png";
import ga from "../assets/image/aksara2/pasanganga.png";
import ba from "../assets/image/aksara2/pasanganba.png";
import tha from "../assets/image/aksara2/pasangantha.png";
import nga from "../assets/image/aksara2/pasangannga.png";
import contohha from "../assets/image/aksara2/contohpasanganha.png";
import contohna from "../assets/image/aksara2/contohpasanganna.png";
import contohca from "../assets/image/aksara2/contohpasanganca.png";
import contohra from "../assets/image/aksara2/contohpasanganra.png";
import contohka from "../assets/image/aksara2/contohpasanganka.png";
import contohda from "../assets/image/aksara2/contohpasanganda.png";
import contohta from "../assets/image/aksara2/contohpasanganta.png";
import contohsa from "../assets/image/aksara2/contohpasangansa.png";
import contohwa from "../assets/image/aksara2/contohpasanganwa.png";
import contohla from "../assets/image/aksara2/contohpasanganla.png";
import contohpa from "../assets/image/aksara2/contohpasanganpa.png";
import contohdha from "../assets/image/aksara2/contohpasangandha.png";
import contohja from "../assets/image/aksara2/contohpasanganja.png";
import contohya from "../assets/image/aksara2/contohpasanganya.png";
import contohnya from "../assets/image/aksara2/contohpasangannya.png";
import contohma from "../assets/image/aksara2/contohpasanganma.png";
import contohga from "../assets/image/aksara2/contohpasanganga.png";
import contohba from "../assets/image/aksara2/contohpasanganba.png";
import contohtha from "../assets/image/aksara2/contohpasangantha.png";
import contohnga from "../assets/image/aksara2/contohpasangannga.png";
// Import audios
import ho from "../assets/audio/audio1/ha.m4a";
import no from "../assets/audio/audio1/na.m4a";
import co from "../assets/audio/audio1/ca.m4a";
import ro from "../assets/audio/audio1/ra.m4a";
import ko from "../assets/audio/audio1/ka.m4a";
import doo from "../assets/audio/audio1/da.m4a";
import to from "../assets/audio/audio1/ta.m4a";
import so from "../assets/audio/audio1/sa.m4a";
import wo from "../assets/audio/audio1/wa.m4a";
import lo from "../assets/audio/audio1/la.m4a";
import po from "../assets/audio/audio1/pa.m4a";
import dho from "../assets/audio/audio1/dha.m4a";
import jo from "../assets/audio/audio1/ja.m4a";
import yo from "../assets/audio/audio1/ya.m4a";
import nyo from "../assets/audio/audio1/nya.m4a";
import mo from "../assets/audio/audio1/ma.m4a";
import go from "../assets/audio/audio1/ga.m4a";
import bo from "../assets/audio/audio1/ba.m4a";
import tho from "../assets/audio/audio1/ta.m4a";
import ngo from "../assets/audio/audio1/nga.m4a";

const IsiBelajar2 = () => {
  const cards = [
    {
      title: "Pasangan Ha",
      description: "Contoh:",
      image: ha,
      images: contohha,
      example: "aben ajeng",
      buttonText: "Pelafalan",
      audio: ho,
    },
    {
      title: "Pasangan Na",
      description: "Contoh:",
      image: na,
      images: contohna,
      example: "nanem nanas",
      buttonText: "Pelafalan",
      audio: no,
    },
    {
      title: "Pasangan Ca",
      description: "Contoh:",
      image: ca,
      images: contohca,
      example: "cepak-cepak",
      buttonText: "Pelafalan",
      audio: co,
    },
    {
      title: "Pasangan Ra",
      description: "Contoh:",
      image: ra,
      images: contohra,
      example: "ragad roti",
      buttonText: "Pelafalan",
      audio: ro,
    },
    {
      title: "Pasangan Ka",
      description: "Contoh:",
      image: ka,
      images: contohka,
      example: "kapuk kapas",
      buttonText: "Pelafalan",
      audio: ko,
    },
    {
      title: "Pasangan Da",
      description: "Contoh:",
      image: da,
      images: contohda,
      example: "dalan-dalan",
      buttonText: "Pelafalan",
      audio: doo,
    },
    {
      title: "Pasangan Ta",
      description: "Contoh:",
      image: ta,
      images: contohta,
      example: "tapak tilas",
      buttonText: "Pelafalan",
      audio: to,
    },
    {
      title: "Pasangan Sa",
      description: "Contoh:",
      image: sa,
      images: contohsa,
      example: "sanak sedulur",
      buttonText: "Pelafalan",
      audio: so,
    },
    {
      title: "Pasangan Wa",
      description: "Contoh:",
      image: wa,
      images: contohwa,
      example: "watuk-watuk",
      buttonText: "Pelafalan",
      audio: wo,
    },
    {
      title: "Pasangan La",
      description: "Contoh:",
      image: la,
      images: contohla,
      example: "lamat-lamat",
      buttonText: "Pelafalan",
      audio: lo,
    },
    {
      title: "Pasangan Pa",
      description: "Contoh:",
      image: pa,
      images: contohpa,
      example: "panen pari",
      buttonText: "Pelafalan",
      audio: po,
    },
    {
      title: "Pasangan Dha",
      description: "Contoh:",
      image: dha,
      images: contohdha,
      example: "dhandhang",
      buttonText: "Pelafalan",
      audio: dho,
    },
    {
      title: "Pasangan Ja",
      description: "Contoh:",
      image: ja,
      images: contohja,
      example: "jajal-jajal",
      buttonText: "Pelafalan",
      audio: jo,
    },
    {
      title: "Pasangan Ya",
      description: "Contoh:",
      image: ya,
      images: contohya,
      example: " yakin yekti",
      buttonText: "Pelafalan",
      audio: yo,
    },
    {
      title: "Pasanngan Nya",
      description: "Contoh:",
      image: nya,
      images: contohnya,
      example: "nyamut-nyamut",
      buttonText: "Pelafalan",
      audio: nyo,
    },
    {
      title: "Pasangan Ma",
      description: "Contoh:",
      image: ma,
      images: contohma,
      example: "manggut manggut",
      buttonText: "Pelafalan",
      audio: mo,
    },
    {
      title: "Pasangan Ga",
      description: "Contoh:",
      image: ga,
      images: contohga,
      example: "gagap gagap",
      buttonText: "Pelafalan",
      audio: go,
    },
    {
      title: "Pasangan Ba",
      description: "Contoh:",
      image: ba,
      images: contohba,
      example: "bal-balan",
      buttonText: "Pelafalan",
      audio: bo,
    },
    {
      title: "Pasangan Tha",
      description: "Contoh:",
      image: tha,
      images: contohtha,
      example: "thak-thakan",
      buttonText: "Pelafalan",
      audio: tho,
    },
    {
      title: "Pasangan Nga",
      description: "Contoh:",
      image: nga,
      images: contohnga,
      example: "ngajak ngaso",
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

export default IsiBelajar2;
