import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  reactStrictMode: false  // useEffect가 두번 호출되서 랜더링이 2번되는것을 막기위함 -> 편집기가 중복됨
  
};

export default nextConfig;
