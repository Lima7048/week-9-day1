"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Popover from "@/app/component/Popover";
import "./popover.css";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
      <Popover />
      <p>Hello world</p>
    </div>
  );
}
