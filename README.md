# SimpleNodeProject


project includes the following software types 
node js 
express 
sqlite

database structure 

CREATE TABLE "Player" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR,
	"team"	VARCHAR,
	"nationality "	VARCHAR,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Team" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR,
	"country"	VARCHAR,
	PRIMARY KEY("id")
);


Constraints 

one team to many players 

foriegn key 

player.id -> team.name 