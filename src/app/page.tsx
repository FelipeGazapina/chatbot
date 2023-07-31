import Button from "./components/Button";
import { Chat } from "./widgets/Chat";


export default function Home() {


  return (
      <main className="flex min-h-screen items-center justify-between p-24 bg-slate-200 dark:bg-slate-800">
        <Button />
        <Chat.Root>
          <Chat.History />
          <Chat.Search />
        </Chat.Root>
      </main>
  )
}
