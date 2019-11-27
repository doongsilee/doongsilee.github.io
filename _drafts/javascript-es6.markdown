---
layout: "post"
title: "javascript_es6"
date: "2018-12-01 15:47"
---

# Javascript ES6 문법 정리

> freecodecamp 강의를 나름대로 다시 정리한 것입니다.

왜 이리도 코드를 읽기가 힘들지?
내가 알던 자바스크립트가 아니네
예전에 나름 javascript 개발을 해보긴 해봤는데 이 요상한 문법들은 대체 뭐지

최근에 Javascript 코드를 보면서 이런 생각들을 해본적이 있는가?
적어도 난 그렇다. 특히 React 코드를 볼때.
그러던 와중에 Javascript ES6를 보고 깨달았다. 그 모든 수상하게 생긴 녀석들이 대부분 ES6에서 새롭게 소개된 기능들이라는것을..

하나씩 정리를 해보기 전에 예를 들면 어떤 것들을 말하는것일까?
이런 녀석들이 아주 낮설다.

```Javascript
// Import
import React, {Component} from 'react';
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";

//Arrow Function
handleToggleIcon = (i = 0) => {
    const {tos} = this.state;
    tos[i] = !tos[i];
    this.setState({tos});
  }

// map, reduce, apply

// template string

//
```


하나씩 정리를 해보자.

## let
let은 그동안 사용되던 var와 많은 면에서 동일하지만
몇 가지 특별한 기능을 더 가지고 있다.
첫번째로 let 은 동일한 변수를 두번 선언하는 것을 막는다.
아래를 보자.

```Javascript
  var name = "david"
  var name = "ryan"

  console.log(name); // ryan 이고 문제 없음

  let name = "david"
  let name = "ryan" //여기서 이미 에러 발생
```

또 하나의 중요한 특징은 var 의 경우 함수 안에서 선언한것을 제외하면 전역 변수로 선언되는 반면 let 은 block, statement, expression 등 다양한 상황에서 지역변수로 선언 될수 있다는 점이다.

예를 들면 for 문 조건문에 흔히 쓰는 i변수는 let을 쓰는것이 개발하는 의도에 맞을 것이다.
```Javascript
  for (var i=0;i<10;i++) {}

  console.log(i) //10 접근 가능

  for (let i=0;i<10;i++) {}

  console.log(i) //undefined
```

## const

const 역시 새롭게 추가된 선언인데
let이 가지고 있는 기능 외에 추가로 read only 기능을 제공한다.

```Javascript
  const NAME = "ryan";
  NAME = "dony" // error!!
```

분명히 해둬야할 것이 있다. const 로 배열이나 object 를 선언할때는 상황이 좀 다르다. 아래 예를 보자.
> object data를 변경을 확실히 막기 위해서는 Object.freeze()를 사용할 수 있다.

```Javascript
  const arr = [1,2,3];
  arr = [4,5,6] // error But
  arr[2] = 9; // not error!!
  console.log(arr) // 1,2,9

  const TEST = {
    name:ryan;
  }

  TEST = {name:dony}; //error!!
  TEST.name = "dony" // not error!

  Object.freeze(TEST);

  TEST.name = "heiley" // ignored

  console.log(TEST) // { name : ryan}
```

## Arrow Function Syntax

ES6에서 새롭게 추가된 기능이다.


```Javascript
  const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

  const myFunc = () => { //function 키워드 생략가능
    const myVar = "value";
    return myVar;
  }

  const MyFunc = () => "value"; // {} 와 return 까지 생략가능

  //with parameters
  const sum = (a,b) => a + b;
```

Arrow Function 은 javascript 의 higher order functions (map, reduce, filter 등)들과 함께 사용할 때 특히 편리하다.

```Javascript
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```

## Defalut parameters

## Rest Operator / Spread Operator

## Destructing Assignment

## Template Literals

## other declarations

## class Syntax

## import & export
