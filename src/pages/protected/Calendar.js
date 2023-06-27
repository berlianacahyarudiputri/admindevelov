import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { COMMUNITY } from '../../components/komunitas'
import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Community" }))
    }, [])

    const [komentarVisible, setKomentarVisible] = useState({})
    const toggleKomentar = (id) => {
        setKomentarVisible((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };


    return (
        <>
            <div className='flex mb-4 justify-end'>
                <input className='input w-52 drop-shadow-md rounded-xl' placeholder='Search'></input>
            </div>

            <div className='flex flex-col gap-3'>
                {COMMUNITY.map((data) => {
                    return (
                        <div className='container bg-white mx-auto rounded-2xl py-5 px-4 drop-shadow-lg relative' key={data.id}>
                            <div>
                                <div className='head-content flex justify-between'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='h-9, w-9'>
                                            <img src={data.picture} className='rounded-full' />
                                        </div>
                                        <h2 className='font-bold text-lg'>{data.name}</h2>
                                        <span className='text-base'>{data.time}</span>
                                    </div>
                                    <div>
                                        <EllipsisHorizontalIcon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className='mt-3 flex flex-col'>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p>{data.content}</p>
                                    <div className='drop-shadow-sm flex justify-between'>
                                        <img src={data.image}
                                            height={100}
                                            width={200} />
                                        <span className='justify-self-end self-end btn btn-sm no-animation btn-ghost hover:bg-slate-200'
                                            onClick={() => toggleKomentar(data.id)}
                                        >
                                            Komentar
                                        </span>
                                    </div>
                                </div>
                                <div className={`komentar-container bg-slate-200 rounded-lg p-5 mt-2 ${!komentarVisible[data.id] ? 'hidden' : ''}`}>
                                    {data.comments.map((comment) => {

                                        return (
                                            <>
                                                <div>
                                                    <div className='flex justify-between items-center'>
                                                        <div>
                                                            <div className='flex items-center gap-3'>
                                                                <h2 className='font-semibold text-lg'>{comment.name}</h2>
                                                                <span>{comment.time}</span>
                                                            </div>
                                                            <p>{comment.comment}</p>
                                                        </div>
                                                        <div className='hover:bg-slate-300 hover: cursor-pointer py-1 px-2 rounded-md'>Hapus</div>
                                                    </div>
                                                    <div className='w-full h-0.5 bg-slate-300' />
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <hr className='mt-3' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default InternalPage