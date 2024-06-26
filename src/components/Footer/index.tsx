import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 relative bottom-0">
      <p className="md:text-xl font-bold">Todos os direitos reservados &copy; { currentYear }</p>
      <div className='flex items-center justify-center gap-5 pt-4'>
        <a href="https://github.com/Projeto-Dev-Aula" rel="noreferrer" target="_blank" aria-label='Github'>
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </div>
        </a>

        <a href="mailto:gabriel.2507@gmail.com" aria-label='e-mail'>
          <div
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
          </div>
        </a>

        <a href="tel:+55110028922" target="_blank" rel="noreferrer">
          <div
            className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaPhoneAlt />
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
