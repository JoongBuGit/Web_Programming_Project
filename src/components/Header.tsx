import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>

            {/* 네비게이션바 */}
            <div id="navbar">
                <div className='navbar_left'>
                    <Link href={"/"} className='navbar_left_Link'>

                    <Image className='image_s_logo' src={"/img/s_logo.jpg"} width={50} height={50} alt="project image" />
                    <span className='image_s_loge_text'>SMS</span>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li><Link href={"/"}>Home</Link></li>
                        {/* <li><Link href={"/introduction"}>Introduction</Link></li> */}
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                        <li><Link href={"/team"}>Team</Link></li>
                        <li><Link href={"/project_list"}>Project</Link></li>



                        {/* <li><Link href={""}>Login</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
