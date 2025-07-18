import React from 'react';
import moment from 'moment';

const TaskListTable = ({ tableData }) => {
  const getStatusBadgeColor = (status) => {
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

  const getPriorityBadgeColor = (priority) => {
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
    <div className="overflow-x-auto p-0 rounded-lg mt-3">
      <table className="min-w-full">
        <thead>
          <tr className="text-left">
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">Title</th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">Status</th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px]">Priority</th>
            <th className="py-3 px-4 text-gray-300 font-medium text-[13px] hidden md:table-cell">Created At</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((task) => (
            <tr key={task.id} className="border-b border-gray-200/40">
              <td className="py-3 px-4 text-gray-300 text-[13px] text-nowrap line-clamp-1 overflow-visible">
                {task.title}
              </td>
              <td className="py-3 px-2 lg:px-4">
                <span
                  className={`w-24 px-2 py-1 text-center text-xs rounded inline-block ${getStatusBadgeColor(task.status)}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <span
                  className={`w-24 px-2 py-1 text-center text-xs rounded inline-block ${getPriorityBadgeColor(task.priority)}`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-300 text-[13px] whitespace-nowrap hidden md:table-cell">
                {task.createdAt ? moment(task.createdAt).format('DD MMM YYYY') : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListTable;
