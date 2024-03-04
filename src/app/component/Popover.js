'use client'
import React from "react";
import * as Popover from "@radix-ui/react-popover";
// import "popover.css"

const PopoverDemo = () => (
    <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
                Some more info… You can find the full website @ https://week-9-day1.vercel.app/
                <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopoverDemo;
