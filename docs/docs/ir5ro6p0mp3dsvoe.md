---
title: Web 隐私沙盒
urlname: ir5ro6p0mp3dsvoe
date: '2024-05-15 11:49:55'
updated: '2024-05-15 11:50:37'
author: 不肥的肥羊
cover: 'https://cdn.nlark.com/yuque/0/2023/png/125641/1698373386196-01c4339e-a81a-4c63-8f03-00f389299ae6.png'
description: '简介时间表https://privacysandbox.com/intl/zh_cn/open-web/#the-privacy-sandbox-timelinehttps://developer.chrome.com/en/docs/privacy-sandbox/third-party-c...'
---

### 简介
![image.png](../images/104caccad25c1959f716b3aa7b120a1c.png)


### 时间表

- [https://privacysandbox.com/intl/zh_cn/open-web/#the-privacy-sandbox-timeline](https://privacysandbox.com/intl/zh_cn/open-web/#the-privacy-sandbox-timeline)
![image.png](../images/f04289539f96faf3fb631a066dc1043e.png)
- [https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/)
![image.png](../images/e6918ee7103c0346599e24a3f06bb277.png)
- [https://techcrunch.com/2023/05/18/google-will-disable-third-party-cookies-for-1-of-chrome-users-in-q1-2024/](https://techcrunch.com/2023/05/18/google-will-disable-third-party-cookies-for-1-of-chrome-users-in-q1-2024/)
![image.png](../images/49b5c26d68bf111c9c0dc6bc4f5039b8.png)
![image.png](../images/5d3610ad90cf2ed04ce2a9a1166aca07.png)
[https://en.wikipedia.org/wiki/TechCrunch](https://en.wikipedia.org/wiki/TechCrunch)
- 具体时间不好说，因为 google 最早宣布要淘汰是 22 年，两次官宣延期，目前看至少 24 年的 canary 版本才会有动作


### 现有业务影响演示
开关：chrome://flags/#test-third-party-cookie-phaseout
![image.png](../images/e7d95f501c0fd70a304c519673327546.png)
![image.png](../images/a04ba03c330d13a8e37c68ca301ffed1.png)


### 解决方案
[https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/#partitioned](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/#partitioned)
![image.png](../images/d565f61bcb80860bc6a84e2cffe2343f.png)
![image.png](../images/d9cdb09baca14123e574dc6646192ece.png)


### CHIPS

#### Test Third Party Cookie Phaseout = Disabled
![image.png](../images/f0425b3c00f7a76c9ca4734cb59eee68.png)
![image.png](../images/4a85d87a73968d25c876a0141636881e.png)
![image.png](../images/494de69806abe2db1da99e1733d2b41f.png)
![image.png](../images/2fc3645645fa983a91ab553621d382cf.png)


#### Test Third Party Cookie Phaseout = Enabled
![image.png](../images/07b8cf2e7338c4c5ea67270d6134f7a0.png)
![image.png](../images/bce8cd74a272ca0b601dd0d9cb277708.png)


#### Partitioned
![image.png](../images/b19c85e8b9622878c12790bde00c92c3.png)
![image.png](../images/cb8b2daae76ccb9fa0b5e266f078ff92.png)
![image.png](../images/475ad8a30355435b365c27c159761dd9.png)
![image.png](../images/ba1aa6c3eabee72ab7f82357c651bdf5.png)
![image.png](../images/6fb77630d19ef4cef69699d97dbef575.png)


### 其他 API
![image.png](../images/71f1a9070e08fea682c801e3b91777f1.png)
[https://privacysandbox.com/intl/zh_cn/open-web/#the-privacy-sandbox-timeline](https://privacysandbox.com/intl/zh_cn/open-web/#the-privacy-sandbox-timeline)


### References
Web 隐私沙盒：[https://privacysandbox.com/intl/zh_cn/open-web/](https://privacysandbox.com/intl/zh_cn/open-web/)
第三方 cookie 淘汰计划：[https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/)
2024 Q1 1% 灰度：[https://techcrunch.com/2023/05/18/google-will-disable-third-party-cookies-for-1-of-chrome-users-in-q1-2024/](https://techcrunch.com/2023/05/18/google-will-disable-third-party-cookies-for-1-of-chrome-users-in-q1-2024/)
CHIPS mdn：[https://developer.mozilla.org/en-US/docs/Web/Privacy/Partitioned_cookies](https://developer.mozilla.org/en-US/docs/Web/Privacy/Partitioned_cookies)
CHIPS google developer：[https://developer.chrome.com/docs/privacy-sandbox/chips/](https://developer.chrome.com/docs/privacy-sandbox/chips/)
<fencedframe>：[https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/)

