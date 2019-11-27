---
layout: "post"
title: "CSS Basic"
date: "2018-11-21 22:57"
---

# CSS Basic 정리

> [freecodecamp](https://learn.freecodecamp.org/) 의 CSS Basics 을 내용을 간단히 정리한 것임을 밝혀둔다.

## Selector의 종류

##### Tag Selector

```CSS
h2 {color:green;}
```

##### Class Selector

```CSS
.green-text {color:green;}
```

##### Id Selector
가급적 Unique 할 것!
```CSS
#green-text {color:green;}
```

##### Attribute Selector
```CSS
[type='radio'] {color:green;}
```

## 기본적인 Properties

##### Fonts
```CSS
.font-sample {
  font-size:15px; //1.5em
  font-family:"Open Sans", sans-serif;
}
```

##### Size & Boarder
```CSS
.image {
  width: 100px;
  border-color: red;
  border-width: 5px;
  border-style: solid;
  border-radius:50%;
}
```

##### Margin & Padding
```CSS
.image {
  margin: 10px 0px 0px 10px; // 시계방향 (위,오른쪽,아래,왼쪽)
  padding: 10px 0px 0px 10px; // same
}
```

##### Color
```CSS
.sample {
  color:red; //이하 모두 동일하다.
  color:#FF0000; //Hex
  color:#F00; //shortened version Hex
  color:rgb(255,0,0); //rgb
}
```

## 적용 우선순위

1. 동일한 우선순위에서는 가장 마지막(파일의 아래) 스타일이 적용된다.
2. 아래는 우선순위가 높은것부터 나열하였다.
  - !important
      ```CSS
        .sample {
          color:black !important;
        }
      ```
  - inline style
      ```HTML
        <div style="color:black;"></div>
      ```
  - id
      ```CSS
        #sample {
          color:black;
        }
      ```
  - class
      ```CSS
        .sample {
          color:black;
        }
      ```

## CSS Variable

```CSS
:root {
  --penguin-skin: gray;
}

body {
  color : gray //for Old browser Fallbacks
  color:var(--penguin-skin,gray);
}
```

## Media Query

```CSS
@media (max-width: 350px) {
    :root {
      --size: 10px;
    }
  }
```
