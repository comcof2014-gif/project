# 인스웨이(ins-way) MVP - rinn.ai

Next.js + Supabase 기반 보일러/배관 O2O MVP입니다.

## 실행
```bash
npm install
npm run dev
```

## 환경변수
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Supabase 설정
1. `supabase/migrations/20260515_init.sql` 실행
2. `supabase/seed/seed.sql` 실행
3. Storage bucket 생성: `installation-photos`, `insurance-docs`, `completion-photos`, `afterservice-photos`
4. 민감 버킷은 private 설정

## 배포
- Vercel에 연결 후 환경변수 세팅

## 관리자 계정
- Supabase Auth 사용자 생성 후 `users.role='admin'` + admin profile 생성

## 미래 통합 포인트
- 결제 어댑터: Toss/KG Inicis (현재 external/manual 상태)
- 알림 어댑터: Kakao/SMS/Email (현재 notification_logs mock)
- 보험/자동매칭/정산 실지급은 placeholder 구조로 확장
