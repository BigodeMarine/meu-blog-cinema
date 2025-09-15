import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';


type Artigo = {
    slug: string;
    titulo: string;
    autor: string;
    data: string;
    descricao: string;
    conteudo: string;
};


import artigos from '../../../data/artigos.json';


export const dynamic = 'force-static';


export async function generateStaticParams() {
    const lista = artigos as Artigo[];
    return lista.map((a) => ({ slug: a.slug }));
}


export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const lista = artigos as Artigo[];
    const artigo = lista.find((a) => a.slug === params.slug);


    if (!artigo) {
        return {
            title: 'Artigo não encontrado',
            description: 'Artigo não encontrado neste blog.'
        };
    }


    return {
        title: `${artigo.titulo} — Meu Blog`,
        description: artigo.descricao,
        
        openGraph: {
            title: artigo.titulo,
            description: artigo.descricao,
        }
    } as Metadata;
}


export default async function ArtigoPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const lista = artigos as Artigo[];
    const artigo = lista.find((a) => a.slug === params.slug);


    if (!artigo) notFound();


    const paragrafos = artigo.conteudo.split('\n\n');


    return (
        <article>
            <h2>{artigo.titulo}</h2>
            <p style={{ margin: 0 }}>
                <small>
                    Por {artigo.autor} — {format(new Date(artigo.data), 'dd/MM/yyyy')}
                </small>
            </p>


            <section style={{ marginTop: '1rem' }}>
                {paragrafos.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </section>
        </article>
    );
}