---
layout: "post"
title: "css-basic-2"
date: "2018-11-22 23:29"
---

# CSS Basic 정리 2

> [freecodecamp](https://learn.freecodecamp.org/) 의 Applied Visual Design 내용을 나름대로 다시 정리한것임을 밝힌다.

##### Text Align
```CSS
.sample {
  text-align: justify;
  text-align: center;
  text-align: right;
  text-align: left;
}
```
##### Width & Height
```CSS
.sample {
  width:200px;
  height:100px;
}
```
##### Strong & u & em & s tags
```HTML
{
  <strong>Change Text</strong> <!-- same with font-weight:bold; -->
  <u>Change Text</u> <!-- same with text-decoration: underline; -->
  <em>Change Text</em> <!-- same with font-style: italic; -->
  <s>Change Text</s> <!-- same with text-decoration: line-through; -->
}
```
##### hr
```HTML
{
  <hr /> <!-- what about vertical line? -->
}
```
##### box-shaddow
offset-x : 가로축으로 얼마나 멀리까지 그림자가 드리우나
offset-y : 세로축으로 얼마나 멀리까지 그림자가 드리우나
blur-radius(옵션) : 얼마나 그림자가 번져있을것인가(블러 처리 되는가)
spread-radius(옵션) : 얼마나 멀리 퍼져있는가????
```css
{
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
```
##### Opacity
```css
{
  opacity: 0.7; // 0 (완전 투명) ~ 1 (불투명)
}
```
##### transform
```CSS
{
  text-transform: capitalize; //Transform Me
  text-transform: inherit; //use parent value
  text-transform: uppercase; //TRANSFORM ME
  text-transform: lowercase; // transform me
  text-transform: none; // defalut (initial 도 있는 결과는 같음)
}
```
##### font-size & font-weight
```CSS
{
  font-size:10px; // how big
  font-weight: 800; //how thick or thin (어디서부터 어디까지?)
}
```

##### line-height

##### hover state

##### position

##### z-index
