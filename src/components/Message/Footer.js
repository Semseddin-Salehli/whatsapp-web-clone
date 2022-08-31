import { HiLockClosed } from 'react-icons/hi'

export default function Footer() {
    return (
        <div className='flex justify-center items-center text-center text-[#3b4a54] font-[Poppins] text-[11px] pt-3 m-4 border-t border-solid border-[#e9edef]'>
            <HiLockClosed size={"12"} />
            <span className='mr-1'>Kişisel mesajlarınız</span>
            <span className='text-[#027eb5] cursor-pointer'>uçtan uca şifrelidir</span>
        </div>
    )
}