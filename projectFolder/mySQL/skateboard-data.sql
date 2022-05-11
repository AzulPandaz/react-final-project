INSERT INTO brand
(brand)
VALUES
("Minority"),
("Apollo"),
("REDO"),
("Magneto"),
("SK8"),
("RIMABLE"),
("PINESKY"),
("DB Longboard"),
("Santa Cruz");

INSERT INTO board_type
(board_type)
VALUES
("Streetboard"),
("Penny"),
("Cruiser"),
("Longboard");

INSERT INTO wheel_size
(wheel_size)
VALUES
("51mm"),
("52mm"),
("58mm"),
("60mm"),
("70mm");

INSERT INTO wheel_hardness
(wheel_hardness)
VALUES
("100A"),
("78A"),
("82A"),
("80A"),
("95A");

INSERT INTO item_included
(item_included)
VALUES
("Wheels"),
("Bearings"),
("Trucks"),
("Skate Tool"),
("Shoelaces"),
("Hat"),
("Helmet"),
("Elbowpads"),
("Kneepads");


INSERT INTO items
(item_name, brand, board_type, description, item_cost, year_release, designer, wheel_size, wheel_hardness, load_capacity)
VALUES
("Sunset Skateboard",	"1",	"1",	"A skateboard with a sunshine inspired design with white colored wheels. Made with high quality wood for the deck, already assembled and able to be used right out of the box. Deck made up 100% maple wood high quality prefect for tricks and speeding around town.",	"68",	"2022",	"Hayden Wright",	"1",	"1",	"273"),

("Snake Skateboard",	"1",	"1",	"A skateboard with a snake design and consisit grey, white, and black as the main color scheme. Deck made up 100% maple wood high quality prefect for tricks and speeding around town.",	"46",	"2021",	"Hayden Wright",	"2",	"5",	"280"),

("Tiger Snake Skateboard",	"1",	"1",	"A skateboard with a design featuring a silver snake and tiger with a grey theme. With a Minority garuantee of quality and style. Deck made up 100% maple wood high quality prefect for tricks and speeding around town.",	"46",	"2022",	"Hayden Wright",	"2",	"1",	"260"),

("Apollo Cyan Longboard",	"2",	"4",	"A longboard design for the purpose of speed and distance. Tricks are still able to preformed but with much more diffuculty added, but mostly for crusing down the road or beach. Simple design with a cyan color on half and a wood finish.",	"146",	"2020",	"Emil Twozee",	"1",	"2",	"300"), 

("Apollo Cosmic Longboard",	"2",	"4",	"A longboard design for the purpose of speed and distance. Tricks are still able to preformed but with much more diffuculty added, but mostly for crusing down the road or beach. A space desgin on the board showing the stars and a Nebula.",	"129",	"2022",	"Emil Twozee",	"1",	"2",	"310"),

("Apollo Pink Longboard",	"2",	"4",	"A longboard design for the purpose of speed and distance. Tricks are still able to preformed but with much more diffuculty added, but mostly for crusing down the road or beach. A pink inspired design that overlaps onto the top of the board with a pink cross section.", "85",	"2022",	"Emil Twozee",	"1",	"2",	"305"),

("Redo Pineapple Mini Cruiser",	"3",	"3",	"A cruiser desgin skateboard with aspects of a streetboard and a long board put together.Not the smoothness and distance of a longboard but some of it. With the size of a Streetboard more manuvarble and easier to do tricks with. A equal balance of both boards advantages. Redo Quality garunteed with a pineapple design and the main color of green on the board.",	"55",	"2019",	"William Tollar",	"4", "3",	"220"),

("Magneto Mini Cruiser",	"4",	"3",	"A cruiser desgin skateboard with aspects of a streetboard and a long board put together.Not the smoothness and distance of a longboard but some of it. With the size of a Streetboard more manuvarble and easier to do tricks with. A equal balance of both boards advantages. Magneto sleek design of a simple wood finish and black on the other half of the board.",	"88",	"2019",	"William Tollar",	"4",	"2",	"230"),

("SK8 Mini Cruiser",	"5",	"3",	"A cruiser desgin skateboard with aspects of a streetboard and a long board put together.Not the smoothness and distance of a longboard but some of it. With the size of a Streetboard more manuvarble and easier to do tricks with. A equal balance of both boards advantages. A simple design using a dark aqua color and a wood finish.",	"70",	"2018",	"William Tollar",	"4",	"2",	"200"),

("RIMABLE Mini Cruiser",	"6",	"3",	"A cruiser desgin skateboard with aspects of a streetboard and a long board put together.Not the smoothness and distance of a longboard but some of it. With the size of a Streetboard more manuvarble and easier to do tricks with. A equal balance of both boards advantages. A simple looking board black with green wheels.",	"44",	"2022",	"William Tollar",	"4",	"2",	"190"),

("PINESKY Longboard",	"7",	"4",	"A longboard design for the purpose of speed and distance. Tricks are still able to preformed but with much more diffuculty added, but mostly for crusing down the road or beach. Imagine the Arizona Green Tea can but they put it on a longboard",	"60",	"2021",	 "Micheal Valencia",	"5",	"4",	"330"),

("DB Streetboard",	"8",	"1",	"A Streetboard with two skeletons on the back chilling and popping a cold one. This street board with the body of a Streetboard was desgined more toward crusing with its softer wheels, but can still be used for doing tricks due to the shape and size of the board.",	"110",	"2020",	"Micheal Valencia",	"4",	"4",	"300"),

("Santa Cruz Screaming Hand",	"9",	"1",	"One of the most known and reliable brands of skateboards of all time. Santa Cruz has been a relieable name for high quality boards. This Streetboard features a screaming hand design on the bottom. This board is perfect for tricks and skateparks compared to other types of boards.",	"99",	"2019",	"Jordan Wallace",	"2",	"5",	"290"),

("Santa Cruz Obscure Dot",	"9",	"1",	"One of the most known and reliable brands of skateboards of all time. Santa Cruz has been a relieable name for high quality boards. This Streetboard features a  hydro dip desgin board with their logo in the center. This board is perfect for tricks and skateparks compared to other types of boards.",	"89",	"2018",	"Jason Liu",	"2",	"5",	"290"),

("Santa Cruz Longboard",	"9",	"4",	"One of the most known and reliable brands of skateboards of all time. Santa Cruz has been a relieable name for high quality boards. A longboard design for the purpose of speed and distance. Tricks are still able to preformed but with much more diffuculty added, but mostly for crusing down the road or beach.",	"185",	"2021",	"Yoshi Ruiz",	"5",	"2",	"330");

INSERT INTO items_to_items_included
(items_id, item_included_id)
VALUES
("1",	"1"),
("1",	"2"),
("1",	"3"),
("1",	"4"),
("2",	"1"),
("2",	"2"),
("2",	"3"),
("3",	"1"),
("3",	"2"),
("3",	"2"),
("3",	"5"),
("3",	"6"),
("4",	"1"),
("4",	"2"),
("4",	"3"),
("4",	"7"),
("5",	"1"),
("5",	"2"),
("5",	"3"),
("6",	"1"),
("6",	"2"),
("6",	"3"),
("6",	"7"),
("6",	"5"),
("7",	"1"),
("7",	"2"),
("7",	"3"),
("7",	"7"),
("7",	"8"),
("7",	"9"),
("8",	"1"),
("8",	"2"),
("8",	"3"),
("8",	"4"),
("9",	"1"),
("9",	"2"),
("9",	"3"),
("9",	"5"),
("10",	"1"),
("10",	"2"),
("10",	"3"),
("10",	"4"),
("11",	"1"),
("11",	"2"),
("11",	"3"),
("11",	"7"),
("12",	"1"),
("12",	"2"),
("12",	"3"),
("12",	"7"),
("12",	"8"),
("12",	"9"),
("13",	"1"),
("13",	"2"),
("13",	"3"),
("13",	"4"),
("13",	"5"),
("14",	"1"),
("14",	"2"),
("14",	"3"),
("14",	"5"),
("15",	"1"),
("15",	"2"),
("15",	"3");
