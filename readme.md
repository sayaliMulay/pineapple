# Project _Pineapple_

This project allows developer candidates to display their ability to deliver clean
and usable code using Angular in a timely manner. Candidates will receive feedback on their coding
style, substance, and completeness following the exercise.

_We've included all of the Angular Material framework in the project for your ease. Feel free to use it
at your discretion._

## Brief Overview

I have added custom filter at "src\app\filter.pipe.ts", where I have added logic to search in column of table.
Using Mat-toolbar of Angular Material, I have added search icon at top which toggles with toolbar.

Logic for search bar is-
1) Check all items of array one by one
2) Using Filter function return new array of items in which search string is present.
3) By using this "filter" as pipe operator, I have used it in for loop of table to sort the table content
4) Search key is passed to "filter" pipe by adding ngModel to input type searchbar.

## Preparation

- [ ] Make sure you have [Node](https://nodejs.org/en/download) installed on your
development machine
- [ ] Fork this project into your personal GitHub repository
- [ ] Review the project's file structure to prepare for tackling deliverables
- [ ] From the command line, traverse into the project's root folder and run `npm install`
- [ ] After installation completes, run `npm run start` and [open a browser window to view the
project](localhost:4200)

## Deliverables

- [ ] Add a search filter for the table of device data. The user should be able to type a string of
text and see the collection of devices update in real time.
- [ ] All tests should pass when executing the `npm run test` command in root.
- [ ] After you've completed your work, send us a link to your remote repository along with a _brief_ overview of your solution.

## Bonus Deliverable

Feel free to use your creativity to provide any additional functionality and we would happily review that as well.

<br>

![May the Force be with you](https://media.giphy.com/media/JDnaQ8qn0Myuk/giphy.gif)