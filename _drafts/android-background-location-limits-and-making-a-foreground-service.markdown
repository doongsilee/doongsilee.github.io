---
layout: "post"
title: "Android Background Location Limits and Making a Foreground Service"
date: "2018-10-18 11:06"
---

## Android 백그라운드 위치 제한

안드로이드 8.0 (Oreo) 버전에서 변경된점이 몇가지가 있다. Notification Channel 이 소개되었다거나 기타 등등 그 중 특히 백그라운드 위치 제한에 관한 내용은 서비스의 동작에 영향을 미쳐 해결이 필요했다.
이 포스트는 안드로이드 8.0에 추가된 백그라운드 위치 제한에 관한 내용과 이를 해결하기 위해 Foreground Service를 만드는 방법에 대해 다룬다.

먼저  [공식 문서](https://developer.android.com/about/versions/oreo/background-location-limits)에 나와있는 내용에서 뽑아보자면 이렇다.

> Android 8.0는 소비전력 절감을 위해 **앱의 대상 SDK 버전에 상관없이** 백그라운드 앱이 사용자의 현재 위치를 검색할 수 있는 빈도를 제한합니다.
>
> 백그라운드 앱이 **매시간 단 몇 차례**만 위치 업데이트를 받도록 허용하는 것을 출발점으로 삼겠습니다. 시스템에 미치는 영향과 개발자들의 피드백을 바탕으로 Preview 전체에 걸쳐 위치 업데이트 주기를 계속 조정할 것입니다.

정말 그럴까? FusedLocationProviderClient를 활용해서 백그라운드에서 getLastLocation을 호출하는 우리 앱으로 간단히 테스트를 진행해보았다. 결과는 정말로 정확치는 않지만 시간당 업데이트 횟수가 2~3회 내외 정도인것으로 추정된다. (Request 시에 위치 측정 Interval을 아무리 아무리 짧게 잡아도 마찬가지였다.)
~~더 리얼하게 얘기하면 무려 15분이나 귀찮아하는 몸을 이끌고 돌아다니며 백그라운드로 업데이트를 해본 결과 GetLocation함수의 위치정보값이 최초 2번 이후엔 변경되지 않는것을 확인했다~~
