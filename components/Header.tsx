import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <Link href="/" className="font-bold text-xl text-teal-700 tracking-tight">
          Massoterapia<span className="text-teal-500">Pro</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/melhor-curso-massoterapia-online" className="hover:text-teal-600 transition-colors">Melhor Curso</Link>
          <Link href="/curso-massoterapia-online-reconhecido" className="hover:text-teal-600 transition-colors">Reconhecimento</Link>
          <Link href="/curso-massoterapia-online-certificado" className="hover:text-teal-600 transition-colors">Certificado</Link>
          <Link href="/curso-massoterapia-online-vale-a-pena" className="hover:text-teal-600 transition-colors">Vale a Pena?</Link>
        </nav>
        <Link 
          href="https://cursodemassoterapia.com/?ref=B104724293X" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Acessar Formação
        </Link>
      </div>
    </header>
  );
}
