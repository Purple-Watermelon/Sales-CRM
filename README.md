# Sales-CRM

영업 관리용 CRM (순수 HTML/CSS/JS + GitHub Pages + Supabase)

## 폴더 구조
```
index.html        대시보드(메인)
customers.html    고객 상세 (필터·목록·상세)
quotes.html       견적 작성
orders.html       발주
renewals.html     갱신
software.html     SW 현황
settings.html     설정
css/style.css     공통 디자인
js/config.js      Supabase 연결값 (나중에 채움)
js/db.js          데이터 계층 — 읽기/쓰기 함수 전담 (★)
js/app.js         공통 동작 (메뉴 강조)
```

## 원칙
- 화면(html)은 데이터 계층(`db.js`)의 함수만 부른다.
- 저장 방식이 바뀌어도 `db.js` 만 고친다.
- 한 페이지 = 한 파일.

## 진행 단계
0. 셋업 확인 ← (현재)
1. 고객사 관리  2. 자산 현황  3. 견적+PDF
4. 컨택 이력+진행상황 자동화  5. 대시보드
6. 발주/갱신  7. 로그인 + 실제 메일 발송
