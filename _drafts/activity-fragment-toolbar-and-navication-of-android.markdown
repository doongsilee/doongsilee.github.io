---
layout: "post"
title: "Activity fragment toolbar and navication of Android"
date: "2018-08-08 12:02"
---

# Android 를 개발하다 보면

언제 Activity 를 써야할지 언제 Fragment를 써야할지도 고민이고 그걸 결정을 내린다 하더라도 그다음으로
Toolbar는 Acitivity에서 만들고 Fragment에서는 가져다가 사용할지 아니면 모든 뷰마다 만들지
그럴경우에 up button과 back stack 관리를 어떡할것인지
끊임없이 햇갈리고 또 햇갈린다.

어떤게 best practice 일까? 대충 구글링해본 결과로는
명확한건 없는듯하다.

이 부분을 조금 더 딥하게 파볼 생각이다.

1. Android App Design Pattern 을 참고해보고
2. Open Source 들을 참고해보다보면 뭔가 실마리가 나오지 않을까
3. Documentation도 다시 읽어보고..
(근데 대충 봤을땐 이런 디테일한 내용까지는 없었다. 아마도 구글 이놈들도 Fragment랑 Activity 일단 만들었는데 막 여기저기서 충돌나니까 관리 안되는듯)

(말하다보니 짜증나는데 Toolbar 냐 ActionBar 냐 AppBar냐 뭐냐 아 supportToolbar도 있고 SupportActionBar도 있다.)
