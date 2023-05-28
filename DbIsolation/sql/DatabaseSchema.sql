

USE splendid
GO

CREATE TABLE books (
	id int IDENTITY NOT NULL PRIMARY KEY,
	title nvarchar(200) NOT NULL,
	author nvarchar(100) NULL,
	isbn nchar(14) NULL) -- ISBNs are 10 or 13 characters, but are sometimes written with a "-" after the first 3 digits so we allow 14 characters
GO


Alter TABLE books Add Constraint unique_books 
      UNIQUE (title, author, isbn) 

