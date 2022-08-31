import { BsCheckAll } from 'react-icons/bs'
import { BsCheck } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import { ReactComponent as GroupUserIcon } from  './../../icons/groupUser.svg'
import { ReactComponent as UserIcon } from  './../../icons/user.svg'

export default function Message({ name, date, message, photo, fromWho, status = 2, group, me = true }) {
    return (
        <div className="w-full h-[4.5rem] cursor-pointer -mt-[1px] flex items-center group hover:bg-gray-100 select-none">
            <div className="w-[4.813rem] h-[4.563rem] pl-3 flex items-center justify-center text-center">
                {photo ? <img className="w-[3.063rem] h-[3.063rem] rounded-full" src={photo} alt='' /> : ''}
                {photo == undefined && group ? <GroupUserIcon size={'20'} className="w-[3.063rem] h-[3.063rem] rounded-full" /> : ''}
                {photo == undefined && !group ? <UserIcon className="w-[3.063rem] h-[3.063rem] rounded-full" /> : ''}
            </div>
            <div className="w-[20.375rem] pr-4 flex flex-col items-center justify-center">
                <div className='w-full flex items-center justify-between ml-1'>
                    <span className='text-[#111B21] w-[16.5rem] text-[17px] overflow-hidden'>{name}</span>
                    <span className='text-[#667781] text-xs'>{date}</span>
                </div>
                <div className="w-full flex items-center justify-between relative">
                    <div className='w-full flex items-center justify-start text-[#667781] text-sm pl-0.5'>
                        {status == 0 && me == true ? <BsCheck size={"24"} className="text-status -ml-1" />
                            : ''}
                        {status == 1 && me == true ? <BsCheckAll size={"24"} className="text-status mr-0.5" />
                            : ''}
                        {status == 2 && me == true ? <BsCheckAll size={"24"} className="text-statusRead mr-0.5" />
                            : ""}
                        {status > 2 || status < 0 || status == null && me == true ? <BsCheck size={"24"} className="text-status" />
                            : ""}
                        
                        {me == true ? <span className='mr-0.5'>Siz:</span> : ''}

                        {fromWho != null && group ? <span className='mr-0.5'>{fromWho}:</span> : '' }
                        <span>{message}</span>
                    </div>
                    <BsChevronDown size={"18"} className='text-[#8696a0] scale-0 -rotate-180 group-hover:scale-100 group-hover:rotate-0 transition-all duration-200' />
                </div>
            </div>
        </div>
    )
}