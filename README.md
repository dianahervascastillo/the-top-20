# The Top 20's

This project is just a one page app, which fires the calls to the 3 different endpoints to get the 20 most popular films, people and tv shows. When you click on any of the different items shown(movie, actor or tv show) you'll see a modal window showing some more basic info about that item. 
As you can see in the Api.js file, I have a different request setup for each different endpoint, and in order to get only the 20 most popular, I'm just passing a parameter.

I decided to use Fetch to do the api calls (because I had never used it and I wanted to try it) , but this meant I had to use a polyfill in order to be able to run this app in IE11 (this browser is still widely used so, just for purpose of crossbrowsing). 

I'm quite sure there's many many things I could do to improve the app and the performance of it but I already used enough time for the test.
I believe I might have employed around 10 hours of work for this. Unfortunately, most of the time went when trying to setup jest and enzyme for testing. I actually had to abandon the original idea and set up for having diff webpack configs for diff environments because I couldn't just for the life of me find a way to have everything working with Babel 7. When trying to test a simple React component, jest was returning an error as if it couldn't parse the code.
Apparently quite a few things have changed recently in diff packages specs and I found myself having a huge mess, so I googled a bit to find an example of a project with tests setup that wasn't based on CreateReactApp (as I didn't use it) and just went for a basic webpack conf. All in all, I've managed to do two lines of tests (super basic) but I couldn't invest more time in the coding test than I already have and unfortunately I haven't implemented the search feature either. 

In terms of structure,I went for something simple. I do personally like the atomic design way (smaller components, components made of components, pages, etc...) so for a proper project I would probably create diff subfolders containing components such as card and modal, away from those more functional components. 
I think, in general I've tried to be as quick as possible, and so very pragmatic.
For the css I'm using Bulma, a framework I've never used before so I haven't had much time to dive into it, but so far it works for my needs here.

I've tested it using BrowersStack for ie11 (that's when I realised I forgot about the fetch problem) and locally with Firefox, Chrome, Safari






#### Build: build for production
`npm run build`

#### Serve: run development server with HMR
`npm run serve`

#### Test: run tests with Jest
`npm run test`
