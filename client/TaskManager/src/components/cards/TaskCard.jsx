import React from "react";
import Progress from "../layouts/Progress";
import AvataGroup from "../AvatarGroup";
import { LuPaperclip } from "react-icons/lu";
import moment from "moment";
import AvatarGroup from "../AvatarGroup";


const TaskCard = ({
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick
}) => {

  const getStatusTagColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-800/30 text-green-300 border border-green-700';
      case 'Pending':
        return 'bg-purple-800/30 text-purple-300 border border-purple-700';
      case 'In Progress':
        return 'bg-blue-800/30 text-blue-300 border border-blue-700';
      default:
        return 'bg-gray-700/30 text-gray-300 border border-gray-600';
    }
  };

  const getPriorityTagColor = () => {
    switch (priority) {
      case 'High':
        return 'bg-red-800/30 text-red-300 border border-red-700';
      case 'Medium':
        return 'bg-orange-800/30 text-orange-300 border border-orange-700';
      case 'Low':
        return 'bg-lime-800/30 text-lime-300 border border-lime-700';
      default:
        return 'bg-gray-700/30 text-gray-300 border border-gray-600';
    }
  };

  return (
    <div
      className="card rounded-xl shadow-sm shadow-gray-200 border border-gray-200/50 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-end gap-3 px-4">
        <div
          className={`text-[11px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded`}
        >
          {status}
        </div>
        <div
          className={`text-[11px] font-medium ${getPriorityTagColor()} px-4 py-0.5 rounded`}
        >
          {priority} Priority
        </div>
      </div>

      <div
        className={`px-4 border-l-[3px] ${status === "In Progress"
          ? "border-blue-300"
          : status === "Completed"
            ? "border-green-300"
            : "border-purple-500"
          }`}
      >
        <p className="text-sm font-medium text-shadow-white mt-4 line-clamp-2">
          {title}
        </p>

        <p className="text-xs text-gray-300 mt-1.5  leading-[18px] overflow-visible">
          {description}
        </p>

        <p className="text-[13px] text-gray-300/80 font-medium mt-2 mb-2 leading-[18px]">
          Task Done:{" "}
          <span className="font-semibold text-gray-300/80">
            {completedTodoCount} / {todoChecklist.length || 0}
          </span>
        </p>
        <Progress progress={progress} status={status} />
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between my-1">

          <div>
            <label className="text-xs text-gray-300">Start Date</label>
            <p className="text-[13px] font-medium text-gray-500">
              {moment(createdAt).format("Do MMM YYYY")}
            </p>
          </div>

          <div>
            <label className="text-xs text-gray-300">Due Date</label>
            <p className="text-[13px] font-medium text-gray-500">
              {moment(dueDate).format("Do MMM YYYY")}
            </p>
          </div>

          <div className="flex items-center flex-col lg:flex-row gap-1 justify-between mt-3">
            <AvatarGroup avatars={assignedTo || []} />
            {attachmentCount > 0 && (
              <div className="flex items-center gap-2 bg-blue-50 px-2.5 py-1.5 rounded-lg">
                <LuPaperclip className="text-primary" />
                <span className="text-xs text-black">{attachmentCount}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default TaskCard;
