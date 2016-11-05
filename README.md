# Protractor-TypeScript Starter 

[![Build Status](https://travis-ci.org/99xt/protractor-starter.svg?branch=master)](https://travis-ci.org/99xt/protractor-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e540c98fb92b433a829bd741444a87a6)](https://www.codacy.com/app/99xt/protractor-starter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=99xt/protractor-starter&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/l/random-profile-generator.svg)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Join the chat at https://gitter.im/protractor-starter/Lobby](https://badges.gitter.im/protractor-starter/Lobby.svg)](https://gitter.im/protractor-starter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Description

 Protractor starting kit for writing end-to-end tests for angular.js applications. 
 Using TypeScript for strong typing and rich code completion suppor mixed with useful plugins built-in
 to the starterkit to help you get started writing protractor tests in no time.

# Documentation

Still to come.


# Contributing

Protractor-TypeScript Starter needs your contribution. Feel free to contribute to the project to make it even better. Suggest features, fix issues and improve. All contributions are welcome.
Follow the bellow steps to get started.

* Fork the repository
* Create a feature branch by running `git checkout -b new-feature`
* Add your changes by running `git add .`
* Commit your changes with `npm run commit` (We use Commitizen and Conventional Changelog. Please see bellow for more details)
* Push to the branch by `git push origin new-feature`
* Submit Pull Request.

## Prerequisites

* `npm` and `Node.js 4.6.1` are prerequisites to have 
* you can check your versions for both by running the following code in your terminal
```sh
$ node -v
$ npm -v
```

## Install Packages

```sh
$ npm install # install the npm packages 
$ typings install # install TypeScript typings
```

You also need `es6-promise`
* if this does not load with `npm install`

    Run in your terminal:
    `$ npm install es6-promise --save`


## Run Tests

NPM is configured to run the tests. After the package installation run the following in the terminal.
```sh
$ npm run test
```

A pre-test step is configured to run before `npm run test` to compile the TypeScript in to ES5 code. To run this manually by running the following line in a terminal

```sh
$ npm run compile # this runs the configued npm script to compile TypeScript
```

## Commit Guidelines (Git Commit Convention)

A strict commit guidelines are followed so that its easy to do release with semantic versioning. [Semantic Release](https://github.com/semantic-release/semantic-release) package is used to do this. [Commitizen](https://www.npmjs.com/package/commitizen) is used with [Commitizen Conventional Changelog](https://www.npmjs.com/package/cz-conventional-changelog) to add proper commit messages. Git hooks  created using [ghooks](https://www.npmjs.com/package/ghooks) are inplace to enforce the commit format used in the project.
Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject. The commit message format is bellow.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Header is mandatory and the scope is optional, But its encouraged to add a scope. Footer is also optional.
To perform a commit follow these steps

```sh
# Add the files you want to commit
$ git add <FILES_TO_COMMIT>

# Use the configured ghook
$ npm run commit
```

[Read More](http://commitizen.github.io/cz-cli/) to learn about Commitizen and its conventions.

# License
MIT © [99X Technology](http://www.99xtechnology.com/)