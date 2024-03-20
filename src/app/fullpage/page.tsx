"use client";

import React, { useEffect, useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import Image from "next/image";
import clsx from "clsx";

const FullPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <div className="h-[calc(100dvh-60px)] w-full overflow-hidden">
      <FullpageContainer
        transitionDuration={1100}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}>
        <FullpageSection name="1">
          <div className="h-[calc(100dvh-60px)] bg-green-500">
            <div className="flex flex-col h-full">
              <div>1page</div>
              <button type="button" onClick={() => setActiveIndex(3)}>
                4page로 바로가기
              </button>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection name="2">
          <div className="h-[calc(100dvh-60px)] bg-teal-300">
            <div>2page</div>
          </div>
        </FullpageSection>
        <FullpageSection name="3">
          <div className="h-[calc(100dvh-60px)] flex justify-center bg-blue-400">
            <div className="w-[1050px] flex justify-between pt-[160px] ">
              <div className="">
                <Image alt="img" src={"next.svg"} width={300} height={300} />
              </div>
              <div className="text-[26px] flex flex-col gap-3">
                <div>이 페이지는 Next JS 로 만들었다</div>
                <div>어쩌구 저쩌구 어쩌구 저쩌구</div>
                <div>
                  {"Versel 은 '베르셀'로 읽어야 하는가 '버셀'로 읽어야하는가"}
                </div>
                <div>대충 왼쪽엔 이미 이미지 넣고 회사설명처럼 블라블라</div>
              </div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection name="4">
          <div className="h-[calc(100dvh-60px)] bg-red-400">
            <div className="flex flex-col h-full">
              <div>4page</div>
              <button type="button" onClick={() => setActiveIndex(0)}>
                1page로 바로가기
              </button>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection isAutoHeight>
          <footer className="h-[200px]">여기는 푸터</footer>
        </FullpageSection>
      </FullpageContainer>

      <span className="border border-solid border-yellow-300 w-4 h-4"></span>
    </div>
  );
};

export default FullPage;
