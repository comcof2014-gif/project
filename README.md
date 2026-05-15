# ins-way (인스웨이) MVP

Next.js + Supabase 기반 보일러/배관 O2O MVP.

## 환경 변수
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 실행
```bash
npm install
npm run dev
```

## Supabase
1. `supabase/migrations/20260515_init.sql` 적용
2. `supabase/seed/seed.sql` 시드 적용
3. Storage bucket: `installation-photos`, `insurance-docs`, `completion-photos`, `afterservice-photos`

## 배포
- Vercel 연결 후 환경 변수 설정.

## 관리자 계정
- Supabase Auth 생성 후 `users` 및 `admin_profiles`(추가 예정)에 admin role 연결.

## Future Integrations
- 결제 어댑터: Toss/KG Inicis placeholder
- 알림 어댑터: Kakao/SMS/Email placeholder
- 보험 API 및 자동 매칭 placeholder
