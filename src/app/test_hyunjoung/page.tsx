'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

//import "@/app/test/page.css"
import "@/app/test_hyunjoung/page.css"


export default function page() {

    // document.getElementById('event_btn').addEventListener('click', function () {
    //     alert("hi") 
    // })

    function changeImage() {
                   alert("hi") 
    }

    useEffect(() => {
        const button = document.getElementById('event_btn');
        if (button) {
            button.addEventListener('click', function () {
                const lastImg = document.getElementById('last_img');
                const t = document.getElementById('last_text');
                if (t) {
                    t.innerText = "씻고온 현정이";
                }
                if (lastImg) {
                    // lastImg.src = "/img/4.jpg"
                }
            });
        }

        // Cleanup function to remove the event listener
        return () => {
            if (button) {
                button.removeEventListener('click', function () {
                    alert("hi");
                });
            }
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행
    return (
        
        <div >
            <h1>현정이 왜 안씻지?</h1>



            <div className="clear body">




                <div>
                    <ul>

                        <li><p>현정이 안씻고 뭐해</p></li>
                        <li>          <Image src={"/img/1.jpg"} width={300} height={300} alt="project image"></Image>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>




                    <p>안씻고 멍 때리는 현정이</p>

                    <Image src={"/img/2.jpg"} width={800} height={500} alt="project image"></Image>
                    <p>언능 씻구와!!</p>


                    <Image id='last_img' src={"/img/3.jpg"} width={800} height={500} alt="project image"></Image>
                    <p id='last_text'>힝..</p>



                </div>




            </div>

           

            <div className=" div_btn">
                <button type='button' id='event_btn' className="button2" > 강재로 씻기기 버튼</button>
            </div>




        </div>
    )
}
