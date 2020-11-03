# Monorepo Reference

The intention for this reference is to provide all the boilerplate monorepo
configuration (that would usually take a long time to configure) up-front
so it will be quicker to start monorepos for new projects.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Design Requirements](#design-requirements)
  - [General](#general)
  - [TypeScript](#typescript)
- [What comes with this reference](#what-comes-with-this-reference)
  - [Global Linting and Auto Style Fixes](#global-linting-and-auto-style-fixes)
  - [Git Hooks](#git-hooks)
  - [Easy TypeScript Refactoring Across Multiple Packages](#easy-typescript-refactoring-across-multiple-packages)
  - [End-to-End Testing Framework for Web](#end-to-end-testing-framework-for-web)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Design Requirements

### General

- Package structure supports packages that use different languages.
- Configure linting once at the root level.
- Inherit configuration information where possible.

### TypeScript

- Must be able to easily refactor code across different packages without
  having to rebuild each package to see changes in IDE. Packages will still be
  built in order when packaging them up for deployment.

## What comes with this reference

### Global Linting and Auto Style Fixes

Linting rules are setup once at the project root. The IDE can be configured
to fix linting issues on a save event.

### Git Hooks

Git hooks are useful for enforcing good commits. They help ensure stylistically-faulty or broken
code does not get committed.

Husky JS configures git hooks in a way that can be easily tracked through
source code versioning.

Currently, Husky will **format all the code** in the repository and
**generate a table of contents for all markdown files** before committing any code.

Additional hooks can be added in the `.huskyrc` file. Another possible hook for example, is
a hook that runs your tests before pushing to a repository.

### Easy TypeScript Refactoring Across Multiple Packages

The packages have been configured to allow for easy refactoring across multiple packages. Your
IDE will update call sites in different packages and tou don't have to rebuild each individual
package before updating the call site in a separate package. This will save a lot of time.

### End-to-End Testing Framework for Web

Codecept has been configured to work with TypeScript out of the box on `localhost:4200`. No
more messing around trying to find the right configuration. Just write your tests using
`yarn e2e:new` and run `yarn e2e` to execute your tests or `yarn e2e:gui` for a nice
control dashboard.
