Your Solution Documentation
===========================

Installed the following additional packages:
Frontend
- moment
- node-fetch
    - If you're developing in pure javascript, I think this module is light-weight to use.
Backend
- mysql
- body-parser
- cors
    - Enables cross-origin resource sharing

Added the following in css:
- Bulma
    - Used this CSS framework because it's simple to learn, use, and well documented. The class names are pretty readable, has great modifiers, and responsive. For me, using this CSS framework is helpful especially if you have a limited time to develop a user interface.
- Font Awesome

Development:
1. Did an npm install first for both ui and server.
2. Created a mock functional user interface first. Added additional codes in the parent component that calls for the child components: InvitedCard and AcceptedCard.
3. Connected mysql and added additional configuration on the server.
4. Created API with GET method and POST method for changing of lead status.
5. Integrated backend and frontend using node fetch.
