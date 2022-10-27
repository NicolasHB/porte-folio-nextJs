import Link from 'next/link';
import React from 'react'
import CardProjet from './cards/CardProjet'

export default function SectionProjet({projets}) {
    console.log(projets);
  return (
    <div className=''>
        <h2 className='text-4xl text-yellow-400 p-10 underline'>Projet</h2>
        <div className="p-10 grid grid-cols-4 gap-3">
            {projets.map((projet)  => (
                    
            <Link href={`projets/${projet.fields.slug}`}  key={projet.sys.id}>
                <a>
                    <CardProjet
                    projet={projet}          
                    />
                </a>
            </Link>
                ))
            }
            {/* exemple possible pour la cards (title={projet.fields.title}) */}
            {/* Video store */}
            {/* <CardProjet
             title="VideoStore"
             img="videostore1.png"
             description="site qui permet d'inseré et de gérer une bibliotheque de film "
             skill={["Laravel", "tailwind", "SQL"]}
            />
            <CardProjet
             title="Volvo"
             img="videostore1.png"
             description="reproduction du site de Volvo"
             skill="Laravel"
             skill2="tailwind"
            />
             */}
            
            
        </div>
    </div>
  )
}
