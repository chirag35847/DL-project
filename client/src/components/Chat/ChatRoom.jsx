import { Button, Group, LoadingOverlay, Modal, Space, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useCallback, useEffect, useState } from 'react'
import MessageBubble from './MessageBubble';
import BackGradients from '../BackGradients';
import axios from 'axios'

const ip = '10.0.4.140';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    const sendMessage = useCallback(async () => {
        const cur = {
            key:messages.length+1,
            text:message,
            isUser:true,
        }
        try{
            setLoading(true);
            const response = await axios.get(`http://${ip}:5000/ask?input_string=${message}&context=${JSON.stringify(messages)}`);
            const respMessage = {
                key:messages.length+2,
                text:response.data.answer,
                isUser:false,
            }
            setMessages([respMessage,cur,...messages]);
            setLoading(false);
        }
        catch(e){
            setLoading(false);
            console.log(e);
        }
        setMessage('');
    }, [message,messages])


    return (
        <>
            <BackGradients/>
            <div className={`bg-black`}>
                <div className='flex flex-col h-[100vh] justify-center content-center'>
                    <LoadingOverlay visible={loading} zIndex={10000000} overlayProps={{ radius: "sm", blur: 2 }} />
                    <div className='h-[85%] ml-[1.5vw] mr-[1.5vw] mt-[1.5vw] w-auto rounded-lg'>
                        <div className='h-[95%] flex flex-col-reverse overflow-auto ml-[1.5vw] mr-[1.5vw] mt-[1.5vh]'>
                            {
                                messages.length>0?
                                messages.map((x) => {
                                    return <MessageBubble key={x.key} message={x.text} classToAdd={x.isUser ? 'justify-end' : 'justify-start'} />
                                }):
                                <div className='text-white text-[2rem] h-[95vh] flex flex-col justify-center items-center text-center'>This Chat Does not have any messages yet. start typing and send messages</div>
                            }
                        </div>
                    </div>
                    <Space className='h-[3%]' />
                    <div className='h-[10%] ml-[1.5vw] mr-[1.5vw] w-auto rounded-lg'>
                        <div className='flex justify-between'>
                            {
                                <>
                                    <TextInput value={message} onChange={(e)=>setMessage(e.target.value)} className='w-[85%]' placeholder='Enter A Message to send ....' />
                                    <Button onClick={sendMessage} className='w-[10%] bg-gradient-to-r from-cyan-500 to-blue-500'>Go</Button>
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