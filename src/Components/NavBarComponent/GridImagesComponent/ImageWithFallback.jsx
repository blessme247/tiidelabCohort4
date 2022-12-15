import React from "react";
import styles from '../../../Pages/HomePage/Homepage.module.css'

//Image Imports
import ConfidenceJPEG from "../../../ASSETS/images/ConfidenceJPEG.jpeg"; //Confidence
import ConfidenceWebP from "../../../ASSETS/images/ConfidenceWebP.webp";
import AliyuJPEG from "../../../ASSETS/images/AliyuJPEG.jpeg"; //Aliyu
import AliyuWebP from "../../../ASSETS/images/AliyuWebP.webp";
import BlessmeJPG from "../../../ASSETS/images/BlessmeJPG.jpg"; //Blessme
import BlessmeWebP from "../../../ASSETS/images/BlessmeWebP.webp";
import ChizobaJPEG from "../../../ASSETS/images/ChizobaJPEG.jpeg"; //Chizoba
import ChizobaWebP from "../../../ASSETS/images/ChizobaWebP.webp";
import CynthiaJPEG from "../../../ASSETS/images/CynthiaJPEG.jpeg"; //Cynthia
import CynthiaWebP from "../../../ASSETS/images/CynthiaWebP.webp";
import EcheJPEG from "../../../ASSETS/images/EcheJPEG.jpeg"; //Eche
import EcheWebP from "../../../ASSETS/images/EcheWebP.webp";
import FaridaJPEG from "../../../ASSETS/images/FaridaJPEG.jpeg";
import FaridaWebP from "../../../ASSETS/images/FaridaWebP.webp";
import GeorgeJPEG from "../../../ASSETS/images/GeorgeJPEG.jpeg";
import GeorgeWebP from "../../../ASSETS/images/GeorgeWebP.webp";
import HassanJPEG from "../../../ASSETS/images/HassanJPEG.jpeg";
import HassanWebP from "../../../ASSETS/images/HassanWebP.webp";
import HauwaJPEG from "../../../ASSETS/images/HauwaJPEG.jpeg";
import HauwaWebP from "../../../ASSETS/images/HauwaWebP.webp";
import HerbalistJPEG from "../../../ASSETS/images/HerbalistJPEG.jpeg";
import HerbalistWebP from "../../../ASSETS/images/HerbalistWebP.webp";
import JoyJPEG from "../../../ASSETS/images/JoyJPEG.jpeg";
import JoyWebP from "../../../ASSETS/images/JoyWebP.webp";
import SquareJPEG from "../../../ASSETS/images/SquareJPEG.jpg";
import SquareWebP from "../../../ASSETS/images/SquareWebP.webp";
import SusanJPEG from "../../../ASSETS/images/SusanJPEG.jpeg";
import SusanWebP from "../../../ASSETS/images/SusanWebP.webp";
import TheodoraJPEG from "../../../ASSETS/images/TheodoraJPEG.jpeg";
import TheodoraWebP from "../../../ASSETS/images/TheodoraWebP.webp";
import TianaJPEG from "../../../ASSETS/images/TianaJPEG.jpeg";
import TianaWebP from "../../../ASSETS/images/TianaWebP.webp";
import UcheJPEG from "../../../ASSETS/images/UcheJPEG.jpg";
import UcheWebP from "../../../ASSETS/images/UcheWebP.webp";
import UdemeJPEG from "../../../ASSETS/images/UdemeJPEG.jpeg";
import UdemeWebP from "../../../ASSETS/images/UdemeWebP.webp";
import OwenJPEG from "../../../ASSETS/images/OwenJPEG.jpg";
import OwenWebP from "../../../ASSETS/images/OwenWebP.webp";
import BongshimJPEG from "../../../ASSETS/images/BongshimJPEG.jpg";
import BongshimWebP from "../../../ASSETS/images/BongshimWebP.webp";
import GodswillJPEG from "../../../ASSETS/images/GodswillJPEG.jpg";
import GodswilWebP from "../../../ASSETS/images/GodswilWebP.webp";
import IsaacJPEG from "../../../ASSETS/images/IsaacJPEG.jpg";
import IsaacWebP from "../../../ASSETS/images/IsaacWebP.webp";
import MarvelousJPEG from "../../../ASSETS/images/MarvelousJPEG.jpg";
import MarvelousWebP from "../../../ASSETS/images/MarvelousWebP.webp";
import BarnabasJPEG from "../../../ASSETS/images/BarnabasJPEG.jpg";
import BarnabasWebP from "../../../ASSETS/images/BarnabasWebP.webp";
import AdaezeJPEG from "../../../ASSETS/images/AdaezeJPEG.jpeg";
import AdaezeWebP from "../../../ASSETS/images/AdaezeWebP.webp";
import AhmedJPEG from "../../../ASSETS/images/AhmedJPEG.jpeg";
import AhmedWebP from "../../../ASSETS/images/AhmedWebP.webp";
import BanwoJPEG from "../../../ASSETS/images/BanwoJPEG.jpeg";
import BanwoWebP from "../../../ASSETS/images/BanwoWebP.webp";
import BolaJPG from "../../../ASSETS/images/BolaJPG.jpg";
import BolaWebP from "../../../ASSETS/images/BolaWebP.webp";
import ChidiJPEG from "../../../ASSETS/images/ChidiJPEG.jpeg";
import ChidiWebP from "../../../ASSETS/images/ChidiWebP.webp";
import DanielJPG from "../../../ASSETS/images/DanielJPG.jpg";
import DanielWebP from "../../../ASSETS/images/DanielWebP.webp";
import EbukaJPG from "../../../ASSETS/images/EbukaJPG.jpg";
import EbukaWebP from "../../../ASSETS/images/EbukaWebP.webp";
import EmmanuelJPG from "../../../ASSETS/images/EmmanuelJPG.jpg";
import EmmanuelWebP from "../../../ASSETS/images/EmmanuelWebP.webp";
import GaniyatJPG from "../../../ASSETS/images/GaniyatJPG.jpg";
import GaniyatWebP from "../../../ASSETS/images/GaniyatWebP.webp";
import GbengaJPEG from "../../../ASSETS/images/GbengaJPEG.jpeg";
import GbengaWebP from "../../../ASSETS/images/GbengaWebP.webp";
import JemilatJPG from "../../../ASSETS/images/JemilatJPG.jpg";
import JemilatWebP from "../../../ASSETS/images/JemilatWebP.webp";
import MoshoodJPG from "../../../ASSETS/images/MoshoodJPG.jpg";
import MoshoodWebP from "../../../ASSETS/images/MoshoodWebP.webp";
import ReinaJPG from "../../../ASSETS/images/ReinaJPG.jpg";
import ReinaWebP from "../../../ASSETS/images/ReinaWebP.webp";
import TosinJPG from "../../../ASSETS/images/TosinJPG.jpg";
import TosinWebP from "../../../ASSETS/images/TosinWebP.webp";
import VictorJPEG from "../../../ASSETS/images/VictorJPEG.jpeg";
import VictorWebP from "../../../ASSETS/images/VictorWebP.webp";
import WilsonJPG from "../../../ASSETS/images/WilsonJPG.jpg";
import WilsonWebP from "../../../ASSETS/images/WilsonWebP.webp";
import YusufJPEG from "../../../ASSETS/images/YusufJPEG.jpeg";
import YusufWebP from "../../../ASSETS/images/YusufWebP.webp";

import ChibuzorJPG from "../../../ASSETS/images/ChibuzorJPG.jpg";
import ChibuzorWebP from "../../../ASSETS/images/ChibuzorWebP.webp";
import EmekaJPEG from "../../../ASSETS/images/EmekaJPEG.jpeg";
import EmekaWebP from "../../../ASSETS/images/EmekaWebP.webp";
import MounaJPG from "../../../ASSETS/images/MounaJPG.jpg";
import MounaWebP from "../../../ASSETS/images/MounaWebP.webp";
import MusaJPEG from "../../../ASSETS/images/MusaJPEG.jpeg";
import MusaWebP from "../../../ASSETS/images/MusaWebP.webp";
import MustaphaJPEG from "../../../ASSETS/images/MustaphaJPEG.jpeg";
import MustaphaWebP from "../../../ASSETS/images/MustaphaWebP.webp";
import RahmanJPG from "../../../ASSETS/images/RahmanJPG.jpg";
import RahmanWebP from "../../../ASSETS/images/RahmanWebP.webp";
import RichardsonJPEG from "../../../ASSETS/images/RichardsonJPEG.jpeg";
import RichardsonWebP from "../../../ASSETS/images/RichardsonWebP.webp";
import TaofeekJPEG from "../../../ASSETS/images/TaofeekJPEG.jpeg";
import TaofeekWebP from "../../../ASSETS/images/TaofeekWebP.webp";
import TolaJPEG from "../../../ASSETS/images/TolaJPEG.jpeg";
import TolaWebP from "../../../ASSETS/images/TolaWebP.webp";
import AdesolaJPG from "../../../ASSETS/images/AdesolaJPG.jpg";
import AdesolaWebP from "../../../ASSETS/images/AdesolaWebP.webp";
import RaymondJPEG from "../../../ASSETS/images/RaymondJPEG.jpeg";
import RaymondWebP from "../../../ASSETS/images/RaymondWebP.webp";


const ImageWithFallback = () => {
    // {src,fallback,type = "image/webp",...delegated}
  const FellowsPictures = [
    { src: HauwaWebP, fallback: HauwaJPEG, type: "image/webp",  },
    {
      src: ConfidenceWebP,
      fallback: ConfidenceJPEG,
      type: "image/webp",
    },
    { src: EmekaWebP, fallback: EmekaJPEG, type: "image/webp"  },
    { src: MounaWebP, fallback: MounaJPG, type: "image/webp"  },
    {
      src: BlessmeWebP,
      fallback: BlessmeJPG,
      type: "image/webp",
    },
    { src: AliyuWebP, fallback: AliyuJPEG, type: "image/webp",  },
    { src: EcheWebP, fallback: EcheJPEG, type: "image/webp"  },
    
    
       
    { src: MustaphaWebP, fallback: MustaphaJPEG, type: "image/webp"  },
    {
      src: ChizobaWebP,
      fallback: ChizobaJPEG,
      type: "image/webp",
    },
    { src: FaridaWebP, fallback: FaridaJPEG, type: "image/webp" },
    { src: GeorgeWebP, fallback: GeorgeJPEG, type: "image/webp" },
    { src: HassanWebP, fallback: HassanJPEG, type: "image/webp",  },
    {
      src: CynthiaWebP,
      fallback: CynthiaJPEG,
      type: "image/webp",
    },
   
    { src: ChibuzorWebP, fallback: ChibuzorJPG, type: "image/webp"  },
    
    { src: BongshimWebP, fallback: BongshimJPEG, type: "image/webp",  },
    { src: BarnabasWebP, fallback: BarnabasJPEG, type: "image/webp",  },
    { src: MarvelousWebP, fallback: MarvelousJPEG, type: "image/webp",  },
    { src: IsaacWebP, fallback: IsaacJPEG, type: "image/webp",  },
    { src: SquareWebP, fallback: SquareJPEG, type: "image/webp",  },
    { src: OwenWebP, fallback: OwenJPEG, type: "image/webp",  },
   
    { src: JoyWebP, fallback: JoyJPEG, type: "image/webp",  },
    {
      src: HerbalistWebP,
      fallback: HerbalistJPEG,
      type: "image/webp",
    },
    { src: MusaWebP, fallback: MusaJPEG, type: "image/webp"  },

    { src: GodswilWebP, fallback: GodswillJPEG, type: "image/webp",  },
    { src: RaymondWebP, fallback: RaymondJPEG, type: "image/webp",  },
    { src: BanwoWebP, fallback: BanwoJPEG, type: "image/webp",  },
    { src: AhmedWebP, fallback: AhmedJPEG, type: "image/webp",  },
    { src: AdaezeWebP, fallback: AdaezeJPEG, type: "image/webp",  },
    { src: ChidiWebP, fallback: ChidiJPEG, type: "image/webp",  },
    { src: BolaWebP, fallback: BolaJPG, type: "image/webp",  },
    { src: EmmanuelWebP, fallback: EmmanuelJPG, type: "image/webp",  },
    { src: EbukaWebP, fallback: EbukaJPG, type: "image/webp",  },
    { src: SusanWebP, fallback: SusanJPEG, type: "image/webp",  },
   
    { src: DanielWebP, fallback: DanielJPG, type: "image/webp",  },
    { src: GaniyatWebP, fallback: GaniyatJPG, type: "image/webp",  },
    { src: GbengaWebP, fallback: GbengaJPEG, type: "image/webp",  },
    { src: TolaWebP, fallback: TolaJPEG, type: "image/webp"  },
    
    { src: MoshoodWebP, fallback: MoshoodJPG, type: "image/webp",  },
    { src: RahmanWebP, fallback: RahmanJPG, type: "image/webp"  },
    { src: RichardsonWebP, fallback: RichardsonJPEG, type: "image/webp"  },
    { src: ReinaWebP, fallback: ReinaJPG, type: "image/webp",  },
    { src: JemilatWebP, fallback: JemilatJPG, type: "image/webp",  },
    
    { src: AdesolaWebP, fallback: AdesolaJPG, type: "image/webp"  },

    {
      src: TheodoraWebP,
      fallback: TheodoraJPEG,
      type: "image/webp",
    },
    { src: TianaWebP, fallback: TianaJPEG, type: "image/webp",  },
    { src: TaofeekWebP, fallback: TaofeekJPEG, type: "image/webp"  },

    { src: TosinWebP, fallback: TosinJPG, type: "image/webp",  },
    { src: VictorWebP, fallback: VictorJPEG, type: "image/webp",  },
    { src: UcheWebP, fallback: UcheJPEG, type: "image/webp",  },
    { src: UdemeWebP, fallback: UdemeJPEG, type: "image/webp",  },
    { src: WilsonWebP, fallback: WilsonJPG, type: "image/webp",  },
    { src: YusufWebP, fallback: YusufJPEG, type: "image/webp",  },
  ];
  return (

    FellowsPictures.map((fellowPicture, index)=>{
        return ( 
            <div data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-easing="ease-in" className={styles.pictureWrapper}>
        <picture key={index} className={styles.picture}>
        <source className={styles.webPimage} sizes="(max-width: 196px) 100vw, 16px" loading="lazy" srcSet={fellowPicture.src} type={fellowPicture.type} />
        <img className={styles.jpegImage} sizes="(max-width: 196px) 100vw, 196px" loading="lazy" src={fellowPicture.fallback} />
      </picture>
      </div>
       )
    })

    
  );
};
export default ImageWithFallback;
