CREATE DATABASE lovelymatch;

\c lovelymatch;

CREATE TABLE flavors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    couple_inspiration VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE couples (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    photo VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO couples (name, description, photo) VALUES
    ('Romeo e Julieta', 'Um casal clássico que representa o amor eterno.', 'romeo_julieta.jpg'),
    ('Cleópatra e Marco Antônio', 'Um amor que atravessou fronteiras e tempos.', 'cleo_marco.jpg'),
    ('Tristão e Isolda', 'Uma história de amor trágica e apaixonante.', 'tristao_isolda.jpg'),
    ('Pocahontas e John Smith', 'Um amor que superou diferenças culturais.', 'pocahontas_john.jpg'),
    ('Elizabeth Bennet e Mr. Darcy', 'Um amor que começou com desentendimentos.', 'elizabeth_darcy.jpg'),
    ('Bonnie e Clyde', 'Um casal fora da lei que marcou a história.', 'bonnie_clyde.jpg'),
    ('Hera e Zeus', 'O casal mais poderoso da mitologia grega.', 'hera_zeus.jpg'),
    ('Jack e Rose', 'Um amor eterno que nasceu no Titanic.', 'jack_rose.jpg'),
    ('Shrek e Fiona', 'Um casal improvável que conquistou corações.', 'shrek_fiona.jpg'),
    ('Mickey e Minnie', 'O casal mais famoso do mundo da animação.', 'mickey_minnie.jpg');

INSERT INTO flavors (name, description, couple_inspiration) VALUES
    ('Sorvete de Morango', 'Doce e suave, como o amor de Romeo e Julieta.', 'Romeo e Julieta'),
    ('Sorvete de Chocolate Amargo', 'Intenso e profundo, inspirado em Cleópatra e Marco Antônio.', 'Cleópatra e Marco Antônio'),
    ('Sorvete de Baunilha com Frutas Vermelhas', 'Uma combinação perfeita, como Tristão e Isolda.', 'Tristão e Isolda'),
    ('Sorvete de Coco com Abacaxi', 'Tropical e refrescante, como Pocahontas e John Smith.', 'Pocahontas e John Smith'),
    ('Sorvete de Caramelo Salgado', 'Uma mistura de sabores, como Elizabeth Bennet e Mr. Darcy.', 'Elizabeth Bennet e Mr. Darcy'),
    ('Sorvete de Pistache', 'Elegante e único, inspirado em Bonnie e Clyde.', 'Bonnie e Clyde'),
    ('Sorvete de Mel e Nozes', 'Doce e poderoso, como Hera e Zeus.', 'Hera e Zeus'),
    ('Sorvete de Framboesa', 'Refrescante e apaixonante, como Jack e Rose.', 'Jack e Rose'),
    ('Sorvete de Menta com Chocolate', 'Divertido e inesperado, como Shrek e Fiona.', 'Shrek e Fiona'),
    ('Sorvete de Baunilha', 'Clássico e amado por todos, como Mickey e Minnie.', 'Mickey e Minnie.');