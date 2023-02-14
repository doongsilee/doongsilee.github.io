---
title : Setup Jekyll using Docker
feed: show
date : 07-02-2023
tags : [Jekyll, Docker]
---

#Jekyll #Docker


블로그를 Jekyll 로 구성하기로 결정했으니 가정 먼저 할일은 역시 Jekyll 을 설치하는 것이다.

> 블로그 툴 결정의 과정은 이 글에 있다. [[블로그를 작성하기로 마음 먹다]]  


#### 문제는 Jekyll 설치가 제길스럽다는데 있다

Jekyll 을 설치하기 위해서는 Ruby 라는 언어를 기반으로 패키지 매니저인 Gem 을 비롯해서 다양한 패키지들을 [설치](https://jekyllrb.com/docs/installation/) 해야만 한다.
다만 여기에는 몇 가지 문제가 있다.

- 첫째 루비는 Jekyll 을 제외하면 내가 잘 사용하는 언어가 아니었다. 안 쓸 프로그램을 덕지덕지 설치하는 건 나의 소중한 맥에 몹쓸짓을 하는 것 같다.
- 둘째 예전의 경험으로 미루어봤을때 설치가 설명처럼 잘 되면 다행이지만 각종 버전 호환 문제 등으로 간단하지 만은 않았다.
   더군다나 내가 사용하는 장비는 M1 맥이다. 최근에는 많이 나아졌지만 여전히 뭔가를 설치할때 불안한 맘이 드는 것은 막을 길이 없다. Jekyll 설치는 예전 인텔 기반 맥에서도 문제가 많았다. 
   이번엔 분명 더 했으면 더 했지 간단할 리 없다. 분명하다.

그래서 이번엔 다르게 해볼까 한다. 다행이 우리에겐 ~~킹갓제네럴~~ Docker 가 있다.


####  Docker 를 활용해보자

Docker
: Docker is _a platform designed to help developers build, share, and run modern applications_ 

Docker 는 가상의 컨테이너 환경을 통해 개발 환경을 쉽게 구축하거나, 마이크로 서비스를 쉽게 구현할수 있도록 도와주는 오픈 소스 플랫폼이다. 이미 개발자라면 아주 잘 알고 있을 확률이 높다.
Docker 의 설치는 간단하게 Docker Desktop 이라는 프로그램을 다운로드 받아서 설치 하면 간편하게
모든 환경이 설정이 되므로 그렇게 하는것을 권한다. Apple Silicon 버전도 제공한다.

[Docker 설치](https://docs.docker.com/engine/install/)

>***필요없는 프로그램이 설치되는것을 극도로 싫어하는 개발자들을 위해***
>
> ***바이너리를 통해 GUI 툴인 Docker-Desktop 없이도 도커 엔진의 설치가 가능하다. 
> 다만 이방법은 Linux 혹은 Windows 만 가능하다.(23.02  기준)
> 바이너리를 통한 설치는 MacOS에서는 Docker-Client 만 설치가 가능하다.
> 맥에서 Docker Deamon을 실행하기 위해서는 Docker-Desktop 은 선택이 아니라는 뜻이다.
> 자세한 설명은 [여기](https://docs.docker.com/engine/install/#supported-platforms) 에서 확인 가능하다***



#### Jekyll-Docker Image를 활용해 사이트를 생성

Docker 설치를 마쳤다면 이제 Jekyll 이미지를 그냥 활용만 하면 된다.
Jekyll 에서는 공식적으로 활용할 수 있도록 Docker 이미지를 제공한다

[Jekyll-Docker](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)

활용할수 있는 Jekyll Docker 이미지는 총 세가지가 있다. 난 Jekyll의 헤비 유저가 아니므로 일반적인 Standard 버전의 이미지를 사용하기로 한다. ~~원래 뭐든 모를때는 기본이~~

```bash
# 아래 명령은 현재 위치($PWD) 에 새로운 Jekyll Site 를 생성한다.
# 참고로 --rm 은 실행이 종료된 Docker Conatiner 를 삭제한다.
export site_name="Test" 
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll \
  sh -c "chown -R jekyll /usr/gem/ && jekyll new $site_name" \
  && cd $site_name
```

위의 명령이 문제없이 실행되었다면 현재 위치에 Test 폴더를 만들고
해당 위치에 기본 Jekyll 사이트를 만들어 준다.
귀찮게 Jekyll 을 설치하지 않고도 Jekyll 의 기본 사이트가 생성되었다!


| ![Jekyll FIle Structure](/assets/img/jekyll-file-structure.png "Title Here") |  
|:--:|
| 생성된 Jekyll 사이트  |


#### Jekyll 로컬 서버 실행

이제 간단히 아래의 명령을 통해 Jekyll Local Server 를 실행 시킬 수 있다.

```bash
# Docker를 이용한 Local Jekyll 서버 실행
# 해당 명령은 실행할때마다 의존성이 있는 Gem 패키지를 모두 설치하므로 매우 오래 걸린다.
# 향후에 지속적으로 활용을 위해서는 --rm 명령을 제외하고 컨테이너를 재사용하길 권한다.
docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  --publish 127.0.0.1:4000:4000 \
  jekyll/jekyll \
  jekyll serve
```

http://localhost:4000 을 통해 아래와 같이 Jekyll 사이트가 뜬다면 성공이다.

| ![jekyll default page](/assets/img/jekyll-default-page.png "Title Here")|
|:--:|
| *localhost:4000 접속* |

#### 마무리

간단하게 Docker 를 활용한 Jekyll 을 설치하는 방법에 대해 알아보았다.
이 글에서 Docker의 option 들에 대해서는 글의 주제에서 벗어나는 것 같아 자세히
다루지 않았다. 혹시 더 궁금하다면 이 [링크](https://docs.docker.com/engine/reference/run/)를 참고하면 된다.
다음번 포스팅에서는 Obsidian 과의 연계를 위한 Jekyll-Garden Template 을 설치하고 이를 커스터마이징 하는 방법에 대해 다뤄볼까 한다.


#### Trouble Shooting

1. Jekyll Docker 에서 공식 제공하는 이미지의 latest 버전은 4.2 버전이었으나 정상적으로 동작하지 않았다. 의존성 설치에서 문제가 발생하고 정상적으로 실행되지 않았다.  
    -> Ruby 버전에서 변경점이 있는것 같다는 문제인 것 까지는 확인했으나 그냥 3.8 버전을 활용하면 잘 되길래 3.8 버전을 활용하는걸로 치웠다. 
``` bash
export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
   .....    
```