# Submitting assignments

To submit an assignment, create a file named `assignmentN/lastname.html` and commit it in the local version of your repository. Push to Github, then [create a pull request](https://help.github.com/articles/about-pull-requests/) to add it to this directory.

## Sending Commits to GitHub

Create a new file with your assignment. Save your work in the repository folder, following this pattern: `savi-750/assignments/assignment1/yourname.html`. The `savi-750` will be in a different place on everyone's computer.

Commit your new file to git. This creates a record of the changes you made. There are two ways to do this, on the command line, or in the GitHub app.

On the command line, the command sequence is as follows. These should be run from Terminal (or `Git Shell` in Windows) after navigating to the `savi-750` directory:

```bash
git add assignments/assignment1/yourname.html
```
This "stages" this file, putting it on deck to be committed to the repository. Any other altered files will be ignored.

```bash
git commit -m "~~~description of your changes~~~"
```
This commits the stages file (or files) to git with your message, username, and the date and time. Your change is now part of a chain of changes in our shared repository.

```
git push
```
Sends your changes to GitHub, which is helpfully hosting a copy of your git repository. Remember that GitHub is just an intermediary, and it would be perfectly possible to use git without GitHub (although it would be more complicated to set up).

For the GitHub desktop app, the sequence is described here: [Committing and reviewing changes to your project](https://help.github.com/desktop/guides/contributing/committing-and-reviewing-changes-to-your-project/)

Once your commits have been sent to GitHub, you can confirm by visiting `https://github.com/<username>/savi-750`. Your commit(s) should be mentioned in an informational box. You can also see the record of commits in the commits tab (e.g. `https://github.com/fitnr/savi-750/commits/gh-pages`).

### Pull request

Now, create a [create a pull request](https://help.github.com/articles/about-pull-requests/). This is a request (to me) to add your changes to my version of the course repository. This will create a discussion page. I may ask you a question or make a suggestion here, or I may just `merge` your changes and `close` the request.

You can see an [example of this discussion in this pull request](https://github.com/Kozea/CairoSVG/pull/108) I made on a open-source project. (You can skip over the technical details, just note how the maintainer made a suggestion, I made a further change, than then they `merged` my changes.

### Pulling changes from the course repository to your home repository

The above covers going from a change on your computer, to your GitHub account, to the course repository (`your laptop -> your GitHub -(pull request)-> course repository`). It's also important to pull changes in the other direction. Luckily, you can do that in one step (`course repository -> your laptop`).

First, you need to tell your local git repository about the main course repository. The GitHub desktop app doesn't have this function, so you must do it on the command line. You only need to do this step once.
```bash
git remote add upstream https://github.com/fitnr/savi-750.git
```

To ensure that this worked, run this command, which will tell you the name & addresses of the remote repositories you've created a link to:
```
git remote -v
```
The result will look something link:
```
upstream  https://github.com/fitnr/savi-750.git (fetch)
upstream  https://github.com/fitnr/savi-750.git (push)
origin    https://github.com/YOURNAME/savi-750.git (fetch)
origin    https://github.com/YOURNAME/savi-750.git (push)
```

Once that setting is in place, run this command at any time to check for new commits (if any):
```
git pull upstream gh-pages
```

For some students, the `upstream` repo is named `fitnr`. Use this instead:
```
git pull fitnr gh-pages
```

(Run all of these on the command line from within your `savi-750` folder)
