/* eslint-disable no-console */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FieldWrapper, Input, Modal } from "@/components/common";
import { emailSchema } from "@/lib/schemas/auth";
import { EmailInput } from "@/types/auth";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmailInput>({
    resolver: zodResolver(emailSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // NOTE - api 작업 대신 넣었습니다.
  const onSubmit: SubmitHandler<EmailInput> = async ({ email }) => {
    setIsLoading(true);

    setTimeout(() => {
      const success = true;

      if (success) {
        console.log("성공");
      } else {
        console.log("실패");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="비밀번호 재설정"
      description="비밀번호 재설정 링크를 보내드립니다."
      showCloseButton
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FieldWrapper
          id="email"
          label=""
          errorMessage={errors.email?.message || ""}
        >
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력하세요."
            {...register("email")}
            isError={!!errors.email}
          />
        </FieldWrapper>
        <div className="flex gap-8">
          <Button
            onClick={onClose}
            variant="secondary"
            className="mt-15 h-48 w-136"
          >
            닫기
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={!isValid || isLoading}
            className="mt-15 h-48 w-136"
          >
            링크보내기
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
