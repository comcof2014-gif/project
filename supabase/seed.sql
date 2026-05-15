insert into product_brands(name,slug,is_primary) values ('경동나비엔','kyungdong-navien',true),('귀뚜라미','kiturami',false),('린나이','rinnai',false),('대성쎌틱','daesung-celtic',false) on conflict do nothing;
insert into product_categories(name,slug,sort_order) values
('가스보일러','gas-boiler',1),('콘덴싱보일러','condensing-boiler',2),('전기보일러','electric-boiler',3),('온수기','water-heater',4),('배관자재','pipe-materials',5),('밸브류','valves',6),('부속자재','accessories',7),('연도-배기통','flue',8),('난방분배기','manifold',9),('기타','etc',10) on conflict do nothing;
