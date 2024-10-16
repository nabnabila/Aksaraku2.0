import React, { useState } from "react";
// Import images
import wulu from "../assets/image/aksara5/wulu.png";
import pepet from "../assets/image/aksara5/pepet.png";
import suku from "../assets/image/aksara5/suku.png";
import taling from "../assets/image/aksara5/taling.png";
import talingtarung from "../assets/image/aksara5/talingtarung.png";
import cakra from "../assets/image/aksara5/cakra.png";
import cakrakeret from "../assets/image/aksara5/cakrakeret.png";
import pengkal from "../assets/image/aksara5/pengkal.png";
import panjinganwa from "../assets/image/aksara5/panjinganwa.png";
import panjinganla from "../assets/image/aksara5/panjinganla.png";
import wigyan from "../assets/image/aksara5/wignyan.png";
import layar from "../assets/image/aksara5/layar.png";
import cecak from "../assets/image/aksara5/cecak.png";
import pangkon from "../assets/image/aksara5/pangkon.png";
import contohwulu from "../assets/image/aksara5/contohwulu.png";
import contohpepet from "../assets/image/aksara5/contohpepet.png";
import contohsuku from "../assets/image/aksara5/contohsuku.png";
import contohtaling from "../assets/image/aksara5/contohtaling.png";
import contohtalingtarung from "../assets/image/aksara5/contohtalingtarung.png";
import contohcakra from "../assets/image/aksara5/contohcakra.png";
import contohcakrakeret from "../assets/image/aksara5/contohcakrakeret.png";
import contohpengkal from "../assets/image/aksara5/contohpengkal.png";
import contohpanjinganwa from "../assets/image/aksara5/contohpanjinganwa.png";
import contohpanjingnla from "../assets/image/aksara5/contohpanjinganla.png";
import contohwigyan from "../assets/image/aksara5/contohwignyan.png";
import contohlayar from "../assets/image/aksara5/contohlayar.png";
import contohcecak from "../assets/image/aksara5/contohcecak.png";
import contohpangkon from "../assets/image/aksara5/contohpangkon.png";

// Import audios
import Wulu from "../assets/audio/audio2/wulu.mp3";
import Pepet from "../assets/audio/audio2/pepet.mp3";
import Suku from "../assets/audio/audio2/suku.mp3";
import Taling from "../assets/audio/audio2/taling.mp3";
import Talingtarung from "../assets/audio/audio2/talingtarung.mp3";
import Cakra from "../assets/audio/audio2/cakra.mp3";
import Cakrakeret from "../assets/audio/audio2/cakrakeret.mp3";
import Pengkal from "../assets/audio/audio2/pengkal.mp3";
import Panjinganwa from "../assets/audio/audio2/panjinganwa.mp3";
import Panjinganla from "../assets/audio/audio2/panjinganla.mp3";
import Wigyan from "../assets/audio/audio2/wigyan.mp3";
import Layar from "../assets/audio/audio2/layar.mp3";
import Cecak from "../assets/audio/audio2/cecak.mp3";
import Pangkon from "../assets/audio/audio2/pangkon.mp3";

const IsiBelajar5 = () => {
  const cards = [
    {
      title: "Wulu (i)",
      image: wulu,
      description: "Contoh:",
      images: contohwulu,
      example: "siji",
      buttonText: "Pelafalan",
      audio: Wulu,
    },
    {
      title: "Pepet (e)",
      image: pepet,
      description: "Contoh:",
      images: contohpepet,
      example: "saged",
      buttonText: "Pelafalan",
      audio: Pepet,
    },
    {
      title: "Suku (u)",
      image: suku,
      description: "Contoh:",
      images: contohsuku,
      example: "buku",
      buttonText: "Pelafalan",
      audio: Suku,
    },
    {
      title: "Taling (e)",
      image: taling,
      description: "Contoh:",
      images: contohtaling,
      example: "jare",
      buttonText: "Pelafalan",
      audio: Taling,
    },
    {
      title: "Taling Tarung (o)",
      image: talingtarung,
      description: "Contoh:",
      images: contohtalingtarung,
      example: "kowe",
      buttonText: "Pelafalan",
      audio: Talingtarung,
    },
    {
      title: "Cakra (-ra)",
      image: cakra,
      description: "Contoh:",
      images: contohcakra,
      example: "krasa",
      buttonText: "Pelafalan",
      audio: Cakra,
    },
    {
      title: "Cakra Keret (-re)",
      image: cakrakeret,
      description: "Contoh:",
      images: contohcakrakeret,
      example: "kreteg",
      buttonText: "Pelafalan",
      audio: Cakrakeret,
    },
    {
      title: "Pengkal (-ya)",
      image: pengkal,
      description: "Contoh:",
      images: contohpengkal,
      example: "kyai",
      buttonText: "Pelafalan",
      audio: Pengkal,
    },
    {
      title: "Panjingan wa (-wa)",
      image: panjinganwa,
      description: "Contoh:",
      images: contohpanjinganwa,
      example: "kwaci",
      buttonText: "Pelafalan",
      audio: Panjinganwa,
    },
    {
      title: "Panjingan la (-la)",
      image: panjinganla,
      description: "Contoh:",
      images: contohpanjingnla,
      example: "klasa",
      buttonText: "Pelafalan",
      audio: Panjinganla,
    },
    {
      title: "Wigyan (h)",
      image: wigyan,
      description: "Contoh:",
      images: contohwigyan,
      example: "gabah",
      buttonText: "Pelafalan",
      audio: Wigyan,
    },
    {
      title: "Layar (r)",
      image: layar,
      description: "Contoh:",
      images: contohlayar,
      example: "warta",
      buttonText: "Pelafalan",
      audio: Layar,
    },
    {
      title: "Cecak (ng)",
      image: cecak,
      description: "Contoh:",
      images: contohcecak,
      example: "sawang",
      buttonText: "Pelafalan",
      audio: Cecak,
    },
    {
      title: "Pangkon",
      image: pangkon,
      description: "Contoh:",
      images: contohpangkon,
      example: "sikil",
      buttonText: "Pelafalan",
      audio: Pangkon,
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

export default IsiBelajar5;
