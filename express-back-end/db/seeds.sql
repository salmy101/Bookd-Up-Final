INSERT INTO users (first_name, last_name, email, password, image_url)
VALUES ('Bryan', 'Anichini', 'nunogse@vuncid.sz', 'nl3dn4^$', null),
('Bernard', 'Bates', 'lamtomrob@ograf.ms', 'PEfU$1SB', null),
('Hettie', 'Lucchesi', 'wu@ivepuh.de', 'dkGsHChz', null),
('Jay', 'Dixon', 'ebako@mafta.ax', 'pncNk%yq', null),
('Sadie', 'Clements', 'vil@irdauf.sk', 'KvkcaP9I', null),
('Barry', 'Woods', 'mugeho@mapfu.aq', '7#dOAJK', null),
('Luke', 'Menendez', 'bidheca@hitam.co', '1pdGd', null),
('Maude', 'Gargani', 'budi@akoima.bi', '!nT$Vuuz', null),
('Lucille', 'Alinari', 'japrowsum@ramuwu.cx', '9n8tkDl', null),
('Lucinda', 'Love', 'padih@jo.gw', '&WAQSQnb', null),
('Rosa', 'Voigt', 'uwoevre@ru.za', 'K@qy2B0%', null),
('Alejandro', 'Bausi', 'pirkifrik@oze.bo', 'hYCtY2&', null),
('Pauline', 'Matsui', 'oda@joffatni.mo', 'O@9um1', null),
('Catherine', 'van Ommen', 'age@azoda.md', 'zTttKi4m', null),
('Edgar', 'Okamoto', 'jed@buzoglew.ng', 'R9Yt!h1', null),
('Sadie', 'Wade', 'balij@ped.li', 'dXpvC&b', null),
('Lillie', 'Pecchioli', 'zaphiitu@ubfaw.sl', 'D0^7#AF', null),
('Daisy', 'Xu', 'rav@soh.ye', 'ZRA0eN%', null),
('Miguel', 'van der Wal', 'jifezwag@job.ie', '1tTFb6CU', null),
('Cecelia', 'Stefanini', 'ah@of.bo', 'J3ohy9Vp', null),
('Melvin', 'Manuelli', 'je@puveg.ci', 'BW7ZfgAL', null),
('Sylvia', 'Vogt', 'jemaf@conad.sc', 'GqNdXJXf', null),
('Pearl', 'Ulivi', 'keluzcat@dic.gb', '3fHd1ppY', null),
('Ricardo', 'Fratini', 'vo@re.tc', 'l^DIPhc2', null);

INSERT INTO bookclubs (user_id, name, description, private, image_url, current_book)
VALUES ('1', 'The Horror Club', 'Getting Spooky all year round with heart-pounding thrillers and mind-boggling horrors!', false, 'https://i.imgur.com/GIR7eDB.jpg', 9780671751180),
('2', 'The Fantasy Club', 'In this club we read all sort of Fantasy ranging from JRR Tolkien,Laini Taylor
, Patrick Rothfuss, N.K Jemisin, etc !', true, 'https://i.imgur.com/2v9TsPF.jpg', 9780553593716),
('3', 'The Non-Fiction Club', 'We focus on great pieces of non-fiction including memoirs, autobiographies, and more!', false, 'https://i.imgur.com/MzvAywi.jpg', 9781631498916),
('4', 'BookTok', 'In this club we read and review all the trending books on Booktok to see if they are worth the hype', true, 'https://i.imgur.com/6goP45s.jpg', 9781250766571),
('5', 'The Sci-Fi Club', 'We discuss sci-fis!', false, 'https://i.imgur.com/dF53393.jpg', 0441013597),
('6', 'History in The Pages', 'In this book club we love to learn from our collective past and read fascinating hsitory!', false, 'https://i.imgur.com/mCJJrl4.jpg', 9780609809648),
('7', 'Shakespearean Club', 'Welcometh to the shakepearean booketh club.  We readeth all the written works of Shakespeare himself and art very snobby about it ', false, 'https://i.imgur.com/SLdoucz.jpg', 0451526929),
('8', 'The Author Club', 'Read about what our favourite authors have to say about their careers as writers!', true, 'https://i.imgur.com/l0OXgPw.jpg', 9780307424983),
('9', 'The Poetry Club', 'We discuss Poetry!', false, 'https://i.imgur.com/xwFczb7.jpg', 9781466877801),
('10', 'The Harry Potter Club', 'We discuss harry potters!', false, null, 9781408855898);

INSERT INTO finished_books (club_id, isbn)
VALUES (1, 9781501142970),
(1, 9781101663004),
(2, 9781635574050),
(2, 9780312850098),
(2, 9781250027436),
(3, 9780553900347),
(3, 9780684874357),
(3, 9780771038525),
(4, 9780765387585),
(4, 9781982143657),
(4, 9780062085511), 
(5, 9780547249643),
(5, 9780553900347),
(6, 9780393609295),
(6, 9781101946336),
(7, 9789380914404),
(7, 9781433394614),
(8, 9780771006883),
(8, 9780743211536),
(9, 9780812997873);


INSERT INTO members (club_id, user_id)
VALUES (1, 2),
(1,3),
(1,5),
(1,9),
(1,14),
(1,22),
(2,4),
(2,1),
(2,5),
(2,6),
(2,13),
(2,18),
(2,24),
(3,7),
(3,8),
(3,1),
(3,9),
(3,15),
(3,14),
(3,23),
(4,2),
(4,5),
(4,11),
(4,19),
(4,24),
(4,14),
(4,21),
(5,1),
(5,6),
(5,17),
(5,9),
(5,3),
(5,8),
(5,20),
(6,4),
(6,16),
(6,7),
(6,23),
(6,2),
(6,14),
(6,18),
(7,1),
(7,9),
(7,5),
(7,24),
(7,20),
(7,12),
(7,19),
(8,6),
(8,3),
(8,17),
(8,22),
(8,9),
(8,13),
(8,24),
(9,15),
(9,2),
(9,24);

INSERT INTO meetings (club_id, date, time, virtual_link, notes, complete)
VALUES(1, '2022-08-25', '04:59.999999', 'google.met.com', null, false),
(1, '2019-08-25', '04:59.999999', 'google.met.com', null, true);

INSERT INTO current_reads(user_id, isbn)
VALUES(1, 9781101988640),
(1, 9781982126995);

INSERT INTO want_to_reads (user_id, isbn)
VALUES(1, 9780143133735),
(1, 9780593333020);

INSERT INTO have_reads (user_id, isbn)
VALUES(1, 9781942851912),
(1, 9781943888085);