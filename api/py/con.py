from mysql.connector import Error
import mysql.connector as my
import json

class MYSQL:
    def __init__(self):
        try:
            self.sql = my.connect(
                host="localhost",
                user="Arlz",
                password="128/e980",
                database='Try1'
            );
            self.cur = self.sql.cursor();  
            self._CreateTable();
            #self._Insert(input(), input())
            
        except Error as err:
            print(err)
        else:
            print("Connect to MYSQL service")
            self._Seletc_all();
    
    def _CreateTable(self):
        try:
            self.cur.execute("CREATE TABLE IF NOT EXISTS User (id int primary key auto_increment, name text , TpUser int);")
        except Error as err:
            print(err)
        else:
            print("Create Table")
    def _Insert_Admin(self):
        try:
            self.cur.execute("Insert into User (name , TpUser) values (%s, %s)",("admin", 1))    
            self.sql.commit();
        except Error as err:
            print(err)
        else:
            print("Admin Create")

    def _Insert(self,a : int, b : str):
        try:
            self.cur.execute("Insert into User (name , TpUser) values (%s, %s)",(b, a))    
            self.sql.commit();
        except Error as err:
            print(err)
        else:
            print("User Create")
            return json.dumps(["message", "Make" ])

    def _Seletc_all(self):
        try:
            self.cur.execute("Select * from User;")
            res = self.cur.fetchall()
        except Error as err:
            print(err)
        else:
            print(res[0][0])
            return (res)
    
    def _Seletc(self, a : str):
        try:
            self.cur.execute("Select * from User where id = "+ a)
            res = self.cur.fetchall()
        except Error as err:
            print(err)
        else:
            send = {
                "id" : res[0][0],
                "name" : res[0][1],
                "TpUser": res[0][2]
            }
            return send

    def _endly(self):
        self.sql.close()
