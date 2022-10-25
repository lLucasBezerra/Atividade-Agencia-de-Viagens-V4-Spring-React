use viagensecinema;
use agenciaviagens;
select * from cliente;
select * from escolher_destino;

show tables;
desc cliente;
desc destinos;
desc escolher_destino;
desc promocoes;
desc voo;

/* caso o columnDefinition="Decimal(10,2) n funcione*/
ALTER TABLE voo
CHANGE preco preco Decimal(10,2);

insert into promocoes values(null, 20, "Promo inaugural"),
(null, 35, "Novo Destino"),
(null, 40, "Black Friday");

insert into destinos values
(null, "Cinque-Terre", "Luca", "Italia", null),
(null, "Paris", "Ratatoulle", "Italia", null),
(null, "Sicilia", "Poderoso Chefão", "Italia", null),
(null, "Condado de Down", "Game of Thrones", "Irlanda", null),
(null, "Atlanta", "Stranger Things", "Georgia", null),
(null, "Los Angeles", "Sitcoms em geral", "Estados Unidos", null),
(null, "Londres", "Sandman", "Inglaterra", null);

update destinos set promocao_id = 1 where id = 5;
update destinos set promocao_id = 2 where id = 7;

insert into voo values
(null, "LATAM Airlines", 2500.00),
(null, "Delta Airlines", 3100.00),
(null, "Avianca", 2800.00),
(null, "Azul", 3000.00);

insert into cliente values(null, "14325637890", 2022-03-13, 2022-04-12, "bahia", 2);