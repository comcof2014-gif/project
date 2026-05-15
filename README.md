# 인스웨이 (ins-way) MVP - rinn.ai

Next.js + Supabase 기반 보일러/배관 O2O MVP.

## 환경변수
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Supabase 설정
1. `db/supabase/migrations/20260515_init.sql` 실행
2. `db/supabase/seed/seed.sql` 실행
3. Storage 버킷 생성: `installation-photos`, `insurance-docs`, `completion-photos`, `as-photos` (비공개)

## Vercel 배포
- Vercel에 프로젝트 연결 후 환경변수 주입, Build Command `npm run build`.

## 관리자 계정
- Supabase Auth 사용자 생성 후 `users`, `admin_profiles` 레코드에 `admin`/`super_admin` 입력.

## 미래 통합 메모
- 결제: Toss/KG Inicis adapter 레이어 추가
- 알림: Kakao/SMS provider adapter 연결
- 보험: 제휴사 API 연계
- 자동매칭: 지역 기반 installer matching job 구현
