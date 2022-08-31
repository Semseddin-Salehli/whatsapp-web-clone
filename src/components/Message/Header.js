import { HiOutlineDotsVertical } from 'react-icons/hi'
import {ReactComponent as StatusIcon } from './../../icons/status.svg'
import {ReactComponent as ChatIcon } from './../../icons/chat.svg'
import {ReactComponent as UserIcon } from './../../icons/user.svg'

export default function Header() {
    return (
        <div className="bg-[#f0f2f5] w-full h-[3.75rem] px-[12px] py-[16px] text-header flex justify-between items-center">
            <div className='max-h-[2.5rem]'>
                <UserIcon className='w-[2.5rem] h-[2.5rem] cursor-pointer' />
            </div>
            <div className='w-[9.063rem] max-h-[2.5rem] flex justify-around items-center relative'>
                <StatusIcon className='cursor-pointer' />
                <ChatIcon className='cursor-pointer' />
                <HiOutlineDotsVertical className='cursor-pointer' size={"23"} />
            </div>
        </div>
    )
}