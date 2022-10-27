import { createClient } from "contentful";
import Head from "next/head";
import Card from "../components/cards/Card";
import CardYellow from "../components/cards/CardYellow";
import Layout from "../components/layout/Layout";
import Navbar from "../components/navigation/Navbar";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionFormation from "../components/SectionFormation";
import SectionProjet from "../components/SectionProjet";
import Title from "../components/title";


export default function Home({projets}) {
  // console.log(projets);
  return (
    <Layout title= "Accueil" metaContent="Bienvenue sur mon porte-folio. je m'appel NicolasHb et je suis développeur web. Développeur React. Développeur Laravel.">
      
      <div className="bg-black">
        <Title title="Porte Folio" />
        {/* à propos */}
        <div className="pb-5">
          <SectionAbout />
        </div>
        {/* Compétences/Skill */}
        <div className="">
          <div className="grid grid-cols-3 gap-2 px-5">
            <CardYellow
              title="CSS & HTML"
              description="lorem15"
              img="CSS3_and_HTML5_logos.png"
            />
            <Card title="SCSS" description="lorem15" img="Sass_Logo.png" />
            <Card
              title="Bootstrap"
              description="lorem15"
              img="Bootstrap_logo.png"
            />
            <Card title="PHP" description="lorem15" img="Php.png" />
            <Card title="MYSQL" description="lorem15" img="mysql-logo.png" />
            <CardYellow title="GIT" description="lorem15" img="Git_icon.png" />
            <Card title="LARAVEL" description="lorem15" img="Laravel.png" />
            <CardYellow
              title="REACT"
              description="lorem15"
              img="react-logo.png"
            />
            <Card title="GOLANG" description="lorem15" img="Go-Logo.png" />
            <CardYellow
              title="WORDPRESS"
              description="lorem15"
              img="Wordpress-Logo.png"
            />
            <Card
              title="TAILWINDS"
              description="lorem15"
              img="tailwindlogo.png"
            />
          </div>
          {/* Projet */}
          <div className="">
            <SectionProjet projets={projets} />
          </div>
          {/* formation/cursus */}
          <div className="">
            <SectionFormation />
          </div>
          {/* Contact */}
          <div className="">
            <SectionContact />
          </div>
          {/* FAQ */}
        </div>
      </div>
    </Layout>
  );
}


export async function getStaticProps() {
  // 1 - connect to contentful
  // NE JAMAIS AJOUTER LE SPACE ID ET ACCESS_TOKEN ICI
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // console.log(client);
  //2 - on récupère la data une fois que la promesse est valide
  const res = await client.getEntries({
    content_type: 'projets',
    limit: 8,
    order: "sys.createdAt",
  });
  // console.log(res)
  //3 - on envoi la data dans le props de la page
  return {
    props: {
      projets: res.items,
    }, // will be passed to the page component as props
  };
}