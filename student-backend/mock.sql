INSERT INTO userr
    (mobile, fname, lname, fdate, profilepic, sex, salt, password)
VALUES
    ('12345678', 'Amund', 'Fremming', '12.12.2002', 'https://pbs.twimg.com/media/CixWBrvXEAAogpq.jpg', 'male', 'asdhjbasdfgn', 'Hallamannen123'),
    ('97329238', 'Andrew', 'Tate', '20.05.1993', 'https://www.insidesport.in/wp-content/uploads/2023/03/1-2.png', 'male', 'poasjjsfaws', 'Bugatti47'),
    ('93282377', 'Christiano', 'Ronaldo', '16.01.1991', 'https://cdn.united.no/uploads/2023/03/IMG_6912-980x1167.jpg', 'male', 'vnovcoids', 'Suuuui123'),
    ('78246732', 'Zendaya', 'Coleman', '01.09.1996', 'https://hips.hearstapps.com/hmg-prod/images/zendaya-poses-at-the-beautycon-festival-nyc-2018-on-april-news-photo-1612379853.?crop=0.670xw:1.00xh;0.252xw,0&resize=1200:*', 'female', 'dsoifihme', 'THolland123'),
    ('93498372', 'Tom', 'Holland', '01.06.1996', 'https://static.wikia.nocookie.net/dolan/images/3/3a/Spoderman.jpg/revision/latest?cb=20121211233931', 'male', 'fdovsdiodpj', 'IamSPIDERMAN32'),
    ('29834938', 'Almighty', 'Thor', '11.08.1983', 'https://hips.hearstapps.com/hmg-prod/images/fat-thor-4-1571412972.jpg?crop=0.515xw:0.918xh;0.429xw,0.0818xh&resize=1200:*', 'male', 'vsdouhvsuej', 'Noobmaster69'),
    ('31988352', 'Harald', 'Nilsen', '18.12.1997', 'https://miro.medium.com/v2/resize:fit:2400/1*N73UrgklBqO3RizOesK-1Q.jpeg', 'male', 'vsdiovoisdh', 'Klatringislife123'),
    ('47328932', 'Sophie', 'Elise', '06.09.1994', 'https://www.dagbladet.no/images/78005991.jpg?imageId=78005991&panow=100.00541142857&panoh=60.179122033898&panox=0&panoy=0&heightw=100&heighth=100&heightx=0&heighty=0&width=1200&height=1200', 'female', 'fdoisosidfho', 'Colaerelsk123'),
    ('10284953', 'Adrian', 'Berget', '24.11.2000', 'https://tise-static.telenorcdn.net/profile-pictures/5d3203e788371b00182552a1/49f53bab-de40-4385-aa71-c361ec1d7b50', 'male', 'dpsfjdspojw', 'Ishockeyerkult123'),
    ('54920292', 'Emilie', 'Mehl', '09.12.1993', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2020_stortingsrepresentant_Emilie_Enger_Mehl_portrett_%28cropped%29.jpg/375px-2020_stortingsrepresentant_Emilie_Enger_Mehl_portrett_%28cropped%29.jpg', 'female', 'fdasouhadf', 'Tiktok2023'),
    ('43895282', 'Kristin', 'Halvorsen', '05.10.1967', 'https://www.stortinget.no/Personimages/PersonImages_ExtraLarge/KHA_ekstrastort.jpg', 'female', 'dsajspajas', 'Hallamannen123');

INSERT INTO roompost
    (address, term, city, country, active, roomates, bio, wifi, appliances, mobile, price, kvm, picture)
VALUES
    ('Fjøsangerveien 57', '2022H', 'Bergen', 'Norway', 'true', '2', 'Stort rom, kule roomates!', 'true', 'true', '12345678', '5400', '12', 'https://samskipnaden.imgix.net/0e6d831b63e34dd3b1f0f3be65bb2c1f_samskipnaden-bolig-longyearbyen-svalbard-leilighet-dobbeltrom-18.jpg?w=3840&auto=compress,format'),
    ('Sageneveien 32', '2024V', 'Oslo', 'Norway', 'true', '4', 'Loft rom, med flott utsikt til slottet!', 'false', 'true', '97329238', '6200', '13', 'https://entertromso.no/wp-content/uploads/2020/08/Apartments-with-two-bedrooms-bedroom-1024x683.jpg'),
    ('Mordigata 69', '2023V', 'Trondheim', 'Norway', 'true', '1', 'Flott roomate å bo med, midt i sentrum!', 'true', 'true', '93282377', '5700', '10', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mG_TxkBgJdmcopPu0ICqEXPuOU8XQWsICg&usqp=CAU'),
    ('Brorgata 420', '2022H', 'Bergen', 'Norway', 'true', '5', 'Rett ved Grieghallen, gangavstand til alt du skulle ønske i Bergen sentrum!', 'true', 'false', '78246732', '5000', '15', 'https://www.bonava.no/siteassets/_inspiration/innredning/soverom/bonava-innredning-soverom-.jpg'),
    ('Faredinsvei 88', '2025V', 'Oslo', 'Norway', 'true', '7', 'Stort kollektiv, stort rom!', 'true', 'true', '93498372', '6400', '17', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CVRALrUM5pHHfFrPViU-5Q4ag5Ck4kJ5zA&usqp=CAU'),
    ('Lord Amundsvei 1', '2024V', 'Trondheim', 'Norway', 'true', '2', 'Midt på Solsiden, flott beliggenhet', 'true', 'true', '29834938', '6000', '9', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUiAK6I8Bs5-vNylTqKh5kus4hW0zuCIJ2A&usqp=CAU'),
    ('Dadddds 123', '2023V', 'Oslo', 'Norway', 'true', '3', 'Ballinciaga er dine roommates!!! gratis leie!!!', 'true', 'true', '31988352', '0', '20', 'https://images.squarespace-cdn.com/content/v1/622f95ddf8c6725b5213f9d5/7ca772ee-bcfa-4679-8a74-15121c80ee7f/Ballinciaga+Pressebilde+2+v2.jpg'),
    ('Champ de Mars', '2024V', 'Paris', 'France', 'true', '2', 'le baguette', 'true', 'false', '47328932', '100', '220', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/4b/14/caption.jpg?w=1200&h=-1&s=1'),
    ('1600 Pennsylvania Avenue NW', '2023V', 'Washington DC', 'USA', 'true', '31', 'Trump is not here', 'true', 'true', '10284953', '22', '1000', 'https://www.whitehouse.gov/wp-content/uploads/2021/01/white-house-sunrise.jpg');
    
INSERT INTO userrpost
	(term, city, country, active, bio, minprice, maxprice, img, namee, mobile)
VALUES
	('2023H', 'Bergen', 'Norway', true, 'Jeg liker sjokolade og kringler. og veldig snill.', '4000', '10000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth','97329238'),
	('2023V', 'Tokyo', 'Japan', true, 'I am a technology enthusiast who loves exploring new gadgets. Looking for a partner to geek out with!', '5000', '20000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '93282377'),
	('2024H', 'Barcelona', 'Spain', true, 'Soy un amante de la cultura y la historia. Busco una pareja para explorar el mundo juntos.', '6000', '25000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '78246732'),
    ('2024V', 'Chicago', 'United States', true, 'I am a sports fan who loves to cheer on my favorite teams. Looking for a partner to share in the excitement!', '7000', '30000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '93498372'),
    ('2025H', 'London', 'United Kingdom', true, 'I am a lover of literature and the arts. Seeking a partner who shares my passion for the written word.', '8000', '35000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '29834938'),
	('2026V', 'Rome', 'Italy', true, 'Sono un appassionato di cibo e vino. Cerco un partner per esplorare i tesori culinari dell Italia.', '9000', '40000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '31988352'),
	('2023H', 'Athens', 'Greece', true, 'I am a lover of history and mythology. Looking for a partner to explore the ancient world with!', '10000', '45000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '47328932'),
	('2023V', 'Oslo', 'Norway', true, 'Jeg er en naturelsker som elsker å utforske Norges utendørsparadiser. Ser etter en partner som deler min lidenskap for naturen.', '11000', '50000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '10284953'),
	('2023H', 'Florence', 'Italy', true, 'Sono un appassionato di arte e architettura. Cerco un partner per scoprire i tesori di Firenze insieme.', '12000', '55000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '54920292'),
	('2024V', 'Istanbul', 'Turkey', true, 'I am a lover of music and dance. Seeking a partner to explore the vibrant culture of Turkey with!', '13000', '60000', 'https://akamai.vgc.no/v2/images/4cfe78c5-5e98-4739-9dc4-fe5734dca7f6?fit=crop&format=auto&h=765&w=853&s=29ee8289d9220e4d65be1020c23d35656fc4a175', 'Kenneth', '43895282');
	
	
	
    
    
  
 