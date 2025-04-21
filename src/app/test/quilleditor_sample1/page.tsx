'use client'

import React, { useEffect, useState } from 'react'
// import QuillEditor from "@/components/QuillEditor_test"
import QuillEditor_test from "@/components/QuillEditor_test"
import Buttion from '@/components/Button/Button';


// Quuil 공식 문서에서 가져온 셈플 코드 이다.


export default function test() {

    const [editorHtml, setEditorHtml] = useState('');

    const test_data = [{"id":"u1","pw":"uu"},{"id":"u2","pw":"uu2"}]

    const [data, setData] = useState([])


    
    

    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/all");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);

                
            } catch (error) {
                console.error("Fetch error: ", error);
            }

            
        }


        fetchData();


    }, [])

    const event = () => {
        alert("성공")
        
        
    }   
    

 const postData = async () => {
            try {
                const response = await fetch("http://localhost:8080/postData", {
                    method: "POST" , 
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({
                        ID: "Kim",
                        PW: "qq"
                    }),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                // setData(result);
            } catch (error) {
                console.error("Fetch error: ", error);
            }

            
        }

    



    return (
        <div>
            <form action={"http://localhost:8080/all"}>
            {/* <QuillEditor/> */}
            {/* <QuillEditor/> */}

            <QuillEditor_test/>

            <button type='submit'>완료</button>
            <br></br>

            <button >no submit</button>

            <br></br>

            {/* <Buttion onClick={event}>취소</Buttion> */}
            </form>

            <Buttion onClick={postData}>버튼</Buttion>

            <div>
                서버 응답 : 
                {data.length}
            </div>

            <div>
                테스트 데이터 : 
                {test_data.length}
            </div>


        
        </div>
    )
}
