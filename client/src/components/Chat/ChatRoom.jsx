import { Button, Group, Modal, Space, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import MessageBubble from './MessageBubble';
import BackGradients from '../BackGradients';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const sendMessage = useCallback(async () => {
        const cur = {
            text:message,
            isUser:true,
        }
        setMessages([cur,...messages]);
        setMessage('');
    }, [message,messages])


    return (
        <>
            <BackGradients/>
            <div className={`bg-black`}>
                <div className='flex flex-col h-[100vh] justify-center content-center'>
                    <div className='h-[90%] ml-[1.5vw] mr-[1.5vw] mt-[1.5vw] w-auto rounded-lg'>
                        <div className='h-[95%] flex flex-col-reverse overflow-auto ml-[1.5vw] mr-[1.5vw] mt-[1.5vh]'>
                            {
                                messages.length>0?
                                messages.map((x) => {
                                    return <MessageBubble message={x.text} classToAdd={x.isUser ? 'justify-end' : 'justify-start'} />
                                }):
                                <div className='text-white text-[2rem] h-[95vh] flex flex-col justify-center items-center text-center'>This Chat Does not have any messages yet. start typing and send messages</div>
                            }
                        </div>
                    </div>
                    <Space className='h-[3%]' />
                    <div className='h-[5%] ml-[1.5vw] mr-[1.5vw] w-auto rounded-lg'>
                        <div className='flex justify-between'>
                            {
                                <>
                                    <TextInput value={message} onChange={(e)=>setMessage(e.target.value)} className='md:w-[70%] sm:md:w-[70%] lg:w-[85%]' placeholder='Enter A Message to send ....' />
                                    <Button onClick={sendMessage} className='md:w-[13%] sm:md:w-[13%] lg:w-[6%] bg-gradient-to-r from-cyan-500 to-blue-500'>Send</Button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatRoom