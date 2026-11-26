'use strict';
// Request Hub 시청자 로그인 중계 페이지.
// Google은 미리 등록한 주소로만 돌려보내는데, 방송인의 임시 주소(trycloudflare)는 켤 때마다 바뀝니다.
// 그래서 이 고정된 페이지를 등록해 두고, 받은 일회용 코드를 방송인의 지금 주소로 넘겨주기만 합니다.
// 아무것도 저장하거나 다른 곳으로 보내지 않습니다. 코드는 방송인 PC의 프로그램만 가진 값(PKCE)이 있어야 쓸 수 있습니다.
(() => {
  // 고정 주소를 쓰는 방송인은 여기에 주소를 더합니다. 예: 'https://request.example.com'
  const FIXED = [];
  const msg = document.getElementById('msg');
  const q = new URLSearchParams(location.search);
  const state = q.get('state') || '';
  let origin = '';
  try {
    const head = state.split('.')[0].replace(/-/g, '+').replace(/_/g, '/');
    origin = new TextDecoder().decode(Uint8Array.from(atob(head + '==='.slice((head.length + 3) % 4)), c => c.charCodeAt(0)));
  } catch { origin = ''; }
  const allowed = /^https:\/\/[a-z0-9-]+\.trycloudflare\.com$/.test(origin) || FIXED.includes(origin);
  if (!allowed) {
    msg.textContent = '돌아갈 주소를 알 수 없습니다. 방송인이 알려 준 신청 페이지에서 다시 로그인해 주세요.';
    return;
  }
  const next = new URL('/request/auth', origin);
  for (const key of ['state', 'code', 'error']) if (q.has(key)) next.searchParams.set(key, q.get(key));
  location.replace(next.toString());
})();
