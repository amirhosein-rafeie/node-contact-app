const yargs = require("yargs");
const chalk = require("chalk");

const {
  addContact,
  listConatacts,
  removeContact,
  updateContact,
} = require("./contacts");

yargs.scriptName(`${chalk.yellow("Contact Manager")}`);
yargs.usage(`$0 ${chalk.red("<command>")} ${chalk.green("[args]")}`);

yargs.command({
  command: "create",
  aliases: ["c"],
  describe: `${chalk.green("[Create new contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person phone",
      demandOption: true,
      type: "string",
    },
    email: {
      alias: "e",
      describe: "Person email",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ fullname, phone, email }) => {
    addContact(fullname, phone, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.green("[Listing the saved contacts]")}`,
  handler: () => {
    listConatacts();
  },
});

yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: `${chalk.green("[Remove contact]")}`,
  builder: {
    id: {
      describe: "Person id",
      demandOption: true,
      type: "number",
    },
  },
  handler: ({ id }) => {
    removeContact(id);
  },
});

yargs.command({
  command: "update",
  aliases: ["u"],
  describe: `${chalk.green("[Update contact]")}`,
  builder: {
    id: {
      describe: "Person id",
      demandOption: true,
      type: "number",
    },
    fullname: {
      alias: "f",
      describe: "Person fullname",
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person phone",
      type: "string",
    },
    email: {
      alias: "e",
      describe: "Person email",
      type: "string",
    },
  },
  handler: ({ id, fullname, phone, email }) => {
    updateContact(id, { fullname, phone, email });
  },
});

yargs.parse();
