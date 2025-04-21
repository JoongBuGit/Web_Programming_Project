"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // 배경색 상태 관리
  const [backgroundColor, setBackgroundColor] = useState("linen");
  // 이미지와 설명 상태 관리
  const [imageSrc, setImageSrc] = useState("");
  const [description, setDescription] = useState("");
  // 현재 시간 상태 관리
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // 시간 업데이트를 위한 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 정리
  }, []);

  // 배경색 변경 함수
  const pink = () => setBackgroundColor("pink");
  const lightblue = () => setBackgroundColor("lightblue");
  const yellow = () => setBackgroundColor("yellow");
  const reset = () => setBackgroundColor("linen");

  // 이미지와 설명 표시/숨김 함수
  const showHtml = () => {
    setImageSrc("/image/html.png");
    setDescription("<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다");
  };
  const showCss = () => {
    setImageSrc("/image/css.png");
    setDescription("<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다");
  };
  const showJs = () => {
    setImageSrc("/image/javascript.png");
    setDescription(
      "<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다"
    );
  };
  const hide = () => {
    setImageSrc("");
    setDescription("");
  };

  // body 스타일 적용
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Full Stack Developer</h1>

      <section className="w-full max-w-2xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold">웹프로그래밍. Web Programming!!!!</h1>
          <h2 className="text-xl mt-2">정보보호학과, 송명석의 홈페이지</h2>

          <h3 className="mt-4">
            웹 개발자를 위한 온라인 매뉴얼:{" "}
            <Link href="https://www.w3schools.com/" className="text-blue-500 hover:underline">
              W3Schools
            </Link>
          </h3>

          <p className="mt-2">
            웹프로그래밍의 3가지 요소:{" "}
            <Link href="https://www.w3schools.com/html/default.asp" className="text-blue-500 hover:underline">
              HTML5
            </Link>{" "}
            |{" "}
            <Link href="https://www.w3schools.com/css/default.asp" className="text-blue-500 hover:underline">
              CSS3
            </Link>{" "}
            |{" "}
            <Link href="https://www.w3schools.com/js/default.asp" className="text-blue-500 hover:underline">
              Javascript
            </Link>
          </p>

          {/* <p className="mt-2">현재시간: <span>{currentTime}</span></p> */}

          <hr className="my-4" />

          <p className="mt-2">
            배경색 바꾸기:
            <button onClick={pink} className="ml-2 px-3 py-1 bg-pink-200 rounded hover:bg-pink-300">
              Pink
            </button>
            <button onClick={lightblue} className="ml-2 px-3 py-1 bg-blue-200 rounded hover:bg-blue-300">
              Lightblue
            </button>
            <button onClick={yellow} className="ml-2 px-3 py-1 bg-yellow-200 rounded hover:bg-yellow-300">
              Yellow
            </button>
            <button onClick={reset} className="ml-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
              Reset
            </button>
          </p>

          <p className="mt-2">
            배워봅시다:
            <button
              onMouseOver={showHtml}
              onMouseOut={hide}
              className="ml-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              HTML5
            </button>
            <button
              onMouseOver={showCss}
              onMouseOut={hide}
              className="ml-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              CSS3
            </button>
            <button
              onMouseOver={showJs}
              onMouseOut={hide}
              className="ml-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              Javascript
            </button>
          </p>

          <hr className="my-4" />

          <div className="mt-4">
            {imageSrc && (
              <Image src={imageSrc} width={200} height={200} alt="programming language" />
            )}
            <p dangerouslySetInnerHTML={{ __html: description }} className="mt-2"></p>
          </div>
        </div>
      </section>
    </div>
  );
}