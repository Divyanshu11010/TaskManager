import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import moment from 'moment';
import AvatarGroup from '../../components/AvatarGroup';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

const ViewTaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const getStatusTagColor = (status) => {
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

  const getTaskDetailsByID = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(id));
      if (response.data) {
        setTask(response.data);
      }
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const updateTodoChecklist = async (index) => {
    const todoChecklist = [...task?.todoChecklist];
    const taskId = id;

    if (todoChecklist && todoChecklist[index]) {
      todoChecklist[index].completed = !todoChecklist[index].completed;
    }

    try {
      const response = await axiosInstance.put(
        API_PATHS.TASKS.UPDATE_TODO_CHECKLIST(taskId),
        { todoChecklist }
      );

      if (response.status === 200) {
        setTask(response.data?.task || task);
      } else {
        todoChecklist[index].completed = !todoChecklist[index].completed;
      }
    } catch (error) {
      todoChecklist[index].completed = !todoChecklist[index].completed;
    }
  };

  const handleLinkClick = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      link = "https://" + link;
    }
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (id) {
      getTaskDetailsByID();
    }
  }, [id]);

  return (
    <DashboardLayout activeMenu="My tasks">
      {task && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="form-card col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-shadow-white">
                {task?.title}
              </h2>
              <div
                className={`text-xs md:text-sm font-medium ${getStatusTagColor(
                  task?.status
                )} px-3 py-1 rounded-md`}
              >
                {task?.status}
              </div>
            </div>

            <div className="mb-6">
              <InfoBox label="Description" value={task?.description} />
            </div>

            <div className="grid grid-cols-12 gap-4 mb-6">
              <div className="col-span-6 md:col-span-4">
                <InfoBox label="Priority" value={task?.priority} />
              </div>
              <div className="col-span-6 md:col-span-4">
                <InfoBox
                  label="Due Date"
                  value={
                    task?.dueDate
                      ? moment(task?.dueDate).format("Do MMM YYYY")
                      : "N/A"
                  }
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <label className="text-xs font-medium text-gray-300 block mb-1">
                  Assigned To
                </label>
                <AvatarGroup
                  avatars={
                    task?.assignedTo?.map((item) => item?.profileImageUrl || [])
                  }
                  maxVisible={5}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium text-gray-300 block mb-2">
                Todo Checklist
              </label>
              <div className="space-y-2">
                {task?.todoChecklist?.map((item, index) => (
                  <TodoCheckList
                    key={`todo_${index}`}
                    text={item.text}
                    isChecked={item?.completed}
                    onChange={() => updateTodoChecklist(index)}
                  />
                ))}
              </div>
            </div>

            {task?.attachments?.length > 0 && (
              <div className="mb-6">
                <label className="text-xs font-medium text-gray-300 block mb-2">
                  Attachments
                </label>
                <div className="space-y-2">
                  {task?.attachments?.map((link, index) => (
                    <Attachment
                      key={`link_${index}`}
                      link={link}
                      index={index}
                      onClick={() => handleLinkClick(link)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ViewTaskDetails;

// Reusable Subcomponents

const InfoBox = ({ label, value }) => (
  <div>
    <label className="text-xs font-medium text-gray-300 block">{label}</label>
    <p className="text-sm font-medium text-gray-400 mt-1">{value}</p>
  </div>
);

const TodoCheckList = ({ text, isChecked, onChange }) => (
  <div className="flex items-center gap-3 px-3 py-2 bg-slate-800 hover:bg-gray-700 border border-gray-800 rounded-md">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
    <p className={`text-sm text-gray-400 ${isChecked ? "line-through opacity-40" : ""}`}>
      {text}
    </p>
  </div>
);

const Attachment = ({ link, index, onClick }) => (
  <div
    className="flex justify-between items-center bg-slate-800 border border-gray-800 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition"
    onClick={onClick}
  >
    <div className="flex items-center gap-2 overflow-hidden">
      <span className="text-xs font-semibold text-gray-400 shrink-0">
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>
      <p className="text-sm text-gray-400 truncate">{link}</p>
    </div>
    <LuSquareArrowOutUpRight className="text-gray-400 shrink-0" size={16} />
  </div>
);