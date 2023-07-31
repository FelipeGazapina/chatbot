import Button from "./components/Button";
import Mood from "./widgets/Mood"
import { Chat } from "./widgets/Chat";


export default function Home() {


  return (
      <main className="flex min-h-screen p-24 bg-slate-200 dark:bg-slate-800">
        <Mood.Root>
          <Mood.Input />
          <Mood.Show />
        </Mood.Root>
        <Button />
        <Chat.Root>
          <Chat.History />
          <Chat.Search />
        </Chat.Root>
      </main>
  )
}
