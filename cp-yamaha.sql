-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Apr 2025 pada 07.53
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cp-yamaha`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `content` varchar(3000) NOT NULL,
  `thumbnail` varchar(191) NOT NULL,
  `publishedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `authorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `thumbnail`, `publishedAt`, `authorId`) VALUES
(1, 'Sisterhood di Atas Roda: Ketangguhan Geng Motor Cewek yang Menginspirasi', 'Di tengah deru mesin dan debu jalanan, ada sekelompok wanita tangguh yang menunjukkan bahwa roda dua bukan hanya milik kaum pria. Mereka adalah para pengendara perempuan yang tergabung dalam geng motor cewek—komunitas solid yang tidak hanya menyalurkan hobi, tapi juga membangun solidaritas dan empowerment sesama perempuan.\r\n\r\nGeng motor cewek bukan sekadar soal gaya atau adu kecepatan. Di balik jaket kulit dan helm full-face, ada semangat kebebasan, keberanian, dan rasa persaudaraan yang begitu kuat. Mereka datang dari berbagai latar belakang—mahasiswa, pekerja, ibu rumah tangga, bahkan pelaku bisnis. Tapi ketika berkumpul dan menyalakan mesin motor mereka, status sosial hilang. Yang tersisa hanyalah semangat yang sama: mencintai jalanan dan menghargai kebersamaan.\r\n\r\nLebih dari Sekadar Riding\r\nAktivitas mereka tidak melulu soal touring atau konvoi. Banyak dari mereka yang aktif dalam kegiatan sosial: bakti lingkungan, edukasi keselamatan berkendara, hingga menggalang donasi untuk korban bencana. Lewat komunitas ini, para perempuan saling memberdayakan, berbagi pengalaman, dan menunjukkan bahwa passion di dunia otomotif bukan soal gender.\r\n\r\nMenginspirasi Perempuan Muda\r\nMelihat perempuan mengendarai motor besar dengan percaya diri tentu memberi pesan kuat bagi generasi muda: bahwa perempuan bisa tampil kuat, mandiri, dan berani mengejar hal yang mereka cintai. Komunitas seperti ini memberi ruang bagi perempuan untuk mengekspresikan diri, bebas stigma, dan terus berkembang tanpa batasan.', '/uploads/1373109_720.jpg', '2025-04-13 15:52:20.556', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `location` varchar(191) NOT NULL,
  `date` datetime(3) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `event`
--

INSERT INTO `event` (`id`, `title`, `description`, `location`, `date`, `image`, `createdAt`) VALUES
(1, 'weekly racing', 'Weekly Racing adalah acara balapan mingguan yang menampilkan serangkaian perlombaan seru dengan berbagai jenis kendaraan dan kategori. Setiap minggu, para pembalap dari berbagai penjuru dunia', 'jakarta barat', '2025-04-20 00:00:00.000', '/uploads/event1.webp', '2025-04-13 14:41:20.760'),
(2, '2 motor race festival', 'Festival Yamaha adalah perayaan tahunan yang merayakan dunia motor, musik, dan inovasi teknologi dari Yamaha. Acara ini mempertemukan para penggemar sepeda motor, pengendara, dan keluarga unt', 'bogor', '2025-04-14 00:00:00.000', '/uploads/event2.jpg', '2025-04-13 14:43:09.771'),
(3, 'Motor Classico Show 2025: Warna Warni Motor Klasik di Agustus', 'Motor Classico Show 2025 tidak hanya sekadar pameran, tetapi juga sebuah festival budaya yang memadukan nostalgia dengan kecintaan terhadap dunia otomotif. Baik Anda seorang kolektor berpenga', 'bekasi', '2025-08-23 00:00:00.000', '/uploads/event3.jpeg', '2025-04-13 14:45:45.936');

-- --------------------------------------------------------

--
-- Struktur dari tabel `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `imageUrl` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `imageUrl`, `createdAt`) VALUES
(1, 'clubmotor1', '/uploads/clubmotor1.jpeg', '2025-04-13 14:32:15.024'),
(2, 'motor2', '/uploads/clubmotor2.jpeg', '2025-04-13 14:32:37.909'),
(3, 'motor3', '/uploads/clubmotor3.jpeg', '2025-04-13 14:32:59.220'),
(4, 'clubmotor4', '/uploads/clubmotor4.jpg', '2025-04-13 14:33:16.434'),
(5, 'clubmotor5', '/uploads/1373109_720.jpg', '2025-04-13 14:34:58.133');

-- --------------------------------------------------------

--
-- Struktur dari tabel `link`
--

CREATE TABLE `link` (
  `id` int(11) NOT NULL,
  `url` varchar(191) NOT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `link`
--

INSERT INTO `link` (`id`, `url`, `productId`) VALUES
(11, 'https://tokopedia.link/MbxeI3tixSb', 4),
(12, 'https://tokopedia.link/VSdTjxdixSb', 3),
(13, 'https://bnc.lt/a/key_live_abhHgIh1DQiuPxdBNg9EXepdDugwwkHr?channel=salinlink&feature=share&campaign=PDP-z28rasrg65px-1518272357-0&sdk=web2.63.0&source=web-sdk&data=eyIkb2dfdGl0bGUiOiJKYWtldCB', 2),
(18, 'https://www.tokopedia.com/ghassanyshoes/jaket-motor-pria-wanita-waterproof-parasut-tebal-anti-angin-parka-1730760101734811407?extParam=ivf%3Dfalse%26keyword%3Djaket+motooro%26search_id%3D2025', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Jaket Motor Unisex Waterproof Parasut Tebal Anti Angin Parka', 'Bahan Luar Taslan ZN Premium, Parasit kualitas nomer 1, tebal dan tidak mudah luntur warnanya jika dibandingkan dengan jenis bahan parasit lain\r\n* Bahan Dalam Puring Kaos jenis Billabong yang Adem, Hangat saat dingin. Berbeda dengan kebanyakan jaket lain yg memakai bahan dalam jenis saten yg cenderung panas dan gampang sobek\r\n', '/uploads/98dfaa93-4065-46d5-801f-8394af1edae1.jpg.webp', 124000, '2025-04-13 14:49:21.745', '2025-04-14 04:42:42.618'),
(2, 'Jaket motor RAPID AGRESSIVE', 'Bahan taslan ZN premium kombinasi warna :\r\n# Navy - Orange, mesh warna navy\r\n# Hitam - merah,mesh warna silver\r\n* anti angin (windproof) dan waterproof (kecuali hujan deras)\r\n* Lining ( kain dalam) bagian depan berbahan kaos katun 20s (lebih nyaman dan menyerap panas)\r\n* Lining ( kain dalam) bagian tangan dan belakang berbahan jala ( untuk aliran udara agar suhu panas tubuh mengalir keluar)\r\n* Reflektif Printing di badan depan & belakang, tangan (Memantulkan cahaya bila kena sinar dan juga untuk safety)', '/uploads/8796d9bc-a282-4cbf-8f28-cf6c7241c4e2.jpg.webp', 267900, '2025-04-13 14:51:33.576', '2025-04-14 04:36:31.458'),
(3, 'TOPI REBULLS F1 R PIERREE GASLY 10 ', 'Tunjukkan dukungan dan gaya racing-mu dengan topi keren edisi Aston Martin Red Bull Racing. Didesain sporty dan eksklusif, topi ini memadukan logo Red Bull Racing, Aston Martin, dan Puma yang ikonik. Cocok untuk pecinta Formula 1, fans Max Verstappen, atau siapa pun yang ingin tampil stylish dengan nuansa balap.\r\n\r\nFitur Produk:\r\n\r\nWarna: Hitam dengan aksen merah dan putih\r\n\r\nMaterial: Bahan katun twill premium, ringan dan nyaman\r\n\r\nDesain bordir logo Red Bull Racing, Aston Martin, dan Puma\r\n\r\nAdjustable strap di bagian belakang (fit untuk semua ukuran kepala)\r\n\r\nCocok untuk aktivitas outdoor, event otomotif, atau sekadar gaya harian\r\n', '/uploads/be985015-8530-4b04-b1e5-17cf8e44cf47.jpg', 98800, '2025-04-13 15:02:54.459', '2025-04-14 04:28:20.209'),
(4, 'Kaos Retro Vintage Lone Wolf No Club ', 'Tunjukkan jiwa bebas dan independenmu dengan kaos LONEWOLF ini. Didesain dengan nuansa klasik dan berani, kaos ini menampilkan ilustrasi serigala tangguh di bagian belakang, dipadukan dengan slogan tegas: \"NO RULES NO CLUB\" serta lokasi \"Helterskelter England\" sebagai sentuhan eksklusif.\r\n\r\nSpesifikasi:\r\n\r\nWarna: Hitam\r\n\r\nBahan: Katun combed 100% (nyaman dan adem dipakai)\r\n\r\nSablon: Plastisol tahan lama\r\n\r\nUnisex, cocok untuk pria maupun wanita\r\n\r\nTersedia dalam berbagai ukuran (S - XL)\r\n\r\n', '/uploads/a0996312-d2d1-44f5-bc59-c6de1670b0f7.jpg', 153000, '2025-04-13 15:06:21.717', '2025-04-14 04:20:47.502');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', 'superadmin@example.com', '$2b$10$kXcPgZPJkdgR5FM9Ur9U6.L133dvojZMbCIoaSmX.bnJ3nYL9TEbO', '2025-04-13 14:28:04.769', '2025-04-13 14:28:04.769');

-- --------------------------------------------------------

--
-- Struktur dari tabel `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('2e6a153f-b0ab-416a-8bef-e0c3cfe03675', 'd3c77bf7b0a7fa01b9d620f0b2f7b185587d018cdbaa071b1f82bbc48de4d6dd', '2025-04-13 14:22:06.309', '20250413031856_add_link_to_product', NULL, NULL, '2025-04-13 14:22:06.095', 1),
('6da2c627-59a9-47db-871c-6db6947fa5c9', '2c148e2c3bc45342207a639793e233d7e06965785ad986b18e4813fb7f484d16', '2025-04-13 14:22:07.965', '20250413035048_add_links_to_product', NULL, NULL, '2025-04-13 14:22:06.337', 1),
('9a23333c-fd94-46f5-8408-8672dbc728b3', '25d83d06639e3bbcf9b4388ca0ea4ecb0f6e0be4bb6d9cf779aa426edabeafaf', '2025-04-13 14:22:05.047', '20250412044316_rename_table', NULL, NULL, '2025-04-13 14:22:03.075', 1),
('ad1f148d-4b17-41ad-a24d-71e793207514', '138e9da313c972d8b2cf9a150e8a964a40d55b06ad9104bee16c3d9e460b2c2d', '2025-04-13 14:22:06.056', '20250412131837_', NULL, NULL, '2025-04-13 14:22:05.097', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Article_authorId_fkey` (`authorId`);

--
-- Indeks untuk tabel `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `link`
--
ALTER TABLE `link`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Link_productId_fkey` (`productId`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`);

--
-- Indeks untuk tabel `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `link`
--
ALTER TABLE `link`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `link`
--
ALTER TABLE `link`
  ADD CONSTRAINT `Link_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
