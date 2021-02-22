---
layout: post
title:  "Jekyll 설치하기"
author: 둥실
date:   2019-11-18 12:31:11 +0900
categories: jekyll install mac
---

# Update ('21.02)
20년형 맥북에서도 마찬가지로 설치가 안된다.   (M1 칩 전 모델)  
이번엔 CommandLineTools로 바꿔도 안되는듯 하다.  
문제는 CommandLineTools 경로에 darwin19, darwin20 폴더 이름 문제다.  
맥에서의 폴더 이름은 darwin20인데, Jekyll 설치중에는 darwin19 경로를 찾는것이다.  
간단하게 동일한 경로에 심볼링 링크를 걸어서 해결했다.

```sh
sudo ln -sf universal-darwin20 universal-darwin19

```

[여기](https://stackoverflow.com/questions/63729369/commonmarker-gem-cannot-be-installed-needed-for-jekyll-macos)를 참고 했다


# Jekyll 설치 for MAC OS Catalina

회사를 그만두며 회사에서 사준 Mac 을 반납하고 Mac을 개인용으로 다시 사야했다.   
예전에 쓰던 개인용 Mac은 지난번 입사하면서 팔아버렸기때문이다.(~~어리석었던 과거의 나놈~~)  
어쩄거나 블로그 관리를 위하여 Jekyll 을 설치를 하려고 오랜만에 가이드를 따라가보는데   
생각보다 한방에 설치가 잘 안된다.
하면서(~~빡치면서~~) 떠오른건데 지난번에도 마찬가지였던 듯 하다.

그래서 이참에 진행했던 내용을 정리해두려한다.

MAC OS Catalina에 Jekyll Blogging Platform 을 설치하기  
Jekyll 공식 사이트 가이드 및 여러가지 구글링 결과를 참고 하였다.

> 참고 
Jekyll 공식사이트(https://jekyllrb.com/docs/) 의 QUICK START는 그대로 따라하지 않는게 좋을것 같다.  
MAC에선 어차피 따라해도 제대로 되지도 않았고 간소화를 위해서인지 전부 시스템 설치 기준이다.


## Prerequirement

- Ruby (2.4.0 이상) 
- RubyGems 
- GCC , Make

내 경우엔 다 설치 되어 있었다.   
Default로 맥북 프로에 설치가 되있는건지, 아니면 언제 다른 프로젝트 세팅하다가 설치했는지 정확히 모르겠다.   
필요하다면 각각의 공식 가이드를 참조하여 설치해주자. 아마도 어렵지 않을것이다.~~(무책임)~~  
루비를 다시 사용할일이 있을지 모르겠으므로 rbenv 는 활용하지 않았다.

## 설치 

순서는 Installation 가이드를 기본으로 하지만 약간씩 수정하거나 덧붙였다.

#### MacOS Command Line Tools package 설치

```bash
Xcode-select --install  
```
   
   
   > What is the Command Line Tools Package?  
The Command Line Tools Package is a small self-contained package available for download separately from Xcode and that allows you to do command line development in macOS. It consists of the macOS SDK and command-line tools such as Clang, which are installed in the **/Library/Developer/CommandLineTools** directory.  
참고(https://developer.apple.com/library/archive/technotes/tn2339/_index.html)


#### mkdir myblog / cd myblog
원하는 경로에 디렉토리 생성 및 이동 

#### bundler
bundler 설치 및 경로 설정

```bash
# bundler 는 그냥 global 설치를 했다.
gem install bundler
# 현재 폴더에 init 을 해주고
bundle init
# bundle package 들의 install 경로를 정해준다.(Optional)
bundle install --path vendor/bundle
```

bundle install 경로를 지정하지 않아도 상관없지만 그럴경우 각종 package 들이 system 에 설치되는데 이렇게 되면 나중에 관리도 힘들고 매우 좋지 않다.

#### Jekyll 설치

```
bundle add jekyll
bundle exec jekyll new --force --skip-bundle .
bundle install
```

   
이부분에서 'mkmf.rb can't find header files for ruby' 에러가 발생했다.  
사용권 동의가 안되면 그럴수 있다고 해서 시도해봤다.

``` bash 
    sudo xcodebuild -license accept # 사용권 동의
```

아 안타깝게도 아니다..다른 이유를 찾아봐야한다.
다행이 이유를 찾은듯 하다.

``` bash
    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 이 경로를 확인해보면 현재 MAC에서 가리키고 있는 곳에 Header들이 없음을 알수 있다. (제일 첫번째 Developer Tools 설치했던 경로가 아님)

    sudo xcode-select --switch /Library/Developer/CommandLineTools 
    # 위의 Developer Tools를 새로 설치한 경로에는 Header 가 있으므로 바꿔준다. 
    # *** 경고 이 명렁은 Xcode 와 관련된 환경 전체가 바뀐다. 따라서 현재 경로로 세팅해서 개발하고 있는 다른 프로젝트가 있다면 문제가 발생할 수 있다. ***

    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 잘 바뀌었나 확인해보자.

    sudo xcode-select --switch /Applications/Xcode.app
    # 완료한 후에 다시 돌아가려면 위와 같다. (xcode-select 에서 default 옵션도 있는것 같았으니 참고)

```
 이제 된다!!

> https://stackoverflow.com/a/58226876/5732826 를 참고 (Thanks @joki)

## 실행

bundle exec jekyll serve

## Next

이제 Jekyll이 Local에서 돌아가지만 제대로 블로그로 사용을 하려면 역시 Github pages 에 올려야 한다.
예전에 Github pages에 올렸던 적이 있지만 너무 오래되서 이참에 정리하고 새로 진행하려고 한다.
다음번 포스팅에서 정리해보도록 하겠다.