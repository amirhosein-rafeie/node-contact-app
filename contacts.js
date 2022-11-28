const fs = require("fs");
const chalk = require("chalk");
const { beatifullLog, isEmptyAllProperty } = require("./utils");

const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find((ele) => ele.phone === phone);

  if (!duplicateContact) {
    contacts.push({ id: contacts.length + 1, fullname, phone, email });
    saveContacts(contacts);

    console.log(chalk.green("Contact saved"));
  } else {
    console.log(chalk.red("Contact already exist!"));
  }
};

const removeContact = (id) => {
  const contacts = loadContacts();
  const filteredContacts = contacts.filter((ele) => ele.id !== id);

  if (contacts.length > filteredContacts.length) {
    saveContacts(filteredContacts);
    console.log(chalk.green("Contact was removed"));

    const contact = contacts.find((ele) => ele.id === id);
    beatifullLog(contact.id, contact.fullname, contact.phone, contact.email);
  } else {
    console.log(chalk.red("Contact not found"));
  }
};

const updateContact = (id, data) => {
  const contacts = loadContacts();
  let contact = contacts.find((ele) => ele.id === id);
  const dataKeys = Object.keys(data);

  if (!isEmptyAllProperty(data)) {
    if (contact) {
      dataKeys.forEach((key) => {
        if (data[key]) {
          contact[key] = data[key];
        }
      });

      saveContacts(contacts);
      console.log(chalk.green("Contact was updated\n"));
      beatifullLog(contact.id, contact.fullname, contact.phone, contact.email);
    } else {
      console.log(chalk.red("Contact not found"));
    }
  } else {
    console.log(chalk.red("No change was made"));
  }
};

const listConatacts = () => {
  const contacts = loadContacts();

  if (contacts.length > 0) {
    console.log(`${chalk.yellowBright("Your contacts:")}\n`);
    // console.table(contacts);
    contacts.forEach((contact) => {
      beatifullLog(contact.id, contact.fullname, contact.phone, contact.email);
    });
  } else {
    console.log(chalk.red("You don't have any contact!"));
  }
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const contacts = dataBuffer.toString();
    return JSON.parse(contacts);
  } catch (error) {
    // console.error(error);
    return [];
  }
};

const saveContacts = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("contacts.json", data);
};

module.exports = { addContact, listConatacts, removeContact, updateContact };
