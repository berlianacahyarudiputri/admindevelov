/** Icons are imported separatly to reduce build time */
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '', //no url needed as this has submenu
    icon: <UserGroupIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Mentor', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/mentor', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Mentor List', // name that appear in Sidebar
      },
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Pengajuan Cuti', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <CurrencyDollarIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Booking', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Booking List',
      },
      {
        path: '/app/history',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'History',
      },
    ]
  },
  {
    path: '/app/mentee', // url
    icon: <UsersIcon className={iconClasses}/>, // icon component
    name: 'Mentee', // name that appear in Sidebar
  },
  {
    path: '/app/',
    icon: <UserGroupIcon className={iconClasses}/>, 
    name: 'Community',
  },
]

export default routes


