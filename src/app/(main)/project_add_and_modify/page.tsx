'use client'

import React from 'react'

import QuillEditor from "@/components/QuillEditor"
import Buttion from '@/components/Button/Button'

import "@/components/Project_List_Item/Project_List_Item.css"
import ImageUpload from '@/components/ImageUpload'


export default function page() {

  const cancel = () => {
    window.history.back()
  }

  // const thumbnaim_upload = () => {
  //   alert("업로드 성공")
  // }


  // 서버로 보내는 Fetch 코드
  const handleSubmit = (jsonDelta) => {
    // AJAX 요청
    fetch("http://localhost:8080/createPortfolio", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'text/plain;charset=UTF-8'
      },
      body: jsonDelta
      // body: json_string


    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      // .then(response => {
      //   console.log("성공", response)
      // })
      // .catch((error) => {
      //   // 에러코드 로그
      //   // console.error('Error:', error);
      // });
  };

  // 서버로 보내는 Fetch 코드
  // const handleSubmit_test = (jsonDelta) => {
  //   // AJAX 요청
  //   fetch("http://localhost:8080/createPortfolio", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'

  //     },

  //     body: "{ \"blog_description\": " + jsonDelta + "}"
  //   })
  //     // .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };



  return (
    <div>
      <h1>New Project Page</h1>

      {/* <QuillEditor onSubmit={handleSubmit}/> */}

     

      <div>
        <QuillEditor onSubmit={handleSubmit} state={"editor"} delta={""} />
        <Buttion onClick={cancel}>Cancel</Buttion>

        {/* <Buttion onClick={upload}>upload</Buttion> */}
      </div>


      <div>
            <div >
                <div className="clear">
                    <div>

                        <div className="thumbnail_left">
                            <ImageUpload type={"thumbnail1"} />
                            <div className="text_of_thumbnail">
                                <input className='bg-slate-300' type='text' placeholder='Title'></input>
                                <input id='description' className='bg-slate-300' type='textarea' placeholder='description'></input>
                            </div>
                        </div>

                        <ImageUpload type={"thumbnail2"} />


                    </div>
                </div>
            </div>
        </div>


        {/* <Buttion onClick={thumbnaim_upload}>Thumbnail Post</Buttion>
        <Buttion onClick={cancel} idname={"cancel"}>Cancel</Buttion> */}



    </div>
  )
}








