CREATE TABLE ponto ( 
	id_ponto             INTEGER NOT NULL   ,
	longitude            DECIMAL NOT NULL    ,
	latitude             DECIMAL NOT NULL    ,
    PRIMARY KEY('id_ponto' AUTOINCREMENT)
 );

CREATE TABLE vagao ( 
	placa                INTEGER NOT NULL   ,
	tipo_vagao           TEXT NOT NULL    ,
    PRIMARY KEY ('placa' AUTOINCREMENT)
 );

CREATE TABLE dados ( 
	id_dados             INTEGER NOT NULL  ,
	velocidade           TEXT NOT NULL    ,
	pg                   TEXT NOT NULL    ,
	forca_maxima         TEXT NOT NULL    ,
	act                  TEXT NOT NULL    ,
	placa                INTEGER     ,
	id_ponto             INTEGER     ,
	tipo_choque          INTEGER     ,
	hora                 TEXT NOT NULL    ,
	dia                  TEXT NOT NULL    ,
    PRIMARY KEY('id_dados' AUTOINCREMENT),
	FOREIGN KEY ( placa ) REFERENCES vagao( placa )  ,
	FOREIGN KEY ( id_ponto ) REFERENCES ponto( id_ponto )  
 );