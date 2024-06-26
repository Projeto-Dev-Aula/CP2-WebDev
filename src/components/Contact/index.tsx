import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '/public/assets/images/contact.jpg'

const Contact = () => {
  return (
    <div className='bg-[#D9EDB4]'>
    <div id='contact' className='container m-auto px-2 pt-16 w-full'>
      <p className='uppercase tracking-widest text-[#5651e5] text-xl'>Contato</p>
      <h2 className='py-4 capitalize'>entrar em contato</h2>
      <div className='md:grid lg:grid-cols-5 gap-8'>
        <div className='bg-white col-span-3 lg:col-span-2 w-full h-full md:shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full'>
            <div>
              <Image className='rounded-xl w-full hover:scale-105 ease-in duration-300 mb-4' src={ContactImg} alt="/"/>
            </div>

            <div className="text-center lg:text-left">
              <h2 className='py-2 capitalize'>Real Tech</h2>
              <p className='capitalize'>Desafios são oportunidades para inovar</p>
              <p className='py-4'>Estamos disponiveis de segunda a sexta! Entre em contato e vamos conversar.</p>
            </div>

            <div>
              <p className='pt-8 text-center lg:text-left uppercase text-[#5651e5]'>conecte-se conosco</p>

              <div className='flex items-center justify-between py-4'>
                <a href="https://github.com/Projeto-Dev-Aula" rel="noreferrer" target="_blank" aria-label='Github'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>

                <a href="mailto:gabriel.2507@gmail.com" aria-label='e-mail'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full mt-8 md:mt-0 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-white">
          <div className="p-4">
            <form action="https://getform.io/f/rbeqoqeb" method='POST'>
              <div className='md:grid md:grid-cols-2 gap-4 py-2 w-full'>

                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2' htmlFor='name'>nome completo</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='nome' id='name'/>
                </div>

                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2' htmlFor='phone'>número de telefone</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='númeroTelefone' id='phone'/>
                </div>
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor='e-mail'>e-mail</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="email" autoComplete='off' name='email' id='e-mail'/>
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor='subject'>assunto</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none' type="text" autoComplete='off' name='assunto' id='subject'/>
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor='text'>mensagem</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 focus:outline-none' rows={10} name='mensagem' id='text'></textarea>
              </div>

              <button className='w-full p-4 text-gray-100 mt-4'>enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center py-12'>
        <Link href='/'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
            <HiOutlineChevronDoubleUp className='text-[#000024]' size={30}/>
          </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Contact
