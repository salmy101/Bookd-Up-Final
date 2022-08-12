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
VALUES ('1', 'The Horror Club', 'We discuss horrors!', false, null, 9780671751180),
('2', 'The Fantasy Club', 'We discuss fantasys!', true, null, 9780553593716),
('3', 'The Non-Fiction Club', 'We discuss non-fictions!', false, null, 9781626252639),
('4', 'The Car Club', 'We discuss cars!', true, null, null),
('5', 'The Sci-Fi Club', 'We discuss sci-fis!', false, null, null),
('6', 'The War Club', 'We discuss wars!', false, null, 9781465436085),
('7', 'The Shakespeare Club', 'We discuss shakespeares!', false, null, null),
('8', 'The Author Club', 'We discuss authors!', true, null, null),
('9', 'The Penguins Club', 'We discuss penguinss!', false, null, 9780375846649),
('10', 'The Harry Potter Club', 'We discuss harry potters!', false, null, 9781408855898);

INSERT INTO finished_books (club_id, isbn)
VALUES (1, null),
(2, 9781635574050),
(2, 9780312850098),
(2, 9781250027436),
(3, 9780553900347);

INSERT INTO members (club_id, user_id)
VALUES (1, 2),
(1,3),
(2,4),
(2,1),
(2,5),
(2,6),
(3,7),
(3,8),
(3,1),
(3,9);

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