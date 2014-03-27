##Using Javascript Testing Framework as library:

As we need to have ability to include our JTF framework to other projects to let them use JTF, we have performed some investigations in this subject. We've found a couple of ways to implement that. They are [Git Submodule](http://git-scm.com/docs/git-submodule) and [Bower Packages](http://bob.yexley.net/creating-and-maintaining-your-own-bower-package/).

###Bower
A package manager for the web. Bower is a nice utility for managing your projects client-side dependencies. If you're a web developer, you've probably at least heard of it, and maybe you've even used it to consume and manage the packages you use in your web app. You might have also thought to yourself, I wonder what I would need to do to share <that awesome little client library of yours> with the world through Bower. 
        
Bower is built on top of git. You can't distribute your package through Bower without it being hosted at some git endpoint, whether that is at GitHub, Bitbucket or some other git hosting provider (maybe you host your own).

Package versions are just git tags.
        
###Git Submodule
Submodules allow foreign repositories to be embedded within a dedicated subdirectory of the source tree, always pointed at a particular commit.
        
They are not to be confused with remotes, which are meant mainly for branches of the same project; submodules are meant for different projects you would like to make part of your source tree, while the history of the two projects still stays completely independent and you cannot modify the contents of the submodule from within the main project. 

They both allow to include private git repos as libraries to your project, but they have one main difference:

* Git Submodule allows to modify and contribute to submodule's repo.
* Bower doesn't have features to contribute into repo's it uses.

This is the main difference and we recommend to use Bower package way to disallow QA engineers to contribute into JTF's repo.

## Including Testing Framework as a bower package to your project

To **add** Testing framework's Git repository as a [Bower Package](https://github.com/bower/bower) to your project add to the _bower.json_ file dependencies:

    "dependencies": {
        "factory-testing-framework": "https://github.com/wmgdsp/factory-testing-framework.git#master"
    }
    
And then run `bower install` command.

Installed package will be placed in a `bower_components` directory. You can change this destination using the configuration options in a `.bowerrc` file.

    {
        "directory": "bower_components"
    }

## Including Testing Framework as a git submodule to your project

To **add** Testing Framework as [Git Submodule](http://git-scm.com/docs/git-submodule) use the `git submodule add` command:

    $ git submodule add git@:github.com:wmgdsp/factory-testing-framework.git js-framework
    
![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_add_submodule.png "Add submodule")
    
Now you have the testing framework under a subdirectory named `js-framework` within your project. You can go into that subdirectory, make changes, fetch and merge from the original repository, and more. If you run `git status` right after you add the submodule, you see two things:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_status.png "Git status")

First you notice the `.gitmodules` file. This is a configuration file that stores the mapping between the project’s URL and the local subdirectory you’ve pulled it into:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/gitmudules.png ".gitmodules file")

The other listing in the git status output is the js-framework entry. If you run `git diff` on that, you see

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_diff.png "Giff for js-framework")

You record submodule as the exact commit they’re at. You can’t record a submodule at master or some other symbolic reference.

When you commit, you see something like this:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_commit.png "Commit with js-factory")

160000 mode is a special mode in Git that basically means you’re recording a commit as a directory entry rather than a subdirectory or a file.

You can treat the js-framework directory as a separate project and then update your superproject from time to time with a pointer to the latest commit in that subproject. All the Git commands work independently in the two directories:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_log.png "")

You can go to `js-framework` subcategory and commit changes to `factory-testing-framework` repository

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_commit_in_submodule.png "Commit to subrepo")

And than push them to the server:

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_push_submodule.png "Push changes")

If you go back to the main directory and run `git status` you will see that directory `js-framework` was changed.

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_status_after_commit.png "Status")

Git record submodule as the exact commit it's at. The main project records the exact commit you’re currently working off of. After commit to project repository you will see

![alt text](https://github.com/wmgdsp/factory-testing-framework/raw/master/Documents/images/git_commit_after_changes.png "Commit after changes")

When you **clone** a project with a submodule in it after `git clone` command you must run two commands: `git submodule init` to initialize your local configuration file, and `git submodule update` to fetch all the data from that project.