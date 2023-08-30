# hw1_node

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://prnt.sc/qoyuJC22k3zX

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
https://prnt.sc/h12BtPaubAnx

# Добавляем контакт и выводим в консоль созданный контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://prnt.sc/62RvAfCkHz5N

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
https://prnt.sc/8sl5d7BU27NP
