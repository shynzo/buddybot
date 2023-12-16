import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'

export function Chat() {
  return (
    <>
      <main className="flex w-full flex-col justify-between rounded-sm bg-slate-600">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shynzo.png" alt="Shadcn" />
                <AvatarFallback>YOU</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <CardTitle>Buddy</CardTitle>
              <CardDescription>online</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <div className="flex max-h-[calc(100vh-210px)] flex-col border border-black px-28 py-5">
          <ScrollArea className="h-full pr-9">
            <div className="flex flex-row-reverse gap-3 self-end">
              <Avatar>
                <AvatarImage src="https://github.com/shynzo.png" alt="Shadcn" />
                <AvatarFallback>YOU</AvatarFallback>
              </Avatar>
              <p className="max-w-md rounded-md bg-green-300 px-3 py-2 text-justify"></p>
            </div>
          </ScrollArea>
        </div>
        <div className="flex w-full flex-row gap-3 px-5 pb-5">
          <Input placeholder="Message" />
          <Button>Send</Button>
        </div>
      </main>
    </>
  )
}
