import Header from './Message/Header'
import ContentMes from './Message/ContentMes'

export default function MessagesBar() {
    return (
        <div className='flex flex-col w-[25.625rem] h-[40.625rem]'>
            <Header />
            <ContentMes />
        </div>
    )
}