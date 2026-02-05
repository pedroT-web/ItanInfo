    --  1 - Trazer apenas 12 primeiros produtos
    SELECT * FROM produtos LIMIT 12

    --  2 - Trazer apenas os produtos que comecem com a 
    SELECT * FROM produtos WHERE titulo LIKE 'a%'


    --  3 - Trazer apenas os produtos que tenham o preço de 
    SELECT * FROM produtos WHERE preco = 410


    --  4 - Trazer apenas produtos com avaliacao 4 e 5
    SELECT * FROM produtos WHERE avaliacao BETWEEN 4 AND 5 


    --  5 - Trazer apenas produtos com avaliacao 1 e 5
    SELECT * FROM produtos WHERE avaliacao = 1 or avaliacao = 5


    --  6 - Trazer apenas produtos com ID 21 e 32
    SELECT * FROM produtos WHERE id BETWEEN 21 AND 32


    --  7 - Trazer apenas os 12 ultimos produtos
    SELECT * FROM produtos WHERE id >= 41


    --  8 - Trazer apenas os 12 ultimos produtos
    SELECT * FROM produtos WHERE avaliacao = 5 LIMIT 12


    --  9 - Trazer todos os produtos em ordem de preço do
    SELECT * FROM produtos ORDER BY preco ASC


    --  10 - Trazer todos os produtos em ordem de avaliacao do menor para maior
    SELECT * FROM produtos ORDER BY avaliacao ASC