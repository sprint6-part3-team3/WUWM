/* eslint-disable import/no-cycle */

"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Modal } from "@/components/common";
import { useToast } from "@/hooks";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToast();
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      deleteCookie("token");
      deleteCookie("refreshToken");
      success("로그아웃 성공");
      router.push("/");
    } catch (err) {
      error("로그아웃 실패");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    isOpen && (
      <Modal
        onClose={onClose}
        title="로그아웃 하시겠어요?"
        className="h-160 w-310 md:h-171 md:w-384"
      >
        <div className="flex gap-8">
          <Button variant="secondary" onClick={onClose} className="h-48 w-136">
            닫기
          </Button>
          <Button
            type="submit"
            variant="danger"
            disabled={isLoading}
            className="h-48 w-136"
            onClick={onSubmit}
          >
            {isLoading ? "처리 중..." : "로그아웃"}
          </Button>
        </div>
      </Modal>
    )
  );
};

export default LogoutModal;
