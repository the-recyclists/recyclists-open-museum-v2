from . import main
from sqlalchemy import select

stmt = select(main.PageView)

for row in main.session.execute(stmt):
    print(row)
