## Introduction
This repo contains a the code for a Video Calling Application. It makes use of `React JS`, Node JS, SocketIO, simple-peer, emoji-mart and scaledrone API. It allows two users to have a `video call` alongwith having `Chat` with interactive `Emojis`.

You can find the app here:
https://microsoft-teams-clone-anjali.netlify.app/ 

Your can also find a brief presentation containing Mockups and features description here :

 https://docs.google.com/presentation/d/1phaM-zZ-Nr8osRKZxsMOAj5VLOLKjO-50fQe9AaKwdQ/edit#slide=id.gb820fec44c_0_21





## Setup and Installation:

#### Clone the repo :
    $ git clone https://github.com/AnjaliRana20/Microsoft-Teams-Clone.git

#### Run the following commands for setup:
    $ npm install
    $ cd client
    $ npm install


## Usage:

#### Start the server:
    $ node index.js
    $ cd client
    $ npm start

This starts backend server at https://localhost:5000: and frontend at https://localhost:3000:


## UTILITIES:

- Backend- Node JS
- Frontend- React JS
- Video Calling- simple-peer, SocketIO
- Chat- Scaledrone API
- Emoji- emoji-mart

## FEATURES: 

### Video Player
- Plays your Video Inline when Video is not turned off.
- It contains your name at the top.

### Chat: 
- Allows chat between people while having the call. 
- Users can start chat before call and continue during call.


### Emojis:
- Allows users to send emojis along with text messages to have interactive chat experience!.


### Mute On/Off:
- Allows users to turn their mic on/off while calling.


### Video On/Off:
- Allows users to turn their Video on/off while calling.


### Screen Share On/Off:
- Allows users to turn their Screen Share on/off while calling.


### Call and Hangup Buttons:
- Allows user to decline/accept while receiving call or hangup during call.


### Notification Popup:
- Notifications pops up whenever someone calls.

### Chat popup
- This opens up Chat Dialogue Box.
- It has send button, emoji button, textbox to enter input.
- Whenever there is overflow in message, the text adjusts itself in other line. 

### Call info popup
It contains:\
- It has textfield to enter your name which will appear at the top of video player.
- Copy to Clipboard button to copy your ID.
- Textfield to enter your friend's name and his ID to which you wish to call.


## GUIDE:

#### Steps for making a video call
- Click on contact info icon to the top left of the app.
- Write your name, friend's name whom you want to call and his ID.
- The other person receives the notification that you are calling.

#### Steps for receiving a call
- You will see a notification showing username of the caller at the top.
- Click on green button to pickup and red to decline.

#### Steps to chat
- Click on chat icon to the top right of the app. A popup will appear.
- Enter your message in the textfield and add emojis of your choice.
- Click on send to send the message.

#### Steps to turn on/off your mic/video/screenshare
- Click on the toggle buttons at the bottom centre for performing theses functions.



Feel free to have fun call and chat with your friend!