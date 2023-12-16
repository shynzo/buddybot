'use client'
import { Message, useChat } from 'ai/react'

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <>
      <main className="flex w-full flex-col justify-between rounded-sm bg-slate-600">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <div>
              <Avatar>
                <AvatarImage
                  src="https://www.bluey.tv/wp-content/uploads/2023/07/Buddy.png"
                  alt="Buddy"
                />
                <AvatarFallback>BD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <CardTitle>Buddy</CardTitle>
              <CardDescription>online</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <div className="flex max-h-[calc(100vh-210px)] flex-col px-28 py-5">
          <ScrollArea className="h-full pr-9">
            {messages.map((msg: Message) => (
              <div key={msg.id}>
                {msg.role === 'assistant' && (
                  <>
                    <div className="mb-3 flex flex-row gap-3 self-start">
                      <Avatar>
                        <AvatarFallback>BD</AvatarFallback>
                        <AvatarImage
                          src="https://www.bluey.tv/wp-content/uploads/2023/07/Buddy.png"
                          alt="Buddy"
                        />
                      </Avatar>
                      <p className="max-w-md rounded-md bg-slate-400 px-3 py-2 text-justify">
                        {msg.content}
                      </p>
                    </div>
                  </>
                )}
                {msg.role === 'user' && (
                  <>
                    <div className="mb-3 flex flex-row-reverse gap-3 self-end">
                      <Avatar>
                        <AvatarFallback>YOU</AvatarFallback>
                        <AvatarImage
                          src="https://github.com/shynzo.png"
                          alt="Shynzo"
                        />
                      </Avatar>
                      <p className="max-w-md rounded-md bg-green-300 px-3 py-2 text-justify">
                        {msg.content}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </ScrollArea>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-row gap-3 px-5 pb-5"
          >
            <Input
              placeholder="Message"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </main>
    </>
  )
}
