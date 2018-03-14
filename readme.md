# Music DB

Our goal in creating Music DB was to build a platform where every single musician involved in creating a track and album can receive acknowledgements for the work they've done. There is so much that goes behind the scenes in creating a song and album but yet many musicians don't receive the credit they deserve - and that's what we want to change. Working closely together we built an app where a musican can create a profile, showcasing what projects they have worked on for the world to see. And this is just the beginning phase of what we hope Music DB will come to be.

![UI Screenshot](https://i.imgur.com/CRA7Kpg.png)
![UI Screenshot](https://i.imgur.com/vwV8hlK.png)

## Built With
* Express
* Node.js
* Spotify API
* JavaScript
* JQuery
* OAuth (Facebook)
* Passport
* MongoDB / Mongoose
* HTML
* Materialize CSS
* Heroku

## Getting Started

Prior to pitching Music DB to our tech advisors we first began brainstorming ideas on our **[Trello board](https://trello.com/b/LrWaPHwh/dassit-music-db)**.

Once we knew what direction we wanted to go we created a **[pitch deck](https://docs.google.com/presentation/d/1s1ZraT1Jqh7GH6N4qVrCChEWphwolOWF7pzhdXrgMu4/edit#slide=id.g35f391192_00)** .

Now that Music DB is a real life app rather than just an idea, we deployed our app on Heroku for you to **[view here](https://imusicdb.herokuapp.com/)**!


### How Music DB works

1. To gain access to Music DB a user has to login to our app through Facebook.
2. Once a user is logged in they are directed to their profile page where they can begin adding credits.
3. To add a credit a user can specify whether they played,wrote, or produced alongside a particular artist. A user can also edit and update a credit if their role has changed.

## Documenation of Music DB's API endpoints

| Method |       Path         |               Body                         |
| ------ | --------------     | ------------------------------------------ |
| Get    | '/api/credits'     | list of all credits in our database        |
| Get    | '/api/instruments' | list of all instruments in our database    |
| Post   | '/api/credits'     | create a credit                            |
| Delete | '/api/credits/:id' | delete a credit                            |

## Next Steps

We are still working on implementing the following features:

* We want to implement a feature where upon visiting Music DB you can search which musicians played on what track or album whether you are logged in or not.
* We want a musician to be able to sepcify what song and/or album they worked on and have that information be displayed on their profile.
* We want to expand the list of roles and instruments used on a track/album.

## Acknowledgments

We want to thank Jim and Jon for their assistance in developing this project!
