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

    $ git submodule add https://github.com/wmgdsp/factory-testing-framework.git testing-framework
    
Now you have the testing framework under a subdirectory named `testing-framework` within your project.

When you **clone** a project with a submodule in it after `git clone` command you must run two commands: `git submodule init` to initialize your local configuration file, and `git submodule update` to fetch all the data from that project.