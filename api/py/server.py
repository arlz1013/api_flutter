from flask import Flask;import sql; bd = sql.SQL(); 

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def wwlcome():
    return "Api is Running"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1050)