# The Top 20's


This project is just a one page app, which fires the calls to the 3 different endpoints to get the 20 most popular films, people and tv shows. When you click on any of the different items cards(movie, actor or tv show) you'll see a modal window showing some more basic info about that item. 

I've put everything under App.js so I could just use the state from that main component and avoid using redux or similar.

I'm quite sure there's many many things I could do to improve the app and the performance of it but think I already used enough time for the coding test at this point.

I decided to use Fetch to do the api calls (because I had never used it and I wanted to try it) , but this meant I had to use a polyfill in order to be able to run this app in IE11 (this browser is still widely used so, just for purpose of crossbrowsing). 
As you can see in the Api.js file, I have a different request setup for each different endpoint, and in order to get only the 20 most popular, I'm just passing a parameter.

I believe I might have employed around 10 hours of work for this. Unfortunately, most of the time went when trying to setup jest and enzyme for testing. I actually had to abandon the original idea and set up for having diff webpack configs for diff environments because I couldn't just for the life of me find a way to have everything working with Babel 7. When trying to test a simple React component, jest was returning an error as if it couldn't parse the code. Apparently quite a few things have changed recently in diff packages specs and I found myself having a huge mess, so I googled a bit to find an example of a project with tests setup that wasn't based on CreateReactApp (as I didn't use it) and just went for a basic webpack conf. All in all, I've managed to do two lines of tests (super basic) but I couldn't invest more time in the coding test than I already have and unfortunately I haven't implemented the search feature either. 

Of course this means I did not follow TDD, but between my experience in this being not that long and the testing being a plus for the coding test, I left it for the end.
The test I added was just a simple test, with some mock data, to check how the card component would render. I think that, ideally, all the small components should be tested, just with unit tests, to double check certain things like props or expected outputs, mocking functions maybe, but also integration tests should be added to test the whole flow and its different interactions. I would definitely add tests for the actual api calls but for the tests in the app I would probably mock those. I guess the actual API would have its own tests, but we could also test against production to get feedback on how the services are working.
 
 I haven't included any linter or anything, but I do like to have those things setup in the projects, as it's way too easy to forget your brackets or commas.

In terms of project structure, I went for something simple. I do personally like the atomic design way (smaller components, components made of components, pages, etc...) so for a proper project I would probably create diff subfolders containing components such as the card and modal, away from those more functional components, and maybe having components for just the layout.


I think, in general I've tried to be as quick as possible, and so very pragmatic.

For the css I'm using Bulma, a framework I've never used before so I haven't had much time to dive into it, but so far it works for my needs here. Of course using the css framework gives you many things for free (base font size, typography, etc...) so I only added a bit  of css for specific stuff. As you can see I'm trying to follow BEM on the classes names. There's probably a lot of repetitions and it's definitely not scalable at all, if we need it to be easy for people to develop.
There are so many approaches though to this when you want scalable and maintainable: styled components, different stylesheets for components, using pre-processors like I do here or just using post-css (which I was going to and then forgot!), etc... I guess for each project, its needs.


Accessibility wise, I've just done the very basic, trying to have the most semantic layout possible. There's probably lots of things missing like hidden help for screen readers, aria-labels, role attributes, etc... Things like making sure that the focus goes to the X (close button) in the modal once is open and maintains the focus withing it to allow tabbing to stay there, etc...

I've tested it using BrowersStack for ie11 and locally with Firefox, Chrome, Safari

My node version is 10.15.1


#### Serve: run development server at http://localhost:8080/
`npm run serve`

#### Build: build for production
`npm run build`



#### Test: run tests with Jest
`npm run test`
