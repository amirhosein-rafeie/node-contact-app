const chalk = require("chalk");

const beatifullLog = (id, fullname, phone, email) => {
  console.log(`\t${chalk.green("id:")} ${id}`);
  console.log(`\t${chalk.green("fullname:")} ${fullname}`);
  console.log(`\t${chalk.green("phone:")} ${phone}`);
  console.log(`\t${chalk.green("email:")} ${email}`);
  console.log(`\t${chalk.green("\t------------------------------")}`);
};

const isEmptyAllProperty = (obj) => {
  const dataValues = Object.values(obj);

  for (const i in dataValues) {
    if (!!dataValues[i]) return false;
  }

  return true;
};

module.exports = { beatifullLog, isEmptyAllProperty };
