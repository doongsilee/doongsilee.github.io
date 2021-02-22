---
layout: post
title: "Wifi Channel 과 Rasberry PI 설정"
date: 2021-02-22 21:59
category: Dev
author: Hyunoo Lee
tags: [IoT, Rasberry PI, 삽질] 
summary: 
---

# 국내 통신사 공유기 Rasberry PI, WIFI 설정 이슈

## 개요

회사에서 재택을 위해 빌려온 Rasberry PI를 집 Wifi 에 연결하려는데 이상하게 와이파이 리스트에 공유기가 뜨질 않는다.  
필살 껏다 켜기 신공도 먹히지 않았다.  
잠깐 고민해봤지만 공유기 문제는 당연히 아니다.   
폰에서는 잘 쓰고 있다.  
라즈베리파이 자체가 고장난것도 아니다.  
옆집, 앞집, 뒷집, 아랫집 다른 와이파이들은 목록에 잘 나오는 것 같다.

그럼 왜그럴까?

## Quick and Simple Answer 

~~우리 와이프 같이~~ 성격 급한 이들을 위한 간단 답변

Rasberry PI Configuration -> Locailazitions -> Set Wifi Country -> US(Unite State) 로 바꿔보라. 

## Dirty process

(먼저 안쓰는 서랍장 구석탱이에서 간신히 LAN 선을 찾는데 30분을 허비한 뒤에)  
몇가지 명령어를 통해 분석을 진행해봤다.

```bash

iw -> wireless Connection tool
iwconfig 
iwlist

```

채널이 140 ~ 160 번대의 wifi 목록만 표시됨을 알 수 있었다.  
그렇다면 우리집 와이파이 채널은 몇번일까?  
맥에서 확인해본다.

```bash
airport -I // iw 와 비슷하다. 맥의 유틸리티이다.
```

앗 우리집 와이파이 채널은 8번이었다.
이 채널의 의미가 뭘까?

간단히 위키를 읽어보니 frequency 간의 간섭을 피하기 위한 일종의 라벨링인듯 하다.

자 그럼 라즈베리파이의 wifi adapter 설정을 바꾸면 되겠다.
시도해본다.

```bash

//man iwconfig 를 참조했다.
iwconfig wlan0 channel 8

```

어라 안된다.. 왜그래?  
man page 에 있는 명령어를 그대로 썼는데 안된단다.   
I'm stucked.

스택 오버플로우를 찾아봐도 크게 연관있는 포스트는 없다.  
펌웨어 업데이트도 이미 했고.. set Country 도 난 이미 Korea로 되있는걸 확인 했는데..  
혹시나 싶어 US 로 바꿔본다.

앗. 마술같이 모든 와이파이 목록이 표시된다.  
다시 wiki를 자세히 읽어보자.
  
흠.. 나라별로 채널을 다르게 사용해야한다 따위의 규정이 보이지는 않는데  
어째서 country 설정에 따라 채널을 읽는 방식이 달라질까?

이부분은 조금 더 연구해볼 필요가 있을 것 같다.  




