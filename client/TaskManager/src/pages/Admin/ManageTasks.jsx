import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';
import TaskStatusTabs from '../../components/TaskStatusTabs';
import TaskCard from '../../components/cards/TaskCard'

function ManageTasks() {
  const [allTasks, setAllTasks] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const navigate = useNavigate();

  const getAllTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: {
          status: filterStatus === "All" ? "" : filterStatus,
        },
      });

      const tasks = response.data?.tasks;

      if (Array.isArray(tasks) && tasks.length > 0) {
        setAllTasks(tasks);
      } else {
        setAllTasks([]);
      }

      const statusSummary = response.data?.statusSummary || {};

      const statusArray = [
        { label: "All", count: statusSummary.all || 0 },
        { label: "Pending", count: statusSummary.pendingTasks || 0 },
        { label: "In Progress", count: statusSummary.inProgressTasks || 0 },
        { label: "Completed", count: statusSummary.completedTasks || 0 },
      ];

      setTabs(statusArray);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleClick = (taskData) => {
    navigate(`/admin/create-task`, { state: { taskId: taskData._id } });
  }

  const handleDownloadReport = async () => { };

  useEffect(() => {
    getAllTasks(filterStatus);
    return () => {
    }
  }, [filterStatus]);

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className="my-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-medium">My Tasks</h2>
            <button className="flex lg:hidden download-btn"
              onClick={handleDownloadReport}
            >
              <LuFileSpreadsheet className='text-lg' />
              Download Report
            </button>
          </div>

          {tabs?.[0]?.count > 0 && (
            <div className="flex items-center gap-3">
              <TaskStatusTabs
                tabs={tabs}
                activeTab={filterStatus}
                setActiveTab={setFilterStatus}
              />
              <button className="hidden lg:flex download-btn" onClick={handleDownloadReport}>
                <LuFileSpreadsheet className="text-lg" />
                Download Report
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {allTasks?.map((task) => (
            <TaskCard
              key={task._id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              status={task.status}
              progress={task.progress}
              createdAt={task.createdAt}
              dueDate={task.dueDate}
              assignedTo={task.assignedTo?.map((user) => user.profileImageUrl) || []}
              attachmentCount={task.attachments?.length || 0}
              completedTodoCount={task.completedTodoCount || 0}
              todoChecklist={task.todoChecklist || []}
              onClick={() => handleClick(task)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ManageTasks