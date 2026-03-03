import Link from 'next/link';

interface CTAProps {
  text?: string;
  href?: string;
  className?: string;
}

export default function CTA({ text = "Conhecer a Formação Completa", href = "https://cursodemassoterapia.com/?ref=B104724293X", className = "" }: CTAProps) {
  return (
    <div className={`my-10 text-center ${className}`}>
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-teal-600 rounded-xl hover:bg-teal-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        {text}
      </Link>
      <p className="text-xs text-gray-500 mt-3">Acesso imediato após a confirmação da inscrição.</p>
    </div>
  );
}
