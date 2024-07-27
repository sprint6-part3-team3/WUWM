import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface DropDownItemListProps {
  /** 드롭다운 메뉴 안에 포함될 내용입니다.  */
  children: ReactNode;
  /** 드롭다운 메뉴 open 여부입니다.  */
  isOpen: boolean;
  /** 드롭다운 메뉴 top 위치입니다. 기본값 top-30 */
  topPosition?: string;
  /** 드롭다운 메뉴 right 위치입니다. 기본값 right-0 */
  rightPosition?: string;
}

const DropDownItemList = ({
  children,
  isOpen,
  topPosition = "top-30",
  rightPosition = "right-0",
}: DropDownItemListProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className={`${topPosition} ${rightPosition} absolute right-0 top-30 z-10 w-120 flex-col rounded-12 border border-border-primary bg-background-secondary text-text-primary shadow-md`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <ul className="flex-col items-center text-center">{children}</ul>
      </motion.div>
    )}
  </AnimatePresence>
);

export default DropDownItemList;
