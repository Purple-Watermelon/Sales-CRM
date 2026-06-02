/* ============================================================
   style.css — 모든 페이지가 공유하는 디자인
   관리자 도구 스타일: 왼쪽 사이드바 + 상단바 + 본문
   ============================================================ */

/* 한글이 예쁘게 나오는 무료 웹폰트 Pretendard 를 불러옵니다. */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css");

/* ---- 색·간격 등 공통값 (한 곳에서 관리) ---- */
:root {
  --bg:        #f4f5f7;   /* 본문 배경 (옅은 회색) */
  --surface:   #ffffff;   /* 카드 배경 (흰색) */
  --sidebar:   #1e2433;   /* 사이드바 (짙은 남색) */
  --sidebar-2: #2a3142;   /* 사이드바 강조 */
  --line:      #e3e6ea;   /* 옅은 구분선 */
  --text:      #1e2433;   /* 본문 글자 */
  --text-dim:  #6b7280;   /* 흐린 글자 */
  --brand:     #3b5bdb;   /* 브랜드 강조색 (파랑) */

  /* 자산 잔여일수 상태색 (나중에 사용) */
  --ok:    #2f9e44;  /* 초록 */
  --warn:  #f1c40f;  /* 노랑 */
  --alert: #e8590c;  /* 주황 */
  --danger:#e03131;  /* 빨강 */

  --radius: 12px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: "Pretendard", system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* ===== 전체 레이아웃 ===== */
.layout { display: flex; min-height: 100vh; }

/* ----- 사이드바 ----- */
.sidebar {
  width: 224px;
  flex-shrink: 0;
  background: var(--sidebar);
  color: #c7ccd6;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}
.brand {
  padding: 22px 22px 18px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 9px;
}
.brand .dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 4px rgba(59,91,219,.25);
}
.nav { padding: 6px 12px; display: flex; flex-direction: column; gap: 2px; }
.nav-section {
  font-size: 11px; color: #6b7280; font-weight: 600;
  padding: 14px 10px 6px; letter-spacing: .5px;
}
.nav-link {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: #c7ccd6;
  text-decoration: none;
  font-weight: 500;
  transition: background .12s, color .12s;
}
.nav-link:hover { background: var(--sidebar-2); color: #fff; }
.nav-link.active { background: var(--brand); color: #fff; }
.nav-link .ico { width: 16px; text-align: center; opacity: .9; }

/* ----- 본문 영역 ----- */
.main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

.topbar {
  height: 60px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
  position: sticky; top: 0; z-index: 5;
}
.topbar h1 { font-size: 18px; font-weight: 700; letter-spacing: -0.3px; }
.topbar .who { font-size: 13px; color: var(--text-dim); }

.content { padding: 26px; }

/* ===== 공통 부품 ===== */
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
}
.card + .card { margin-top: 16px; }
.card-title {
  font-size: 14px; font-weight: 700; margin-bottom: 4px;
  display: flex; align-items: center; gap: 8px;
}
.card-sub { font-size: 12.5px; color: var(--text-dim); margin-bottom: 14px; }

.grid { display: grid; gap: 16px; }
.grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid.cols-4 { grid-template-columns: repeat(4, 1fr); }

/* "준비 중" 안내 박스 */
.todo {
  border: 1px dashed #c3c9d2;
  border-radius: 10px;
  padding: 22px;
  color: var(--text-dim);
  background: #fafbfc;
  text-align: center;
  font-size: 13px;
}
.todo b { color: var(--brand); }

/* 요약 카드 숫자 */
.stat .num { font-size: 26px; font-weight: 800; letter-spacing: -1px; }
.stat .label { font-size: 12.5px; color: var(--text-dim); }

/* 작은 배지 */
.badge {
  display: inline-block; font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 999px;
  background: #eef1fb; color: var(--brand);
}

/* 모바일: 사이드바를 위로 접기 */
@media (max-width: 720px) {
  .layout { flex-direction: column; }
  .sidebar { width: 100%; height: auto; position: static; flex-direction: column; }
  .nav { flex-direction: row; flex-wrap: wrap; }
  .grid.cols-2, .grid.cols-3, .grid.cols-4 { grid-template-columns: 1fr; }
}
