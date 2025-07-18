import React from 'react'

const UserCard = ({ userInfo }) => {

    return (
        <div className="user-card">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={userInfo?.profileImageUrl}
                        alt={'Avatar'}
                        className="w-12 h-12 rounded-full border-2 border-shadow-white"
                    />
                    <div>
                        <p className="text-sm font-medium text-shadow-white" >{userInfo?.name}</p>
                        <p className="text-xs text-gray-300">{userInfo?.email}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex items-end gap-1 lg:gap-3 mt-5">
                    <StatCard
                        label="Pending"
                        count={userInfo?.pendingTasks || 0}
                        status="Pending"
                    />
                </div>
                <div className="flex items-end gap-3 mt-5">
                    <StatCard
                        label="In Progress"
                        count={userInfo?.inProgressTasks || 0}
                        status="In Progress"
                    />
                </div>
                <div className="flex items-end gap-3 mt-5">
                    <StatCard
                        label="Completed"
                        count={userInfo?.completedTasks || 0}
                        status="Completed"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserCard

const StatCard = ({ label, count, status }) => {
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

    return (
        <div
            className={`flex-1 text-[10px] font-medium ${getStatusTagColor()} px-3 lg:px-4 py-0.5 rounded`}
        >
            <span className='text[12px] font-semibold'>{count}</span> <br /> {label}
        </div>
    )
};
