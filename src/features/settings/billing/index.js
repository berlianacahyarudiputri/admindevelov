import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'



const BILLS = [
    {no : "1", amount : "23,989", mentee : "Berliana Cahya R", status : "Pending", date : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY")},

    {no : "2", amount : "34,989", mentee : "Adzkiyatun Nisa", status : "Pending", date : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY")},

    {no : "3", amount : "39,989", mentee : "Fergiawan Listanto", status : "Paid", date : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY")},

    {no : "4", amount : "28,927", mentee : "Andrian ", status : "Paid", date : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY")},

    {no : "5", amount : "28,927", mentee : "Rafie Mukhti", status : "Paid", date : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY")},

    {no : "6", amount : "28,927", mentee : "Khoerul Anwar", status : "Paid", date : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY")},



]

function Billing(){


    const [bills, setBills] = useState(BILLS)

    const getPaymentStatus = (status) => {
        if(status  === "Paid")return <div className="badge badge-success">{status}</div>
        if(status  === "Pending")return <div className="badge badge-primary">{status}</div>
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
                        <th> No</th>
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
                                    <td>{l.no}</td>
                                    <td>{l.date}</td>
                                    <td>{l.mentee}</td>
                                    <td>${l.amount}</td>
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