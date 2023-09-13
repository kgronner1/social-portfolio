import React from "react";

function Message({ id, who, message }) {
  // which side of the message is it based on who

  // user input
  let a = "flex items-end justify-end";
  let b = "order-1 mx-2 flex max-w-xs flex-col items-end space-y-2";
  let c =
    "inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ";
  let d =
    "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144";
  let e = "order-2 h-10 w-10 rounded-full";

  // kyler bot
  if (who === "Me") {
    a = "flex items-end";
    b = "order-2 mx-2 flex max-w-xs flex-col items-start space-y-2";
    c = "inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2";
    d =
      "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144";
    e = "order-1 h-10 w-10 rounded-full";
  }

  return (
    <div className="chat-message" id={id}>
      <div className={a}>
        <div className={b}>
          <div>
            <span className={c}>{message}</span>
          </div>
        </div>
        <img src={d} alt="My profile" className={e} />
      </div>
    </div>
  );
}

export default Message;
