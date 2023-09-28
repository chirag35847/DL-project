import { Avatar } from '@mantine/core'
import React from 'react'

const MessageBubble = ({message,classToAdd}) => {
  return (
    <div className={`flex w-auto ${classToAdd} p-2 rounded-lg`}>
        {
            classToAdd=='justify-end'?
            <>
                <div className='mr-[0.5vw] bg-[#E5E4E2] rounded-lg w-[30%] p-2'>
                    <h2 className='text-md text-left'>{message}</h2>
                </div>
                <Avatar radius={'xl'}/>
            </>
            :
            <>
                <Avatar radius={'xl'}/>
                <div className='ml-[0.5vw] bg-[#E5E4E2] rounded-lg w-[30%] p-2'>
                    <h2 className='text-md text-right'>{message}</h2>
                </div>
            </>
        }
    </div>
  )
}

export default MessageBubble