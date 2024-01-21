"use client"

import Draggable from 'react-draggable';

const DragBot = () => {
    return (
        <Draggable> 
            <div className="w-14 bg-blue-600 rounded-full fixed bottom-20 right-8 cursor-pointer">
                <img src="https://media.tenor.com/s1Y9XfdN08EAAAAi/bot.gif" alt="bot" />
            </div>
        </Draggable>
    );
}

export default DragBot;
