import DashboardStats from './components/DashboardStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import UserChannels from './components/NotifDashboard'

import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'

const statsData = [
    {title : "Mentor Aktif", value : "2", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "Mentee Aktif", value : "6", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "Mentor Cuti", value : "0", icon : <UserGroupIcon className='w-8 h-8'/>, description : ""},
    {title : "Mentee Mentoring", value : "2", icon : <UsersIcon className='w-8 h-8'/>, description : ""},
]



function Dashboard(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}

        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>


        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <UserChannels />
            </div>
        </>
    )
}

export default Dashboard