import Link from 'next/link';
import { format } from 'date-fns';


type Artigo = {
  slug: string;
  titulo: string;
  autor: string;
  data: string; // ISO
  descricao: string;
};


// Importa JSON local (Server Component) --- caminho relativo ao arquivo
import artigos from '../data/artigos.json';


export default async function HomePage() {
  // Como este é um Server Component, podemos trabalhar async se precisarmos
  const lista: Artigo[] = artigos as Artigo[];


  return (
    <section>
      <h2>Artigos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lista.map((a) => (
          <li key={a.slug} style={{ marginBottom: 20 }}>
            <article>
              <h3 style={{ margin: 0 }}>
                <Link href={`/artigos/${a.slug}`}>{a.titulo}</Link>
              </h3>
              <p style={{ margin: '0.25rem 0' }}>{a.descricao}</p>
              <small>
                Por {a.autor} — {format(new Date(a.data), 'dd/MM/yyyy')}
              </small>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}