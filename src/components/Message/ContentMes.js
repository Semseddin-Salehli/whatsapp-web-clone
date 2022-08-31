import Message from './Message'
import Footer from '../Message/Footer'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'

export default function ContentMes() {
    return (
        <div className='message-content'>
            <div className='w-full px-3 h-[3.063rem] flex justify-between items-center'>
                <div className='w-[22.188rem] h-[2.188rem] whitespace-nowrap flex items-center pl-4 rounded-lg bg-[#f0f2f5]'>
                    <AiOutlineSearch size={"20"} color="#54656f" className='cursor-pointer' />
                    <input type="text" className='bg-transparent w-full h-full outline-none pl-[35px] pr-[32px] text-base placeholder-[#76858f] tracking-tight' placeholder='Aratın veya yeni sohbet başlatın' />
                </div>

                <BsFilter size={"22"} className="cursor-pointer" color="#8696a0" />
            </div>

            <div className='border-t border-solid border-[#bebebe62] overflow-y-auto h-[33.813rem] select-none'>
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={false} group={false} status={1} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Group"} date={"11:11"} message={"Salam"} me={false} group={true} fromWho={'John'} status={1}  />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={2} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={0} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={2} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={1} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={1} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={1} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Message name={"Ata"} date={"11:11"} message={"Salam"} me={true} group={false} fromWho={1} status={1} photo={"https://pps.whatsapp.net/v/t61.24694-24/76661207_235781074331007_2649039949675276878_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwkWWMnzbGc_U-3Jln9WkjDHN2yGK0O9rfvNcufbNR9hw&oe=631CC3C0"} />
                <Footer />
            </div>
        </div>
    )
}