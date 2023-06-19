import moment from "moment"
import { useState } from "react"
import TitleCard from "../../../components/Cards/TitleCard"

const TopSideButtons = () => {

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" >Tambah Mentor</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {name : "Sarif Hidayatullah", avatar : "/sarif.jfif", email : "sarifh@gmail.com", status : "Aktif", role : "Adobe Illusrator"},
    {name : "Jessica Aulia", avatar : "/aulia.jfif", email : "jes.aulia@gmail.com", status : "Aktif", role : "Adobe Premier" },
    {name : "Reza", avatar : "/reza.jfif", email : "rezaa@gmail.com", status : "Aktif", role : "Adobe Firefly"},
    {name : "Hasan Harahap", avatar : "/hasan.jfif", email : "hasanharap@gmail.com", status : "Aktif", role : "Photoshop"},
    {name : "Lauren", avatar : "/lau.jfif", email : "lauren@gmail.com", status : "Aktif", role : "Figma"},


]

function Team(){


    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (status) => {
        if(status  === "Aktif")return <div className="badge badge-primary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
    }

    return(
        <>
            
            <TitleCard title="Mentor" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.role}</td>
                                    <td>{getRoleComponent(l.status)}</td>
                                    <td>{l.icon} 
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Team