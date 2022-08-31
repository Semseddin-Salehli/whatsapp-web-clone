import { ReactComponent as Main } from '../icons/main.svg'
import { HiLockClosed } from 'react-icons/hi'

export default function Content() {
    return (
        <div className="w-[59.75rem] h-[40.625rem] select-none bg-[#f0f2f5] content border-l border-solid border-[#e9edef] flex flex-col justify-around">
            <div className="mx-auto w-[35rem] h-[12.875rem] pt-7 mt-16">
                <Main className='mx-auto' />
            </div>
            <div className='w-full h-[8.375rem] flex flex-col gap-y-4'>
                <span className='text-3xl text-[#41525D] font-extralight mx-auto'>WhatsApp Web</span>
                <span className='mx-auto text-center text-[13px] text-[#667781] font-normal'>Telefonunuzu çevrimiçi tutmak zorunda kalmadan mesaj gönderebilir ve alabilirsiniz. <br />WhatsApp'ı aynı anda 4 adede kadar bağlı cihazda ve 1 adet telefonda kullanın.</span>
            </div>
            <div className='w-full h-5 text-[#8696a0] flex justify-center items-center text-center text-[13px]'>
                <HiLockClosed size={"12"}/>
                <span className=''>Uçtan uca şifrelenmiş</span>
            </div>
        </div>
    )
}