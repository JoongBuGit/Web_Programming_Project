import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function page() {

    return (
        <div className='grid place-items-center mt-5'>

            <h1 className="text-4xl">Team Introduction</h1>

            <div className="flex flex-row gap-8">
                <div className="flex flex-col items-center text-left mr-10">
                    <Image src={"/img/profile_image.png"} width={300} height={300} alt="project image"></Image>
                    <br></br>
                    <div>김용섭</div>
                    <br></br>
                    <Link href={"https://github.com/yongseop712"}>깃허브 주소 : https://github.com/yongseop712</Link>
                </div>

                <div className="flex flex-col items-center text-left ml-10">
                    <Image src={"/img/profile_image.png"} width={300} height={300} alt="project image"></Image>
                    <br></br>
                    <div>송명석</div>
                    <br></br>
                    <Link href={"https://github.com/JoongBuGit"}>깃허브 주소 : https://github.com/JoongBuGit</Link>
                </div>
            </div>


            <div className="flex flex-row gap-8 mt-10">

                <div className="flex flex-col items-center text-left mr-10">
                    <Image src={"/img/profile_image.png"} width={300} height={300} alt="project image"></Image>

                    <br></br>
                    <div>신준혁</div>
                    <br></br>
                    <Link href={"https://github.com/JunHyeokShin"}>깃허브 주소 : https://github.com/JunHyeokShin</Link>
                </div>

                <div className="flex flex-col items-center text-left ml-10">
                    <Image src={"/img/profile_image.png"} width={300} height={300} alt="project image"></Image>

                    <br></br>
                    <div>최정빈</div>
                    <br></br>
                    <Link href={"https://github.com/Choejungbeen"}>깃허브 주소 : https://github.com/Choejungbeen</Link>
                </div>

            </div>



        </div>
    )
}
