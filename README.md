<a href="https://github.com/matsta25/ngx-title">
<div align="center">
<img class="mx-auto center-block d-block" src="https://raw.githubusercontent.com/matsta25/ngx-title/main/ngx-title.png?sanitize=true" alt="ngx-title" width="200" height="200">
</div>
</a>

<h1 align="center">ngx-title</h1>

<p align="center">
  <a href="https://www.codefactor.io/repository/github/matsta25/ngx-title"><img src="https://www.codefactor.io/repository/github/matsta25/ngx-title/badge" alt="CodeFactor" /></a>    
  <a href="https://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT badge"/></a>
</p>

Ngx-title is small library that can enhance your html title in Angular based web page.

> If you are interested of contributing, go to [CONTRIBUTING](https://github.com/matsta25/angular-starter-app/blob/master/CONTRIBUTING.md) to make this project more awesome! :sunglasses:

## Demo



## Installation

Install `ngx-title` from `npm`:

```bash
  npm install ngx-title --save
```

Add package to NgModule imports:
```
  import { NgxTitleModule } from "ngx-title";
  
  @NgModule({
    ...
    imports: [NgxTitleModule,...]
    ...
  })
```

Add selected component to your page:
```
  <ngx-title [type]="'sleepy'"></ngx-title>
```

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent!

Read up on guidelines for [CONTRIBUTING](https://github.com/matsta25/ngx-title/blob/main/CONTRIBUTING.md).

## How to build lib for development

First time:

```bash
  git clone git@github.com:matsta25/ngx-title.git
  cd ngx-title
```

make changes in lib and build (location `/ngx-title/projects/ngx-title`):

```bash
  ng build ngx-title
```

run workspace (location `/ngx-title`) app and see results:

```bash
  npm run start
```

## Contributors

This project exists thanks to all these people :muscle: :

[//]: contributor-faces

<a href="https://github.com/matsta25"><img src="https://avatars2.githubusercontent.com/u/32844571?v=4" title="matsta25" width="80" height="80"></a>

## License

Everything in this repository is [licensed under the MIT License][license] unless otherwise specified.

Copyright (c) 2022 [Mateusz Stanczak]

[license]: https://github.com/matsta25/ngx-title/blob/main/LICENSE
[Mateusz Stanczak]: https://github.com/matsta25

<!---
BUILD lib
  in ngx-title-workspace/projects/ngx-title run ng build ngx-title
Publish lib
  in ngx-title-workspace/dist/ngx-title run npm publis

TODO:
docs like - https://www.npmjs.com/package/ngx-bootstrap
version 1.0.0 and post on reddit
change worksprace to ngx-title
-->
