###### DAY02

### Cooming Soon Page Design

과제 수행하신 분은 직접 제작한 페이지를, 과제 수행 못하신 분은 아래 데모 페이지를 가지고 진행한다.

![hello vasilyev](../../Assets/hello-vasilyev.png)

[PSD Download](../../Assets/hello-vasilyev.psd)

-

### 웹 디자인 환경 분석/이해

시스템이 기반한 디자인 방법론 [ `Typography` / `Grid System` / `Golden Ratio Rule` ]

![designer-coding-course-01](../../Assets/Designers Coding/designer-coding-course-01.png)
![designer-coding-course-02](../../Assets/Designers Coding/designer-coding-course-02.png)
![designer-coding-course-03](../../Assets/Designers Coding/designer-coding-course-03.png)

#### 스크린 비율
  - 노멀 뷰 : `4:3` 비율
  - 와이드 뷰 : `16:9` 비율
  - 시네마 뷰: `21:9` 비율
  - __N 스크린__ : 화면의 비율이 다양함. ( __N__은 특정되지 않은 수 n 항을 의미. `1st, 2nd, 3rd, 4th, ..., nth` )

#### 삼원색

![RGB](http://image.prntscr.com/image/82029022c89f4c1188ae7edee8e0530e.png "RGB" )<br/>
**R** (Red), **G** (Green), **B** (Blue) => 웹, 스크린 사용<br/>(웹 디자인 시 Photoshap 환경 설정을 **RGB** 모드로 변경)

![CMYK](http://image.prntscr.com/image/c325f83914204d11ae8849f94f64a5b2.png "CMYK" "width:400px;height:auto")<br/>
**C** (Cyan), **M** (Magenta), **Y** (Yellow), **K** (blacK) => 인쇄, 프린트 사용.

> ※ 염료의 삼원색은 CMY 이지만, 3가지 색을 섞어도 현실에서는 이론처럼 검정색(Black)이 만들어지지 않는다.<br>
> 요컨데 인쇄 환경에서 CMY가 아닌, CMYK모드를 사용하는 이유는 별도로 검정 잉크가 필요하기 때문이다.

-

### UI Kit 스타일 가이드

UI Kit의 개념은 '패턴 라이브러리', 'UI 스타일 가이드', 'UI 가이드라인' 등등 소통하는 방식은 각양각색. 어떤 단어로 소통하는 것은 중요하지 않지만 그 의미는 우리가 통일할 필요가 있다. 스타일 가이드는 웹 사이트를 만드는 이들을 위한 설명서와 재료. 디자이너, 개발자, 콘텐츠 제작자 혹은 협력업체 사람간의 소통을 위한 도구.

[<img src="../../Assets/UI Kit - Typography/UI-Kit---Typography-guide.jpg" alt="">](../../Assets/Ui Kit-confirm-yamoo9.psd)

##### 국외 웹 스타일 가이드
- [Mozilla Sandstone](https://www.mozilla.org/en-US/styleguide/websites/sandstone/)
- [Disqus Brand & Style Guide](https://disqus.com/pages/style-guide/)
- [airbnb](https://dribbble.com/shots/1669299-Airbnb-UI-Toolkit-Web/attachments/263198)
- [Mailchimp Patterns](http://ux.mailchimp.com/patterns)
- [findguidelin.es](http://findguidelin.es/)
- [brand.uber](https://brand.uber.com/)
- [work.co](http://www.work.co/grid/)

##### 국내 웹 UI Kit
- [가비야(Gabia) 스타일 가이드](http://design.gabia.com/wordpress/?cat=12)
- [한국인터넷 진흥원 웹 스타일 가이드](http://www.kisa.or.kr/styleguide/styleguide.html)
- [인쿠프트 스타일 가이드](http://webguide.incruit.com/aboutstyleguide.asp)
- [한국 웹 스타일 가이드 모음](https://kr.pinterest.com/geunyoungkim77/%EC%9B%B9-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C/)

##### UI Kit 도구
- [stylifyme.com](http://stylifyme.com/)
- [patternlab.io](http://patternlab.io/)
- [fbrctr.github.io](http://fbrctr.github.io/)
- [frontify.com](https://frontify.com/styleguide)
- [Style-Guide-Boilerplate](http://bjankord.github.io/Style-Guide-Boilerplate/)
- [hugeinc.github.io/styleguide](http://hugeinc.github.io/styleguide)

-

### 문서를 구성하는 주요 컴포넌트

- 제목
- 단락
- 하이퍼링크
- 이미지
- 인용
- 목록
  - 비순차 목록
  - 순차 목록
  - 정의 목록
- 표
- 양식
  - 입력 컨트롤
- 버튼
- 비디오/오디오
- 블록 요소
- 인라인 요소

---

### 웹 타이포그래피

#### 제목

섹션 또는 콘텐츠 제목(Headings)으로 사용된다. 섹션 타이틀은 [섹션 요소](https://goo.gl/E0rddw)에서만 사용한다.

```html
<h1>섹션 타이틀</h1>
<h2>콘텐츠 대제목</h2>
<h3>콘텐츠 중제목(h2의 하위 제목)</h3>
<h4>콘텐츠 소제목(h3의 하위 제목)</h4>
<h5>콘텐츠 제목(h4의 하위 제목)</h5>
<h6>콘텐츠 제목(h5의 하위 제목)</h6>
```

- [HTML5 문서의 섹션과 아웃라인](https://goo.gl/B8gqQm)
- [검색엔진최적화를 위한 제목 태그(Heading tags) 총정리](https://goo.gl/ICdzSx)

#### 단락

단락(글의 묶음, Paragraph)을 구조화 할 때 사용한다.

```html
<p>HTML5 표준 명세서에서는 웹 개발자가 표준화된 의미론적 체계를 가지고 웹 문서의 구조를 표현할 수 있게 해주는 몇 개의 새로운 요소들을 선보였습니다. 이 문서에서는 이 새로운 요소들과 문서의 아웃라인을 의도한 대로 정의하는 법을 설명하고 있습니다.</p>

<p>HTML4에서의 문서 구조에 대한 정의와 여기에 내포된 암묵적인 문서 알고리듬은 매우 투박해서 다음과 같은 많은 문제점을 가지고 있습니다. 좀 더 포괄적으로 말하면 HTML5에선 문서를 구획하고 이들에게 제목을 부여하는 방법이 좀 더 세밀해지면서, 문서의 아웃라인 파악이 좀 더 예측 가능해지고 덩달아 이를 이용한 브라우저를 통해서 사용자 경험도 향상됩니다.</p>
```

##### 줄바꿈

단락 내에서 글줄을 바꾸고자 할 경우(Line Break) 사용한다. (연속해서 사용하지 않아야 한다!)

```html
<p>HTML5 표준 명세서에서는 웹 개발자가 표준화된 의미론적 체계를 가지고<br>
웹 문서의 구조를 표현할 수 있게 해주는 몇 개의 새로운 요소들을 선보였습니다.<br>
이 문서에서는 이 새로운 요소들과 문서의 아웃라인을 의도한 대로 정의하는 법을<br>
설명하고 있습니다.</p>
```

##### 강조(Strong, Emphasize)

단락 내에서 특정 단어 또는 문장을 강조하고자 할 경우 사용한다. (의미 부여)

매우 강한 의미를 부여할 경우는 `<strong>`을, 일반적인 강조 의미를 부여할 경우는 `<em>`을 사용한다.

```html
<p><em>HTML4에서의 문서 구조에 대한 정의와 여기에 내포된 암묵적인 문서 알고리듬은 매우 투박해서 다음과 같은 많은 문제점을 가지고 있습니다.</em> 좀 더 포괄적으로 말하면 HTML5에선 문서를 구획하고 이들에게 제목을 부여하는 방법이 좀 더 세밀해지면서, 문서의 아웃라인 파악이 좀 더 예측 가능해지고 덩달아 이를 이용한 브라우저를 통해서 <strong>사용자 경험도 향상됩니다.</strong></p>
```

##### 첨자

용어 설명 및 수학식을 처리할 경우, 첨자를 사용한다.

![첨자 사용 예시](https://support.content.office.net/ko-kr/media/d8036c37-f215-435c-bb6f-5ce2cfd94a39.png)

```html
<!-- 위 첨자 예시 -->
<p>둥근귀코끼리<sup>Loxodonta cyclotis</sup> 는 나무에 살지는 않고 나무들 사이에 그 서식지를 이루고 있습니다.</p>

<!-- 아래 첨자 예시 -->
<p>이 문서는 8번 원소와 그것의 가장 안정한 상태인 O<sub>2</sub>에 관한 것입니다. O<sub>3</sub>에 대해서는 오존 문서를 참조하십시오.</p>
```

#### 하이퍼링크(Anchor, Hyperlink)

현재 문서의 특정 목표지점 또는 다른 문서로 연결할 경우 사용한다.

```html
<!-- 현재창(탭) 열렴 -->
<a href="https://brunch.co.kr/@brunchouhk/1">UI에서 타입 세팅을 위한 4가지 팁들</a>

<!-- 새창(탭) 열림 -->
<a href="https://brunch.co.kr/@brunchouhk/1" target="_blank">UI에서 타입 세팅을 위한 4가지 팁들</a>

<!-- #목적지 앵커 포함 -->
<a href="https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/PS_info.md#photoshop-에티켓예의-매너">Photoshop 에티켓(예의, 매너)</a>
```

#### 이미지(Image)

문서에 이미지를 연결하고자 할 경우 사용한다.

```html
<img src="https://cdn.rawgit.com/yamoo9/FDS/3rd_FDS/ASSETS/LEGO.jpg" alt="BEM" width="350" height="325">
```

참고: [Web에서 PNG , GIF, JPEG , SVG 중 어떤 것을 사용하면 좋을까요?](https://goo.gl/ZLs7DY)

#### 목록(Lists)

글을 순차적 또는 비순차적, 정의 목적으로 나열하고자 할 경우 사용한다. HTML에서는 3개의 목록 작성 방법을 제공한다.

##### 비순차 목록(Unordered List)

```html
<ul>
  <li><a href="https://brunch.co.kr/@brunchouhk/1">UI 디자인에서 타이포그래피를 위한 4가지 팁</a></li>
  <li><a href="https://brunch.co.kr/@ultra0034/11">타이포그래피에서 버티컬 리듬이 중요한 이유 - 가독성 높은 콘텐츠 만들기</a></li>
</ul>
```

##### 순차 목록(Ordered List)

```html
<ol>
  <li><a href="https://brunch.co.kr/@leejaegoo/22">타이포그래피 용어-1. 타이포그래피 이름 익히기</a></li>
  <li><a href="https://brunch.co.kr/@leejaegoo/29">타이포그래피 용어-2. 타이포그래피의 관상</a></li>
</ol>
```

##### 정의 목록(Definition List)

```html
<dl>

  <dt>세리프[serif]</dt>
  <dd>글자 끝에 달린 꼬리를 세리프라고 하며, 꼬리 달린 글자꼴을 세리프체라고 한다. 세리프체는 트라야뉴스 로마 황제의 기념비에 새겨진 대문자 형태와 거의 비슷하다. 그리스 로마시대에 알파벳을 돌에 새길 때, 연장의 흔적 또는 밑그림으로 글자를 그려 넣을 때 붓의 흔적 등이 세리프의 형태로 남아 전해졌다고 한다. 세리프의 형태는 작지만 세리프체의 양식을 구별하고 글자꼴의 표정을 구성하는데 큰 역할을 한다. 세리프의 형태에 따라 글자꼴의 표정이 달라지며, 글이  전달하고자 하는 정보의 감성을 시각적으로 다르게 전달한다. 세리프가 달린 글자꼴을 로마자라고 부르며 로마자의 특징은 세리프다.</dd>

  <dt>산세리프[sans serif]</dt>
  <dd>‘산(sans)’은 프랑스어로 영어의 ‘without’의 의미를 갖는 말이다. 즉 세리프가 없는 글자꼴이다. 직선과 곡선으로 구성되어있다. 때로는 원, 삼각형, 사각형과 같은 기하학적 도형을 닮은 글자꼴이 나오기도 했다. 19세기에 등장한 양식으로 20세기, 모더니즘 운동과 더불어 크게 유행했다. 미국에서는 고딕[gothic]이라는 이름으로 불린다. 우리나라에서도 고딕이라는 이름으로 많이 알려져 있는데 미국과 일본의 문화에 영향을 받은 것으로 보인다.</dd>

<dl>
```

#### 인용(Block Quotation)

HTML `<blockquote>` 요소는 __감싸진 텍스트가 긴 인용문__임을 가리킨다. 짧은 인용문의 경우는 `<q>` 요소를 사용한다.

```html
<!-- 긴 인용문 -->
<blockqute cite="https://goo.gl/LBB5Ku">
  <p>
    수많은 꿈이 꺾인다.<br>
    현실의 벽이 아니라<br>
    주변의 충고 때문에...
  </p>
  <p>
    코끼리는 점프를<br>
    못하는 게 아니라<br>
    점프 할 필요가<br>
    없는 거야
  </p>
  <cite>&lt;충고의 벽&gt;, 하동욱 시인</cite>
</blockqute>

<!-- 단락 내, 짧은 인용문: https://goo.gl/4QRKqi -->
<p>
  <q>윗대가리들이 안 바뀌는데 뭐가 바뀌겠냐, 우리나라는 이래서 안 돼, 그게 되겠냐.</q>
  제대로 된 노력도 해보지 않고 사회적 구조만을 탓하는 이들.
</p>

<p>
  <q>노력하면 뭐하냐, 재능 없으면 안 되는 거야. 나 서른이야, 이미 늦었다고.</q>
  무궁무진한 가능성 앞에서 자신의 능력을 스스로 비하하는 이들.
</p>

<p>
  <q>아무것도 하지 않으면 아무 일도 일어나지 않는다.</q>
  안 하려는 이유는 수백가지인데 하려는 이유는 단 하나도 없다. 한 없이 비뚤어져만 가고 있다.
</p>

<p>
  누군가의 성공 스토리에 염세적인 댓글로 반응해 주면 '따봉'을 받기까지 한다. 정상은 아니다. 하지만 이해는 간다.
  올바르지 못한 교육환경과 성공만을 요구하는 기성세대의 그릇된 생각이 한 몫 했기 때문이다. 그렇다고 가만히 있을 수만은 없지 않은가?
  이런 답답한 현실이라면 오히려 더 치열하게 부딪혀봐야 하는 게 아닐까? 세상이 바뀌지 않는 이유는 자신이 바뀌지 않아서 그런 것이다. 스스로 인식을 바꿔야 한다.
  위기 속에서 기회가 만들어진다는 말은 거짓이 아니다. 뻔한 말을 뻔하게 받아들이면 그야말로 뻔한 인생 되는 거다. 아무것도 하지 않으면 아무 일도 일어나지 않는다.
  뭐라도 해야 한다. 지금 이 순간이 위기이니까.
  <q>진짜 위기는 그것이 위기인 줄 모르는 것이다. 더 위험한 것은 알면서 아무 것도 하지 않는 것이다.</q>
</p>
```

<!--#### 표(Table)-->

<!--#### 양식(Form)-->

<!--##### 입력 컨트롤(Input, Button, Textarea, Select, ...)-->

<!--#### 버튼(Button)-->

<!--#### 블록 요소-->

<!--#### 인라인 요소-->

-

### 과제

__Typography__ Page Design [ PSD | Sketch ]

본문, 제목 등 타이포그래피 구성요소 설계(Design) 하기.

<img src="../../Assets/UI Kit - Typography/uikit.jpg" alt="ui kit">

---

### 참고하면 좋을 글

[타이포그래피 필터링 결과, brunch](https://brunch.co.kr/search?q=%ED%83%80%EC%9D%B4%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BC&profileId=)

