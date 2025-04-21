import Link from 'next/link'
import React from 'react'

import { FaGithub } from "react-icons/fa";


export default function footer() {
  return (
    <footer className='footer'>

      <ul className='footer-links'>
        <li className='footer-links-li-github'>
          <Link href="https://github.com/"> <FaGithub className='footer-links-li-github-icon' /> Github Link</Link>
        </li>

        <li>
          <Link href="/">Email : smsportfoliosite@gmail.com</Link>
        </li>

        <li>
          Copyright &copy; 2024 SMS
        </li>
      </ul>
    </footer>

  )
}
