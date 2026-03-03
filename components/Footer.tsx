import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-xl text-teal-700 tracking-tight block mb-4">
              Massoterapia<span className="text-teal-500">Pro</span>
            </span>
            <p className="text-sm text-gray-500 leading-relaxed">
              Portal dedicado a analisar e recomendar as melhores formações em massoterapia do mercado, ajudando você a tomar a melhor decisão para sua carreira.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-teal-600">Início</Link></li>
              <li><Link href="/melhor-curso-massoterapia-online" className="hover:text-teal-600">Melhor Curso</Link></li>
              <li><Link href="/curso-massoterapia-online-reconhecido" className="hover:text-teal-600">Reconhecimento</Link></li>
              <li><Link href="/curso-massoterapia-online-certificado" className="hover:text-teal-600">Certificado</Link></li>
              <li><Link href="/curso-massoterapia-online-vale-a-pena" className="hover:text-teal-600">Vale a Pena?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Aviso Legal</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              As informações contidas neste site têm caráter informativo. Recomendamos sempre verificar os detalhes diretamente na página oficial do curso antes de realizar a matrícula.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Massoterapia Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
