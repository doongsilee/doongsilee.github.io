---
layout: post
title:  "Jekyll 설치하기"
author: 둥실
date:   2019-11-18 12:31:11 +0900
categories: jekyll install mac
---

# Jekyll 설치하기 for MAC OS Catalina

회사를 그만두며 회사에서 사준 MAC 을 반납하고 MAC을 개인용으로 다시 사야했다.   
예전에 쓰던 맥은 지난번 회사 입사하면서 팔아버렸기때문이다.(~~어리석었던 과거의 나놈~~)  
어쩄거나 블로그 관리를 위하여 Jekyll 을 MAC 에 설치를 하려고 오랜만에 가이드를 따라가보는데   
생각보다 한방한방에 설치가 잘 되지 않는다.
그리고 하면서 ~~빡치면서~~ 떠오른건데 지난번에도 마찬가지였던 듯 하다.

이참에 정리를 해보자. 

MAC OS Catalina에 Jekyll Blogging Platform 을 설치하기이다.

대부분은 Jekyll 공식 사이트 가이드를 참고할것이다. 

> Jekyll 공식사이트(https://jekyllrb.com/docs/) 의 QUICK START 를 그대로 따라하지 않길 바란다.   


## Prerequirement

- Ruby (2.4.0 이상) 
- RubyGems 
- GCC , Make

기본적으로 위는 미리 설치해두어야 한다. 보통 Mac 이라면 기본적으로 설치가 되있을 확률이 높다. 
이부분에 대한 자세한 설명은 Jekyll 가이드에도 충분히 설명 되어있다. 

## 설치 

1. Xcode-select --install
2. mkdir myblog / cd myblog
3. gem install bundler
4. git init
5. bundle init
6. bundle install --path vendor/bundle
7. bundle add jekyll
8. bundle exec jekyll new --force --skip-bundle .
9. bundle install
   
이부분에서 'mkmf.rb can't find header files for ruby' 에러가 발생할수 있다.  
아래와 같이 사용권 동의가 됫는지 먼저 확인해보자. 

``` bash 
    sudo xcodebuild -license accept #사용권 동의 했는지 확인 
```

아마도 여전히 안될 가능성이 높다.

``` bash
    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 이걸 확인해보면 현재 MAC에서 Developer Tool을 가리키고 있는 곳에 Header들이 없음을 알수 있다.

    sudo xcode-select --switch /Library/Developer/CommandLineTools 
    # 위의 1번에서 새로 설치한 경로에는 Header 가 있으므로 바꿔주자. 

    ruby -rrbconfig -e 'puts RbConfig::CONFIG["rubyhdrdir"]' 
    # 확인

    sudo xcode-select --switch /Applications/Xcode.app
    # 완료한 후에 다시 돌아가려면 위와 같다. (xcode-select 에서 default 옵션도 있는것 같았으니 참고)

```

아마도 여기선 대부분 해결 될 것이다.  
> https://stackoverflow.com/a/58226876/5732826 를 참고 (Thanks joki)

## 실행

bundle exec jekyll serve