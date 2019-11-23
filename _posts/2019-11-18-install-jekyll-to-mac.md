---
layout: post
title:  "Jekyll 설치하기"
author: 둥실
date:   2019-11-18 12:31:11 +0900
categories: jekyll install mac
---

# Jekyll 설치하기 for MAC OS Catalina

회사를 그만두며 회사에서 사준 MAC 을 반납하고 MAC을 개인용으로 다시 사야했다.   
예전에 쓰던 개인용 맥은 지난번 입사하면서 팔아버렸기때문이다.(~~어리석었던 과거의 나놈~~)  
어쩄거나 블로그 관리를 위하여 Jekyll 을 MAC 에 설치를 하려고 오랜만에 가이드를 따라가보는데   
생각보다 한방에 설치가 잘 안된다.
그리고 하면서 ~~빡치면서~~ 떠오른건데 지난번에도 마찬가지였던 듯 하다.

이참에 정리를 하면서 진행한다.

MAC OS Catalina에 Jekyll Blogging Platform 을 설치하기  
Jekyll 공식 사이트 가이드를 참고 할 것이다. 

> 참고 
Jekyll 공식사이트(https://jekyllrb.com/docs/) 의 QUICK START는 그대로 따라하지 않는게 좋을것 같다.  
MAC에선 어차피 따라해도 제대로 되지도 않았고 간소화를 위해서인지 전부 시스템 설치 기준이다.


## Prerequirement

- Ruby (2.4.0 이상) 
- RubyGems 
- GCC , Make

내 경우엔 다 설치 되어 있었다. rbenv 는 활용하지 않는다.  
굳이 루비를 또 쓸일이 있을지 모르겠기 때문이다.

## 설치 

순서는 Installation 가이드와 지금은 숨겨져(?? 못찾겠다. 구글 검색을 통해 발견) 있는 Tutorial 가이드의  이곳저곳에 나와있는 내용들을 합쳐서 내 나름대로 수정하였다.

1. Xcode-select --install
2. mkdir myblog / cd myblog
3. gem install bundler
4. git init
5. bundle init
6. bundle install --path vendor/bundle
7. bundle add jekyll
8. bundle exec jekyll new --force --skip-bundle .
9. bundle install
   
이부분에서 'mkmf.rb can't find header files for ruby' 에러가 발생했다.  
사용권 동의가 안되면 그럴수 있다고 해서 시도해봤다.

``` bash 
    sudo xcodebuild -license accept # 사용권 동의
```

아 안타깝게도 페일..다른 방식을 찾아봐야한다.
다행이 다른 방법이 있는 듯 하다.

``` bash
    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 이 경로를 확인해보면 현재 MAC에서 가리키고 있는 곳에 Header들이 없음을 알수 있다.

    sudo xcode-select --switch /Library/Developer/CommandLineTools 
    # 위의 1번에서 Developer Tools를 새로 설치한 경로에는 Header 가 있으므로 바꿔준다. 

    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 잘 바뀌었나 확인해보자.

    sudo xcode-select --switch /Applications/Xcode.app
    # 완료한 후에 다시 돌아가려면 위와 같다. (xcode-select 에서 default 옵션도 있는것 같았으니 참고)

```
 이제 된다!!

> https://stackoverflow.com/a/58226876/5732826 를 참고 (Thanks @joki)

## 실행

bundle exec jekyll serve