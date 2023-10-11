import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

function Chattery({ onTypeChange }) {
  // Create a ref for the input element
  const inputRef = useRef(null);

  const [inputType, setInputType] = useState("");

  // determines what chat line to use
  const [contactQuestionsBool, setContactQuestionsBool] = useState(false);
  // keeps first name
  const [contactFName, setContactFName] = useState("");
  // keeps last name
  const [contactLName, setContactLName] = useState("");
  // keeps email
  const [contactEmail, setContactEmail] = useState("");
  // keeps message
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    // You can call your functions here if they depend on contactQuestionsBool
    if (contactQuestionsBool) {
      contactQuestions();
    }
  }, [contactQuestionsBool]); // Only re-run the effect if contactQuestionsBool changes

  useEffect(() => {
    // You can call your functions here if they depend on contactFName
    if (contactFName != "") {
      contactQuestions();
    }
  }, [contactFName]); // Only re-run the effect if contactFName changes

  useEffect(() => {
    // You can call your functions here if they depend on contactLName
    if (contactLName != "") {
      contactQuestions();
    }
  }, [contactLName]); // Only re-run the effect if contactLName changes

  useEffect(() => {
    // You can call your functions here if they depend on contactEmail
    if (contactEmail != "") {
      contactQuestions();
    }
  }, [contactEmail]); // Only re-run the effect if contactEmail changes

  useEffect(() => {
    // You can call your functions here if they depend on contactMessage
    if (contactMessage != "") {
      contactQuestions();
    }
  }, [contactMessage]); // Only re-run the effect if contactMessage changes

  const handleTypeChange = (x) => {
    const newType = x;
    setInputType(newType);
    onTypeChange(newType); // Notify the parent component about the text change
  };

  let starterMessage = {
    id: 0,
    name: "Me",
    message: `Hi, thanks for visiting my portfolio.
              <br><br>
              You can navigate by using this chat window. Type where you want to
              go or click one of these links:
               <br><br>
              &bull; <a class="clickable">Web projects</a>
              <br>
              &bull; <a class="clickable">Woodworking</a>
              <br>
              &bull; <a class="clickable">Resumé</a>
              <br>
              &bull; <a class="clickable">Get in touch</a>`,
  };

  // list of all messages
  const [messages, setMessages] = useState([starterMessage]);

  // current message in input
  let currentMessage = "";
  function onChangeMessageInput(event) {
    currentMessage = event.target.value; // Update the local variable
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addUserMessage();
      // You can add more logic here if needed
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function addUserMessage() {
    let x = currentMessage;
    //console.log("addUserMessage", "currentMessage", currentMessage);
    // State change will cause component re-render
    if (x != "") {
      let z = messages.length;
      //setMessages([...messages, { id: z, name: "User", message: x }]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length, name: "User", message: x },
      ]);
      //console.log("setUserMSG", z, messages);
      inputRef.current.value = "";

      // let's set a simple timeout method to not seem too eager
      setTimeout(() => {
        prepareMeResponse(x);
      }, 500);
    }
  }

  function contactQuestions() {
    console.log("contactQuestions", contactQuestionsBool, contactFName);
    // create y as the bot response
    let y = "";

    if (contactFName === "") {
      console.log("should go here", contactFName, "here");
      // if contact state set but nothing in questions vars
      y = "What's your first name?";
      addMeMessage(y);
    } else if (contactLName === "") {
      // if contact state set but nothing in questions vars
      y =
        "Nice to meet you " +
        capitalizeFirstLetter(contactFName) +
        ". What's your last name?";
      addMeMessage(y);
    } else if (contactEmail === "") {
      // if contact state set but nothing in questions vars
      y =
        "What's your email address, " +
        capitalizeFirstLetter(contactFName) +
        " " +
        capitalizeFirstLetter(contactLName) +
        "?";
      addMeMessage(y);
    } else if (contactMessage === "") {
      // if contact state set but nothing in questions vars
      y =
        "Your next message will be sent to me as an email. What's your reason for contacting me?";
      addMeMessage(y);
    } else if (contactFName && contactLName && contactEmail && contactMessage) {
      y =
        "Thanks for your interest in connecting! I have received your message.";
      addMeMessage(y);
      setContactQuestionsBool(false);
    }
  }

  function prepareMeResponse(x) {
    //console.log("prepareMeResponse", x);
    // this function will determine the chat bot response

    // take x as the message from the user

    // create y as the bot response
    let y = "";

    // lower case
    x = x.toLowerCase();

    //console.log(
    //   "prepareMeResponse",
    //   contactFName,
    //   contactLName,
    //   contactEmail,
    //   contactMessage
    // );
    if (contactQuestionsBool) {
      // process these messages differently
      // if they type exit
      if (x === "exit") {
        setContactQuestionsBool(false);
        setContactFName("");
        setContactLName("");
        setContactEmail("");
        setContactMessage("");
        y = "Alright, I'll stop asking questions.";
        addMeMessage(y);
        return;
      } else if (contactFName === "") {
        if (x.includes(" ")) {
          //console.log("failed", x);
          y = "Please use a one word response only.";
          addMeMessage(y);
          return;
        } else {
          //console.log("did go here");
          setContactFName(x);
          return;
        }
      } else if (contactLName === "") {
        if (x.includes(" ")) {
          y = "Please use a one word response only.";
          addMeMessage(y);
          return;
        } else {
          setContactLName(x);
          return;
        }
      } else if (contactEmail === "") {
        if (x != "") {
          setContactEmail(x);
          return;
        } else {
          //console.log("failed", x);
          return;
        }
      } else if (contactMessage === "") {
        if (x != "") {
          setContactMessage(x);
          // send email
          handleSubmit(contactFName, contactLName, contactEmail, x);
          // clear states
          setContactFName("");
          setContactLName("");
          setContactEmail("");
          setContactMessage("");
          return;
        }
      } else {
        y = "Sorry, that's not a valid input.";
        addMeMessage(y);
        return;
      }
    }

    // get in touch / contact
    else if (x.includes("get in touch")) {
      y =
        'Great, let\'s get started. You can exit the process to contact me at any time by typing "exit".';
      addMeMessage(y);
      setContactQuestionsBool(true);
    } else if (x.includes("wood")) {
      // No problem, here's my woodworking collection.
      y = "No problem, here's my woodworking collection.";
      addMeMessage(y);
      handleTypeChange("wood");
    } else if (x.includes("web")) {
      // Sure thing, now showing some of my web and mobile projects.
      y = "Sure thing, now showing some of my web and mobile projects.";
      addMeMessage(y);
      handleTypeChange("web");
    } else if (x.includes("resum")) {
      // What's the password?
      y = "What's the password?";

      addMeMessage(y);
      // jokes are all about timing
      y = "Just kidding, here's my resumé.";
      setTimeout(() => {
        addMeMessage(y);
        handleTypeChange("resume");
      }, 2800);
      // Just kidding, here's my resumé.
    } else {
      y = `Sorry, I'm a pretty simple bot, could you try navigating by typing the exact link phrase? Or you can navigate by clicking one of these links:
              <br><br>
              &bull; <a class="clickable">Web projects</a>
              <br>
              &bull; <a class="clickable">Woodworking</a>
              <br>
              &bull; <a class="clickable">Resumé</a>
              <br>
              &bull; <a class="clickable">Get in touch</a>`;
      addMeMessage(y);
    }
  }

  function addMeMessage(x) {
    // State change will cause component re-render
    //setMessages([...messages, { id: z, name: "Me", message: x }]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, name: "Me", message: x },
    ]);
    //console.log("setMeMSG", messages);
  }

  function clearChat() {
    setMessages([starterMessage]);
  }

  const handleClickClickable = (event) => {
    setContactQuestionsBool(false);
    //console.log("handleClickClickable", event.target);
    const clickedElement = event.target;
    if (
      clickedElement.tagName === "A" &&
      clickedElement.classList.contains("clickable")
    ) {
      const clickedText = clickedElement.textContent;
      console.log("clickable", clickedText);
      prepareMeResponse(clickedText);
    } else {
      console.log("not clickable");
    }
  };

  const [state, setState] = React.useState({
    messageSent: false,
  });

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (contactF, contactL, contactE, contactM) => {
    e.preventDefault();
    setStatus("Sending...");
    setState({ messageSent: true });
    const name = contactF + " " + contactL;
    const email = contactE;
    const message = contactM;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    //http://localhost:1234/contact
    let response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: new URLSearchParams(details).toString(),
    });
    setStatus("Submit");
    let result = await response.json();
  };

  return (
    <div className="flex flex-1 flex-col">
      <input type="hidden" name="form-name" value="PortfolioContact"></input>
      <div className=" flex flex-1 flex-col justify-between p-2">
        <div
          id="messages"
          className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col space-y-4 overflow-y-auto p-3"
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              who={message.name}
              message={
                <div
                  dangerouslySetInnerHTML={{ __html: message.message }}
                  onClick={handleClickClickable}
                />
              }
            />
          ))}
        </div>
      </div>
      <div className="py-2">
        <p
          className="text-right text-gray-200 hover:cursor-pointer"
          onClick={clearChat}
        >
          Clear chat
        </p>
      </div>
      <div className="justify-between bg-gray-100 p-4 shadow-md sm:items-center">
        <div className="relative flex">
          <input
            onChange={onChangeMessageInput}
            type="text"
            ref={inputRef} // Set the ref for the input element
            onKeyPress={handleKeyPress} // Attach the key press listener
            placeholder="Chat to navigate"
            className="w-full rounded-md bg-gray-100 py-3 pl-12 text-gray-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 items-center sm:flex">
            <button
              onClick={addUserMessage}
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-3 text-white transition duration-500 ease-in-out hover:cursor-pointer hover:bg-blue-400 focus:outline-none"
            >
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-2 h-6 w-6 rotate-90 transform"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
            .clickable {
              color: rgb(59, 130, 246);
              cursor: pointer;
            }
          `}
      </style>
    </div>
  );
}

export default Chattery;
