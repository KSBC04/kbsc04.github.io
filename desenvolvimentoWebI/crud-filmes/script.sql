-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Dez-2022 às 19:44
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Banco de dados: `cineCefet`
--
DROP DATABASE IF EXISTS cineCefet;
CREATE DATABASE IF NOT EXISTS `cineCefet` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `cineCefet`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `avaliacao` decimal(9,1) NOT NULL DEFAULT 0.0,
  `generoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Adicionando dados a tabela `filmes`
--

INSERT INTO `filmes` (`id`, `titulo`, `avaliacao`, `genero_id`) VALUES
(1, 'Curtindo a vida adoidado', '8.9', 2),
(2, 'Como eu era antes de você', '9.5', 6),
(3, 'Free Guy', '9.1', 5),
(4, 'De repente 30', '7.5', 7),
(5, 'Truque de mestre', '8.7', 1),
(6, 'ENTRE FACAS E SEGREDOS', '8.3', 7),
(8, 'Todo dia', '9.6', 6),
(9, 'Homem de ferro', '9.0', 5),
(10, 'Harry Potter e a pedra filosofal', '7.4', 5),
(11, 'Antes que eu vá', '8.5', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `generos`
--

INSERT INTO `generos` (`id`, `descricao`) VALUES
(1, 'AÇÃO'),
(2, 'COMÉDIA'),
(3, 'COMÉDIA ROMÂNTICA'),
(4, 'DRAMA'),
(5, 'FICÇÃO CIENTÍFICA'),
(6, 'ROMANCE'),
(7, 'SUSPENSE'),
(8, 'AVENTURA');

--
-- Índices para tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_filme_titulo` (`titulo`),
  ADD KEY `fk_filmes__genero_id` (`genero_id`);

--
-- Índices para tabela `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx__generos_descricao` (`descricao`);


--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de tabela `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;


--
-- Limitadores para a tabela `filmes`
--
ALTER TABLE `filmes`
  ADD CONSTRAINT `fk_filmes__genero_id` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`) ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
