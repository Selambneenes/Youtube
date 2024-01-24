import { Clapperboard, Home, Repeat } from "lucide-react";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../components/Button";

const Sidebar = () => {
  return (
  <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
    <SmallSidebarItem Icon={Home} title="Home" url="/" />
    <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
    <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/library" />
  </aside>
  )
};

export default Sidebar;

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
}

const SmallSidebarItem = ({Icon, title, url}: SmallSidebarItemProps) => {
  return (
    <a href={url} className={twMerge(buttonStyles({
      variant: "ghost"
    }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
      <Icon className="w-6 h-6"/>
      <div className="text-sm">{title}</div>
    </a>

  )
}