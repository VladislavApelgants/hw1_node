const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.table(allContacts);
      return allContacts;

    case "get":
      const contact = (await getContactById(id)) || null;
      console.log(contact);
      return contact;

    case "add":
      const addBook = await addContact({ name, email, phone });
      console.log(addBook);
      return addBook;

    case "remove":
      const deleteElem = await removeContact(id);
      console.log(deleteElem);
      return deleteElem;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
