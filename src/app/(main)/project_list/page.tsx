'use client'

import Image from "next/image";

import Link from "next/link";
import Buttion from "@/components/Button/Button";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import Project_List_Item from "@/components/Project_List_Item/Project_List_Item";


export default function Page() {

  // 서버에서 프로젝트 작성글이 몇개인지 가져올 변수이다
  const list_num_ref = useRef(0);

  // 서버에서 받아올 프로젝트 리스트를 다룰 useState
  const [projectList, setProjectList] = useState([]);

  // 처음 랜더링하는 부분
  useEffect(() => {

    // 저장되어 있는 프로젝트 게시글 가져오기
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/getProjectList");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result_json = await response.json();

        const result_string = JSON.stringify(result_json);

        console.log("데이터: " + result_json)
        console.log("데이터 string: " + result_string)


        console.log("데이터 DTO 객체 길이: " + response)
        console.log("데이터 json 길이: " + result_json.length)
        console.log("데이터 string 길이: " + result_string.length)


        for (var i = 0; i < result_json.length; i++) {
          console.log("데이터 json id: " + result_json[i].id)
          console.log("데이터 json 본문: " + result_json[i].blog_description)
        }

        setProjectList(result_json)
        console.log("데이터 setProjectList 본문: " + projectList)

        // 서버에서 받아온 문자열 json 데이터를 자바스크립트 객체로 변환
        // const deltaObject = JSON.parse()


        // setData(result);
      } catch (error) {
        console.log("에러: " + error)
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();

  }, [])


  return (
    <div>
      <h1>Project Page</h1>

      <div className="flex flex-col justify-center items-center">

        <div className="text-4xl mb-4">Team Project</div>

        <div>GitHub Repository : </div>

        <div>Demo Website : </div>

        <div className="text-3xl mt-6">Preview</div>



      </div>




      <div className="flex justify-center items-center h-screen">



        <Image src="/image/team_project.png" width={800} height={500} alt="팀 프로젝트 이미지"></Image>

      </div>

      <div className=" div_btn">
        <Link href="/project_add_and_modify"><Buttion onClick={() => { }}>New Project</Buttion></Link>
      </div>


      {/* <Buttion onClick={() => { alert(list_num_ref.current) }}>버튼</Buttion> */}

      <div>
        {
          projectList.map((data, index) => (



            <Project_List_Item key={index} id={data.id} />

            // <div key={index}>data : {data.id}</div>
          ))

        }

      </div>

    </div>

  );
}
