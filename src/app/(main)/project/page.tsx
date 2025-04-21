// 'use client'

// import QuillEditor from '@/components/QuillEditor';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// export default function project() {

//   // url 데이터 가져오기
//   const searchParams = useSearchParams();
//   const project_id = searchParams.get("project_id");

//   const [delta, setdelta] = useState(null);

//   // const [result, setresult] = useState(null);

//   // 처음 랜더링하는 부분
//   useEffect(() => {

//     // 저장되어 있는 프로젝트 게시글 가져오기
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/getProject?project_id=${project_id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         // await setresult( response.json);

//         const result_json = await response.json();
//         const result_string = JSON.stringify(result_json);

//         const delta_json = JSON.parse(result_json.blog_description)

//         setdelta(delta_json.ops)

//         // setdelta(result_json.blog_description.ops)
//         // setresult(result_json);


//         const data = [
//           { insert: '바뀐 텍스트 입니다 ' },
//           { insert: '!', attributes: { bold: true } },
//           { insert: '\n' },
//         ]
//         // setdelta(data)

//         console.log("바꿨는지 확인하기" + delta)





//         // setdelta(result_json);



//         // const data_json = JSON.stringify(data)

//         console.log("데이터: json" + result_json.blog_description)
//         console.log("데이터 string: " + result_string)

//         console.log("데이터 DTO 객체 길이: " + response)
//         console.log("데이터 json 길이: " + result_json.length)
//         console.log("데이터 string 길이: " + result_string.length)


//       } catch (error) {
//         console.log("에러: " + error)
//         // setError(error);
//       } finally {
//         // setLoading(false);
//       }

//     };


//     console.log("받아온 id 데이터 : " + project_id);

//     fetchData();
//     console.log("바꿨는지 확인하기2" + delta)

//   }, [])


//   useEffect(() => {
//     if (delta) {
//       console.log("delta 값 바뀜: " + delta) 
//     }
//   }, [delta]);


//   return (

//     <div>
//       <h1>Project Title</h1>


//       {/* <QuillEditor onSubmit={() => { }} state={"readOnly"} delta={delta} /> */}

//         {delta && <QuillEditor onSubmit={() => { }} state={"readOnly"} delta={delta} />}

//       {console.log("몇번째")}

//     </div>

//   )
// }
