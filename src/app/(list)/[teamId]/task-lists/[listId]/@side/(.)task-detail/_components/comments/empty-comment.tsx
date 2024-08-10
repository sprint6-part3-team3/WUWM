"use client";

import Lottie from "lottie-react";

import EmptyAnimation from "@/public/assets/lotties/nocomment.json";

const EmptyComment = () => (
  <div className="mt-50 flex flex-col items-center gap-100">
    <Lottie
      style={{ width: "80%", height: "80%", maxWidth: "400px" }}
      animationData={EmptyAnimation}
    />
    <span className=" text-16-700 text-text-disabled">
      아직 작성된 댓글이 없습니다.
    </span>
  </div>
);

export default EmptyComment;
