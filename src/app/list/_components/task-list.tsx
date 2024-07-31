"use client";

import "dayjs/locale/ko";

import dayjs from "dayjs";
import React, { useState } from "react";

import DropDown from "@/components/common/drop-down/index";
import {
  IconCalendar,
  IconCheckBox,
  IconCheckBoxGreen,
  IconKebab,
  IconRepeat,
  IconTime,
} from "@/public/assets/icons";

dayjs.locale("ko");

type RecurringTaskProps = {
  id: number;
  name: string;
  date: string;
  frequency: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const RecurringTask = ({
  id,
  name,
  date,
  frequency,
  onEdit,
  onDelete,
}: RecurringTaskProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const taskDate = dayjs(date);
  const formattedDate = taskDate.format("YYYY년 M월 D일");
  const formattedTime = taskDate.format("A h:mm");

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleEditClick = () => {
    onEdit(id);
    setIsDropdownOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete(id);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mb-16 flex w-full flex-col gap-10 rounded-lg bg-background-secondary px-14 py-12 sm:w-343 md:w-343 lg:w-696 xl:min-w-1200">
      <div className="mb-2 flex items-center">
        <button
          type="button"
          onClick={() => setIsChecked(!isChecked)}
          className="mr-8"
        >
          {isChecked ? <IconCheckBoxGreen /> : <IconCheckBox />}
        </button>
        <h2
          className={`grow text-14-400 text-text-primary ${
            isChecked ? "line-through" : ""
          }`}
        >
          {name}
        </h2>
        <DropDown handleClose={handleDropdownClose}>
          <DropDown.Trigger onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <IconKebab />
          </DropDown.Trigger>
          {isDropdownOpen && (
            <DropDown.Menu isOpen>
              <DropDown.Item onClick={handleEditClick}>수정하기</DropDown.Item>
              <DropDown.Item onClick={handleDeleteClick}>
                삭제하기
              </DropDown.Item>
            </DropDown.Menu>
          )}
        </DropDown>
      </div>
      <div className="flex items-center text-12-400 text-text-default">
        <IconCalendar
          width={16}
          height={16}
          className="flex content-center items-center"
        />
        <span className="ml-6 mr-10 flex items-center">{formattedDate}</span>
        <span>|</span>
        <IconTime
          width={16}
          height={16}
          className="ml-10 flex content-center items-center"
        />
        <span className="ml-6 mr-10 flex items-center">{formattedTime}</span>
        <span>|</span>
        <IconRepeat
          width={16}
          height={16}
          className="ml-10 flex content-center items-center"
        />
        <span className="ml-6 flex items-center">
          {frequency === "DAILY" ? "매일 반복" : "반복"}
        </span>
      </div>
    </div>
  );
};

export default RecurringTask;
