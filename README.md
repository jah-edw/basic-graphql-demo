# basic-graphql-demo
A basic application to show how the fundamental parts of a GraphQL set up interact with each other.

## Getting started

I find that the best way to get to grips with how something works is to tear it apart and try to put it back together. This is a very basic app designed for that purpose.

1. Clone the project to your local machine.
2. Open the project folder and run `npm i` from your terminal.
3. **Break it!** It's probably sensible to work on a separate branch of the project, in case things get a little ugly and you want to be able to go back to a working start point.  

If you fancy reading a little more about GraphQL basics, you can find my articles [here](https://dev.to/jahedw) :)

---


Things to consider when using this:
- If this was a real project and you were writing your own resolvers, you probably wouldn't have your data stored as a string in a `.js` file. You'll have to use database methods to find and transform the data you're working with, but to keep things simple, that's avoided here.
- This app is designed to show off the basics of GraphQL without having to look at Apollo, Relay, or any other helpful implementations. Its likely that you won't use raw GraphQL in your own applications, but its good to know the basics before using an extra library. 

