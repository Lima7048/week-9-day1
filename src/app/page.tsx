"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Popover from "@/app/component/Popover";
import "./popover.css";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />

      <p className=" text-6xl text-justify text-lime-700">Hello world 🧝🏽‍♀️</p>
      <Popover />
    </div>
  );
}
