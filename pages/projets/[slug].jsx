import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import React from 'react'
import Layout from '../../components/layout/Layout'

// 1 - connect to contentful
  // NE JAMAIS AJOUTER LE SPACE ID ET ACCESS_TOKEN ICI
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  //2 - Generates all slug of my projet in contentful
export async function getStaticPaths() {
	//1 - on récupère la data une fois que la promesse est valide
  const res = await client.getEntries({content_type: 'projets'});

  //2 - get all slugs 
  const slugs = res.items.map((slug) =>{
	  return{
		  
          params: {
                slug: slug.fields.slug
            },
	  };
  })
//3 - renvoie tout les slugs dans paths
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  }
}

//3 - RECUPERE LA DATA DU SHOW EN FONCTION DU SLUG
export async function getStaticProps({ params }) {
	//A - recupere la data un fois que la promesse est valide
  const res = await client.getEntries({
	  content_type: 'projets',
	  "fields.slug": params.slug,
	});
//B - je stock la data dans la variable projet 
	const projet = res.items;
	// console.log("projet;", projet);


  return {
    // Passed to the page component as props
    props: { projet: projet[0] },
  }
}


export default function show({projet}) {
	const {title, description, roles, skills, urlDuProjet, images, featuredImage} = projet.fields;
	console.log(projet.fields)
  return (
    <Layout 
	title= {title} 
	metaContent={`Le projet ${title} est projet fait avec ${skills}`}
	image={featuredImage.fields.file.url}
	>
        <div className='container pt-8'>
				<div className='grid grid-cols-2 items-centers gap-6'>
					<div className='pr-10'>
						<p className='text-4xl font-black text-centerd pb-10'>
							{projet.fields.title}
						</p>
						<div className="">
							{documentToReactComponents(description)}
						</div>
						{/* Roles */}
						<div className='pt-5'>
							<p className='text-indigo-500  underline underline-offset-4'>
								Rôle:
							</p>
							<ul className='italic'>
								<ul className='italic'>
								{roles.map((role) => (
									<li key={role}>{role}</li>
								))}
							</ul>
							</ul>
						</div>
						{/* stacks */}
						<div className='pt-5'>
							<p className='text-indigo-500  underline underline-offset-4'>
								Stack:
							</p>
							<ul className='italic'>
								{skills.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
						</div>
						<div className='p2 mt-6'>
							<a href={urlDuProjet} target="_blank" className=' bg-indigo-500 rounded-lg p-2 text-white' rel="noopener noreferrer">
								Voir le projet
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-3'>
						{
							images.map((image, index) => (
						<img key={index} src={image.fields.file.url} alt={`NicolasHb Porte-folio ${title}`} />
							))}
					</div>
				</div>
			</div>

    </Layout>
  )
}


