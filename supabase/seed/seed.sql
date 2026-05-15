insert into product_brands(name,slug,is_primary) values
('경동나비엔','kyungdong-navien',true),('귀뚜라미','krb',false),('린나이','rinnai',false),('대성쎌틱','daesung-celtic',false)
on conflict do nothing;
insert into product_categories(name,slug) values
('가스보일러','gas-boiler'),('콘덴싱보일러','condensing-boiler'),('전기보일러','electric-boiler'),('온수기','water-heater'),('배관자재','pipe-material'),('밸브류','valves'),('부속자재','fittings'),('연도-배기통','flue'),('난방분배기','distributor'),('기타','etc')
on conflict do nothing;
