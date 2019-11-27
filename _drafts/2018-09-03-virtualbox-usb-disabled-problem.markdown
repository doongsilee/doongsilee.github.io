---
layout: "post"
title: "virtualBox_Usb_disabled_problem"
date: "2018-09-03 11:52"
---

# VirtualBox 에서 USB 가 disabled 상태일때

MacOS를 주로 사용하고 가끔 윈도우가 꼭 필요한 순간에만 VirtualBox 위에 띄워서 사용하고 있다.
~~정부 사이트 부들부들~~
그런데 USB가 인식이 안되는 문제 발견
아니 엄밀히 말하면 인식은 되는데, 선택을 할수가 없다.
아래 사진을 보자


여기저기 뒤져봤다. 유저를 VBoxGroup에 넣으라는 얘기도 있고 (Ubuntu community)
뭐 이것저것 다양한 솔루션들이 있으니 혹시 아래의 문제가 아니라면 참고

나의 경우엔 정말 어처구니 없을정도로 간단한 문제였다.
답은 여기서 찾을수 있었는데(url)
MacOS가 USB를 잡고 있을경우에는 VirtualBox가 사용할수 없었던것(~~왜 이걸 생각못했을까...~~)

해결책은 그냥 심플하게 Mac에서 Unmount 해주고 선택하면 끝!
