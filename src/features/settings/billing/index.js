import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'



const BILLS = [
    {mentor : "Sarif Hidayatullah", mentee : "Berliana Cahya R", status : "Pengajuan", date : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY")},

    {mentor : "Jessica Aulia", mentee : "Adzkiyatun Nisa", status : "Dibatalkan", date : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY")},

    {mentor : "Sarif Hidayatullah", mentee : "Fergiawan Listanto", status : "Selesai", date : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY")},

    {mentor : "Lauren", mentee : "Andrian ", status : "Selesai", date : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY")},

    {mentor : "Hasan Harahap", mentee : "Rafie Mukhti", status : "Selesai", date : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY")},

    {mentor : "Jessica Aulia", mentee : "Khoerul Anwar", status : "Selesai", date : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY")},



]

function Billing(){


    const [bills, setBills] = useState(BILLS)

    const getPaymentStatus = (status) => {
        if(status  === "Selesai")return <div className="badge badge-success">{status}</div>
        if(status  === "Pengajuan")return <div className="badge badge-primary">{status}</div>
        if(status  === "Dibatalkan")return <div className="badge badge-secondary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
    }

    return(
        <>
            
            <TitleCard title="Booking" topMargin="mt-2">

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Mentee</th>
                        <th>Mentor</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.date}</td>
                                    <td>{l.mentee}</td>
                                    <td>{l.mentor}</td>
                                    <td>{getPaymentStatus(l.status)}</td>
                                    <td>{l.paidOn}</td>
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


export default Billing