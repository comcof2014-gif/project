# 인스웨이(ins-way) MVP - rinn.ai

Next.js + Supabase 기반 보일러/배관 O2O MVP입니다.

## 실행
- `npm install`
- `npm run dev`

## 환경변수
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (서버 작업/관리자 API용)

## Supabase 설정
1. `supabase/migrations/0001_init.sql` 실행
2. `supabase/seed.sql` 실행
3. Storage 버킷 생성(비공개 권장): `installation-photos`, `installer-insurance`, `completion-photos`, `after-service-photos`
4. Auth 활성화 후 관리자 계정 생성

## 배포(Vercel)
- Git 연동 후 환경변수 등록
- Build command: `npm run build`

## MVP 포함 범위
- 공개 랜딩/상품/설치신청/상태조회/견적/A-S/보험 및 부가서비스 리드
- 사업자/설치기사/관리자 대시보드 골격
- 설치중개 접수 및 알림로그 구조

## 향후 연동 포인트
- 결제: Toss/KG Inicis 어댑터 추가
- 알림: 카카오 알림톡/SMS/이메일 발송 어댑터
- 보험 API 및 자동 기사 매칭
