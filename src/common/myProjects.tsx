import { ProjectsTS } from "../interfaces/ProjectsTS";

export const myProjects: ProjectsTS[] = [
  {
    id: 1,
    title: "ReactJS ohjelmia",
    description: `Sivusto, josta löytyy kaikki ReactJS-kirjaston avulla luodut ohjelmat, jotka olen tehnyt tähän 
    mennessä. Yhdeltä ohjelmalta löytyy tällä hetkellä myös backend, joka on luotu Node.js tekniikalla.         
    Tämä sivusto löytyy Googlen Firebase-alustalta.`,
    link: "https://react-projects-3265b.firebaseapp.com/",
    image: require("../skills_3.png"),
  },
  {
    id: 2,
    title: "Somepassi",
    description: `Koulutukseen liittyvä opinnäytetyö. 
    Tämä tietovisatyyppinen sovellus on osa Digivoimaa-hanketta,
    jonka tarkoitus on vahvistaa syrjäytymisvaarassa olevien nuorten digitaalista
    hyvinvointia. Ohjelmointi on tehty puhtaasti HTLM-, CSS- ja Javascript- kielillä. Tämä sivusto
    on myös responsiivinen tabletilla ja kännykällä.`,
    link: "https://somepassi.herokuapp.com/",
    image: require("../skills_1.png"),
  },
  {
    id: 3,
    title: "Reseptejä eKirja",
    description: `eKirja, joka sisältää vähäkalorisia reseptejä. 
    Kirja on tehty Adobe InDesignillä, Illustratorilla ja Photoshopilla.`,
    link: "https://drive.google.com/file/d/1rmFtTt0Wry1ZysCn1FkP3-UA0oANYq8p/view?usp=sharing",
    image: require("../skills_2.png"),
  },
];
