---
layout: "post"
title: "Implement Android Biometric Authentication"
date: "2019-03-13 16:39"
---


# 안드로이드 지문, 홍채 인식 구현하기

### 들어가며
최근 우리회사는 개발중인 페이스토리앱에 잠금 기능을 추가하기로 결정하였다.
하지만 막상 구현을 해보려고 하면 쉽게 따라할수 있는 공식 Docs
나 Sample이 부족하다
삼성 갤럭시가 대부분인 국내 실정에서 잘 동작할지도 모르겠다

### 이 글에서 다룰 내용

주의 : 본글은 Java를 기반으로 작성되었으며, Jetpack 을 사용하지 않음.

기본적인 Authentication 관련 이론
Google 의 Authentication SDK
 - Fingerprint API
 - Biometric API
Samsung의 Authentication SDK
실제 구현
UI Customizing
Reference

###
