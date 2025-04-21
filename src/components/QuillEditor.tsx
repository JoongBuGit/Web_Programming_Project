'use client'

import React, { useEffect, useRef, useState } from 'react'

import 'quill/dist/quill.snow.css'; // Include stylesheet
import Quill from 'quill';
import Buttion from './Button/Button';
import Link from 'next/link';


const QuillEditor = ({ onSubmit, state, delta }) => {

  const quillref = useRef(null)
  const [quill, setQuill] = useState(null)

  // 에디터가 편집모드인지 읽기모드인지 확인하는 변수 
  const editor_state = state

  // html에 뿌려줄 delta 데이터 
  const delta_data = delta

  // 툴바 기능 설정
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];


  // 첫 렌더링 부분
  useEffect(() => {

    // 읽기 모드
    if (editor_state == "readOnly") {
      const quillInstance = new Quill(quillref.current, {
        theme: 'snow',
        modules: {
          toolbar: ""
        }
      })

      console.log("넘어온 데이터 : " + delta_data)

      // 받아온 quill delta 데이터 뿌려주기
      quillInstance.setContents(delta_data)
      quillInstance.enable(false) // 편집 기능 막기

      // 만든 Quill 객체를 useState 변수에 넣기
      setQuill(quillInstance)


    } else {  // 편집 모드
      const quillInstance = new Quill(quillref.current, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        }
      })

      // 만든 Quill 객체를 useState 변수에 넣기
      setQuill(quillInstance)
    }

  }, [])



  // Post 버튼을 눌렀을 때 서버로 quill delta 데이터를 보내는 메소드
  const handleSubmit = () => {
    if (quill) {
      const delta = quill.getContents(); // Delta 객체 가져오기
      const jsonDelta = JSON.stringify(delta); // JSON 문자열로 변환



      const jsonDeltaString = {
        "blog_description": jsonDelta
      }

      const jsonDeltaString2 = {
        "blog_description": "hi"
      }

      const ops = {
        "ops": [
          {
            "insert": "This is text\n\n\n"
          },
          {
            "insert": {
              "image": "data:image/jpeg;base64,/+g7JXMzUtSzBcbHaM+nn19b+gTFW/+UfAmde8VjSzzkPUrThRnWXU1NnQURR/j90/CSG8fh/j+E6I/9k="
            }
          },
          {
            "insert": "\n\nThis is image\n\n\n"
          },
          {
            "insert": {
              "video": "https://www.youtube.com/embed/ekr2nIex040?showinfo=0"
            }
          },
          {
            "insert": "\nThis is video\n\n\n\n"
          }
        ]
      }


      const json2 = {
        "blog_description": JSON.stringify(delta)
      }
      const json_string = JSON.stringify(json2)
      
      onSubmit(json_string); // 부모 컴포넌트의 onSubmit 호출해서 서버로 데이터 보내기

      // alert(jsonDeltaString.blog_description)  // alert로 데이터 형식을 확인할 수 있다

      alert("전송성공")
      console.log("스트링 에디터 데이터 : " + jsonDeltaString.blog_description)


    }
  };


  const handleSubmit_test = () => {
    if (quill) {
      const delta = quill.getContents(); // Delta 객체 가져오기
      const jsonDelta = JSON.stringify(delta); // JSON 문자열로 변환

      alert(jsonDelta.length)
      console.log("스트링 에디터 데이터 : " + jsonDelta)
      console.log("에디터 데이터 : " + delta)

      let stringJsondata = "{}"
      console.dir("가공한 에디터 데이터 : " + jsonDelta)

      // alert(jsonDelta)  // alert로 데이터 형식을 확인할 수 있다
      // onSubmit(jsonDelta); // 부모 컴포넌트의 onSubmit 호출해서 서버로 데이터 보내기



      const data = {
        name: '톰',
        age: 27,
        major: "programmer"
      }

      const data2 = { "ops": [{ "insert": "This is test text\n" }] }


      const data3 = { "ops": [{ "insert": "I want to sleep" }, { "attributes": { "align": "center", "header": 1 }, "insert": "\n" }, { "insert": "\n" }, { "insert": { "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA0vSURBVHhe7Z1JrBTFH8frAYUQOBEAQRNoiD8SFSh0fPyVsMDh5wnvWwFEZRZNg/gfmHhencv3xMkAAAAASUVORK5CYII=" } }, { "insert": "\n\t\t\n" }, { "attributes": { "size": "large", "italic": true }, "insert": "this is image" }, { "insert": "\n\n\n" }, { "insert": { "video": "https://www.youtube.com/embed/ekr2nIex040?showinfo=0" } }, { "attributes": { "bold": true }, "insert": "this is video" }, { "insert": "\n" }] }


      const json_data2 = JSON.stringify(data2);
      const json_data3 = JSON.stringify(data3);

      // alert(json_data)
      // console.log("Quill Delta : " + data)
      // console.log(delta)
      // console.log("Quill 제이슨화 : " + jsonDelta)

      console.log("")


      // console.log("자바 객체 : " + data)
      // console.log(data)
      // console.log("제이슨화 : " + json_data)

      console.log("Origin DATA : " + data3)
      console.log("Json DATA : " + json_data3)

      console.log("")

      const jsonDelta2 = {
        "blog_description": "{\"ops\":[{\"insert\":\"Thisistext\\n\\n\\n\"},{\"insert\":{\"image\":\"data:image/jpeg;base64,/+g7JXMzUtSzBcbHaM+nn19b+gTFW/+UfAmde8VjSzzkPUrThRnWXU1NnQURR/j90/CSG8fh/j+E6I/9k=\"}},{\"insert\":\"\\n\\nThisisimage\\n\\n\\n\"},{\"insert\":{\"video\":\"https://www.youtube.com/embed/ekr2nIex040?showinfo=0\"}},{\"insert\":\"\\nThisisvideo\\n\\n\\n\\n\"}]}"
      }
      console.log("마지막 Json DATA : " + jsonDelta2)




      // onSubmit(jsonDelta); // 부모 컴포넌트의 onSubmit 호출해서 서버로 데이터 보내기



      const jsonDeltaString = {
        "blog_description": jsonDelta
      }


      onSubmit(jsonDeltaString); // 부모 컴포넌트의 onSubmit 호출해서 서버로 데이터 보내기
    }
  };



  return (
    <div>
      {/* Quill Editor가 들어가는 div 태그 */}
      <div ref={quillref} style={{ height: '600px' }}></div>

      {editor_state== "editor" &&  <Link href={"/project_list"}><Buttion onClick={handleSubmit} idname={"quill_button"} >Post</Buttion></Link>

    }

      {/* <Link href={"/project_list"}><Buttion onClick={handleSubmit} idname={"quill_button"} >Post2</Buttion></Link> */}

    </div>
  )

}

export default QuillEditor;
