export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  fuelType: string;
  capacity: string;
  heatingArea: string;
  shortDescription: string;
  publicPrice: number;
  businessPrice: number;
  smartstoreUrl: string;
};

export const products: Product[] = [
  { id: "1", name: "경동나비엔 콘덴싱 NCB353", brand: "경동나비엔", category: "콘덴싱보일러", fuelType: "도시가스", capacity: "20,000kcal", heatingArea: "30평", shortDescription: "저소음·고효율 콘덴싱", publicPrice: 780000, businessPrice: 690000, smartstoreUrl: "https://smartstore.naver.com/" },
  { id: "2", name: "귀뚜라미 거꾸로 ECO", brand: "귀뚜라미", category: "가스보일러", fuelType: "LNG", capacity: "18,000kcal", heatingArea: "24평", shortDescription: "합리적인 교체형 모델", publicPrice: 720000, businessPrice: 640000, smartstoreUrl: "https://smartstore.naver.com/" },
  { id: "3", name: "린나이 전기보일러 REB-15", brand: "린나이", category: "전기보일러", fuelType: "전기", capacity: "15kW", heatingArea: "20평", shortDescription: "배출가스 없는 전기형", publicPrice: 950000, businessPrice: 850000, smartstoreUrl: "https://smartstore.naver.com/" }
];

export const categories = ["가스보일러","콘덴싱보일러","전기보일러","온수기","배관자재","밸브류","부속자재","연도 / 배기통","난방분배기","기타"];

export const faqItems = [
  { q: "설치중개 수수료가 정말 0원인가요?", a: "네, 인스웨이는 설치중개 수수료를 고객/설치기사 모두에게 받지 않습니다." },
  { q: "도매가는 누구나 볼 수 있나요?", a: "아닙니다. 설비업체 인증 승인 후에만 도매가가 노출됩니다." }
];
