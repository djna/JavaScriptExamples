

-- delete bookish database, dropping connections first

 use master 
 go

 alter database splendid set single_user with rollback immediate
 GO

drop database splendid
GO

