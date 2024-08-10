import { notFound } from "next/navigation";
import React from "react";

import { SidePage } from "@/components/common";
import getTaskDetail from "@/lib/api/task-detail/get-task-detail";
import { Comment, TaskDetailData } from "@/types/task-detail/index";

import commentMock from "./_components/comments/comment-mock.json";
import CommentList from "./_components/comments/comments-list";
import EmptyComment from "./_components/comments/empty-comment";
import TaskContent from "./_components/task-detail/task-content";

interface PageProps {
  params: {
    groupId: string;
    taskListId: string;
    id: string;
  };
}
const TaskDetailPage = async ({ params }: PageProps) => {
  const { groupId, taskListId, id } = params;

  const taskId = Number(id);
  const groupIdNum = Number(groupId);
  const taskListIdNum = Number(taskListId);

  const taskData = await getTaskDetail(groupIdNum, taskListIdNum, taskId);

  if (!taskData) {
    notFound();
  }

  const comments = commentMock.filter(
    (comment: Comment) => comment.taskId === taskId,
  );

  return (
    <SidePage>
      <TaskContent task={taskData} />
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <EmptyComment />
      )}
    </SidePage>
  );
};
export default TaskDetailPage;
